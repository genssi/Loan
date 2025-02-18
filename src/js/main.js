import MainSlider from './modules/slider/slider-main';
import MiniSlider from './modules/slider/slider-mini';
import VideoPlayer from './modules/playVideo';
import Difference from './modules/difference';
import Form from './modules/form';
import AccordionMini from './modules/accordion-mini';
import Download from './modules/download';

window.addEventListener('DOMContentLoaded', () => {

    //Sliders
    const slider = new MainSlider({btns: '.next', container: '.page'});
    slider.render();

    const modulePageSlider = new MainSlider({container: '.moduleapp', btns: '.next'});
    modulePageSlider.render();

    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true
    });
    showUpSlider.init();

    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: true,
        autoplay: true
    });
    modulesSlider.init();

    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        prev: '.feed__slider .slick-prev',
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active'
    });
    feedSlider.init();

    //Video Player
    const player1 = new VideoPlayer('.showup .play', '.overlay');
    player1.init();
    const player2 = new VideoPlayer('.module__video-item .play', '.overlay');
    player2.init();

    //Accordion difference
    new Difference(".officerold", ".officernew", ".officer__card-item").init();
    //Accordion mini
    new AccordionMini(".plus").init();

    //Form
    const form = new Form(".form");
    form.init();

    //Download file.
    new Download(".download").init();
});
