export default class Weather {
  constructor(city) {
    this.apiKey = 'c5b93e5f844aed131edab3bb66a3d62d';
    this.city = city;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?id=524901&appid=c5b93e5f844aed131edab3bb66a3d62d&units=metric');

    const responseData = await response.json();
    // console.log(responseData);
    return responseData;
  }

  // Change weather location
  changeLocation(city) {
    this.city = city;
  }
}