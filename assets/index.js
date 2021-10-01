const video = document.querySelector("video");
const button = document.querySelector("button");

function MediaPlayer(config) {
  this.media = config.el;
  this.type = config.type;
}

MediaPlayer.prototype.play = function () {
  if (this.type) {
    this.media.play();
  } else {
      this.media.pause();
  }
  this.type = !this.type;
};

const player = new MediaPlayer({ el: video, type: true });
button.onclick = () => player.play();