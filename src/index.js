import './css/style.css';
import { Weather } from './components/request';
//import { UI } from "./components/ui";


const searchbtn = document.querySelector('#change-btn');

const weather = new Weather('kigali', 'rwanda');

//const ui = new UI();

const getReport = () => {
    //console.log('hello');
    weather.getWeather()
        .then(result => {
            document.querySelector('#location').textContent = `${result[1].country}`;
            document.querySelector('#description').textContent = `The weather will be ${result[0][0].description}`;
            document.querySelector('#temp').textContent = `Temperature is ${result[2].temp}`;

            console.log(result);
            //ui.weatherDetails(result);
        })
        .catch(err => console.log(err));
};




document.addEventListener('DOMContentLoaded', getReport);
searchbtn.addEventListener('click', () => {
    const cityInput = document.querySelector('#city').value;
    const countryInput = document.querySelector('#country').value;

    weather.changeLocation();
    getReport();

    $('#locmodal').modal('hide');
});



