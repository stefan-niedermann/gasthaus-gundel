export class SpeisekarteController {

    constructor() {
    }

    init() {
        const scope = document.getElementById('speisekarte');
        const categoryHeadline = scope.querySelector('h1');
        const categoryForm = document.createElement('form');
        const categoryList = document.createElement('ul');
        const applyFilter = value => {
            if (value === '') {
                scope.querySelectorAll(`section`)
                    .forEach(section => section.style.display = 'unset');
                categoryList.scrollTo(0, 0);
            } else {
                const targetItem = scope.querySelector(`section[data-title="${value}"]`);
                targetItem.style.display = 'unset';
                scope.querySelectorAll(`section:not([data-title="${value}"])`)
                    .forEach(section => section.style.display = 'none');
                /* FIXME Scroll to active filter
            const listWidth = categoryList.scrollWidth;
            const itemWidth = targetItem.parentElement.scrollWidth;
            // const itemWidth = targetItem.parentElement.offsetLeft;
            categoryList.scrollLeft = (targetItem.parentElement.offsetLeft - itemWidth);*/
            }
            categoryHeadline.scrollTo(); // FIXME does not work
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
            categoryLabel.textContent = title;
            categoryLabel.appendChild(categoryInput);
            categoryItem.appendChild(categoryLabel);

            return categoryItem;
        }

        const filterAll = createFilter('Alle', '');
        categoryList.appendChild(filterAll);
        [...scope.querySelectorAll('section')]
            .toSorted((a, b) => b.dataset.weight || 0 - a.dataset.weight || 0)
            .forEach(section => {
                const categoryTitle = section.querySelector('h2').textContent.trim();
                section.dataset.title = categoryTitle;

                const filter = createFilter(categoryTitle, categoryTitle);
                categoryList.appendChild(filter);
            });

        categoryHeadline.after(categoryForm);
        filterAll.querySelector('input').click();
    }
}