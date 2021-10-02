const video = document.querySelector("video");
const button = document.getElementById("playButton");
const btnMuted = document.getElementById("muteButton");

function MediaPlayer(config) {
  this.media = config.el;
  this.type = config.type;
  this.muted = config.muted;
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
  } 
  else {
    this.media.muted = false;
  }
  this.muted = !this.muted;
}

const player = new MediaPlayer({ el: video, type: true, muted: true });
button.onclick = () => player.play();
btnMuted.onclick = () => player.mute();