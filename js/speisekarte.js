
document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.getElementById('search');
    var searchClose = document.getElementById('search-close');
    var sections = Array.from(document.querySelectorAll('div.section'));

    var highlight = function (elem, searchStr) {
        if (elem !== null) {
            var replace = elem.textContent.substr(elem.textContent.toLowerCase().indexOf(searchStr), searchStr.length);
            if (replace.length === searchStr.length) {
                elem.innerHTML = elem.textContent.replace(replace, `<span class="deep-orange">${replace}</span>`);
            }
        }
    }

    var resetHighlight = function (elem) {
        elem.innerHTML = elem.innerText;
    }

    var resetSearch = function () {
        searchInput.value = '';
        Array.from(document.getElementsByClassName('search-hidden')).forEach(function (elem) {
            elem.classList.remove('search-hidden');
        });
        Array.from(document.querySelectorAll('li strong, li p')).forEach(resetHighlight);
        window.scrollBy(0, 1);
        window.scrollBy(0, -1);
    }

    searchInput.addEventListener('focus', function () {
        searchClose.innerText = 'close';
        document.querySelector('body>nav').style.position = 'sticky';
    });
    searchInput.addEventListener('blur', function (event) {
        searchClose.innerText = 'search';
        document.querySelector('body>nav').style.position = 'static';
    });
    searchClose.addEventListener('click', function () {
        resetSearch();
    });
    searchInput.addEventListener('keyup', function () {
        var searchStr = searchInput.value.toLowerCase();
        if (searchStr.length > 0) {
            sections.forEach(function (container) {
                var containerContainsSearchResult = false;
                var img = container.querySelector('.parallax-container');
                if (img) img.classList.add('search-hidden');
                Array.from(container.querySelectorAll('li')).forEach(function (li) {
                    if (li.textContent.toLowerCase().includes(searchStr)) {
                        containerContainsSearchResult = true;
                        li.classList.remove('search-hidden');
                        // Highlight
                        var title = li.querySelector('strong');
                        resetHighlight(title);
                        highlight(title, searchStr);
                        var description = li.querySelector('p');
                        resetHighlight(description);
                        highlight(description, searchStr);
                    } else {
                        li.classList.add('search-hidden');
                    }
                });

                if (containerContainsSearchResult) {
                    container.classList.remove('search-hidden');
                } else {
                    container.classList.add('search-hidden');
                }
            });
        } else {
            resetSearch();
        }
    });
});