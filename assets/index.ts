import MediaPlayer from "./MediaPlayer";
import AutoPlay from "../plugins/AutoPlay";
import AutoPause from "../plugins/AutoPause";

const video = document.querySelector("video");
const button: HTMLElement = document.getElementById("playButton");
const btnMuted: HTMLElement = document.getElementById("muteButton");

const player = new MediaPlayer({
  el: video,
  type: true,
  muted: true,
  plugin: [new AutoPlay(), new AutoPause()],
});
button.onclick = () => player.play();
btnMuted.onclick = () => player.mute();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message);
  });
}
