export default class Difference {
    constructor(officerold, officernew, plus) {
        this.officerold = document.querySelector(officerold);
        this.officernew = document.querySelector(officernew);
        this.plus = plus;
        this.old = 1;
        this.new = 1;
    }

    hideAll(list) {
        list.forEach((item, i, arr) => {
            if (i < arr.length-1 && i > 0) item.style.display = 'none';
        })
    }

    showOne(officer, counter) {
        const pluse = officer.querySelector(this.plus);
        const officerChildren = officer.children;
        pluse.addEventListener('click', () => {
            officerChildren[counter].style.display = 'flex';
            counter++;
            if (counter == officerChildren.length - 1) {
                officerChildren[officerChildren.length-1].style.display = 'none';
            } 
        });
    }

    init() {
        try {
            this.hideAll(this.officerold.children);
            this.hideAll(this.officernew.children);
            this.showOne(this.officernew, this.new);
            this.showOne(this.officerold, this.old);
        } catch (e) {}
    }
}