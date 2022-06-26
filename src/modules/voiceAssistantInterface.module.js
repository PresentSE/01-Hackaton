import { Module } from "../core/module";
import {ShapeModule} from "@/modules/shape.module";
import {Sound} from "@/modules/sound.module";
import {MessageModule} from "@/modules/message.module";
import {ClicksModule} from "@/modules/clicks.module";
import {BackgroundModule} from "@/modules/background.module";
import {TimerModule} from "@/modules/timer.module";
import {answersArray, random} from "@/utils";
import {audioGreeting} from "@/utils";
import {WeatherModule} from "@/modules/weather.module";

export class VoiceAssistant extends Module {
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
        const assistantGreeting = document.createElement("audio");
        assistantGreeting.src = audioGreeting;
        document.body.append(assistantGreeting);

        assistantGreeting.currentTime = 0;
        assistantGreeting.play();

        setTimeout(() => {
            assistantGreeting.remove();
        }, 6000);

        const container = document.createElement('div');
        container.className = 'container';
        container.insertAdjacentHTML('afterbegin', `
<div class="upper-container">
<div class="speech-close-button"></div>
        <div class="text-block">
            <h3 class="speech-text">
              Нажмите и говорите:
            </h3>
            <p class="tip">Убедитесь что правильно произнесли команду</p>
        </div>
        <div class="audio-wrapper">
          <button class="speech-button">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="speech-icon" viewBox="0 0 32 32">
<path d="M15 22c2.761 0 5-2.239 5-5v-12c0-2.761-2.239-5-5-5s-5 2.239-5 5v12c0 2.761 2.239 5 5 5zM22 14v3c0 3.866-3.134 7-7 7s-7-3.134-7-7v-3h-2v3c0 4.632 3.5 8.447 8 8.944v4.056h-4v2h10v-2h-4v-4.056c4.5-0.497 8-4.312 8-8.944v-3h-2z"></path>
</svg>

          </button>
          <div class="waves-wrapper">
            <div class="waves-mark"></div>
            <div class="first first-1"></div>
            <div class="first first-2"></div>
            <div class="first first-3"></div>
            <div class="first first-4"></div>
            <div class="first first-5"></div>
            <div class="first first-6"></div>
            <div class="first first-7"></div>
            <div class="first first-8"></div>
            <div class="first first-9"></div>
            <div class="first first-10"></div>
          </div>
        </div>
      </div>

      <div class="info-container">
      <h4 class="info-title">Что я умею:</h4>
      <ul class="command-list">
        <li class="command-list-item"><span>"Создай фигуру"</span><p>Создам фигуру в случайном месте экрана</p></li>
        <li class="command-list-item"><span>"Включи музыку"</span><p>Воспроизведу случайный звук</p></li>
        <li class="command-list-item"><span>"Создай сообщение"</span><p>Выведу на экран известную цитату</p></li>
        <li class="command-list-item"><span>"Посчитай клики"</span><p>Засеку 3 секунды и посчитаю ваши клики за это время</p></li>
        <li class="command-list-item"><span>"Измени фон"</span><p>Перекрашу фон в случайный цвет</p></li>
        <li class="command-list-item"><span>"Поставь таймер"</span><p>Поставлю таймер на установленное вами время</p></li>
        <li class="command-list-item"><span>"Покажи погоду"</span><p>Выведу на экран виджет погоды в установленном вами городе</p></li>

      </ul>
    </div>
`);
        document.body.append(container);

        const closeButton = document.querySelector('.speech-close-button');
        const button = document.querySelector('.speech-button');
        const waves = document.querySelectorAll('.first');
        const waveElement = document.querySelector('.first');
        const wavesMark = document.querySelector('.waves-mark');

        closeButton.addEventListener('click', () => {
            container.remove();
            if (SpeechRecognition) {
                SpeechRecognition = null;
            }
        })

        button.addEventListener('click', () => {
            wavesMark.className = 'waves-mark';

            if (!waveElement.classList.contains('active')) {
                wavesMark.classList.add('waves-mark-correct');
                waves.forEach((wave) => {
                    wave.classList.add('active');
                })
            } else if (waveElement.classList.contains('active')) {
                wavesMark.classList.add('waves-mark-wrong');
                waves.forEach((wave) => {
                    wave.classList.remove('active');
                })
            }
        })

        const createAnswer = () => {
            const audio = document.createElement("audio");
            audio.src = answersArray[random(0, 9)];
            document.body.append(audio);

            audio.currentTime = 0;
            audio.play();

            setTimeout(() => {
                audio.remove();
            }, 6000);
        }

        let SpeechRecognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
        SpeechRecognition.lang = "ru-RU";

        button.addEventListener('click', () => {

            SpeechRecognition.onresult = function(event){
                const speech = event.results[0][0].transcript;

                setTimeout(() => {
                    wavesMark.className = 'waves-mark';
                }, 2000);

                switch (speech) {
                    case 'создай фигуру' || 'Создай фигуру':
                        wavesMark.classList.add('waves-mark-correct');
                        const shapeModule = new ShapeModule("shape", "Создать фигуру");
                        shapeModule.trigger();
                        createAnswer();
                        break;
                    case 'включи музыку' && 'Включи музыку':
                        wavesMark.classList.add('waves-mark-correct');
                        const soundModule = new Sound("sound", "Случайный звук");
                        soundModule.trigger();
                        createAnswer();
                        break;
                    case 'создай сообщение' || 'Создай сообщение':
                        wavesMark.classList.add('waves-mark-correct');
                        const messageModule = new MessageModule(
                            "message",
                            "Создать сообщение"
                        );
                        messageModule.trigger();
                        createAnswer();
                        break;
                    case 'посчитай клики' && 'Посчитай клики':
                        wavesMark.classList.add('waves-mark-correct');
                        const clicksModule = new ClicksModule(
                            "click",
                            "Расчет кликов за 3 сек"
                        );
                        clicksModule.trigger();
                        createAnswer();
                        break;
                    case 'измени фон' && 'Измени фон':
                        wavesMark.classList.add('waves-mark-correct');
                        const backgroundModule = new BackgroundModule(
                            "background",
                            "Изменить фон"
                        )
                        backgroundModule.trigger();
                        createAnswer();
                        break;
                    case 'поставь таймер' && 'Поставь таймер':
                        wavesMark.classList.add('waves-mark-correct');
                        const timerModule = new TimerModule("timer", "Таймер отсчёта");
                        timerModule.trigger();
                        createAnswer();
                        break;
                    case 'покажи погоду' && 'Покажи погоду':
                        wavesMark.classList.add('waves-mark-correct');
                        const weatherModule = new WeatherModule("weather", "Узнать погоду");
                        weatherModule.trigger();
                        createAnswer();
                        break;
                    default:
                        wavesMark.classList.add('waves-mark-wrong');
                        break;
                }
            };
            SpeechRecognition.onend = function(){
                SpeechRecognition.start();
            };
            SpeechRecognition.start();


        })
    }
}
