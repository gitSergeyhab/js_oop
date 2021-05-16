export default class Slider {
    constructor ({containerSel=null, btnsSel=null, slideSel=null, nextSel=null, prevSel=null, activeClass=null, autoMove=false} = {}) {
        this.container = document.querySelector(containerSel);
        this.slideSel = slideSel;
        // this.slides = this.container.children;
        
        this.slides = document.querySelectorAll(slideSel);
        this.btns = document.querySelectorAll(btnsSel);
        this.index = 0;
        this.prevBtns = document.querySelectorAll(prevSel);
        this.nextBtns = document.querySelectorAll(nextSel);
        this.activeClass = activeClass;
        this.autoMove = autoMove;
    }
}
