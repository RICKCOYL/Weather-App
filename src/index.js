import UI from './components/ui.mjs';
import Weather from './components/weather.mjs';
import Storage from './components/storage.mjs';
import './css/style.css';

const storage = new Storage(document.querySelector('#w-change-btn').value);
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city);

const ui = new UI();


function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => err);
}

document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click', () => {
  const city = document.getElementById('city').value;

  weather.changeLocation(city);

  storage.setLocationData(city);

  getWeather();

  $('#locModal').modal('hide');
});
