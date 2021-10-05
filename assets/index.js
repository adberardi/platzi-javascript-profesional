import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "../plugins/AutoPlay.js";
import AutoPause from "../plugins/AutoPause.js";

const video = document.querySelector("video");
const button = document.getElementById("playButton");
const btnMuted = document.getElementById("muteButton");

const player = new MediaPlayer({
  el: video,
  type: true,
  muted: true,
  plugin: [new AutoPlay(), new AutoPause()],
});
button.onclick = () => player.play();
btnMuted.onclick = () => player.mute();
