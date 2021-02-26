class UI {
    constructor() {
        this.location = document.querySelector('#location');
        this.desc = document.querySelector('#description');
        this.image = document.querySelector('#icon');
    }

    paint(weather) {
        this.location.textContent = weather[1].country;
    }
}

export { UI };