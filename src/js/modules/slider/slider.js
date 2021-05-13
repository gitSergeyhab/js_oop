export default class Slider {
    constructor ({pageSel=null, btnsSel=null, slideSel=null, nextSel=null, prevSel=null} = {}) {
        this.page = document.querySelector(pageSel);
        // this.sliders = this.page.children;
        this.slides = document.querySelectorAll(slideSel);
        this.btns = document.querySelectorAll(btnsSel);
        this.index = 0;
    }
}