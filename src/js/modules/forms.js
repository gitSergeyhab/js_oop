export default class Forms {
    constructor(form) {
        this.forms = document.querySelectorAll(form);
    }

    async postData(data) {
        const res = await fetch('assets/question.php', {
            method: 'POST',
            body: data
        })

        return await res.text();
    }

    maskPhone(selector, masked = '+7 (___) ___-__-__') {
        const elems = document.querySelectorAll(selector);
    
        function mask(event) {
            const keyCode = event.keyCode;
            const template = masked,
                def = template.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, "");
            // console.log(template);
            let i = 0,
                newValue = template.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
                });
            i = newValue.indexOf("_");
            if (i !== -1) {
                newValue = newValue.slice(0, i);
            }
            let reg = template.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}";
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
                this.value = newValue;
            }
            if (event.type === "blur" && this.value.length < 5) {
                this.value = "";
            }
        }
    
        for (const elem of elems) {
            elem.addEventListener("input", mask);
            elem.addEventListener("focus", mask);
            elem.addEventListener("blur", mask);
        }   
    }

    cleared() {
        const inputs = document.querySelectorAll('input')
        inputs.forEach(input => input.value = '')
    }

    validation(selector, patern) {
        const inputs = document.querySelectorAll(selector);
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                input.value = input.value.replace(patern, '')
            })
        })
    }

    init() {
        this.validation('[name="email"]', /[^0-9 a-z @_ \- \.]/gi)
        this.maskPhone('[name="phone"]', '+1 (___) ___-____')
        this.forms.forEach(form => {
            form.addEventListener('submit', (evt) => {
                evt.preventDefault();
                const message = document.createElement('div');
                message.textContent = 'loading...';
                message.style.cssText = `
                    margin-top: 10px;
                    color: black;
                    font-size: 30px;`
                form.append(message);
                const formData = new FormData(form);
                this.postData(formData)
                    .then(res => {
                        console.log(res);
                        message.textContent = 'loaded!!!';
                    })
                    .catch(() => {
                        console.log('ERROR');
                        message.textContent = 'ERROR!!!';
                    })
                    .finally(() => {
                        this.cleared();
                        setTimeout(() => message.remove(), 2000)
                    })
            })
        })
    }
}