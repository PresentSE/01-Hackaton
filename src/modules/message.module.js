import { Module } from "../core/module";
import { getRandomColor, random } from "@/utils";

export class MessageModule extends Module {
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
    const quotesArray = [
      "Tell me and I forget. Teach me and I remember. Involve me and I learn. - Benjamin Franklin",
      "Learning never exhausts the mind. - Leonardo da Vinci",
      "For the things we have to learn before we can do them, we learn by doing them. - Aristotle",
      "Learning is not attained by chance, it must be sought for with ardor and attended to with diligence. - Abigail Adams",
      "The beautiful thing about learning is that nobody can take it away from you. - B.B. King",
      "Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi",
      "No problem can withstand the assault of sustained thinking. - Voltaire",
      "A teacher is one who makes himself progressively unnecessary. - Thomas Carruthers",
      "The doer alone learneth. - Friedrich Nietzsche",
      "I am still learning. - Michelangelo",
    ];
    const numberOfQuote = random(0, 9);
    const message = document.createElement("div");
    const closeButton = document.createElement("button");
    const text = document.createElement("p");

    closeButton.className = "message-close-button";
    text.className = "custom-message-text";

    message.className = "custom-message custom-message-active";
    message.style.background = `linear-gradient(${random(
      0,
      359
    )}deg, ${getRandomColor()}, ${getRandomColor()})`;
    text.innerText = quotesArray[numberOfQuote];

    message.append(text, closeButton);
    document.body.append(message);

    closeButton.addEventListener("click", () => {
      message.className = "custom-message custom-message-disabled";
      setTimeout(() => {
        message.remove();
      }, 2000);
    });
    setTimeout(() => {
      message.className = "custom-message custom-message-disabled";
      setTimeout(() => {
        message.remove();
      }, 2000);
    }, 5000);
  }
}
