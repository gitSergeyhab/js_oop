import Slider from './slider';

export default class MainSlider extends Slider {
    constructor(pageSel, btnsSel) {
        super(pageSel, btnsSel)
    }
    
    showSlide(s) {
        this.slides.forEach(slide => slide.style.display = 'none');
        this.slides[s].style.display = 'block';
    }

    nextIndex(n) {
        this.index += n;
        if (this.index < 0) this.index = this.slides.length - 1;
        if (this.index >= this.slides.length) this.index = 0;
    }

    showHanson() {
        const hanson = document.querySelector('.hanson');
        if (hanson) {
            hanson.classList.add('animated');
            hanson.style.opacity = 0;
            if (this.index == 2) {
                setTimeout(() => {
                    hanson.style.opacity = 1;
                    hanson.classList.add('slideInUp');
                }, 3000)
            } else {
                hanson.classList.remove('slideInUp');
            }

        }
    }

    render() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', (evt) => {
                evt.preventDefault();
                this.nextIndex(1);
                this.showSlide(this.index);
                this.showHanson();
            })
        })

        this.page.querySelectorAll('.sidecontrol > a').forEach(D => {
            D.addEventListener('click', (evt) => {
                evt.preventDefault();
                this.index = 0;
                this.showSlide(this.index);
            })
        })
    }
}