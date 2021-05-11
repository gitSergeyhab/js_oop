export default class Slider {
    constructor (pageSel, btnsSel) {
        this.page = document.querySelector(pageSel);
        this.sliders = this.page.children;
        this.btns = document.querySelectorAll(btnsSel);
        this.index = 0;
    }

    showSlide(s) {
        this.sliders.forEach(slide => slide.style.display = 'none');
        this.sliders[s].style.display = 'block';
    }

    nextIndex(n) {
        this.index += n;
        if (this.index < 0) this.index = this.sliders.length - 1;
        if (this.index >= this.sliders.length) this.index = 0;
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