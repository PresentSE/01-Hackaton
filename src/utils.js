import answer1 from "./assets/audio/answer-1.mp3";
import answer2 from "./assets/audio/answer-2.mp3";
import answer3 from "./assets/audio/answer-3.mp3";
import answer4 from "./assets/audio/answer-4.mp3";
import answer5 from "./assets/audio/answer-5.mp3";
import answer6 from "./assets/audio/answer-6.mp3";
import answer7 from "./assets/audio/answer-7.mp3";
import answer8 from "./assets/audio/answer-8.mp3";
import answer9 from "./assets/audio/answer-9.mp3";
import answer10 from "./assets/audio/answer-10.mp3";

export const answersArray = [
  answer1,
  answer2,
  answer3,
  answer4,
  answer5,
  answer6,
  answer7,
  answer8,
  answer9,
  answer10,
];

import audio1 from "./assets/audio/sound1.mp3";
import audio2 from "./assets/audio/sound2.mp3";
import audio3 from "./assets/audio/sound3.mp3";
import audio4 from "./assets/audio/sound4.mp3";
import audio5 from "./assets/audio/sound5.mp3";
import audio6 from "./assets/audio/sound6.mp3";
import audio7 from "./assets/audio/sound7.mp3";
import audio8 from "./assets/audio/sound8.mp3";
import audio9 from "./assets/audio/sound9.mp3";
import audio10 from "./assets/audio/sound10.mp3";
import audio11 from "./assets/audio/sound11.mp3";
import audio12 from "./assets/audio/sound12.mp3";
import audio13 from "./assets/audio/sound13.mp3";
import audio14 from "./assets/audio/sound14.mp3";
import audio15 from "./assets/audio/sound15.mp3";
import audio16 from "./assets/audio/sound16.mp3";
import audio17 from "./assets/audio/sound17.mp3";
import audio18 from "./assets/audio/sound18.mp3";
import audio19 from "./assets/audio/sound19.mp3";
import audio20 from "./assets/audio/sound20.mp3";
import audio21 from "./assets/audio/sound21.mp3";
import audio22 from "./assets/audio/sound22.mp3";
import audio23 from "./assets/audio/sound23.mp3";
import audio24 from "./assets/audio/sound24.mp3";
import audio25 from "./assets/audio/sound25.mp3";
import audio26 from "./assets/audio/sound26.mp3";

export const soundsArray = [
  audio1,
  audio2,
  audio3,
  audio4,
  audio5,
  audio6,
  audio7,
  audio8,
  audio9,
  audio10,
  audio11,
  audio12,
  audio13,
  audio14,
  audio15,
  audio16,
  audio17,
  audio18,
  audio19,
  audio20,
  audio21,
  audio22,
  audio23,
  audio24,
  audio25,
  audio26,
];

export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
