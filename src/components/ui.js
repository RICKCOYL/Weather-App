
import { Weather } from './request';
const searchbtn = document.querySelector('#change-btn');

const weather = new Weather('kigali', 'rwanda');

const populateUi = () => {


    //const ui = new UI();

    const getReport = () => {
        weather.getWeather()
            .then(result => {
                document.querySelector('#location').textContent = `${result[1].country}`;
                document.querySelector('#description').textContent = `The weather will be ${result[0][0].description}`;
                document.querySelector('#temp').textContent = `Temperature is ${result[2].temp}`;
            })
            .catch(err => {
                const errorMessage = document.querySelector('#error');
                errorMessage.setAttribute('class', 'alert alert-warning');
                errorMessage.setAttribute('role', 'alert');
                errorMessage.textContent = 'PLEASE SEARCH FOR A VALID CITY AND COUNTRY';
                $("#error").fadeTo(2000, 500).slideUp(500, function () {
                    $("#error").slideUp(500);
                });
            });
    };




    document.addEventListener('DOMContentLoaded', getReport);
    searchbtn.addEventListener('click', () => {
        const cityInput = document.querySelector('#city').value;
        const countryInput = document.querySelector('#country').value;

        weather.changeLocation(cityInput, countryInput);
        getReport();

        $('#locmodal').modal('hide');
    });
};

export default populateUi;
