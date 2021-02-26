export default class Weather {
  constructor(city) {
    this.apiKey = '1a8dd2ac8b70847191851bae10b18005';
    this.city = city;
  }

  async getWeather() {
    const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}id=524901&appid=${this.apiKey}`);

    const responseData = await res.json();
    //console.log(responseData);
    return [responseData.weather, responseData.sys, responseData.main, responseData];
  }

  changeLocation(city) {
    this.city = city;
  }
}
