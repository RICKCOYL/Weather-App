export default class Weather {
  constructor(city) {
    this.apiKey = 'c5b93e5f844aed131edab3bb66a3d62d';
    this.city = city;
  }

  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}id=524901&appid=c5b93e5f844aed131edab3bb66a3d62d&units=metric`);

    const responseData = await response.json();

    return responseData;
  }


  changeLocation(city) {
    this.city = city;
  }
}