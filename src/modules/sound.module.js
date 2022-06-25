import { Module } from "../core/module";
import { random } from "../utils";
import audio11 from "../assets/audio/sound1.mp3";

export class Sound extends Module {
  constructor(type, text) {
    super(type, text);

    document.body.addEventListener("click", (event) => {
      const elem = document.querySelector(`[data-type="${type}"]`);
      if (event.target === elem) {
        this.trigger();
      }
    });
  }

  trigger() {
    const audio = document.createElement("audio");
    //audio.src = `../assets/audio/sound${random(1, 26)}.mp3`;
    audio.src = audio11;
    document.body.append(audio);

    audio.currentTime = 0;
    audio.play();
  }
}
