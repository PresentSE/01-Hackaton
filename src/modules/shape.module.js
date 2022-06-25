import { Module } from "../core/module";
import { random } from "@/utils";
import { getRandomColor } from "@/utils";

export class ShapeModule extends Module {
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
    //init
    const shape = document.createElement("div");
    shape.className = "random-shape";

    const typeOfShape = random(1, 3);
    switch (typeOfShape) {
      case 1:
        //polygon
        let angles = [];

        const createAngle = () => {
          return `${random(0, 100)}% ${random(0, 100)}%`;
        };

        const valuesOfAngles = () => {
          const amountOfAngles = random(3, 7);

          for (let i = 0; i < amountOfAngles; i++) {
            angles.push(createAngle());
          }
        };

        valuesOfAngles();
        shape.style.clipPath = `polygon(${angles.join(", ")})`;
        break;
      case 2:
        //ellipse
        shape.style.clipPath = `ellipse(${random(10, 50)}% ${random(
          10,
          50
        )}% at 50% 50%)`;
        break;
      case 3:
        //blob
        shape.style.borderRadius = `${random(20, 100)}% ${random(
          20,
          100
        )}% ${random(20, 100)}% ${random(20, 100)}% / ${random(
          20,
          100
        )}% ${random(20, 100)}% ${random(20, 100)}% ${random(20, 100)}%`;
        break;
    }

    //appearance
    shape.style.background = `linear-gradient(${random(
      0,
      359
    )}deg, ${getRandomColor()}, ${getRandomColor()})`;
    shape.style.width = `${random(300, 500)}px`;
    shape.style.height = `${random(300, 500)}px`;

    //position
    shape.style.position = `absolute`;
    shape.style.top = `${random(0, window.innerHeight * 0.7)}px`;
    shape.style.left = `${random(
      0,
      document.body.getBoundingClientRect().width * 0.8
    )}px`;
    document.body.style.overflow = "hidden";
    document.body.append(shape);

    setTimeout(() => {
      shape.remove();
    }, 2001);
  }
}
