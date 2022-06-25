import { Menu } from "./core/menu";
import { changePosition } from "./util_func";
import { ShapeModule } from "./modules/shape.module";
import { Sound } from "./modules/sound.module";
import { MessageModule } from "./modules/message.module";
import { ClicksModule } from "./modules/clicks.module";
import { BackgroundModule } from "./modules/background.module";

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
    document.body.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      this.open(event);
      const { correctX, correctY } = changePosition(
        event.clientX,
        event.clientY
      );
      this.el.style.left = `${correctX}px`;
      this.el.style.top = `${correctY}px`;
    });
  }

  open() {
    this.el.classList.add("open");
  }

  close() {
    this.el.classList.remove("open");
  }

  add() {
    const shapeModule = new ShapeModule("shape", "Создать фигуру").toHTML();
    const soundModule = new Sound("sound", "Случайный звук").toHTML();
    const messageModule = new MessageModule(
      "message",
      "Создать сообщение"
    ).toHTML();
    const clicksModule = new ClicksModule(
      "click",
      "Расчет кликов за 3 сек"
    ).toHTML();
    const backgroundModule = new BackgroundModule(
      "background",
      "Изменить фон"
    ).toHTML();
    this.el.insertAdjacentHTML(
      "afterbegin",
      `
    ${shapeModule}
    ${soundModule}
    ${messageModule}
    ${clicksModule}
    ${backgroundModule}
   `
    );
  }
}
