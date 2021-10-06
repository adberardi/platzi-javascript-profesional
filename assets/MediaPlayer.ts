class MediaPlayer {
  media: HTMLMediaElement;
  plugin: Array<any>;
  type: boolean;
  muted: boolean;
  constructor(config) {
    this.media = config.el;
    this.type = config.type;
    this.muted = config.muted;
    this.plugin = config.plugin || [];
    this.autoplay();
  }
  
  private initPlugins(){
    this.plugin.forEach(element => {
      element.run(this);
    });
  }

  play() {
    if (this.type) {
      this.media.play();
    } else {
      this.media.pause();
    }
    this.type = !this.type;
  }
  mute() {
    console.log(this.muted);
    if (this.muted) {
      this.media.muted = true;
    } else {
      this.media.muted = false;
    }
    this.muted = !this.muted;
  }
  autoplay() {
    const player = {
      play: () => this.play(),
      pause: () => this.pause(),
      media: this.media,
      get muted() {
        return this.media.muted;
      },
      set muted(value) {
        this.media.muted = value;
      }
    };
  }
  pause() {
    this.media.pause();
  }
}

export default MediaPlayer;