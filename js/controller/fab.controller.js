export class FabController {

    #eventListeners = [];

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
        
        this.#eventListeners.push(listener);
    }

    cleanup() {
        this.#eventListeners
            .splice(0, this.#eventListeners.length)
            .forEach(listener => removeEventListener(listener));
    }


    // let lastScrollTop = document.documentElement.scrollTop;
    // const SCROLL_THRESHOLD = 40;
    // const CLASS_FAB = 'fab';
    // const CLASS_BTN = 'btn';

    // const onScroll = e => {
    //     const thresholdSatisfied = Math.abs(document.documentElement.scrollTop - lastScrollTop) > SCROLL_THRESHOLD;

    //     if (document.documentElement.scrollTop < SCROLL_THRESHOLD || window.screen.width <= 600) {
    //         document.querySelector('header a').classList.remove(CLASS_FAB);
    //         document.querySelector('header a').classList.remove(CLASS_BTN);
    //     } else {
    //         document.querySelector('header a').classList.add(CLASS_FAB);
    //         document.querySelector('header a').classList.add(CLASS_BTN);
    //     }

    //     if (thresholdSatisfied) {
    //         let targetState = document.documentElement.scrollTop > lastScrollTop
    //             ? 0
    //             : 1;

    //         lastScrollTop = document.documentElement.scrollTop;

    //         requestAnimationFrame(() => {
    //             document.querySelectorAll('.fab')
    //                 .forEach(fab => fab.style.transform = `scale(${targetState})`);
    //         });
    //     }
    // }

    // const onScrollHandler = e => {
    //     if (window.screen.width > 600) {
    //         window.removeEventListener('scroll', onScroll);
    //     } else {
    //         window.addEventListener('scroll', onScroll);
    //     }
    // };

    // window.addEventListener('resize', onScrollHandler);
    // onScrollHandler();
}