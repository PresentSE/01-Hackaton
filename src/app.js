import "./styles.css";
import { ContextMenu } from "./menu";
import {cursor} from "@/cursor";
import {ShapeModule} from "@/modules/shape.module";
import {Sound} from "@/modules/sound.module";
import {MessageModule} from "@/modules/message.module";
import {ClicksModule} from "@/modules/clicks.module";
import {BackgroundModule} from "@/modules/background.module";
import {TimerModule} from "@/modules/timer.module";
import {random, soundsArray} from "@/utils";
import {answersArray} from "@/utils";


new ContextMenu(".menu").add();

// Cursor

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
});



// Speech Recognition

const createAnswer = () => {
    const audio = document.createElement("audio");
    audio.src = answersArray[random(0, 9)];
    document.body.append(audio);

    audio.currentTime = 0;
    audio.play();

    setTimeout(() => {
        audio.remove();
    }, 3000);
}

const SpeechRecognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
SpeechRecognition.lang = "ru-RU";
SpeechRecognition.onresult = function(event){
    const speech = event.results[0][0].transcript;

    console.log(speech)

    switch (speech) {
        case false:
            console.log('Повторите команду');
            break;
        case 'создай фигуру' || 'Создай фигуру':
            const shapeModule = new ShapeModule("shape", "Создать фигуру");
            shapeModule.trigger();
            createAnswer();
            break;
        case 'включи музыку' && 'Включи музыку':
            const soundModule = new Sound("sound", "Случайный звук");
            soundModule.trigger();
            createAnswer();
            break;
        case 'создай сообщение' || 'Создай сообщение':
            const messageModule = new MessageModule(
                "message",
                "Создать сообщение"
            );
            messageModule.trigger();
            createAnswer();
            break;
        case 'посчитай клики' && 'Посчитай клики':
            const clicksModule = new ClicksModule(
                "click",
                "Расчет кликов за 3 сек"
            );
            clicksModule.trigger();
            createAnswer();
            break;
        case 'измени фон' && 'Измени фон':
            const backgroundModule = new BackgroundModule(
                "background",
                "Изменить фон"
            )
            backgroundModule.trigger();
            createAnswer();
            break;
        case 'поставь таймер' && 'Поставь таймер':
            const timerModule = new TimerModule("timer", "Таймер отсчёта");
            timerModule.trigger();
            createAnswer();
            break;
    }
};
SpeechRecognition.onend = function(){
    SpeechRecognition.start();
};
SpeechRecognition.start();