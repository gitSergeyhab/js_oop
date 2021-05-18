export default class Download {
    constructor(btn) {
        this.btns = document.querySelectorAll(btn);
        this.path = 'assets/img/mainbg.jpg';
    }

    init() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                const a = document.createElement('a');
                a.href = this.path;
                a.setAttribute('download', 'yes')
                // a.style.display = 'none';
                a.click();
                a.remove()
            })
        })
    }
} 