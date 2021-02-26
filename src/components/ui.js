
import Weather from './request';
import { cToF } from './convert';

const searchbtn = document.querySelector('#change-btn');


const weather = new Weather(document.querySelector('#city').value);

const populateUi = () => {
  const getReport = () => {
    weather.getWeather()
      .then(result => {
        document.querySelector('#location').textContent = `${result[1].country}, ${result[3].name}`;
        document.querySelector('#description').textContent = `The weather will be ${result[0][0].description}`;
        // document.querySelector('#temp').textContent = `Temperature is ${result[2].temp}`;
        // console.log('hello');
        document.getElementById('button').addEventListener('click', () => {
          const x = document.getElementById('temps');
          // console.log('hello');
          if (x.innerHTML === `${result[2].temp}C°`) {
            x.innerHTML = 'Swapped text!';
          } else {
            x.innerHTML = `${result[2].temp}C°`;
            console.log(x);
          }
        });
        document.querySelector('#icon').setAttribute('src', `http://openweathermap.org/img/wn/${result[3].weather[0].icon}@2x.png`);
      })
      .catch(() => {
        const errorMessage = document.querySelector('#error');
        errorMessage.setAttribute('class', 'alert alert-warning');
        errorMessage.setAttribute('role', 'alert');
        errorMessage.textContent = 'PLEASE SEARCH FOR A VALID CITY';
      });
  };


  document.addEventListener('DOMContentLoaded', getReport);
  searchbtn.addEventListener('click', () => {
    const cityInput = document.querySelector('#city').value;


    weather.changeLocation(cityInput);
    getReport();

    $('#locmodal').modal('hide');
  });
};

export default populateUi;
