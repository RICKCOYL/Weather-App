import UI from './components/ui';
import Weather from './components/weather';
import Storage from './components/storage';
import './css/style.css';

const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city);

const ui = new UI();


const getWeather = () => {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(() => {
      const error = document.querySelector('#error');
      error.setAttribute('class', 'alert alert-danger');
      error.setAttribute('role', 'alert');
      error.textContent = 'SEARCH FOR A VALID CITY OR COUNTRY';
    });
};

document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click', () => {
  const city = document.getElementById('city').value;

  weather.changeLocation(city);

  storage.setLocationData(city);

  getWeather();


  $('#locModal').modal('hide');
});
