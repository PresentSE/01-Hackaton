import { Module } from "../core/module";
import { createCountClick } from "../utils";

export class ClicksModule extends Module {
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
    createCountClick();
  }
}
