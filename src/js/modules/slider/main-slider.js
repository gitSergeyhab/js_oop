import Slider from './slider';

export default class MainSlider extends Slider {
    constructor(containerSel, btnsSel, nextSel, prevSel) {
        super(containerSel, btnsSel, nextSel, prevSel)
    }
    
    showSlide(s) {
        try {
            this.slides.forEach(slide => slide.style.display = 'none');
            this.slides[s].style.display = 'block';
        } catch(e) {}
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

    bindTriggers(needBtn, n) {
        needBtn.forEach(btn => {
            btn.addEventListener('click', (evt) => {
                evt.preventDefault();
                this.nextIndex(n);
                this.showSlide(this.index);
                this.showHanson();
            })
        })
    }

    render() {
        try {
            this.bindTriggers(this.prevBtns, -1);
            this.bindTriggers(this.nextBtns, 1);
        } catch(e) {}

        try {
            this.bindTriggers(this.btns, 1);

            this.container.querySelectorAll('.sidecontrol > a').forEach(D => {
                D.addEventListener('click', (evt) => {
                    evt.preventDefault();
                    this.index = 0;
                    this.showSlide(this.index);
                })
            })
        } catch(e) {}
    }
}