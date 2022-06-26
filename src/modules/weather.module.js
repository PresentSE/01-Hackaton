import { Module } from "../core/module";

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
    const addDiv = (city, temp, description, speedWind, icon) => {

        const createDiv = document.createElement('div');
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
    
        console.log(createIcon)
    
        createDiv.append(createH3,createIcon, createP1, createP2, createP3);
        document.body.append(createDiv);
    }
    function getWeather(city) {
        const key = 'f0c9687935c00eb5e36c5323c555bec9';
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${key}`;
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Ошибка запроса')
                }
                console.log(response);
                return response.json();
            })
            .then((data) => {
                console.log(data);
                const city = data.name;
                console.log(city);
    
                const temp = Math.round(data.main.temp);
                console.log('Температура', temp);
    
                const minTemp = Math.round(data.main.temp_min);
                console.log('Минимальная температура', minTemp);
    
                const maxTemp = Math.round(data.main.temp_max);
                console.log('Максимальная температура', maxTemp);
    
                const description = data.weather[0].description;
                console.log(description);
    
                const speedWind = (data.wind.speed / 3.6).toFixed(2);
                console.log(`Скорость ветра, ${speedWind} м/c`);
    
                const icon = data.weather[0].icon;
                console.log(icon);
    
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
