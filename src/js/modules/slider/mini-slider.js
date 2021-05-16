import Slider from './slider'

export default class MiniSlider extends Slider {
    constructor(containerSel, btnsSel, slideSel, nextSel, prevSel, activeClass) {
        super(containerSel, btnsSel, slideSel, nextSel, prevSel, activeClass)
    }

    init() {
        try {
            this.container.style.cssText = `
                display: flex;
                flex-wrap: wrap;
                overflow: hidden;
                ` 
        } catch(e) {}
    }

    backwardSlide() {
        this.slides.forEach(slide => slide.classList.remove(this.activeClass))
        const lastSlide = this.slides[this.slides.length - 1];
        lastSlide.classList.add(this.activeClass);
        // this.container.insertAdjacentElement('afterbegin', lastSlide);
        this.container.prepend(lastSlide)
        this.slides = document.querySelectorAll(this.slideSel);
        // this.slides[0].classList.add(this.activeClass);
    }

    forwardSlide() {
        try {        
            this.slides.forEach(slide => slide.classList.remove(this.activeClass))
            const firstSlide = this.slides[0];
            this.container.append(firstSlide);
            this.slides = document.querySelectorAll(this.slideSel);
            this.slides[0].classList.add(this.activeClass);
        } catch(e) {}
    }

    prevSlide() {
        this.prevBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.backwardSlide()
            })
        })
    }

    nextSlide() {
        this.nextBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.forwardSlide();
                console.log('!!!')
            })
        })

        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.forwardSlide()
            })
        })
    }

    slideGo() {
        this.init();
        this.nextSlide();
        this.prevSlide();

        try {
            if (this.autoMove) {
                let slideInterval = setInterval(() => this.forwardSlide(), 1000);

                const allBtnsFun = (btns) => {
                    btns.forEach(btn => {
                        btn.addEventListener('mouseenter', () => clearInterval(slideInterval));
                        btn.addEventListener('mouseleave', () => slideInterval = setInterval(() => this.forwardSlide(), 1000));
                    })
                };

                allBtnsFun(this.btns);
                allBtnsFun(this.prevBtns);
                allBtnsFun(this.nextBtns)
                allBtnsFun([this.container])
                // this.container.addEventListener('mouseenter', () => clearInterval(slideInterval));
                // this.container.addEventListener('mouseleave', () => slideInterval = setInterval(() => this.forwardSlide(), 1000));
            }
        } catch(e) {}


    }
}
