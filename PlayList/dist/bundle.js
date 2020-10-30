/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/media.js":
/*!*********************************!*\
  !*** ./src/components/ShopProduct.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Media(title, duration) {
  this.title = title;
  this.duration = duration;
  this.isPlaying = false;
}

Media.prototype.play = function () {
  this.isPlaying = true;
};

Media.prototype.stop = function () {
  this.isPlaying = false;
};

/* harmony default export */ __webpack_exports__["default"] = (Media);

/***/ }),

/***/ "./src/components/movie.js":
/*!*********************************!*\
  !*** ./src/components/CDProduct.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media */ "./src/components/media.js");


function Movie(title, year, duration) {
  this.year = year;
  _media__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, title, duration);
}

Movie.prototype = Object.create(_media__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
Movie.prototype.constructor = Movie;

Movie.prototype.toHtml = function () {
  return "<div class=\"row py-3 ".concat(this.isPlaying ? 'current' : '', "\">\n    <div class=\"col-sm-9\">").concat(this.title, " - ").concat(this.year, "</div>\n    <div class=\"col-sm-3\">").concat(this.duration, "</div>\n</div>");
};

/* harmony default export */ __webpack_exports__["default"] = (Movie);

/***/ }),

/***/ "./src/components/playlist.js":
/*!************************************!*\
  !*** ./src/components/playlist.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function PlayList() {
  this.songs = [];
  this.currentIndex = 0;
}

PlayList.prototype.add = function (song) {
  this.songs.push(song);
};

PlayList.prototype.play = function () {
  var currentSong = this.songs[this.currentIndex];
  currentSong.play();
};

PlayList.prototype.stop = function () {
  var currentSong = this.songs[this.currentIndex];
  currentSong.stop();
};

PlayList.prototype.next = function () {
  this.stop();
  this.currentIndex++;

  if (this.currentIndex === this.songs.length) {
    this.currentIndex = 0;
  }

  this.play();
};

PlayList.prototype.render = function (list) {
  list.innerHTML = "";
  return this.songs.forEach(function (song) {
    list.innerHTML += song.toHtml();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PlayList);

/***/ }),

/***/ "./src/components/song.js":
/*!********************************!*\
  !*** ./src/components/BookProduct.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media */ "./src/components/media.js");


function Song(title, artist, duration) {
  this.artist = artist;
  _media__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, title, duration);
}

Song.prototype = Object.create(_media__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
Song.prototype.constructor = Song;

Song.prototype.toHtml = function () {
  return "<div class=\"row py-3 ".concat(this.isPlaying ? 'current' : '', "\">\n    <div class=\"col-sm-9\">").concat(this.title, " - ").concat(this.artist, "</div>\n    <div class=\"col-sm-3\">").concat(this.duration, "</div>\n</div>");
};

/* harmony default export */ __webpack_exports__["default"] = (Song);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_movie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/movie */ "./src/components/movie.js");
/* harmony import */ var _components_song__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/song */ "./src/components/song.js");
/* harmony import */ var _components_playlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/playlist */ "./src/components/playlist.js");



var playList = new _components_playlist__WEBPACK_IMPORTED_MODULE_2__["default"]();
var song1 = new _components_song__WEBPACK_IMPORTED_MODULE_1__["default"]('name 1', 'author 1', '4.50');
var song2 = new _components_song__WEBPACK_IMPORTED_MODULE_1__["default"]('name 2', 'author 3', '3.50');
var song3 = new _components_song__WEBPACK_IMPORTED_MODULE_1__["default"]('name 3', 'author 3', '3.00');
var song4 = new _components_movie__WEBPACK_IMPORTED_MODULE_0__["default"]('movie3', 'artist', '3.00');
playList.add(song1);
playList.add(song2);
playList.add(song3);
playList.add(song4);
var list = document.getElementById('list');
playList.render(list);
var play = document.getElementById('btn-play');
var stop = document.getElementById('btn-stop');
var next = document.getElementById('btn-next');

play.onclick = function () {
  playList.play();
  playList.render(list);
};

stop.onclick = function () {
  playList.stop();
  playList.render(list);
};

next.onclick = function () {
  playList.next();
  playList.render(list);
};

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/index.js ./src/scss/style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! ./src/scss/style.scss */"./src/scss/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWVkaWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW92aWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGxheWxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc29uZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3Mvc3R5bGUuc2NzcyJdLCJuYW1lcyI6WyJNZWRpYSIsInRpdGxlIiwiZHVyYXRpb24iLCJpc1BsYXlpbmciLCJwcm90b3R5cGUiLCJwbGF5Iiwic3RvcCIsIk1vdmllIiwieWVhciIsImNhbGwiLCJPYmplY3QiLCJjcmVhdGUiLCJjb25zdHJ1Y3RvciIsInRvSHRtbCIsIlBsYXlMaXN0Iiwic29uZ3MiLCJjdXJyZW50SW5kZXgiLCJhZGQiLCJzb25nIiwicHVzaCIsImN1cnJlbnRTb25nIiwibmV4dCIsImxlbmd0aCIsInJlbmRlciIsImxpc3QiLCJpbm5lckhUTUwiLCJmb3JFYWNoIiwiU29uZyIsImFydGlzdCIsInBsYXlMaXN0IiwiUGxheWxpc3QiLCJzb25nMSIsInNvbmcyIiwic29uZzMiLCJzb25nNCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvbmNsaWNrIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUEsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCQyxRQUF0QixFQUFnQztBQUMvQixPQUFLRCxLQUFMLEdBQWFBLEtBQWI7QUFDQSxPQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLE9BQUtDLFNBQUwsR0FBaUIsS0FBakI7QUFDQTs7QUFFREgsS0FBSyxDQUFDSSxTQUFOLENBQWdCQyxJQUFoQixHQUF1QixZQUFXO0FBQ2pDLE9BQUtGLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxDQUZEOztBQUdBSCxLQUFLLENBQUNJLFNBQU4sQ0FBZ0JFLElBQWhCLEdBQXVCLFlBQVc7QUFDakMsT0FBS0gsU0FBTCxHQUFpQixLQUFqQjtBQUNBLENBRkQ7O0FBSWVILG9FQUFmLEU7Ozs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBQTs7QUFFQSxTQUFTTyxLQUFULENBQWVOLEtBQWYsRUFBc0JPLElBQXRCLEVBQTRCTixRQUE1QixFQUFzQztBQUNyQyxPQUFLTSxJQUFMLEdBQVlBLElBQVo7QUFDQVIsZ0RBQUssQ0FBQ1MsSUFBTixDQUFXLElBQVgsRUFBaUJSLEtBQWpCLEVBQXdCQyxRQUF4QjtBQUNBOztBQUVESyxLQUFLLENBQUNILFNBQU4sR0FBa0JNLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjWCw4Q0FBSyxDQUFDSSxTQUFwQixDQUFsQjtBQUNBRyxLQUFLLENBQUNILFNBQU4sQ0FBZ0JRLFdBQWhCLEdBQThCTCxLQUE5Qjs7QUFFQUEsS0FBSyxDQUFDSCxTQUFOLENBQWdCUyxNQUFoQixHQUF5QixZQUFVO0FBQy9CLHlDQUErQixLQUFLVixTQUFMLEdBQWlCLFNBQWpCLEdBQTRCLEVBQTNELDhDQUN3QixLQUFLRixLQUQ3QixnQkFDd0MsS0FBS08sSUFEN0MsaURBRXdCLEtBQUtOLFFBRjdCO0FBSUgsQ0FMRDs7QUFPZUssb0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDakJBO0FBQUEsU0FBU08sUUFBVCxHQUFvQjtBQUNuQixPQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUNBLE9BQUtDLFlBQUwsR0FBb0IsQ0FBcEI7QUFDQTs7QUFFREYsUUFBUSxDQUFDVixTQUFULENBQW1CYSxHQUFuQixHQUF5QixVQUFTQyxJQUFULEVBQWU7QUFDdkMsT0FBS0gsS0FBTCxDQUFXSSxJQUFYLENBQWdCRCxJQUFoQjtBQUNBLENBRkQ7O0FBSUFKLFFBQVEsQ0FBQ1YsU0FBVCxDQUFtQkMsSUFBbkIsR0FBMEIsWUFBVztBQUNwQyxNQUFNZSxXQUFXLEdBQUcsS0FBS0wsS0FBTCxDQUFXLEtBQUtDLFlBQWhCLENBQXBCO0FBQ0FJLGFBQVcsQ0FBQ2YsSUFBWjtBQUNBLENBSEQ7O0FBS0FTLFFBQVEsQ0FBQ1YsU0FBVCxDQUFtQkUsSUFBbkIsR0FBMEIsWUFBVztBQUNwQyxNQUFNYyxXQUFXLEdBQUcsS0FBS0wsS0FBTCxDQUFXLEtBQUtDLFlBQWhCLENBQXBCO0FBQ0FJLGFBQVcsQ0FBQ2QsSUFBWjtBQUNBLENBSEQ7O0FBS0FRLFFBQVEsQ0FBQ1YsU0FBVCxDQUFtQmlCLElBQW5CLEdBQTBCLFlBQVc7QUFDcEMsT0FBS2YsSUFBTDtBQUNBLE9BQUtVLFlBQUw7O0FBQ0EsTUFBSSxLQUFLQSxZQUFMLEtBQXNCLEtBQUtELEtBQUwsQ0FBV08sTUFBckMsRUFBNkM7QUFDNUMsU0FBS04sWUFBTCxHQUFvQixDQUFwQjtBQUNBOztBQUNELE9BQUtYLElBQUw7QUFDQSxDQVBEOztBQVNBUyxRQUFRLENBQUNWLFNBQVQsQ0FBbUJtQixNQUFuQixHQUE0QixVQUFTQyxJQUFULEVBQWU7QUFDMUNBLE1BQUksQ0FBQ0MsU0FBTCxHQUFpQixFQUFqQjtBQUNBLFNBQU8sS0FBS1YsS0FBTCxDQUFXVyxPQUFYLENBQW1CLFVBQUFSLElBQUksRUFBSTtBQUNqQ00sUUFBSSxDQUFDQyxTQUFMLElBQWtCUCxJQUFJLENBQUNMLE1BQUwsRUFBbEI7QUFDQSxHQUZNLENBQVA7QUFHQSxDQUxEOztBQU9lQyx1RUFBZixFOzs7Ozs7Ozs7Ozs7QUNuQ0E7QUFBQTtBQUFBOztBQUVBLFNBQVNhLElBQVQsQ0FBYzFCLEtBQWQsRUFBcUIyQixNQUFyQixFQUE2QjFCLFFBQTdCLEVBQXVDO0FBQ3RDLE9BQUswQixNQUFMLEdBQWNBLE1BQWQ7QUFDQTVCLGdEQUFLLENBQUNTLElBQU4sQ0FBVyxJQUFYLEVBQWlCUixLQUFqQixFQUF3QkMsUUFBeEI7QUFDQTs7QUFDRHlCLElBQUksQ0FBQ3ZCLFNBQUwsR0FBaUJNLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjWCw4Q0FBSyxDQUFDSSxTQUFwQixDQUFqQjtBQUNBdUIsSUFBSSxDQUFDdkIsU0FBTCxDQUFlUSxXQUFmLEdBQTZCZSxJQUE3Qjs7QUFFQUEsSUFBSSxDQUFDdkIsU0FBTCxDQUFlUyxNQUFmLEdBQXdCLFlBQVU7QUFDOUIseUNBQStCLEtBQUtWLFNBQUwsR0FBaUIsU0FBakIsR0FBNEIsRUFBM0QsOENBQ3dCLEtBQUtGLEtBRDdCLGdCQUN3QyxLQUFLMkIsTUFEN0MsaURBRXdCLEtBQUsxQixRQUY3QjtBQUlILENBTEQ7O0FBT2V5QixtRUFBZixFOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNRSxRQUFRLEdBQUcsSUFBSUMsNERBQUosRUFBakI7QUFFQSxJQUFNQyxLQUFLLEdBQUcsSUFBSUosd0RBQUosQ0FBUyxRQUFULEVBQW1CLFVBQW5CLEVBQStCLE1BQS9CLENBQWQ7QUFDQSxJQUFNSyxLQUFLLEdBQUcsSUFBSUwsd0RBQUosQ0FBUyxRQUFULEVBQW1CLFVBQW5CLEVBQStCLE1BQS9CLENBQWQ7QUFDQSxJQUFNTSxLQUFLLEdBQUcsSUFBSU4sd0RBQUosQ0FBUyxRQUFULEVBQW1CLFVBQW5CLEVBQStCLE1BQS9CLENBQWQ7QUFDQSxJQUFNTyxLQUFLLEdBQUcsSUFBSTNCLHlEQUFKLENBQVUsUUFBVixFQUFvQixRQUFwQixFQUE4QixNQUE5QixDQUFkO0FBRUFzQixRQUFRLENBQUNaLEdBQVQsQ0FBYWMsS0FBYjtBQUNBRixRQUFRLENBQUNaLEdBQVQsQ0FBYWUsS0FBYjtBQUNBSCxRQUFRLENBQUNaLEdBQVQsQ0FBYWdCLEtBQWI7QUFDQUosUUFBUSxDQUFDWixHQUFULENBQWFpQixLQUFiO0FBRUEsSUFBTVYsSUFBSSxHQUFHVyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBYjtBQUNBUCxRQUFRLENBQUNOLE1BQVQsQ0FBZ0JDLElBQWhCO0FBRUEsSUFBTW5CLElBQUksR0FBRzhCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFiO0FBQ0EsSUFBTTlCLElBQUksR0FBRzZCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFiO0FBQ0EsSUFBTWYsSUFBSSxHQUFHYyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBYjs7QUFDQS9CLElBQUksQ0FBQ2dDLE9BQUwsR0FBZSxZQUFVO0FBQ3JCUixVQUFRLENBQUN4QixJQUFUO0FBQ0F3QixVQUFRLENBQUNOLE1BQVQsQ0FBZ0JDLElBQWhCO0FBQ0gsQ0FIRDs7QUFJQWxCLElBQUksQ0FBQytCLE9BQUwsR0FBZSxZQUFVO0FBQ3JCUixVQUFRLENBQUN2QixJQUFUO0FBQ0F1QixVQUFRLENBQUNOLE1BQVQsQ0FBZ0JDLElBQWhCO0FBQ0gsQ0FIRDs7QUFJQUgsSUFBSSxDQUFDZ0IsT0FBTCxHQUFlLFlBQVU7QUFDckJSLFVBQVEsQ0FBQ1IsSUFBVDtBQUNBUSxVQUFRLENBQUNOLE1BQVQsQ0FBZ0JDLElBQWhCO0FBQ0gsQ0FIRCxDOzs7Ozs7Ozs7OztBQzlCQSx1QyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJmdW5jdGlvbiBNZWRpYSh0aXRsZSwgZHVyYXRpb24pIHtcblx0dGhpcy50aXRsZSA9IHRpdGxlO1xuXHR0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XG5cdHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG59XG5cbk1lZGlhLnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuaXNQbGF5aW5nID0gdHJ1ZTtcbn1cbk1lZGlhLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lZGlhO1xuIiwiaW1wb3J0IE1lZGlhIGZyb20gJy4vbWVkaWEnO1xuXG5mdW5jdGlvbiBNb3ZpZSh0aXRsZSwgeWVhciwgZHVyYXRpb24pIHtcblx0dGhpcy55ZWFyID0geWVhcjtcblx0TWVkaWEuY2FsbCh0aGlzLCB0aXRsZSwgZHVyYXRpb24pO1xufVxuXG5Nb3ZpZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKE1lZGlhLnByb3RvdHlwZSk7XG5Nb3ZpZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBNb3ZpZTtcblxuTW92aWUucHJvdG90eXBlLnRvSHRtbCA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwicm93IHB5LTMgJHt0aGlzLmlzUGxheWluZyA/ICdjdXJyZW50JzogJyd9XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS05XCI+JHt0aGlzLnRpdGxlfSAtICR7dGhpcy55ZWFyfTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tM1wiPiR7dGhpcy5kdXJhdGlvbn08L2Rpdj5cbjwvZGl2PmBcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW92aWU7IiwiZnVuY3Rpb24gUGxheUxpc3QoKSB7XG5cdHRoaXMuc29uZ3MgPSBbXTtcblx0dGhpcy5jdXJyZW50SW5kZXggPSAwO1xufVxuXG5QbGF5TGlzdC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oc29uZykge1xuXHR0aGlzLnNvbmdzLnB1c2goc29uZyk7XG59XG5cblBsYXlMaXN0LnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24oKSB7XG5cdGNvbnN0IGN1cnJlbnRTb25nID0gdGhpcy5zb25nc1t0aGlzLmN1cnJlbnRJbmRleF07XG5cdGN1cnJlbnRTb25nLnBsYXkoKTtcbn1cblxuUGxheUxpc3QucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpIHtcblx0Y29uc3QgY3VycmVudFNvbmcgPSB0aGlzLnNvbmdzW3RoaXMuY3VycmVudEluZGV4XTtcblx0Y3VycmVudFNvbmcuc3RvcCgpO1xufVxuXG5QbGF5TGlzdC5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLnN0b3AoKTtcblx0dGhpcy5jdXJyZW50SW5kZXgrKztcblx0aWYgKHRoaXMuY3VycmVudEluZGV4ID09PSB0aGlzLnNvbmdzLmxlbmd0aCkge1xuXHRcdHRoaXMuY3VycmVudEluZGV4ID0gMDtcblx0fSBcblx0dGhpcy5wbGF5KCk7XG59XG5cblBsYXlMaXN0LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbihsaXN0KSB7XG5cdGxpc3QuaW5uZXJIVE1MID0gXCJcIjtcblx0cmV0dXJuIHRoaXMuc29uZ3MuZm9yRWFjaChzb25nID0+IHtcblx0XHRsaXN0LmlubmVySFRNTCArPSBzb25nLnRvSHRtbCgpO1xuXHR9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheUxpc3Q7IiwiaW1wb3J0IE1lZGlhIGZyb20gJy4vbWVkaWEnO1xuXG5mdW5jdGlvbiBTb25nKHRpdGxlLCBhcnRpc3QsIGR1cmF0aW9uKSB7XG5cdHRoaXMuYXJ0aXN0ID0gYXJ0aXN0O1xuXHRNZWRpYS5jYWxsKHRoaXMsIHRpdGxlLCBkdXJhdGlvbik7XG59XG5Tb25nLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTWVkaWEucHJvdG90eXBlKTtcblNvbmcucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU29uZztcblxuU29uZy5wcm90b3R5cGUudG9IdG1sID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJyb3cgcHktMyAke3RoaXMuaXNQbGF5aW5nID8gJ2N1cnJlbnQnOiAnJ31cIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTlcIj4ke3RoaXMudGl0bGV9IC0gJHt0aGlzLmFydGlzdH08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTNcIj4ke3RoaXMuZHVyYXRpb259PC9kaXY+XG48L2Rpdj5gXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNvbmc7IiwiaW1wb3J0IE1vdmllIGZyb20gXCIuL2NvbXBvbmVudHMvbW92aWVcIjtcbmltcG9ydCBTb25nIGZyb20gJy4vY29tcG9uZW50cy9zb25nJztcbmltcG9ydCBQbGF5bGlzdCBmcm9tICcuL2NvbXBvbmVudHMvcGxheWxpc3QnO1xuXG5jb25zdCBwbGF5TGlzdCA9IG5ldyBQbGF5bGlzdCgpO1xuXG5jb25zdCBzb25nMSA9IG5ldyBTb25nKCduYW1lIDEnLCAnYXV0aG9yIDEnLCAnNC41MCcpO1xuY29uc3Qgc29uZzIgPSBuZXcgU29uZygnbmFtZSAyJywgJ2F1dGhvciAzJywgJzMuNTAnKTtcbmNvbnN0IHNvbmczID0gbmV3IFNvbmcoJ25hbWUgMycsICdhdXRob3IgMycsICczLjAwJyk7XG5jb25zdCBzb25nNCA9IG5ldyBNb3ZpZSgnbW92aWUzJywgJ2FydGlzdCcsICczLjAwJyk7XG5cbnBsYXlMaXN0LmFkZChzb25nMSk7XG5wbGF5TGlzdC5hZGQoc29uZzIpO1xucGxheUxpc3QuYWRkKHNvbmczKTtcbnBsYXlMaXN0LmFkZChzb25nNCk7XG5cbmNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdCcpO1xucGxheUxpc3QucmVuZGVyKGxpc3QpO1xuXG5jb25zdCBwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1wbGF5JylcbmNvbnN0IHN0b3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLXN0b3AnKVxuY29uc3QgbmV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tbmV4dCcpXG5wbGF5Lm9uY2xpY2sgPSBmdW5jdGlvbigpe1xuICAgIHBsYXlMaXN0LnBsYXkoKTtcbiAgICBwbGF5TGlzdC5yZW5kZXIobGlzdClcbn1cbnN0b3Aub25jbGljayA9IGZ1bmN0aW9uKCl7XG4gICAgcGxheUxpc3Quc3RvcCgpO1xuICAgIHBsYXlMaXN0LnJlbmRlcihsaXN0KVxufVxubmV4dC5vbmNsaWNrID0gZnVuY3Rpb24oKXtcbiAgICBwbGF5TGlzdC5uZXh0KCk7XG4gICAgcGxheUxpc3QucmVuZGVyKGxpc3QpXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==