function MediaPlayer(config) {
    this.media = config.el;
    this.type = config.type;
    this.muted = config.muted;
    this.plugin = config.plugin || [];
    this.autoplay();
  }
  
  MediaPlayer.prototype.play = function () {
    if (this.type) {
      this.media.play();
    } else {
      this.media.pause();
    }
    this.type = !this.type;
  };
  
  MediaPlayer.prototype.mute = function () {
    console.log(this.muted);
    if (this.muted) {
      this.media.muted = true;
    } else {
      this.media.muted = false;
    }
    this.muted = !this.muted;
  };
  
  
  MediaPlayer.prototype.autoplay = function () {
    this.plugin.forEach(element => {
      element.run(this);
    });
  }

export default MediaPlayer;