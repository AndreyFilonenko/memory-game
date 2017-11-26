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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Card = function () {
    function Card(id) {
        _classCallCheck(this, Card);

        this.cardId = id;
        this.cardState = "facedown";
    }

    _createClass(Card, [{
        key: "flip",
        value: function flip() {
            if (this.cardState == "facedown") {
                this.cardState = "faceup";
            } else if (this.cardState == "faceup") {
                this.cardState = "facedown";
            }
        }
    }, {
        key: "found",
        value: function found() {
            this.cardState = "found";
        }
    }, {
        key: "compareTo",
        value: function compareTo(otherCard) {
            return this.cardId == otherCard.cardId;
        }
    }, {
        key: "getCardIdByState",
        value: function getCardIdByState() {
            if (this.cardState == "facedown") {
                return 0;
            } else {
                return this.cardId;
            }
        }
    }]);

    return Card;
}();

exports.default = Card;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Timer = function () {
    function Timer() {
        _classCallCheck(this, Timer);

        this.value = 0;
        this.state = "stopped";
        this.startTime = null;
    }

    _createClass(Timer, [{
        key: "start",
        value: function start() {
            if (this.state == "stopped") {
                this.state = "started";
                this.startTime = Date.now();
            }
        }
    }, {
        key: "stop",
        value: function stop() {
            if (this.state == "started") {
                this.state = "stopped";
                this.value += Math.round((Date.now() - this.startTime) / 1000);
                this.startTime = null;
            }
        }
    }, {
        key: "getCurrentValue",
        value: function getCurrentValue() {
            if (this.state == "started") {
                return this.value + Math.round((Date.now() - this.startTime) / 1000);
            } else {
                return this.value;
            }
        }
    }]);

    return Timer;
}();

exports.default = Timer;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _card = __webpack_require__(0);

var _card2 = _interopRequireDefault(_card);

var _game = __webpack_require__(4);

var _game2 = _interopRequireDefault(_game);

var _timer = __webpack_require__(1);

var _timer2 = _interopRequireDefault(_timer);

var _app = __webpack_require__(5);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_app2.default.canvas);

var card = new _card2.default(1);
card.flip();

var timer = new _timer2.default();
timer.start();

var game = new _game2.default(4);
game.start();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _card = __webpack_require__(0);

var _card2 = _interopRequireDefault(_card);

var _timer = __webpack_require__(1);

var _timer2 = _interopRequireDefault(_timer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
    function Game(fieldSize) {
        _classCallCheck(this, Game);

        this.gameField = Game.getNewGameField(fieldSize);
        this.timer = new _timer2.default();
        this.clicks = 0;
        this.startTimeoutId = null;
    }

    _createClass(Game, [{
        key: "start",
        value: function start() {
            this.flipAll();
            this.startTimeoutId = setTimeout("", Math.sqrt(this.gameField.length) * 1000);
            this.flipAll();
            this.timer.start();
        }
    }, {
        key: "end",
        value: function end() {
            this.timer.stop();
        }
    }, {
        key: "flipAll",
        value: function flipAll() {
            for (var i = 0; i < this.gameField.length; i++) {
                this.gameField[i].flip();
            }
        }
    }], [{
        key: "getNewGameField",
        value: function getNewGameField(fieldSize) {
            var gameField = new Array(fieldSize);
            for (var i = 0; i < gameField.length / 2; i++) {
                gameField[i] = new _card2.default(i + 1);
                gameField[i + gameField.length / 2] = new _card2.default(i + 1);
            }
            gameField = gameField.sort(function () {
                return Math.random() - 0.5;
            });
            return gameField;
        }
    }]);

    return Game;
}();

exports.default = Game;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyNjVlNGVmYjUyZTFkYmFjZWMzNSIsIndlYnBhY2s6Ly8vc3JjL2pzL21vZGVscy9jYXJkLmpzIiwid2VicGFjazovLy9zcmMvanMvbW9kZWxzL3RpbWVyLmpzIiwid2VicGFjazovLy9zcmMvanMvYXBwLmpzIiwid2VicGFjazovLy9zcmMvanMvbW9kZWxzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4uL3N0eWxlcy9hcHAuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDI2NWU0ZWZiNTJlMWRiYWNlYzM1IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZCkge1xyXG4gICAgICAgIHRoaXMuY2FyZElkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5jYXJkU3RhdGUgPSBcImZhY2Vkb3duXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZmxpcCgpIHtcclxuICAgICAgICBpZiAodGhpcy5jYXJkU3RhdGUgPT0gXCJmYWNlZG93blwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FyZFN0YXRlID0gXCJmYWNldXBcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2FyZFN0YXRlID09IFwiZmFjZXVwXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5jYXJkU3RhdGUgPSBcImZhY2Vkb3duXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvdW5kKCkge1xyXG4gICAgICAgIHRoaXMuY2FyZFN0YXRlID0gXCJmb3VuZFwiO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBhcmVUbyhvdGhlckNhcmQpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuY2FyZElkID09IG90aGVyQ2FyZC5jYXJkSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENhcmRJZEJ5U3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FyZFN0YXRlID09IFwiZmFjZWRvd25cIikge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYXJkSWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9tb2RlbHMvY2FyZC5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBcInN0b3BwZWRcIjtcclxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT0gXCJzdG9wcGVkXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFwic3RhcnRlZFwiO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0b3AoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT0gXCJzdGFydGVkXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFwic3RvcHBlZFwiO1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlICs9IE1hdGgucm91bmQoKERhdGUubm93KCkgLSB0aGlzLnN0YXJ0VGltZSkgLyAxMDAwKTtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRDdXJyZW50VmFsdWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT0gXCJzdGFydGVkXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgKyBNYXRoLnJvdW5kKChEYXRlLm5vdygpIC0gdGhpcy5zdGFydFRpbWUpIC8gMTAwMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9tb2RlbHMvdGltZXIuanMiLCJpbXBvcnQgQ2FyZCBmcm9tIFwiLi9tb2RlbHMvY2FyZFwiO1xyXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9tb2RlbHMvZ2FtZVwiO1xyXG5pbXBvcnQgVGltZXIgZnJvbSBcIi4vbW9kZWxzL3RpbWVyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vLi4vc3R5bGVzL2FwcC5jc3NcIjtcclxuXHJcbmNvbnNvbGUubG9nKHN0eWxlcy5jYW52YXMpO1xyXG5cclxuXHJcbnZhciBjYXJkID0gbmV3IENhcmQoMSk7XHJcbmNhcmQuZmxpcCgpO1xyXG5cclxudmFyIHRpbWVyID0gbmV3IFRpbWVyKCk7XHJcbnRpbWVyLnN0YXJ0KCk7XHJcblxyXG52YXIgZ2FtZSA9IG5ldyBHYW1lKDQpO1xyXG5nYW1lLnN0YXJ0KCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9hcHAuanMiLCJpbXBvcnQgQ2FyZCBmcm9tIFwiLi9jYXJkXCI7XHJcbmltcG9ydCBUaW1lciBmcm9tIFwiLi90aW1lclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihmaWVsZFNpemUpIHtcclxuICAgICAgICB0aGlzLmdhbWVGaWVsZCA9IEdhbWUuZ2V0TmV3R2FtZUZpZWxkKGZpZWxkU2l6ZSk7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IG5ldyBUaW1lcigpO1xyXG4gICAgICAgIHRoaXMuY2xpY2tzID0gMDsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zdGFydFRpbWVvdXRJZCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7ICAgICAgICBcclxuICAgICAgICB0aGlzLmZsaXBBbGwoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0VGltZW91dElkID0gc2V0VGltZW91dChcIlwiLCBNYXRoLnNxcnQodGhpcy5nYW1lRmllbGQubGVuZ3RoKSAqIDEwMDApO1xyXG4gICAgICAgIHRoaXMuZmxpcEFsbCgpO1xyXG4gICAgICAgIHRoaXMudGltZXIuc3RhcnQoKTsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGVuZCgpIHtcclxuICAgICAgICB0aGlzLnRpbWVyLnN0b3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBmbGlwQWxsKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5nYW1lRmllbGQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lRmllbGRbaV0uZmxpcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0TmV3R2FtZUZpZWxkKGZpZWxkU2l6ZSkge1xyXG4gICAgICAgIHZhciBnYW1lRmllbGQgPSBuZXcgQXJyYXkoZmllbGRTaXplKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdhbWVGaWVsZC5sZW5ndGggLyAyOyBpKyspIHtcclxuICAgICAgICAgICAgZ2FtZUZpZWxkW2ldID0gbmV3IENhcmQoaSArIDEpO1xyXG4gICAgICAgICAgICBnYW1lRmllbGRbaSArIGdhbWVGaWVsZC5sZW5ndGggLyAyXSA9IG5ldyBDYXJkKGkgKyAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2FtZUZpZWxkID0gZ2FtZUZpZWxkLnNvcnQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAtIDAuNTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZ2FtZUZpZWxkO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9tb2RlbHMvZ2FtZS5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3R5bGVzL2FwcC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUE1QkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBNUJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBbkNBOzs7Ozs7QUNIQTs7O0EiLCJzb3VyY2VSb290IjoiIn0=