export class FabController {

    #listeners = [];

    constructor() {
    }

    init(
        fabSelector,
        anchorSelector
    ) {
        const listener = () => {
            const fab = document.querySelector(fabSelector);
            const anchor = document.querySelector(anchorSelector);
            
            if (window.scrollY > anchor.offsetTop) {
                fab?.classList.add('shown');
            } else {
                fab?.classList.remove('shown');
            }
        };
        
        addEventListener('scroll', listener);
        listener();
        
        this.#listeners.push(listener);
    }

    cleanup() {
        this.#listeners
            .splice(0, this.#listeners.length)
            .forEach(listener => removeEventListener(listener));
    }
}