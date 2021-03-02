class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = `${weather.sys.country}, ${weather.name}`;
    this.desc.textContent = weather.weather[0].description;
    this.string = document.querySelector('#temp-btn').addEventListener('click', () => {
      const x = document.getElementById('w-string');
      if (x.innerHTML === `${weather.main.temp}°C`) {
        x.innerText = `${weather.main.temp * 1.8 + 32}°F`;
      } else {
        x.innerHTML = `${weather.main.temp}°C`;
      }
    });
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    this.humidity.textContent = `Humidity: ${weather.main.humidity}`;
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}`;
    this.dewpoint.textContent = `Visibility: ${weather.visibility}`;
    this.wind.textContent = `Wind speed: ${weather.wind.speed}`;
  }
}

export default UI;