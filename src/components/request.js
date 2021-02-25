export class Weather {
    constructor(city, country) {
        this.apiKey = '1a8dd2ac8b70847191851bae10b18005';
        this.city = city;
        this.country = country;
    }

    async getWeather() {
        const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}id=524901&appid=${this.apiKey}`);

        const responseData = await res.json();

        return [responseData.weather, responseData.sys];
    }

    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }

}

