import { Module } from "../core/module";

export class ExchangeRate extends Module {
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
    if (document.querySelector('.container-rate')) {
      document.querySelector('.container-rate').remove();
  }
    const createBlock = (usd, eur, difUSD, difEUR) => {
      const createDiv = document.createElement('div');
      const createDiv1 = document.createElement('div');
      const createDiv2 = document.createElement('div');
      const createDiv3 = document.createElement('div');
      const createDiv4 = document.createElement('div');
      const createDivDifUSD = document.createElement('div');
      const createDivDifEUR = document.createElement('div');
  
      const createH3 = document.createElement('h3');
  
      createDiv.className = 'container-rate';
      createDiv1.className = 'Block';
      createDiv2.className = 'Block';
      createDiv3.className = 'Block3';
      createDiv4.className = 'Block4';
      createDivDifUSD.className = 'Block';
      createDivDifEUR.className = 'Block';
  
      createH3.textContent = 'Курс валют';
      createDiv1.textContent = 'USD';
      createDiv2.textContent = 'EUR';
      createDiv3.textContent = usd.toFixed(2);
      createDiv4.textContent = eur.toFixed(2);
      createDivDifUSD.textContent = `${difUSD}%`;
      createDivDifEUR.textContent = `${difEUR}%`;
  
  
      createDiv.append(createH3, createDiv1, createDiv2, createDiv3, createDiv4, createDivDifUSD, createDivDifEUR);
      document.body.append(createDiv);

      createDiv.addEventListener('click', () => {
        createDiv.remove();
    });

  }
  

  const conversion = async () => {
      const URL = 'https://www.cbr-xml-daily.ru/daily_json.js';
      try {
          const response = await fetch(URL);
  
          if (!response.ok) {
              throw new Error('Ошибка запроса валюты');
          }
          const result =  await response.json();
  
          const USD = result.Valute.USD.Value;
          const USDPrevious = result.Valute.USD.Previous;
          let differenceParcentUSD = ((( USD - USDPrevious)/((USD + USDPrevious)/2))* 100).toFixed(2);
          const EUR = result.Valute.EUR.Value;
          const EURPrevious = result.Valute.EUR.Previous;
          let differenceParcentEUR = ((( EUR - EURPrevious)/((EUR + EURPrevious)/2))* 100).toFixed(2);
    
          createBlock(USD, EUR, differenceParcentUSD, differenceParcentEUR);
  
          const getUSD =  document.querySelector('.Block3');
          const getEUR = document.querySelector('.Block4');

  
          if (USD > USDPrevious) {
              getUSD.classList.add('ColorRed');
          }
          else if (USD < USDPrevious) {
              getUSD.classList.add('ColorGreen');
          }

          if (EUR > EURPrevious) {
              getEUR.classList.add('ColorRed');
          }
          else if (EUR < EURPrevious) {
              getEUR.classList.add('ColorGreen');
          }
      } catch(error) {
          console.log('error', error);
      }
  
  }
  
  conversion();

  setInterval(() => {
  const getDiv = document.querySelector('.container-rate');
  getDiv.remove();
  conversion();
  }, 14400000);

  }
}
