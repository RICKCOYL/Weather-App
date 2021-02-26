function populateDom() {
    const city = document.querySelector('#city').value;
    const apiKey = 'c5b93e5f844aed131edab3bb66a3d62d';
    const wLink = (`http://api.openweathermap.org/data/2.5/weather?id=524901&appid=${apiKey}`);
    //console.log(responseData.weather);
    fetch(wLink).then(res => {
        return res.json();
    }).then(function (res) {
        console.log(res);
    });

};


export default populateDom;