import { Menu } from "./core/menu";
import { changePosition } from "./utils";

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

  add(module) {
    this.el.insertAdjacentHTML('beforeend', module.toHTML());
        const newModule = this.el.querySelector(`[data-type='${module.type}']`);
    }
    /*
    const shapeModule = new ShapeModule("shape", "Создать фигуру").toHTML();
    const soundModule = new Sound("sound", "Случайный звук").toHTML();
    const messageModule = new MessageModule("message", "Создать сообщение").toHTML();
    const clicksModule = new ClicksModule("click", "Расчет кликов за 3 сек").toHTML();
    const backgroundModule = new BackgroundModule("background", "Изменить фон").toHTML();
    const timerModule = new TimerModule("timer", "Таймер отсчёта").toHTML();
    this.el.insertAdjacentHTML(
      "afterbegin",
      `
    ${shapeModule}
    ${soundModule}
    ${messageModule}
    ${clicksModule}
    ${backgroundModule}
    ${timerModule}
   `
    );
    */
  }
