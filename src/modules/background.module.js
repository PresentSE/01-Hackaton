import { Module } from "../core/module";
import { getRandomColor } from "../utils";

export class BackgroundModule extends Module {
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
    const color = getRandomColor();
    document.body.style.transition = "background 0.4s linear";
    document.body.style.backgroundColor = color;
  }
}
