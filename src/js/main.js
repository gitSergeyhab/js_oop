import Slider from './modules/slider/slider';
import VideoPlayer from './modules/video-player';
import MainSlider from './modules/slider/main-slider'

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({slideSel: '.page > div', btnsSel: '.next'});
    slider.render();

    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init()
})