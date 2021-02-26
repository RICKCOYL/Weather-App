// class Weather {
//  constructor(city) {
//    this.apiKey = '1a8dd2ac8b70847191851bae10b18005';
//    this.city = city;
//  }

//  async getWeather() {
//    const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}id=524901&appid=${this.apiKey}&units=metric`);

//    const responseData = await res.json();

//    return [responseData.weather, responseData.sys, responseData.main, responseData];
//  }

//  changeLocation(city) {
//    this.city = city;
//  }
// }
// const weather = new Weather(document.querySelector('#city').value);
// const searchbtn = document.querySelector('#change-btn');
// const getReport = () => {
//  weather.getWeather()
//    .then(result => {
//      document.querySelector('#location').textContent = `${result[1].country}, ${result[3].name}`;
//      document.querySelector('#description').textContent = `The weather will be ${result[0][0].description}`;
//      document.querySelector('#temp').textContent = `Temperature is ${result[2].temp}`;
//      document.querySelector('#icon').setAttribute('src', `http://openweathermap.org/img/wn/${result[3].weather[0].icon}@2x.png`);
//    })
//    .catch(() => {
//      const errorMessage = document.querySelector('#error');
//      errorMessage.setAttribute('class', 'alert alert-warning');
//      errorMessage.setAttribute('role', 'alert');
//      errorMessage.textContent = 'PLEASE SEARCH FOR A VALID CITY';
//    });
// };


// document.addEventListener('DOMContentLoaded', getReport);
// searchbtn.addEventListener('click', () => {
//  const cityInput = document.querySelector('#city').value;


//  weather.changeLocation(cityInput);
//  getReport();

//  $('#locmodal').modal('hide');
// });

// export default getReport;