import './css/style.css';


import { Weather } from './components/request';

const weather = new Weather('kampala');


weather.getWeather()
    .then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));
