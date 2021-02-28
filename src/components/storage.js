/* eslint-disable no-unused-expressions */
/* eslint-disable class-methods-use-this */
export default class Storage {
  constructor() {
    this.city;
  }

  getLocationData() {
    if (localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }

    return {
      city: this.city,
    };
  }

  setLocationData(city) {
    localStorage.setItem('city', city);
  }
}