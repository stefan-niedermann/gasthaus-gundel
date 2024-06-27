'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const currentMenuItem = document.querySelector(`nav a[href$="${location.hash}"]`);

    if (currentMenuItem instanceof HTMLElement) {
        currentMenuItem.setAttribute('aria-current', true);
    } else {
        document.querySelector('nav a')?.setAttribute('aria-current', true)
    }

    const hashChangeListener = newId => {
        document.querySelector('nav a[aria-current="true"]')?.removeAttribute('aria-current');
        document.querySelector(`nav a[href$="${newId}"]`)?.setAttribute('aria-current', true);
    }

    addEventListener('hashchange', e => {
        hashChangeListener(e.newURL.substring(e.newURL.indexOf('#')));
    });

    let lastScrollTop = document.documentElement.scrollTop;
    const SCROLL_THRESHOLD = 40;
    const CLASS_FAB = 'fab';
    const CLASS_BTN = 'btn';

    const onScroll = e => {
        const thresholdSatisfied = Math.abs(document.documentElement.scrollTop - lastScrollTop) > SCROLL_THRESHOLD;

        if (document.documentElement.scrollTop < SCROLL_THRESHOLD || window.screen.width <= 600) {
            document.querySelector('header a').classList.remove(CLASS_FAB);
            document.querySelector('header a').classList.remove(CLASS_BTN);
        } else {
            document.querySelector('header a').classList.add(CLASS_FAB);
            document.querySelector('header a').classList.add(CLASS_BTN);
        }

        if (thresholdSatisfied) {
            let targetState = document.documentElement.scrollTop > lastScrollTop
                ? 0
                : 1;

            lastScrollTop = document.documentElement.scrollTop;

            requestAnimationFrame(() => {
                document.querySelectorAll('.fab')
                    .forEach(fab => fab.style.transform = `scale(${targetState})`);
            });
        }
    }

    const onScrollHandler = e => {
        if (window.screen.width > 600) {
            window.removeEventListener('scroll', onScroll);
        } else {
            window.addEventListener('scroll', onScroll);
        }
    };

    window.addEventListener('resize', onScrollHandler);
    onScrollHandler();

    // Create a new IntersectionObserver object
    const observer = new IntersectionObserver((entries, observer) => {
        if (entries.length > 0) {
            const newId = `#${entries[0].target.id}`;
            history.pushState({}, '', `${location.pathname}#${newId}`);
            hashChangeListener(newId);
        }
        for (const entry of entries) {
            console.log(entry);
        }
    });

    // Get the heading elements
    const headings = document.querySelectorAll('header, article, footer');

    // Observe each heading
    for (const heading of headings) {
        observer.observe(heading);
    }



    /* Speisekarte */

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
});