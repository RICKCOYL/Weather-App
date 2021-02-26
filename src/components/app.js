function populateDom() {
    const city = document.querySelector('#city').value;
    const apiKey = 'c5b93e5f844aed131edab3bb66a3d62d';
    const wLink = (`http://api.openweathermap.org/data/2.5/weather?id=524901&appid=${apiKey}`);

    fetch(wLink).then(res => {
        return res.json();
    }).then(function (res) {
        console.log(res.weather[0]);
        document.querySelector('#location').textContent = `${res.name}, ${res.sys.country}`;
        document.querySelector('#description').textContent = `${res.weather[0].description}`;
        document.querySelector('#icon').setAttribute('src', `http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`);
    }).catch(() => {
        const errorMessage = document.querySelector('#error');
        errorMessage.setAttribute('class', 'alert alert-warning');
        errorMessage.setAttribute('role', 'alert');
        errorMessage.textContent = 'PLEASE SEARCH FOR A VALID CITY';
    });

};


export default populateDom;