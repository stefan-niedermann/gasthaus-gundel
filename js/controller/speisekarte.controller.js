export class SpeisekarteController {

    #observers = [];

    constructor() {
    }

    init() {
        const scope = document.getElementById('speisekarte');
        const categoryHeadline = scope.querySelector('h1');
        const categoryForm = document.createElement('form');
        const categoryList = document.createElement('ul');
        categoryList.tabIndex = -1;

        const applyFilter = value => {
            if (value === '') {
                Array.from(scope.querySelectorAll(`section`))
                    .filter(section => section.hasAttribute('hidden'))
                    .forEach(section => section.removeAttribute('hidden'));

                categoryList.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

            } else {
                scope
                    .querySelector(`section[data-title="${value}"]`)
                    .removeAttribute('hidden');

                Array.from(scope.querySelectorAll(`section:not([data-title="${value}"])`))
                    .forEach(section => section.setAttribute('hidden', 'until-found'));

                const targetLabel = scope.querySelector(`form label:has(input[value="${value}"])`);
                const viewportWidth = parseFloat(getComputedStyle(categoryList).width);
                const labelWidth = targetLabel.clientWidth;
                const labelOffset = targetLabel.offsetLeft;
                const offsetLeft = labelOffset + (labelWidth / 2) - (viewportWidth / 2);

                categoryList.scrollTo({ top: 0, left: offsetLeft, behavior: 'smooth' });
                window.scrollTo({top: scope.offsetTop});
            }
        };

        categoryForm.appendChild(categoryList);
        categoryForm.addEventListener('change', e => applyFilter(e.target.value));

        const createFilter = (title, value) => {
            const categoryItem = document.createElement('li');
            const categoryInput = document.createElement('input');
            const categoryLabel = document.createElement('label');

            categoryInput.type = 'radio';
            categoryInput.name = 'speisekarte';
            categoryInput.value = value;
            categoryLabel.tabIndex = 0;
            categoryLabel.textContent = title;
            categoryLabel.addEventListener('keydown', event => {
                switch (event.key) {
                    case ' ':
                    case 'Enter': {
                        categoryInput.click();
                        event.preventDefault();
                    }
                }
            })
            categoryLabel.appendChild(categoryInput);
            categoryItem.appendChild(categoryLabel);

            return categoryItem;
        }

        const filterAll = createFilter('Alle', '');
        categoryList.appendChild(filterAll);
        Array.from(scope.querySelectorAll('section'))
            .toSorted((a, b) => b.dataset.weight || 0 - a.dataset.weight || 0)
            .forEach(section => {
                const categoryTitle = section.querySelector('h2').textContent.trim();
                section.dataset.title = categoryTitle;

                const filter = createFilter(categoryTitle, categoryTitle);
                categoryList.appendChild(filter);
            });

        categoryHeadline.after(categoryForm);
        filterAll.querySelector('input').click();

        this.#observers.push(this.#initHorizontalFilterObserver(categoryList));
        this.#observers.push(this.#initVerticalFilterObserver(scope, categoryForm));
    }

    cleanup() {
        this.#observers
            .splice(0, this.#observers.length)
            .forEach(observer => observer.disconnect());
    }

    #initHorizontalFilterObserver(element) {
        const CLASS_ENTERED_VIEWPORT = 'entered-viewport';
        const verticalFilterObserver = new IntersectionObserver(entries => {
            if (element.classList.contains(CLASS_ENTERED_VIEWPORT)) {
                verticalFilterObserver.unobserve(element);
                element.classList.remove(CLASS_ENTERED_VIEWPORT);
            } else if (entries[0].isIntersecting) {
                element.classList.add(CLASS_ENTERED_VIEWPORT);
            }
        });

        verticalFilterObserver.observe(element);
        return verticalFilterObserver;
    }

    #initVerticalFilterObserver(watchedElement, targetElement) {
        const CLASS_STICKY = 'sticky';
        const horizontalFilterObserver = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting || window.scrollY <= targetElement.offsetTop) {
                targetElement.classList.add(CLASS_STICKY);
            } else {
                targetElement.classList.remove(CLASS_STICKY);
            }
        });

        horizontalFilterObserver.observe(watchedElement);
        return horizontalFilterObserver;
    }
}