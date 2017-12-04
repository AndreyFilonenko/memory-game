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
        this.cardPosition = null;
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

var _timer = __webpack_require__(1);

var _timer2 = _interopRequireDefault(_timer);

var _game = __webpack_require__(4);

var _game2 = _interopRequireDefault(_game);

var _gameView = __webpack_require__(5);

var _gameView2 = _interopRequireDefault(_gameView);

var _app = __webpack_require__(6);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import ScoresRepository from "./infrastructure/scoresRepository";
console.log(_app2.default.canvas);
// import GameController from "./controllers/gameController";


var card = new _card2.default(1);
card.flip();

var timer = new _timer2.default();
timer.start();

var game = new _game2.default(4);
game.start();

var view = new _gameView2.default();
//view.renderWinScreen(5, 15);
//view.renderGame();
view.renderMenu();

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
        this.isFirstClicked = false;
        this.firstClicked = null;
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
    }, {
        key: "cardClickHandler",
        value: function cardClickHandler(card) {
            var _this = this;

            this.clicks++;
            if (this.isFirstClicked === false) {
                this.isFirstClicked = true;
                this.firstClicked = card;
                this.gameField[card.cardPosition - 1].flip();
            } else {
                this.gameField[card.cardPosition - 1].flip();
                if (this.firstClicked.cardId === card.cardId) {
                    this.gameField[card.cardPosition - 1].found();
                    this.gameField[this.firstClicked.cardPosition - 1].found();
                } else {
                    setTimeout(function () {
                        _this.gameField[card.cardPosition - 1].flip();
                        _this.gameField[_this.firstClicked.cardPosition - 1].flip();
                    }, 1000);
                }
                this.isFirstClicked === false;
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
            for (var _i = 0; _i < gameField.length; ++_i) {
                gameField[_i].cardPosition = _i + 1;
            }
            return gameField;
        }
    }]);

    return Game;
}();

exports.default = Game;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// import Card from "./../models/card";
// import Timer from "./../models/timer";
// import Game from "./../models/game";
// import ScoresRepository from "./../infrastructure/scoresRepository";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameView = function () {
    function GameView() {
        _classCallCheck(this, GameView);

        this.skinPath = null;
        this.gameFieldSize = null;

        this.game = document.createElement("div");
        this.game.id = "mg";
        this.game.className = "mg";

        this.gameStart = document.createElement("div");
        this.gameStart.id = "mg__menu";
        this.gameStart.className = "mg__menu";

        this.gameAction = document.createElement("div");
        this.gameAction.id = "mg__game";
        this.gameAction.className = "mg__game";

        this.gameWin = document.createElement("div");
        this.gameWin.id = "mg__win";
        this.gameWin.className = "mg__win";

        this.gameScores = document.createElement("div");
        this.gameScores.id = "mg__scores";
        this.gameScores.className = "mg__scores";

        this.container = document.querySelector("#appcontainer");
        this.container.appendChild(this.game);
    }

    _createClass(GameView, [{
        key: "renderMenu",
        value: function renderMenu() {
            this.clearGame();
            this.gameStart.innerHTML = "<div class=\"mg__menu-line--centered\">\
                                    <h2 class=\"mg__menu-heading\">Потренируйте свой мозг!</h2>\
                                    <p class=\"mg__menu-text\">Это простая игра на память - необходимо запомнить положение карт и,\
                                    поочередно переворачивая их, собрать пары и очистить игровое поле.</p>\
                                    </div>\
                                    <div class=\"mg__menu-line--centered\">\
                                    <div class=\"mg__menu-line-item\">\
                                    <h3 class=\"mg__menu-sub-heading\">Выберите размер поля:</h3>\
                                    <ul class=\"mg__menu-level-select\">\
                                    <li><span data-size=\"16\">Маленький (4 x 4)</span></li>\
                                    <li><span data-size=\"36\">Средний (6 x 6)</span></li>\
                                    <li><span data-size=\"64\">Большой (8 x 8)</span></li>\
                                    </ul>\
                                    </div>\
                                    <div class=\"mg__menu-line-item\">\
                                    <h3 class=\"mg__menu-sub-heading\">Выберите тему карт:</h3>\
                                    <ul class=\"mg__menu-skin-select\">\
                                    <li><span data-path=\"flags\">Флаги стран</span></li>\
                                    <li><span data-path=\"new-year\">Новый год</span></li>\
                                    <li><span data-path=\"outdoors\">Туризм</span></li>\
                                    <li><span data-path=\"pokemons\">Покемоны</span></li>\
                                    <li><span data-path=\"sports\">Спорт</span></li>\
                                    </ul>\
                                    </div>\
                                    </div>\
                                    <div class=\"mg__menu-line--centered\">\
                                    <button id=\"mg__button--start\" class=\"mg__button mg__button--action\">Начать игру</button>\
                                    </div>\
                                    <div class=\"mg__menu-line--centered\">\
                                    <button id=\"mg__button--scores\" class=\"mg__button mg__button--info\">Посмотреть рекорды</button>\
                                    </div>";
            this.game.appendChild(this.gameStart);
            this.setMenuEvents();
        }
    }, {
        key: "setMenuEvents",
        value: function setMenuEvents() {
            var _this = this;

            var sizeNodes = document.querySelectorAll("ul.mg__menu-level-select span");

            var _loop = function _loop(i) {
                sizeNodes[i].addEventListener("click", function () {
                    for (var j = 0; j < sizeNodes.length; j++) {
                        sizeNodes[j].classList.remove("selected");
                    }
                    sizeNodes[i].classList.add("selected");
                    _this.gameFieldSize = sizeNodes[i].getAttribute("data-size");
                });
            };

            for (var i = 0; i < sizeNodes.length; i++) {
                _loop(i);
            }

            var skinNodes = document.querySelectorAll("ul.mg__menu-skin-select span");

            var _loop2 = function _loop2(i) {
                skinNodes[i].addEventListener("click", function () {
                    for (var j = 0; j < skinNodes.length; j++) {
                        skinNodes[j].classList.remove("selected");
                    }
                    skinNodes[i].classList.add("selected");
                    _this.skinPath = skinNodes[i].getAttribute("data-path");
                });
            };

            for (var i = 0; i < skinNodes.length; i++) {
                _loop2(i);
            }

            document.getElementById("mg__button--start").addEventListener("click", function () {
                if (_this.gameFieldSize != null && _this.skinPath != null) {
                    _this.renderGame();
                }
            });

            document.getElementById("mg__button--scores").addEventListener("click", function () {
                _this.renderScores();
            });
        }
    }, {
        key: "renderGame",
        value: function renderGame() {
            this.clearGame();
            this.gameAction.innerHTML = "<div class=\"mg__game-line--centered\">\
                                    <div class=\"mg__game-line-item\">\
                                    <span>Количество ходов:</span>\
                                    </div>\
                                    <div class=\"mg__game-line-item\">\
                                    <span id=\"mg__game-clicks\" class=\"mg__game-clicks\">0</span>\
                                    </div>\
                                    <div class=\"mg__game-line-item\">\
                                    <span>Прошло времени:</span>\
                                    </div>\
                                    <div class=\"mg__game-line-item\">\
                                    <span id=\"mg__game-time\" class=\"mg__game-time\">0</span>\
                                    </div>\
                                    <div class=\"mg__game-line-item\">\
                                    <button id=\"mg__button--suspend\" class=\"mg__button mg__button--action\">Пауза</button>\
                                    </div>\
                                    <div class=\"mg__game-line-item\">\
                                    <button id=\"mg__button--reset\" class=\"mg__button mg__button--cancel\">В меню</button>\
                                    </div>\
                                    </div>";

            this.gameActionWrapper = document.createElement("div");
            this.gameActionWrapper.className = "mg__wrapper";
            this.gameActionContainer = document.createElement("div");
            this.gameActionContainer.className = "mg__contents mg__size-" + this.gameFieldSize;

            var path = this.skinPath;
            for (var i = 0; i < this.gameFieldSize; i++) {
                var n = i + 1;
                this.gameActionContainer.innerHTML += "<div class=\"mg__card mg__card-" + n + "\">\
                                                    <div class=\"mg__card--inner\" data-id=\"" + n + "\">\
                                                    <span class=\"mg__card--outside\"><img src=\"img/" + path + "/00.png\"></span>\
                                                    <span class=\"mg__card--inside\"><img src=\"00.png\"></span>\
                                                    </div>\
                                                    </div>";
            }
            this.gameActionWrapper.appendChild(this.gameActionContainer);
            this.gameAction.appendChild(this.gameActionWrapper);
            this.game.appendChild(this.gameAction);
            this.setGameEvents();
        }
    }, {
        key: "setGameEvents",
        value: function setGameEvents() {
            var _this2 = this;

            document.getElementById("mg__button--suspend").addEventListener("click", function () {
                _this2.renderMenu();
            });

            document.getElementById("mg__button--reset").addEventListener("click", function () {
                _this2.renderMenu();
            });
        }
    }, {
        key: "renderWinScreen",
        value: function renderWinScreen(duration, score) {
            this.skinPath = null;
            this.gameFieldSize = null;
            this.clearGame();
            this.gameWin.innerHTML = "<div class=\"mg__win-line--centered\">\
                                <h2 class=\"mg__win-heading\">Поздравляем! Вы выиграли!</h2>\
                                <p class=\"mg__win-text\">Вы справились за " + duration + " секунд. Ваш счет - " + score + ".</p>\
                                </div>\
                                <div class=\"mg__win-line--centered\">\
                                <h3 class=\"mg__win-sub-heading\">Введите свое имя для внесения записи в рекорды:</h3>\
                                </div>\
                                <div class=\"mg__win-line--centered\">\
                                <input type=\"text\" id=\"mg__win-input\" class=\"mg__win-input\">\
                                <button id=\"mg__button--submit\" class=\"mg__button mg__button--disabled\">Внести</button>\
                                </div>\
                                <div class=\"mg__win-line--centered\">\
                                <button id=\"mg__button--reset\" class=\"mg__button mg__button--cancel\">В меню</button>\
                                </div>";
            this.game.appendChild(this.gameWin);
            this.setWinScreenEvents();
        }
    }, {
        key: "setWinScreenEvents",
        value: function setWinScreenEvents() {
            var _this3 = this;

            var input = document.getElementById("mg__win-input");
            var submit = document.getElementById("mg__button--submit");

            input.addEventListener("input", function () {
                if (input.value != null && input.value != "") {
                    submit.classList.remove("mg__button--disabled");
                    submit.classList.add("mg__button--action");
                } else {
                    submit.classList.remove("mg__button--action");
                    submit.classList.add("mg__button--disabled");
                }
            });

            submit.addEventListener("click", function () {
                if (input.value != null && input.value != "") {
                    // TODO: связь с хранилищем
                    _this3.renderMenu();
                }
            });

            document.getElementById("mg__button--reset").addEventListener("click", function () {
                _this3.renderMenu();
            });
        }
    }, {
        key: "renderScores",
        value: function renderScores() {
            this.clearGame();
            this.gameScores.innerHTML = "<div class=\"mg__scores-line--centered\">\
                                    <h2 class=\"mg__scores-heading\">Рекорды</h2>\
                                    </div>\
                                    <div class=\"mg__scores-line--centered\">\
                                    <div class=\"mg__scores-line-item\">\
                                    Размеры полей:\
                                    </div>\
                                    <div class=\"mg__scores-line-item\">\
                                    <button id=\"mg__button--small\" class=\"mg__button mg__button--action\">Маленькое</button>\
                                    </div>\
                                    <div class=\"mg__scores-line-item\">\
                                    <button id=\"mg__button--medium\" class=\"mg__button mg__button--action\">Среднее</button>\
                                    </div>\
                                    <div class=\"mg__scores-line-item\">\
                                    <button id=\"mg__button--big\" class=\"mg__button mg__button--action\">Большое</button>\
                                    </div>\
                                    <div class=\"mg__scores-line-item\">\
                                    <button id=\"mg__button--reset\" class=\"mg__button mg__button--cancel\">Назад в меню</button>\
                                    </div>\
                                    </div>\
                                    <div class=\"mg__scores-line--centered\">\
                                    <div id=\"mg__scores-table\" class=\"mg__scores-table\">\
                                    <span>Выберите размер поля:</span>\
                                    </div>\
                                    </div>";
            this.game.appendChild(this.gameScores);
            this.setScoresEvents();
        }
    }, {
        key: "setScoresEvents",
        value: function setScoresEvents() {
            var _this4 = this;

            var dummy = "<tr> <td>Имя1</td> <td>15.01.17 11:16</td> <td>100500</td> <td>100500</td></tr>\
                    <tr> <td>Имя2</td> <td>17.03.17 13:26</td> <td>200600</td> <td>200600</td></tr>\
                    <tr> <td>Имя3</td> <td>19.05.17 15:46</td> <td>300700</td> <td>300700</td></tr>";
            document.getElementById("mg__button--small").addEventListener("click", function () {
                _this4.renderScoreTableBySize(dummy);
            });

            document.getElementById("mg__button--medium").addEventListener("click", function () {
                _this4.renderScoreTableBySize(dummy);
            });

            document.getElementById("mg__button--big").addEventListener("click", function () {
                _this4.renderScoreTableBySize(dummy);
            });

            document.getElementById("mg__button--reset").addEventListener("click", function () {
                _this4.renderMenu();
            });
        }
    }, {
        key: "renderScoreTableBySize",
        value: function renderScoreTableBySize(inner) {
            var scoreTable = document.getElementById("mg__scores-table");
            scoreTable.innerHTML = "<table>\
                                <thead>\
                                <tr>\
                                <td>Имя</td>\
                                <td>Дата и время игры</td>\
                                <td>Длительность</td>\
                                <td>Счет</td>\
                                </thead>\
                                <tbody>" + inner + "</tbody></table>";
        }
    }, {
        key: "clearGame",
        value: function clearGame() {
            if (this.gameStart.parentNode !== null) {
                this.game.removeChild(this.gameStart);
            }
            if (this.gameAction.parentNode !== null) {
                this.game.removeChild(this.gameAction);
            }
            if (this.gameWin.parentNode !== null) {
                this.game.removeChild(this.gameWin);
            }
            if (this.gameScores.parentNode !== null) {
                this.game.removeChild(this.gameScores);
            }
        }
    }]);

    return GameView;
}();

exports.default = GameView;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0YzdjMjEzYzBiZGNiNTM4Y2QwYiIsIndlYnBhY2s6Ly8vc3JjL2pzL21vZGVscy9jYXJkLmpzIiwid2VicGFjazovLy9zcmMvanMvbW9kZWxzL3RpbWVyLmpzIiwid2VicGFjazovLy9zcmMvanMvYXBwLmpzIiwid2VicGFjazovLy9zcmMvanMvbW9kZWxzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy92aWV3cy9nYW1lVmlldy5qcyIsIndlYnBhY2s6Ly8vLi4vc3R5bGVzL3Nhc3MvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNGM3YzIxM2MwYmRjYjUzOGNkMGIiLCJcInVzZSBzdHJpY3RcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZCkge1xyXG4gICAgICAgIHRoaXMuY2FyZElkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5jYXJkU3RhdGUgPSBcImZhY2Vkb3duXCI7XHJcbiAgICAgICAgdGhpcy5jYXJkUG9zaXRpb24gPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGZsaXAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FyZFN0YXRlID09IFwiZmFjZWRvd25cIikge1xyXG4gICAgICAgICAgICB0aGlzLmNhcmRTdGF0ZSA9IFwiZmFjZXVwXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNhcmRTdGF0ZSA9PSBcImZhY2V1cFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FyZFN0YXRlID0gXCJmYWNlZG93blwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3VuZCgpIHtcclxuICAgICAgICB0aGlzLmNhcmRTdGF0ZSA9IFwiZm91bmRcIjtcclxuICAgIH1cclxuXHJcbiAgICBjb21wYXJlVG8ob3RoZXJDYXJkKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmNhcmRJZCA9PSBvdGhlckNhcmQuY2FyZElkKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDYXJkSWRCeVN0YXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNhcmRTdGF0ZSA9PSBcImZhY2Vkb3duXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FyZElkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvbW9kZWxzL2NhcmQuanMiLCJcInVzZSBzdHJpY3RcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IDA7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFwic3RvcHBlZFwiO1xyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PSBcInN0b3BwZWRcIikge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gXCJzdGFydGVkXCI7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PSBcInN0YXJ0ZWRcIikge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gXCJzdG9wcGVkXCI7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgKz0gTWF0aC5yb3VuZCgoRGF0ZS5ub3coKSAtIHRoaXMuc3RhcnRUaW1lKSAvIDEwMDApO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEN1cnJlbnRWYWx1ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PSBcInN0YXJ0ZWRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSArIE1hdGgucm91bmQoKERhdGUubm93KCkgLSB0aGlzLnN0YXJ0VGltZSkgLyAxMDAwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL21vZGVscy90aW1lci5qcyIsIlwidXNlIHN0cmljdFwiXHJcblxyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi9tb2RlbHMvY2FyZFwiO1xyXG5pbXBvcnQgVGltZXIgZnJvbSBcIi4vbW9kZWxzL3RpbWVyXCI7XHJcbmltcG9ydCBHYW1lIGZyb20gXCIuL21vZGVscy9nYW1lXCI7XHJcbi8vIGltcG9ydCBTY29yZXNSZXBvc2l0b3J5IGZyb20gXCIuL2luZnJhc3RydWN0dXJlL3Njb3Jlc1JlcG9zaXRvcnlcIjtcclxuaW1wb3J0IEdhbWVWaWV3IGZyb20gXCIuL3ZpZXdzL2dhbWVWaWV3XCI7XHJcbi8vIGltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVycy9nYW1lQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLy4uL3N0eWxlcy9zYXNzL2FwcC5zY3NzXCI7XHJcblxyXG5jb25zb2xlLmxvZyhzdHlsZXMuY2FudmFzKTtcclxuXHJcblxyXG52YXIgY2FyZCA9IG5ldyBDYXJkKDEpO1xyXG5jYXJkLmZsaXAoKTtcclxuXHJcbnZhciB0aW1lciA9IG5ldyBUaW1lcigpO1xyXG50aW1lci5zdGFydCgpO1xyXG5cclxudmFyIGdhbWUgPSBuZXcgR2FtZSg0KTtcclxuZ2FtZS5zdGFydCgpO1xyXG5cclxudmFyIHZpZXcgPSBuZXcgR2FtZVZpZXcoKTtcclxuLy92aWV3LnJlbmRlcldpblNjcmVlbig1LCAxNSk7XHJcbi8vdmlldy5yZW5kZXJHYW1lKCk7XHJcbnZpZXcucmVuZGVyTWVudSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvYXBwLmpzIiwiXCJ1c2Ugc3RyaWN0XCJcclxuXHJcbmltcG9ydCBDYXJkIGZyb20gXCIuL2NhcmRcIjtcclxuaW1wb3J0IFRpbWVyIGZyb20gXCIuL3RpbWVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcclxuICAgIGNvbnN0cnVjdG9yKGZpZWxkU2l6ZSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZUZpZWxkID0gR2FtZS5nZXROZXdHYW1lRmllbGQoZmllbGRTaXplKTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gbmV3IFRpbWVyKCk7XHJcbiAgICAgICAgdGhpcy5jbGlja3MgPSAwOyAgICAgICAgICAgICAgICBcclxuICAgICAgICB0aGlzLnN0YXJ0VGltZW91dElkID0gbnVsbDtcclxuICAgICAgICB0aGlzLmlzRmlyc3RDbGlja2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5maXJzdENsaWNrZWQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkgeyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5mbGlwQWxsKCk7XHJcbiAgICAgICAgdGhpcy5zdGFydFRpbWVvdXRJZCA9IHNldFRpbWVvdXQoXCJcIiwgTWF0aC5zcXJ0KHRoaXMuZ2FtZUZpZWxkLmxlbmd0aCkgKiAxMDAwKTtcclxuICAgICAgICB0aGlzLmZsaXBBbGwoKTtcclxuICAgICAgICB0aGlzLnRpbWVyLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZW5kKCkge1xyXG4gICAgICAgIHRoaXMudGltZXIuc3RvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZsaXBBbGwoKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmdhbWVGaWVsZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVGaWVsZFtpXS5mbGlwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhcmRDbGlja0hhbmRsZXIoY2FyZCkge1xyXG4gICAgICAgIHRoaXMuY2xpY2tzKys7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNGaXJzdENsaWNrZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGaXJzdENsaWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2xpY2tlZCA9IGNhcmQ7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUZpZWxkW2NhcmQuY2FyZFBvc2l0aW9uIC0gMV0uZmxpcCgpO1xyXG4gICAgICAgIH0gZWxzZSB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUZpZWxkW2NhcmQuY2FyZFBvc2l0aW9uIC0gMV0uZmxpcCgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5maXJzdENsaWNrZWQuY2FyZElkID09PSBjYXJkLmNhcmRJZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lRmllbGRbY2FyZC5jYXJkUG9zaXRpb24gLSAxXS5mb3VuZCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lRmllbGRbdGhpcy5maXJzdENsaWNrZWQuY2FyZFBvc2l0aW9uIC0gMV0uZm91bmQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUZpZWxkW2NhcmQuY2FyZFBvc2l0aW9uIC0gMV0uZmxpcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUZpZWxkW3RoaXMuZmlyc3RDbGlja2VkLmNhcmRQb3NpdGlvbiAtIDFdLmZsaXAoKTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaXNGaXJzdENsaWNrZWQgPT09IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0TmV3R2FtZUZpZWxkKGZpZWxkU2l6ZSkge1xyXG4gICAgICAgIHZhciBnYW1lRmllbGQgPSBuZXcgQXJyYXkoZmllbGRTaXplKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVGaWVsZC5sZW5ndGggLyAyOyBpKyspIHtcclxuICAgICAgICAgICAgZ2FtZUZpZWxkW2ldID0gbmV3IENhcmQoaSArIDEpO1xyXG4gICAgICAgICAgICBnYW1lRmllbGRbaSArIGdhbWVGaWVsZC5sZW5ndGggLyAyXSA9IG5ldyBDYXJkKGkgKyAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2FtZUZpZWxkID0gZ2FtZUZpZWxkLnNvcnQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAtIDAuNTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVGaWVsZC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBnYW1lRmllbGRbaV0uY2FyZFBvc2l0aW9uID0gaSArIDE7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBnYW1lRmllbGQ7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL21vZGVscy9nYW1lLmpzIiwiXCJ1c2Ugc3RyaWN0XCJcclxuXHJcbi8vIGltcG9ydCBDYXJkIGZyb20gXCIuLy4uL21vZGVscy9jYXJkXCI7XHJcbi8vIGltcG9ydCBUaW1lciBmcm9tIFwiLi8uLi9tb2RlbHMvdGltZXJcIjtcclxuLy8gaW1wb3J0IEdhbWUgZnJvbSBcIi4vLi4vbW9kZWxzL2dhbWVcIjtcclxuLy8gaW1wb3J0IFNjb3Jlc1JlcG9zaXRvcnkgZnJvbSBcIi4vLi4vaW5mcmFzdHJ1Y3R1cmUvc2NvcmVzUmVwb3NpdG9yeVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVZpZXcge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5za2luUGF0aCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5nYW1lRmllbGRTaXplID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5nYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLmdhbWUuaWQgPSBcIm1nXCI7XHJcbiAgICAgICAgdGhpcy5nYW1lLmNsYXNzTmFtZSA9IFwibWdcIjtcclxuXHJcbiAgICAgICAgdGhpcy5nYW1lU3RhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXJ0LmlkID0gXCJtZ19fbWVudVwiO1xyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXJ0LmNsYXNzTmFtZSA9IFwibWdfX21lbnVcIjtcclxuXHJcbiAgICAgICAgdGhpcy5nYW1lQWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLmdhbWVBY3Rpb24uaWQgPSBcIm1nX19nYW1lXCI7XHJcbiAgICAgICAgdGhpcy5nYW1lQWN0aW9uLmNsYXNzTmFtZSA9IFwibWdfX2dhbWVcIjtcclxuXHJcbiAgICAgICAgdGhpcy5nYW1lV2luID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLmdhbWVXaW4uaWQgPSBcIm1nX193aW5cIjtcclxuICAgICAgICB0aGlzLmdhbWVXaW4uY2xhc3NOYW1lID0gXCJtZ19fd2luXCI7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZVNjb3JlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy5nYW1lU2NvcmVzLmlkID0gXCJtZ19fc2NvcmVzXCI7XHJcbiAgICAgICAgdGhpcy5nYW1lU2NvcmVzLmNsYXNzTmFtZSA9IFwibWdfX3Njb3Jlc1wiO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXBwY29udGFpbmVyXCIpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZ2FtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyTWVudSgpIHtcclxuICAgICAgICB0aGlzLmNsZWFyR2FtZSgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXJ0LmlubmVySFRNTCA9IFwiPGRpdiBjbGFzcz1cXFwibWdfX21lbnUtbGluZS0tY2VudGVyZWRcXFwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cXFwibWdfX21lbnUtaGVhZGluZ1xcXCI+0J/QvtGC0YDQtdC90LjRgNGD0LnRgtC1INGB0LLQvtC5INC80L7Qt9CzITwvaDI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcIm1nX19tZW51LXRleHRcXFwiPtCt0YLQviDQv9GA0L7RgdGC0LDRjyDQuNCz0YDQsCDQvdCwINC/0LDQvNGP0YLRjCAtINC90LXQvtCx0YXQvtC00LjQvNC+INC30LDQv9C+0LzQvdC40YLRjCDQv9C+0LvQvtC20LXQvdC40LUg0LrQsNGA0YIg0LgsXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0L/QvtC+0YfQtdGA0LXQtNC90L4g0L/QtdGA0LXQstC+0YDQsNGH0LjQstCw0Y8g0LjRhSwg0YHQvtCx0YDQsNGC0Ywg0L/QsNGA0Ysg0Lgg0L7Rh9C40YHRgtC40YLRjCDQuNCz0YDQvtCy0L7QtSDQv9C+0LvQtS48L3A+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWdfX21lbnUtbGluZS0tY2VudGVyZWRcXFwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1nX19tZW51LWxpbmUtaXRlbVxcXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJtZ19fbWVudS1zdWItaGVhZGluZ1xcXCI+0JLRi9Cx0LXRgNC40YLQtSDRgNCw0LfQvNC10YAg0L/QvtC70Y86PC9oMz5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcIm1nX19tZW51LWxldmVsLXNlbGVjdFxcXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuIGRhdGEtc2l6ZT1cXFwiMTZcXFwiPtCc0LDQu9C10L3RjNC60LjQuSAoNCB4IDQpPC9zcGFuPjwvbGk+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuIGRhdGEtc2l6ZT1cXFwiMzZcXFwiPtCh0YDQtdC00L3QuNC5ICg2IHggNik8L3NwYW4+PC9saT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4gZGF0YS1zaXplPVxcXCI2NFxcXCI+0JHQvtC70YzRiNC+0LkgKDggeCA4KTwvc3Bhbj48L2xpPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWdfX21lbnUtbGluZS1pdGVtXFxcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcIm1nX19tZW51LXN1Yi1oZWFkaW5nXFxcIj7QktGL0LHQtdGA0LjRgtC1INGC0LXQvNGDINC60LDRgNGCOjwvaDM+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJtZ19fbWVudS1za2luLXNlbGVjdFxcXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuIGRhdGEtcGF0aD1cXFwiZmxhZ3NcXFwiPtCk0LvQsNCz0Lgg0YHRgtGA0LDQvTwvc3Bhbj48L2xpPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3BhbiBkYXRhLXBhdGg9XFxcIm5ldy15ZWFyXFxcIj7QndC+0LLRi9C5INCz0L7QtDwvc3Bhbj48L2xpPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3BhbiBkYXRhLXBhdGg9XFxcIm91dGRvb3JzXFxcIj7QotGD0YDQuNC30Lw8L3NwYW4+PC9saT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4gZGF0YS1wYXRoPVxcXCJwb2tlbW9uc1xcXCI+0J/QvtC60LXQvNC+0L3Rizwvc3Bhbj48L2xpPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3BhbiBkYXRhLXBhdGg9XFxcInNwb3J0c1xcXCI+0KHQv9C+0YDRgjwvc3Bhbj48L2xpPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWdfX21lbnUtbGluZS0tY2VudGVyZWRcXFwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XFxcIm1nX19idXR0b24tLXN0YXJ0XFxcIiBjbGFzcz1cXFwibWdfX2J1dHRvbiBtZ19fYnV0dG9uLS1hY3Rpb25cXFwiPtCd0LDRh9Cw0YLRjCDQuNCz0YDRgzwvYnV0dG9uPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1nX19tZW51LWxpbmUtLWNlbnRlcmVkXFxcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJtZ19fYnV0dG9uLS1zY29yZXNcXFwiIGNsYXNzPVxcXCJtZ19fYnV0dG9uIG1nX19idXR0b24tLWluZm9cXFwiPtCf0L7RgdC80L7RgtGA0LXRgtGMINGA0LXQutC+0YDQtNGLPC9idXR0b24+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XCI7XHJcbiAgICAgICAgdGhpcy5nYW1lLmFwcGVuZENoaWxkKHRoaXMuZ2FtZVN0YXJ0KTtcclxuICAgICAgICB0aGlzLnNldE1lbnVFdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRNZW51RXZlbnRzKCkge1xyXG4gICAgICAgIHZhciBzaXplTm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwidWwubWdfX21lbnUtbGV2ZWwtc2VsZWN0IHNwYW5cIik7ICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemVOb2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBzaXplTm9kZXNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZU5vZGVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZU5vZGVzW2pdLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2l6ZU5vZGVzW2ldLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUZpZWxkU2l6ZSA9IHNpemVOb2Rlc1tpXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNpemVcIik7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBza2luTm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwidWwubWdfX21lbnUtc2tpbi1zZWxlY3Qgc3BhblwiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNraW5Ob2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBza2luTm9kZXNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2tpbk5vZGVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2tpbk5vZGVzW2pdLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2tpbk5vZGVzW2ldLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2tpblBhdGggPSBza2luTm9kZXNbaV0uZ2V0QXR0cmlidXRlKFwiZGF0YS1wYXRoXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWdfX2J1dHRvbi0tc3RhcnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZUZpZWxkU2l6ZSAhPSBudWxsICYmIHRoaXMuc2tpblBhdGggIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJHYW1lKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZ19fYnV0dG9uLS1zY29yZXNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJTY29yZXMoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJHYW1lKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lQWN0aW9uLmlubmVySFRNTCA9IFwiPGRpdiBjbGFzcz1cXFwibWdfX2dhbWUtbGluZS0tY2VudGVyZWRcXFwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1nX19nYW1lLWxpbmUtaXRlbVxcXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+0JrQvtC70LjRh9C10YHRgtCy0L4g0YXQvtC00L7Qsjo8L3NwYW4+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWdfX2dhbWUtbGluZS1pdGVtXFxcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cXFwibWdfX2dhbWUtY2xpY2tzXFxcIiBjbGFzcz1cXFwibWdfX2dhbWUtY2xpY2tzXFxcIj4wPC9zcGFuPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1nX19nYW1lLWxpbmUtaXRlbVxcXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+0J/RgNC+0YjQu9C+INCy0YDQtdC80LXQvdC4Ojwvc3Bhbj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtZ19fZ2FtZS1saW5lLWl0ZW1cXFwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVxcXCJtZ19fZ2FtZS10aW1lXFxcIiBjbGFzcz1cXFwibWdfX2dhbWUtdGltZVxcXCI+MDwvc3Bhbj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtZ19fZ2FtZS1saW5lLWl0ZW1cXFwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XFxcIm1nX19idXR0b24tLXN1c3BlbmRcXFwiIGNsYXNzPVxcXCJtZ19fYnV0dG9uIG1nX19idXR0b24tLWFjdGlvblxcXCI+0J/QsNGD0LfQsDwvYnV0dG9uPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1nX19nYW1lLWxpbmUtaXRlbVxcXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cXFwibWdfX2J1dHRvbi0tcmVzZXRcXFwiIGNsYXNzPVxcXCJtZ19fYnV0dG9uIG1nX19idXR0b24tLWNhbmNlbFxcXCI+0JIg0LzQtdC90Y48L2J1dHRvbj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5nYW1lQWN0aW9uV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy5nYW1lQWN0aW9uV3JhcHBlci5jbGFzc05hbWUgPSBcIm1nX193cmFwcGVyXCI7XHJcbiAgICAgICAgdGhpcy5nYW1lQWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLmdhbWVBY3Rpb25Db250YWluZXIuY2xhc3NOYW1lID0gXCJtZ19fY29udGVudHMgbWdfX3NpemUtXCIgKyB0aGlzLmdhbWVGaWVsZFNpemU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHBhdGggPSB0aGlzLnNraW5QYXRoOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5nYW1lRmllbGRTaXplOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIG4gPSBpICsgMTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lQWN0aW9uQ29udGFpbmVyLmlubmVySFRNTCArPSAgXCI8ZGl2IGNsYXNzPVxcXCJtZ19fY2FyZCBtZ19fY2FyZC1cIiArIG4gKyBcIlxcXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1nX19jYXJkLS1pbm5lclxcXCIgZGF0YS1pZD1cXFwiXCIgKyBuICsgXCJcXFwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwibWdfX2NhcmQtLW91dHNpZGVcXFwiPjxpbWcgc3JjPVxcXCJpbWcvXCIgKyBwYXRoICsgXCIvMDAucG5nXFxcIj48L3NwYW4+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJtZ19fY2FyZC0taW5zaWRlXFxcIj48aW1nIHNyYz1cXFwiMDAucG5nXFxcIj48L3NwYW4+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nYW1lQWN0aW9uV3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmdhbWVBY3Rpb25Db250YWluZXIpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUFjdGlvbi5hcHBlbmRDaGlsZCh0aGlzLmdhbWVBY3Rpb25XcmFwcGVyKTtcclxuICAgICAgICB0aGlzLmdhbWUuYXBwZW5kQ2hpbGQodGhpcy5nYW1lQWN0aW9uKTtcclxuICAgICAgICB0aGlzLnNldEdhbWVFdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRHYW1lRXZlbnRzKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWdfX2J1dHRvbi0tc3VzcGVuZFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlck1lbnUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1nX19idXR0b24tLXJlc2V0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyTWVudSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcldpblNjcmVlbihkdXJhdGlvbiwgc2NvcmUpIHtcclxuICAgICAgICB0aGlzLnNraW5QYXRoID0gbnVsbDtcclxuICAgICAgICB0aGlzLmdhbWVGaWVsZFNpemUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY2xlYXJHYW1lKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lV2luLmlubmVySFRNTCA9IFwiPGRpdiBjbGFzcz1cXFwibWdfX3dpbi1saW5lLS1jZW50ZXJlZFxcXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XFxcIm1nX193aW4taGVhZGluZ1xcXCI+0J/QvtC30LTRgNCw0LLQu9GP0LXQvCEg0JLRiyDQstGL0LjQs9GA0LDQu9C4ITwvaDI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwibWdfX3dpbi10ZXh0XFxcIj7QktGLINGB0L/RgNCw0LLQuNC70LjRgdGMINC30LAgXCIgKyBkdXJhdGlvbiArIFwiINGB0LXQutGD0L3QtC4g0JLQsNGIINGB0YfQtdGCIC0gXCIgKyBzY29yZSArIFwiLjwvcD5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWdfX3dpbi1saW5lLS1jZW50ZXJlZFxcXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcIm1nX193aW4tc3ViLWhlYWRpbmdcXFwiPtCS0LLQtdC00LjRgtC1INGB0LLQvtC1INC40LzRjyDQtNC70Y8g0LLQvdC10YHQtdC90LjRjyDQt9Cw0L/QuNGB0Lgg0LIg0YDQtdC60L7RgNC00Ys6PC9oMz5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWdfX3dpbi1saW5lLS1jZW50ZXJlZFxcXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcIm1nX193aW4taW5wdXRcXFwiIGNsYXNzPVxcXCJtZ19fd2luLWlucHV0XFxcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XFxcIm1nX19idXR0b24tLXN1Ym1pdFxcXCIgY2xhc3M9XFxcIm1nX19idXR0b24gbWdfX2J1dHRvbi0tZGlzYWJsZWRcXFwiPtCS0L3QtdGB0YLQuDwvYnV0dG9uPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtZ19fd2luLWxpbmUtLWNlbnRlcmVkXFxcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XFxcIm1nX19idXR0b24tLXJlc2V0XFxcIiBjbGFzcz1cXFwibWdfX2J1dHRvbiBtZ19fYnV0dG9uLS1jYW5jZWxcXFwiPtCSINC80LXQvdGOPC9idXR0b24+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cIjtcclxuICAgICAgICB0aGlzLmdhbWUuYXBwZW5kQ2hpbGQodGhpcy5nYW1lV2luKTtcclxuICAgICAgICB0aGlzLnNldFdpblNjcmVlbkV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFdpblNjcmVlbkV2ZW50cygpIHtcclxuICAgICAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1nX193aW4taW5wdXRcIik7XHJcbiAgICAgICAgdmFyIHN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWdfX2J1dHRvbi0tc3VibWl0XCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpbnB1dC52YWx1ZSAhPSBudWxsICYmIGlucHV0LnZhbHVlICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHN1Ym1pdC5jbGFzc0xpc3QucmVtb3ZlKFwibWdfX2J1dHRvbi0tZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXQuY2xhc3NMaXN0LmFkZChcIm1nX19idXR0b24tLWFjdGlvblwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN1Ym1pdC5jbGFzc0xpc3QucmVtb3ZlKFwibWdfX2J1dHRvbi0tYWN0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgc3VibWl0LmNsYXNzTGlzdC5hZGQoXCJtZ19fYnV0dG9uLS1kaXNhYmxlZFwiKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpbnB1dC52YWx1ZSAhPSBudWxsICYmIGlucHV0LnZhbHVlICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRPRE86INGB0LLRj9C30Ywg0YEg0YXRgNCw0L3QuNC70LjRidC10LxcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyTWVudSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZ19fYnV0dG9uLS1yZXNldFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlck1lbnUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJTY29yZXMoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhckdhbWUoKTtcclxuICAgICAgICB0aGlzLmdhbWVTY29yZXMuaW5uZXJIVE1MID0gXCI8ZGl2IGNsYXNzPVxcXCJtZ19fc2NvcmVzLWxpbmUtLWNlbnRlcmVkXFxcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XFxcIm1nX19zY29yZXMtaGVhZGluZ1xcXCI+0KDQtdC60L7RgNC00Ys8L2gyPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1nX19zY29yZXMtbGluZS0tY2VudGVyZWRcXFwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1nX19zY29yZXMtbGluZS1pdGVtXFxcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQoNCw0LfQvNC10YDRiyDQv9C+0LvQtdC5OlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1nX19zY29yZXMtbGluZS1pdGVtXFxcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJtZ19fYnV0dG9uLS1zbWFsbFxcXCIgY2xhc3M9XFxcIm1nX19idXR0b24gbWdfX2J1dHRvbi0tYWN0aW9uXFxcIj7QnNCw0LvQtdC90YzQutC+0LU8L2J1dHRvbj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtZ19fc2NvcmVzLWxpbmUtaXRlbVxcXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cXFwibWdfX2J1dHRvbi0tbWVkaXVtXFxcIiBjbGFzcz1cXFwibWdfX2J1dHRvbiBtZ19fYnV0dG9uLS1hY3Rpb25cXFwiPtCh0YDQtdC00L3QtdC1PC9idXR0b24+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWdfX3Njb3Jlcy1saW5lLWl0ZW1cXFwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XFxcIm1nX19idXR0b24tLWJpZ1xcXCIgY2xhc3M9XFxcIm1nX19idXR0b24gbWdfX2J1dHRvbi0tYWN0aW9uXFxcIj7QkdC+0LvRjNGI0L7QtTwvYnV0dG9uPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1nX19zY29yZXMtbGluZS1pdGVtXFxcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJtZ19fYnV0dG9uLS1yZXNldFxcXCIgY2xhc3M9XFxcIm1nX19idXR0b24gbWdfX2J1dHRvbi0tY2FuY2VsXFxcIj7QndCw0LfQsNC0INCyINC80LXQvdGOPC9idXR0b24+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWdfX3Njb3Jlcy1saW5lLS1jZW50ZXJlZFxcXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwibWdfX3Njb3Jlcy10YWJsZVxcXCIgY2xhc3M9XFxcIm1nX19zY29yZXMtdGFibGVcXFwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtCS0YvQsdC10YDQuNGC0LUg0YDQsNC30LzQtdGAINC/0L7Qu9GPOjwvc3Bhbj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cIjtcclxuICAgICAgICB0aGlzLmdhbWUuYXBwZW5kQ2hpbGQodGhpcy5nYW1lU2NvcmVzKTtcclxuICAgICAgICB0aGlzLnNldFNjb3Jlc0V2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNjb3Jlc0V2ZW50cygpIHtcclxuICAgICAgICB2YXIgZHVtbXkgPSBcIjx0cj4gPHRkPtCY0LzRjzE8L3RkPiA8dGQ+MTUuMDEuMTcgMTE6MTY8L3RkPiA8dGQ+MTAwNTAwPC90ZD4gPHRkPjEwMDUwMDwvdGQ+PC90cj5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj4gPHRkPtCY0LzRjzI8L3RkPiA8dGQ+MTcuMDMuMTcgMTM6MjY8L3RkPiA8dGQ+MjAwNjAwPC90ZD4gPHRkPjIwMDYwMDwvdGQ+PC90cj5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj4gPHRkPtCY0LzRjzM8L3RkPiA8dGQ+MTkuMDUuMTcgMTU6NDY8L3RkPiA8dGQ+MzAwNzAwPC90ZD4gPHRkPjMwMDcwMDwvdGQ+PC90cj5cIlxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWdfX2J1dHRvbi0tc21hbGxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJTY29yZVRhYmxlQnlTaXplKGR1bW15KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZ19fYnV0dG9uLS1tZWRpdW1cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJTY29yZVRhYmxlQnlTaXplKGR1bW15KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZ19fYnV0dG9uLS1iaWdcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJTY29yZVRhYmxlQnlTaXplKGR1bW15KTtcclxuICAgICAgICB9KTsgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWdfX2J1dHRvbi0tcmVzZXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJNZW51KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyU2NvcmVUYWJsZUJ5U2l6ZShpbm5lcikge1xyXG4gICAgICAgIHZhciBzY29yZVRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZ19fc2NvcmVzLXRhYmxlXCIpO1xyXG4gICAgICAgIHNjb3JlVGFibGUuaW5uZXJIVE1MID0gXCI8dGFibGU+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+0JjQvNGPPC90ZD5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7QlNCw0YLQsCDQuCDQstGA0LXQvNGPINC40LPRgNGLPC90ZD5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7QlNC70LjRgtC10LvRjNC90L7RgdGC0Yw8L3RkPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPtCh0YfQtdGCPC90ZD5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XCIgKyBpbm5lciArIFwiPC90Ym9keT48L3RhYmxlPlwiO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyR2FtZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5nYW1lU3RhcnQucGFyZW50Tm9kZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUucmVtb3ZlQ2hpbGQodGhpcy5nYW1lU3RhcnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5nYW1lQWN0aW9uLnBhcmVudE5vZGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLnJlbW92ZUNoaWxkKHRoaXMuZ2FtZUFjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmdhbWVXaW4ucGFyZW50Tm9kZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUucmVtb3ZlQ2hpbGQodGhpcy5nYW1lV2luKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVNjb3Jlcy5wYXJlbnROb2RlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5yZW1vdmVDaGlsZCh0aGlzLmdhbWVTY29yZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvdmlld3MvZ2FtZVZpZXcuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3N0eWxlcy9zYXNzL2FwcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBOzs7OztBQzdEQTtBQUNBOzs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQTdCQTs7Ozs7OztBQ0ZBO0FBQ0E7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQTVCQTs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFKQTtBQUtBO0FBSEE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN6QkE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBN0RBOzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBK0JBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUNBO0FBQ0E7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTtBQUNBO0FBWUE7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTs7Ozs7Ozs7Ozs7QUFBQTtBQWNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBeUJBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7O0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztBQUFBO0FBU0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQXpSQTs7Ozs7O0FDUEE7OztBIiwic291cmNlUm9vdCI6IiJ9