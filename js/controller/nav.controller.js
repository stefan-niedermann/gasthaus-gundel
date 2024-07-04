export class NavController {

    #eventListeners = [];
    #nav;

    get #closeToBottom() {
        return window.scrollMaxY - window.scrollY < 10;
    }

    constructor(nav) {
        this.#nav = nav;
    }

    init(options = {
        syncInitialItem: true,
        fallbackInitialItem: this.#nav.querySelector('[href$="#startseite"]'),
        updateCurrentItemOnScroll: true,
        updateCurrentItemOnNavigate: true,
    }) {
        if (options?.syncInitialItem) {
            const initialMenuItem = this.#nav.querySelector(`[href$="${location.hash}"]`);

            if (initialMenuItem instanceof HTMLElement) {
                initialMenuItem.setAttribute('aria-current', true);
            } else {
                options?.fallbackInitialItem?.click();
            }
        }

        if (options?.updateCurrentItemOnScroll) {
            // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollend_event
            if ('onscrollend' in window) {
                const observer = new IntersectionObserver(this.#onIntersectionChanged.bind(this));
                const observedAreas = Array.from(this.#nav.querySelectorAll('[href*="#"]'))
                    .map(elem => elem.getAttribute('href'))
                    .map(href => href.substring(href.lastIndexOf('#') + 1))
                    .map(id => document.getElementById(id))
                    .filter(element => element instanceof HTMLElement); // map ID of children of nav to elements

                const scrollListener = () => observedAreas.forEach(heading => observer.unobserve(heading));
                const scrollEndListener = () => observedAreas.forEach(heading => observer.observe(heading));

                addEventListener('scroll', scrollListener);
                addEventListener('scrollend', scrollEndListener);

                this.#eventListeners.push(scrollListener, scrollEndListener);
            }
        }

        if (options?.updateCurrentItemOnNavigate) {
            const listener = event => this.#hashChangeListener(new URL(event.newURL).hash);

            addEventListener('hashchange', listener.bind(this));

            this.#eventListeners.push(listener);
        }
    }

    cleanup() {
        this.#eventListeners
            .splice(0, this.#eventListeners.length)
            .forEach(listener => removeEventListener(listener));
    }

    #hashChangeListener(newHash) {
        const currentElement = this.#nav.querySelector('[aria-current="true"]');
        const newElement = this.#nav.querySelector(`[href$="${newHash}"]`);

        if (currentElement !== newElement) {
            currentElement?.removeAttribute('aria-current');
            newElement?.setAttribute('aria-current', true);
        }
    }

    #onIntersectionChanged(intersectionObserverEntries) {
        const newIntersectingElementIds = this.#getIDsOfHighestRatios(intersectionObserverEntries);
        const newIntersectingElementId = newIntersectingElementIds[this.#closeToBottom ? newIntersectingElementIds.length - 1 : 0];

        if (newIntersectingElementId !== undefined &&
            newIntersectingElementId !== this.#nav.querySelector('[aria-current="true"]')?.id) {
            history.pushState({}, '', `${location.pathname}#${newIntersectingElementId}`);
            this.#hashChangeListener(newIntersectingElementId);
        }
    }

    #getIDsOfHighestRatios(intersectionObserverEntries) {
        return intersectionObserverEntries
            .filter(entry => entry.isIntersecting)
            .toSorted((a, b) => b.intersectionRatio - a.intersectionRatio)
            .reduce((accumulator, current) => {
                // Find only entries with highest intersection ratio (can be multiple entries with the same ratio)

                // Return current if it is the only element…
                if (accumulator.length < 1) {
                    return [current];
                }

                // … or if existing elements do have a lower ratio
                if (current.intersectionRatio > accumulator[0].intersectionRatio) {
                    return [current];

                } else if (current.intersectionRatio === accumulator[0].intersectionRatio) {
                    // Add current to already chosen elements if ratio is equal
                    return [...accumulator, current];
                }

                return [...accumulator];
            }, [])
            .map(entry => entry?.target.id)
    }
}
