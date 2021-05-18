export default class Acordion {
    constructor(btn) {
        this.btns = document.querySelectorAll(btn);
    }

    openMessage() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                const next = btn.parentNode.nextElementSibling;
                next.classList.add('animated')
                if (getComputedStyle(next).display === 'none') {
                    next.style.display ='block';
                } else {
                    next.style.display ='none';
                }
                
                
            })

        })

        
    }
}