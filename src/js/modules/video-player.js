export default class VideoPlayer {
    constructor (btnsSel, popupSel) {
        this.btns = document.querySelectorAll(btnsSel);
        this.popup = document.querySelector(popupSel);
        this.close = this.popup.querySelector('.close')
    }




    createPlayer(url) {
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: url,
          });
          this.popup.style.display = 'flex';
          console.log(this.player)
    }


    bindTrigers() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                if(document.querySelector('iframe#frame')) {
                    this.popup.style.display = 'flex';
                } else {
                    const path = btn.getAttribute('data-url');
                    this.createPlayer(path);
                }
            })
        })

        this.close.addEventListener('click', () => {
            this.popup.style.display = 'none';
            this.player.pauseVideo();
        })
    }

    init() {
        const tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        this.bindTrigers()

    }
}