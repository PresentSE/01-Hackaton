import { Module } from "../core/module";

export class TimerModule extends Module {
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
    if (document.querySelector(".timer-container")) {
      document.querySelector(".timer-container").remove();
      time = 0;
    }

    const timerDiv = document.createElement("div");
    timerDiv.className = "timer-container";
    const hElement = document.createElement("h2");
    hElement.textContent = `До конца отсчета осталось: `;
    const timer = document.createElement("span");
    timer.id = "time";
    hElement.append(timer);
    timerDiv.append(hElement);
    document.body.append(timerDiv);

    let time = prompt("Введите количество секунд для обратного отсчета.");
    if (!time || time % 1 > 0 || time <= 0) {
      document.querySelector(".timer-container").remove();
      alert("Введенные данные должны быть целым положительным числом!");
    }
    time = Number(time.trim());

    timer.innerHTML = `${time}`;
    const countTimer = setInterval(() => {
      let changer = --time;
      if (time <= 0) {
        clearInterval(countTimer);
        hElement.textContent = "Отсчет окончен!";
        setTimeout(() => {
          timerDiv.remove();
        }, 3000);
      }
      timer.textContent = `${changer}`;
    }, 1000);
  }
}
