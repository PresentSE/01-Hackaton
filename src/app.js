import "./styles.css";
import { ContextMenu } from "./menu";
import {ShapeModule} from "./modules/shape.module";
import {Sound} from "./modules/sound.module";
import {MessageModule} from "./modules/message.module";
import {ClicksModule} from "./modules/clicks.module";
import {BackgroundModule} from "./modules/background.module";
import {TimerModule} from "./modules/timer.module";
import {WeatherModule} from "./modules/weather.module";
import {VoiceAssistant} from "./modules/voiceAssistantInterface.module";
import {ExchangeRate} from "./modules/exchange_rate.module";


const contextMenu = new ContextMenu(".menu");
contextMenu.add(new VoiceAssistant("voice", "Голосовой ассистент"));
contextMenu.add(new ShapeModule("shape", "Создать фигуру"));
contextMenu.add(new Sound("sound", "Случайный звук"));
contextMenu.add(new MessageModule("message", "Создать сообщение"))
contextMenu.add(new ClicksModule("click", "Расчет кликов за 3 сек"));
contextMenu.add(new BackgroundModule("background", "Изменить фон"));
contextMenu.add(new TimerModule("timer", "Таймер отсчёта"));
contextMenu.add(new WeatherModule("weather", "Узнать погоду"));
contextMenu.add(new ExchangeRate("exchangeRate", "Курсы валют"));


// Cursor
const cursor = document.querySelector(".cursor");
document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
});
