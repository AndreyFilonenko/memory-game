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
        key: "draw",
        value: function draw(gs, pos) {
            if (this.cardState == "facedown") {
                gs.draw("back", pos);
            } else {
                gs.draw(this.cardId, pos);
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
            if (this.state = "stopped") {
                this.state = "started";
                this.startTime = Date.now();
            }
        }
    }, {
        key: "stop",
        value: function stop() {
            if (this.state = "started") {
                this.state = "stopped";
                this.value += Math.round((Date.now() - this.startTime) / 1000);
                this.startTime = null;
            }
        }
    }, {
        key: "getCurrentValue",
        value: function getCurrentValue() {
            if (this.state = "started") {
                return Math.round((Date.now() - this.startTime) / 1000);
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var card = new _card2.default(1);
var timer = new _timer2.default();
var game = new _game2.default(4);

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

        this.gameField = getNewGameField(fieldSize);
        this.timer = new _timer2.default();
    }

    _createClass(Game, [{
        key: 'start',
        value: function start() {
            if (this.cardState == "facedown") {
                this.cardState = "faceup";
            } else if (this.cardState == "faceup") {
                this.cardState = "facedown";
            }
        }
    }, {
        key: 'end',
        value: function end() {
            this.cardState = "found";
        }
    }, {
        key: 'getNewGameField',
        value: function getNewGameField(fieldSize) {
            var gameField = new Array(fieldSize);
            for (var i = 1; i <= gameField.length / 2; i++) {
                gameField[i] = new _card2.default(i);
                gameField[i + gameField.length / 2] = new _card2.default(i);
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

/***/ })
/******/ ]);