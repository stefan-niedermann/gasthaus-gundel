import { deepEqual } from '../util/index.js';

export class PrivacyFriendlyEmbedComponent extends HTMLElement {

    static get observedAttributes() {
        return [
            'data-url',
            'data-icon'
        ];
    }

    static #style;

    #shadowRoot = undefined;
    #state = {
        url: undefined,
        icon: undefined
    };

    constructor() {
        super();
        this.#shadowRoot = this.attachShadow({ mode: 'open' });
        if (PrivacyFriendlyEmbedComponent.#style === undefined) {
            PrivacyFriendlyEmbedComponent.#style = fetch('js/components/pfe.component.css').then(css => css.text());
        }
    }

    connectedCallback() {
        this.#patchState({
            ...this.#state,
            url: URL.parse(this.dataset?.url) ?? undefined,
            icon: this.dataset?.icon ?? undefined
        });
    }

    attributeChangedCallback(name, _, newValue) {
        switch (name) {
            case 'data-url': {
                this.#patchState({ ...this.#state, url: URL.parse(newValue) ?? undefined });
                break;
            }
            case 'data-icon': {
                this.#patchState({ ...this.#state, icon: newValue ?? undefined });
                break;
            }
        }
    }

    #patchState(input) {
        const newState = {
            ...this.#state,
            ...input
        }

        if (!deepEqual(this.#state, newState)) {
            this.#state = newState;
            this.#render();
        }
    }

    async #render() {
        const key = `pfe:${this.#state.url?.host}`;
        const allowed = !!localStorage.getItem(key);
        const style = await PrivacyFriendlyEmbedComponent.#style;

        this.#shadowRoot.innerHTML = `
            <style>${style}</style>
            <figure>
            ${this.#state.url === undefined
                ? `data-url is undefined.`
                : `${allowed
                    ? `<iframe src="${this.#state.url}"></iframe>`
                    : `<p>
                            <button>
                                ${this.#state.icon === undefined ? '' : `<i aria-hidden="true">${this.#state.icon}</i>`}
                                <strong>${this.#state.url.host}</strong> einbinden
                            </button>
                        </p>`
                }`
            }
                <figcaption>
                    <label>
                        <input type="checkbox" ${allowed ? 'checked' : ''}>
                        <slot name="caption">Einbinden von externen Diensten und Inhalten erlauben und Entscheidung merken</slot>
                    </label>
                </figcaption>
            </figure>
        `;

        this.#shadowRoot.querySelector('input')
            ?.addEventListener('change', event => {
                event.preventDefault();
                event.stopPropagation();
                event.target.checked === true
                    ? localStorage.setItem(key, true)
                    : localStorage.removeItem(key);

                this.#render();
            });

        this.#shadowRoot.querySelector('p')
            ?.addEventListener('click', event => {
                event.preventDefault();
                event.stopPropagation();
                this.#shadowRoot.querySelector('input')
                    ?.click();
                // ?.dispatchEvent(new Event('change'));
            });

        this.#shadowRoot.querySelector('button')
            ?.addEventListener('click', event => {
                event.preventDefault();
                event.stopPropagation();
                localStorage.setItem(key, true);
                this.#render();
            });
    }
}

customElements.define('privacy-friendly-embed', PrivacyFriendlyEmbedComponent);