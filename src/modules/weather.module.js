import { Module } from "../core/module";
import {getRandomColor, random} from "@/utils";

export class WeatherModule extends Module {
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
    if (document.querySelector('.weather')) {
        document.querySelector('.weather').remove();
    }

    const createDiv = document.createElement('div');
    const closeButton = document.createElement('div');

      closeButton.className = 'speech-close-button';

    const addDiv = (city, temp, description, speedWind, icon) => {

        createDiv.className = ('weather');

        const createH3 = document.createElement('h3');
        const createIcon = document.createElement('img');
        const createP1 = document.createElement('p');
        const createP2 = document.createElement('p');
        const createP3 = document.createElement('p');


    
        createH3.textContent = `город ${city}`;
        createP1.textContent = `температура ${temp} ℃`;
        createP2.textContent = description;
        createP3.textContent = `скорость ветра ${speedWind} м/c`;
        createIcon.src=`https://openweathermap.org/img/wn/${icon}@2x.png`;
    
        createDiv.append(createH3,createIcon, createP1, createP2, createP3, closeButton);
        document.body.append(createDiv);
    }

  closeButton.addEventListener('click', () => {
      createDiv.remove();
  })

    function getWeather(city) {
        const key = 'f0c9687935c00eb5e36c5323c555bec9';
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${key}`;
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Ошибка запроса')
                }
                return response.json();
            })
            .then((data) => {
                const city = data.name;
    
                const temp = Math.round(data.main.temp);
    
                const minTemp = Math.round(data.main.temp_min);
    
                const maxTemp = Math.round(data.main.temp_max);
    
                const description = data.weather[0].description;
    
                const speedWind = (data.wind.speed / 3.6).toFixed(2);
    
                const icon = data.weather[0].icon;
    
                addDiv(city, temp,description, speedWind, icon);
            })
            .catch((error) => {
                console.log('error', error);
            })
    }
    const question = prompt('Введите город','');
    getWeather(question.trim())
    
  }
}
