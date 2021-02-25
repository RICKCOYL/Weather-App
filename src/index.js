import './css/style.css';
import { Weather } from './components/request';
//import { UI } from "./components/ui";

const cityInput = document.querySelector('#city');
const countryInput = document.querySelector('#country');
const searchbtn = document.querySelector('#change-btn');

const weather = new Weather('kigali', 'rwanda');

//const ui = new UI();

const getReport = () => {
    //console.log('hello');
    weather.getWeather()
        .then(result => {
            document.querySelector('#location').textContent = `${result[1].country}`;
            document.querySelector('#description').textContent = `The weather wil be ${result[0][0].description}`;
            document.querySelector('#icon').textContent = `${result[0][0].icon}`;
            document.querySelector('#temp').textContent = `Temperature ${result[2].temp}`;

            console.log(result);
            //ui.weatherDetails(result);
        })
        .catch(err => console.log(err));
};




document.addEventListener('DOMContentLoaded', getReport);



