export default class VideoPlayer {
    constructor (btnsSel, popupSel) {
        this.btns = document.querySelectorAll(btnsSel);
        this.popup = document.querySelector(popupSel);
        this.close = this.popup.querySelector('.close');
        this.onPlayerStateChange = this.onPlayerStateChange.bind(this)
    }




    createPlayer(url) {
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: url,
            events: {
                'onStateChange': this.onPlayerStateChange
              }
          });
          this.popup.style.display = 'flex';
    }

    onPlayerStateChange(state) {
        if (state.data === 0) {
            const closeVideo = this.playerBtn.closest('.module__video-item').nextElementSibling;
            if (closeVideo) {
                closeVideo.style.opacity = 1;
                closeVideo.style.filter = 'none';
                const closeVideoPlay = closeVideo.querySelector('.play');
                const playBtn = this.playerBtn.querySelector('.play__circle').cloneNode(true);
                closeVideoPlay.textContent = ''
                closeVideoPlay.append(playBtn);
                const playVideo = document.createElement('div');
                playVideo.classList.add('play__text');
                playVideo.textContent = 'play video';
                closeVideoPlay.append(playVideo);
            }
        }
    }


    bindTrigers() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.playerBtn = btn;
                if (
                    !this.playerBtn.closest('.module__video-item') || 
                    this.playerBtn.closest('.module__video-item').querySelector('.play__text').textContent == 'play video'
                    ) {
                    if(document.querySelector('iframe#frame')) {
                        this.popup.style.display = 'flex';
                        if (btn.getAttribute('data-url') !== this.path) {
                            this.player.loadVideoById(btn.getAttribute('data-url'));
                            this.path = btn.getAttribute('data-url');
                        }
                    } else {
                        this.path = btn.getAttribute('data-url');
                        this.createPlayer(this.path);
                    }
                }
            })
        })

        this.close.addEventListener('click', () => {
            if (this.player) this.player.pauseVideo();
            this.popup.style.display = 'none';
            
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