import { Module } from "../core/module";
import { random } from "../utils";
import { soundsArray } from "../utils";

export class Sound extends Module {
  constructor(type, text) {
    super(type, text);

    document.body.addEventListener("click", (event) => {
      const elem = document.querySelector(`[data-type="${type}"]`);
      if (event.target === elem) {
        this.trigger();
        elem.parentElement.className = "menu";
      }
    });
  }

  trigger() {
    const audio = document.createElement("audio");
    audio.src = soundsArray[random(0, 25)];
    document.body.append(audio);

    audio.currentTime = 0;
    audio.play();

    setTimeout(() => {
      audio.remove();
    }, 3000);
  }
}
