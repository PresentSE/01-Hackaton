import { Module } from "../code/module";
import { random } from "../utils";

export class Sound extends Module {
  constructor(type, text) {
    super("sound", "Случайный звук");
  }

  trigger() {
    const audio = document.createElement("audio");
    audio.src = `assets/audio/sound${random(1, 26)}.mp3`;
    document.body.append(audio);

    audio.currentTime = 0;
    audio.play();
  }
}
