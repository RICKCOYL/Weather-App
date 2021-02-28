/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/storage.js":
/*!***********************************!*\
  !*** ./src/components/storage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\nclass Storage {\n  constructor() {\n    this.city;\n  }\n\n  getLocationData() {\n    if (localStorage.getItem('city') === null) {\n      this.city = this.defaultCity;\n    } else {\n      this.city = localStorage.getItem('city');\n    }\n\n    return {\n      city: this.city,\n    };\n  }\n\n  setLocationData(city) {\n    localStorage.setItem('city', city);\n  }\n}\n\n//# sourceURL=webpack://Weather-App/./src/components/storage.js?");

/***/ }),

/***/ "./src/components/ui.js":
/*!******************************!*\
  !*** ./src/components/ui.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass UI {\n  constructor() {\n    this.location = document.getElementById('w-location');\n    this.desc = document.getElementById('w-desc');\n    this.string = document.getElementById('w-string');\n    this.details = document.getElementById('w-details');\n    this.icon = document.getElementById('w-icon');\n    this.humidity = document.getElementById('w-humidity');\n    this.feelsLike = document.getElementById('w-feels-like');\n    this.dewpoint = document.getElementById('w-dewpoint');\n    this.wind = document.getElementById('w-wind');\n  }\n\n  paint(weather) {\n    this.location.textContent = `${weather.sys.country}, ${weather.name}`;\n    this.desc.textContent = weather.weather[0].description;\n    this.string = document.querySelector('#temp-btn').addEventListener('click', () => {\n      const x = document.getElementById('w-string');\n      if (x.innerHTML === `${weather.main.temp}°C`) {\n        x.innerText = weather.main.temp * 1.8 + 32;\n      } else {\n        x.innerHTML = `${weather.main.temp}°C`;\n      }\n    });\n    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);\n    this.humidity.textContent = `Humidity: ${weather.main.humidity}`;\n    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}`;\n    this.dewpoint.textContent = `Visibility: ${weather.visibility}`;\n    this.wind.textContent = `Wind speed: ${weather.wind.speed}`;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);\n\n//# sourceURL=webpack://Weather-App/./src/components/ui.js?");

/***/ }),

/***/ "./src/components/weather.js":
/*!***********************************!*\
  !*** ./src/components/weather.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Weather)\n/* harmony export */ });\nclass Weather {\n  constructor(city) {\n    this.apiKey = 'c5b93e5f844aed131edab3bb66a3d62d';\n    this.city = city;\n  }\n\n  async getWeather() {\n    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}id=524901&appid=c5b93e5f844aed131edab3bb66a3d62d&units=metric`);\n\n    const responseData = await response.json();\n\n    return responseData;\n  }\n\n\n  changeLocation(city) {\n    this.city = city;\n  }\n}\n\n//# sourceURL=webpack://Weather-App/./src/components/weather.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ui */ \"./src/components/ui.js\");\n/* harmony import */ var _components_weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/weather */ \"./src/components/weather.js\");\n/* harmony import */ var _components_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/storage */ \"./src/components/storage.js\");\n\n\n\n\nconst storage = new _components_storage__WEBPACK_IMPORTED_MODULE_2__.default();\nconst weatherLocation = storage.getLocationData();\nconst weather = new _components_weather__WEBPACK_IMPORTED_MODULE_1__.default(weatherLocation.city);\n\nconst ui = new _components_ui__WEBPACK_IMPORTED_MODULE_0__.default();\n\n\nfunction getWeather() {\n  weather.getWeather()\n    .then(results => {\n      ui.paint(results);\n    })\n    .catch(err => err);\n}\n\ndocument.addEventListener('DOMContentLoaded', getWeather);\n\ndocument.getElementById('w-change-btn').addEventListener('click', () => {\n  const city = document.getElementById('city').value;\n\n  weather.changeLocation(city);\n\n  storage.setLocationData(city);\n\n  getWeather();\n\n  $('#locModal').modal('hide');\n});\n\n\n//# sourceURL=webpack://Weather-App/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;