import { Weather } from './request';

const weather = new Weather('xxxx', 'sfcsdfsdf');


weather.getWeather()
    .then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));