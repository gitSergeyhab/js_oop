import Slider from './modules/slider/slider';
import VideoPlayer from './modules/video-player';
import MainSlider from './modules/slider/main-slider';
import MiniSlider from './modules/slider/mini-slider';
import Difference from './modules/difference';
import Forms from './modules/forms'

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({containerSel: '.page', slideSel: '.page > div', btnsSel: '.next'});
    slider.render();

    const showupSlider = new MiniSlider({
        slideSel: '.showup__content-slider .card', 
        prevSel: '.showup__prev',
        nextSel: '.showup__next',
        containerSel: '.showup__content-slider', 
        activeClass: 'card-active',
        autoMove: true
    });
    showupSlider.slideGo();

    const modulesSlider = new MiniSlider({
        slideSel: '.modules__content-slider .card', 
        btnsSel: '.modules__content-slider .card__controls-arrow', 
        prevSel: '.slick-prev',
        nextSel: '.slick-next',
        containerSel: '.modules__content-slider', 
        activeClass: 'card-active',
        autoMove: true
    });
    modulesSlider.slideGo();

    const feedSlider = new MiniSlider({
        slideSel: '.feed__item ', 
        prevSel: '.slick-prev',
        nextSel: '.slick-next',
        containerSel: '.feed__slider', 
        activeClass: 'feed__item-active',
        autoMove: true
    })
    feedSlider.slideGo();

    new Difference('.officerold', '.officernew', '.officer__card-item .plus').init();
    new Forms('form').init();


    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init();
})