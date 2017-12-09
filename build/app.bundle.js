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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

var Helpers = function () {
    function Helpers() {
        _classCallCheck(this, Helpers);
    }

    _createClass(Helpers, null, [{
        key: "getFormattedDateTime",
        value: function getFormattedDateTime(timeSpan) {
            var dt = new Date(timeSpan);

            var dd = dt.getDate();
            if (dd < 10) {
                dd = "0" + dd;
            }

            var mm = dt.getMonth() + 1;
            if (mm < 10) {
                mm = "0" + mm;
            }

            var yy = dt.getFullYear();

            var hh = dt.getHours();
            if (hh < 10) {
                hh = "0" + hh;
            }

            var min = dt.getMinutes();
            if (min < 10) {
                min = "0" + min;
            }

            var ss = dt.getSeconds();
            if (ss < 10) {
                ss = "0" + ss;
            }

            return dd + "." + mm + "." + yy + " - " + hh + ":" + min + ":" + ss;
        }
    }, {
        key: "getFormattedTime",
        value: function getFormattedTime(seconds) {
            var retStr = "";
            if (seconds < 60) {
                retStr = seconds + " сек.";
            } else if (seconds < 3600) {
                retStr = Math.floor(seconds / 60) + " мин. " + seconds % 60 + " сек.";
            } else {
                retStr = Math.floor(seconds / 3600) + " час. " + Math.floor(seconds % 3600 / 60) + " мин. " + seconds % 3600 % 60 + " сек.";
            }
            return retStr;
        }
    }, {
        key: "shuffle",
        value: function shuffle(array) {
            for (var i = array.length - 1; i > 0; --i) {
                var j = Math.floor(Math.random() * (i + 1));
                var _ref = [array[j], array[i]];
                array[i] = _ref[0];
                array[j] = _ref[1];
            }
            return array;
        }
    }, {
        key: "compareBy",
        value: function compareBy(key) {
            var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "asc";

            return function (a, b) {
                if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                    return 0;
                }

                var varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
                var varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

                var comparison = 0;
                if (varA > varB) {
                    comparison = 1;
                } else if (varA < varB) {
                    comparison = -1;
                }
                return order === "desc" ? comparison * -1 : comparison;
            };
        }
    }]);

    return Helpers;
}();

exports.default = Helpers;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ScoresRepository = function () {
	function ScoresRepository(name, callback) {
		_classCallCheck(this, ScoresRepository);

		var storage = window.localStorage;
		var liveScores = void 0;

		this.getLocalStorage = function () {
			return liveScores || JSON.parse(storage.getItem(name) || "[]");
		};

		this.setLocalStorage = function (scores) {
			storage.setItem(name, JSON.stringify(liveScores = scores));
		};

		if (callback) {
			callback();
		}
	}

	_createClass(ScoresRepository, [{
		key: "getAllBySize",
		value: function getAllBySize(size) {
			var records = this.getLocalStorage();

			return records.filter(function (record) {
				if (record.size !== size) {
					return false;
				}
				return true;
			});
		}
	}, {
		key: "insert",
		value: function insert(item, callback) {
			var data = this.getLocalStorage();
			data.push(item);
			this.setLocalStorage(data);

			if (callback) {
				callback();
			}
		}
	}]);

	return ScoresRepository;
}();

exports.default = ScoresRepository;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helpers = __webpack_require__(0);

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
            this.skinPath = null;
            this.gameFieldSize = null;
            this.gameStart.innerHTML = "<div class=\"mg__menu-line--centered\">\
            <h2 class=\"mg__menu-heading\">Потренируйте свой мозг!</h2>\
            <p class=\"mg__menu-text\">Это простая игра на память - необходимо запомнить положение карт и,\
            поочередно переворачивая их, собрать пары и очистить игровое поле.</p>\
            </div>\
            <div class=\"mg__menu-line--centered\">\
            <div class=\"mg__menu-line-item\">\
            <h3 class=\"mg__menu-sub-heading\">Выберите размер поля:</h3>\
            <ul class=\"mg__menu-size-select\">\
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
            <button id=\"mg__button--start\" class=\"mg__button mg__button--disabled\">Начать игру</button>\
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

            var start = document.querySelector("#mg__button--start");

            var sizeNodes = document.querySelectorAll("ul.mg__menu-size-select span");

            var _loop = function _loop(i) {
                sizeNodes[i].addEventListener("click", function () {
                    for (var j = 0; j < sizeNodes.length; j++) {
                        sizeNodes[j].classList.remove("selected");
                    }
                    sizeNodes[i].classList.add("selected");
                    _this.gameFieldSize = Number.parseInt(sizeNodes[i].getAttribute("data-size"));
                    if (_this.skinPath !== null) {
                        start.classList.remove("mg__button--disabled");
                        start.classList.add("mg__button--action");
                    }
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
                    if (_this.gameFieldSize !== null) {
                        start.classList.remove("mg__button--disabled");
                        start.classList.add("mg__button--action");
                    }
                });
            };

            for (var i = 0; i < skinNodes.length; i++) {
                _loop2(i);
            }
        }
    }, {
        key: "renderGame",
        value: function renderGame(cards) {
            if (!cards || cards.length !== this.gameFieldSize) {
                throw new Error("Invalid GameView renderGame args.");
            }
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
            <button id=\"mg__button--suspend\" class=\"mg__button mg__button--disabled\">Пауза</button>\
            </div>\
            <div class=\"mg__game-line-item\">\
            <button id=\"mg__button--reset\" class=\"mg__button mg__button--cancel\">В меню</button>\
            </div>\
            </div>";

            this.gameActionWrapper = document.createElement("div");
            this.gameActionWrapper.className = "mg__wrapper";
            this.gameActionContainer = document.createElement("div");
            this.gameActionContainer.className = "mg__contents mg__size-" + this.gameFieldSize;
            this.gameActionContainer.id = "mg__contents";

            var path = this.skinPath;
            for (var i = 0; i < cards.length; i++) {
                var n = cards[i].cardId;
                this.gameActionContainer.innerHTML += "<div class=\"mg__card mg__card-" + (i + 1) + "\">\
                <div class=\"mg__card--inner\" data-position=\"" + (i + 1) + "\">\
                <span class=\"mg__card--outside\"><img src=\"img/" + path + "/00.png\"></span>\
                <span class=\"mg__card--inside\"><img src=\"img/" + path + "/" + (n >= 10 ? "" : "0") + n + ".png\"></span>\
                </div>\
                </div>";
            }
            this.gameActionWrapper.appendChild(this.gameActionContainer);
            this.gameAction.appendChild(this.gameActionWrapper);
            this.game.appendChild(this.gameAction);
            var cardContainers = document.querySelectorAll(".mg__card");
            for (var _i = 0; _i < cardContainers.length; _i++) {
                cardContainers[_i].addEventListener("mousedown", function (event) {
                    event.preventDefault();
                });
            }
        }
    }, {
        key: "flipAllCards",
        value: function flipAllCards() {
            var cardNodes = document.querySelectorAll(".mg__card--inner");
            for (var i = 0; i < cardNodes.length; ++i) {
                cardNodes[i].classList.toggle("flipped");
            }
        }
    }, {
        key: "enableSuspendButton",
        value: function enableSuspendButton() {
            var suspend = document.querySelector(".mg__button--disabled");
            suspend.classList.remove("mg__button--disabled");
            suspend.classList.add("mg__button--action");
        }
    }, {
        key: "flipBack",
        value: function flipBack(position) {
            var flippedCard = document.querySelector(".mg__card-" + position + " .mg__card--inner");
            if (flippedCard.parentNode !== null) {
                flippedCard.classList.remove("flipped");
            }
        }
    }, {
        key: "setValue",
        value: function setValue(element, value) {
            var counter = document.querySelector("#mg__game-" + element);
            if (counter.parentNode !== null) {
                counter.innerHTML = value;
            }
        }
    }, {
        key: "setSolved",
        value: function setSolved(position) {
            var solvedCard = document.querySelector(".mg__card-" + position + " .mg__card--inner");
            if (solvedCard.parentNode !== null) {
                solvedCard.classList.add("solved");
            }
        }
    }, {
        key: "renderWinScreen",
        value: function renderWinScreen(duration, score) {
            this.clearGame();
            this.gameWin.innerHTML = "<div class=\"mg__win-line--centered\">\
            <h2 class=\"mg__win-heading\">Поздравляем! Вы выиграли!</h2>\
            <p class=\"mg__win-text\">Вы справились за " + duration + " секунд. Ваш счет - " + score + ".</p>\
            </div>\
            <div class=\"mg__win-line--centered\">\
            <h3 class=\"mg__win-sub-heading\">Введите свое имя для внесения записи в рекорды:</h3>\
            </div>\
            <div class=\"mg__win-line--centered\">\
            <input type=\"text\" id=\"mg__win-input\" class=\"mg__win-input\" autofocus>\
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
            var input = document.querySelector("#mg__win-input");
            var submit = document.querySelector("#mg__button--submit");

            input.addEventListener("input", function () {
                if (input.value !== null && input.value !== "") {
                    submit.classList.remove("mg__button--disabled");
                    submit.classList.add("mg__button--action");
                } else {
                    submit.classList.remove("mg__button--action");
                    submit.classList.add("mg__button--disabled");
                }
            });
        }
    }, {
        key: "renderScores",
        value: function renderScores(size, scoresBySize) {
            var sortKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "name";
            var sortDirection = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "asc";

            this.clearGame();
            var table = "<table>\
            <thead>\
            <tr>\
            <td class=\"mg__scores-table-heading\" data-tag=\"name\">Имя</td>\
            <td class=\"mg__scores-table-heading\" data-tag=\"id\">Дата и время игры</td>\
            <td class=\"mg__scores-table-heading\" data-tag=\"duration\">Длительность</td>\
            <td class=\"mg__scores-table-heading\" data-tag=\"score\">Счет</td>\
            </tr>\
            </thead>\
            <tbody>";
            if (scoresBySize.length !== 0) {
                for (var i = 0; i < scoresBySize.length; i++) {
                    table += "<tr><td>" + scoresBySize[i].name + "</td>\
                    <td>" + _helpers2.default.getFormattedDateTime(scoresBySize[i].id) + "</td>\
                    <td>" + _helpers2.default.getFormattedTime(scoresBySize[i].duration) + "</td>\
                    <td>" + scoresBySize[i].score + "</td></tr>";
                }
            } else {
                table += "<tr><td class=\"wide\" colspan=\"4\">Нет результатов игр на поле размером " + size + ".</td></tr>";
            }
            table += "</tbody></table>";
            this.gameScores.innerHTML = "<div class=\"mg__scores-line--centered\">\
            <h2 class=\"mg__scores-heading\">Рекорды</h2>\
            </div>\
            <div class=\"mg__scores-line--centered\">\
            <div class=\"mg__scores-line-item\">\
            Размеры полей:\
            </div>\
            <div class=\"mg__scores-line-item\">\
            <button data-size=\"16\" class=\"mg__button mg__button--action\">Маленькое</button>\
            </div>\
            <div class=\"mg__scores-line-item\">\
            <button data-size=\"36\" class=\"mg__button mg__button--action\">Среднее</button>\
            </div>\
            <div class=\"mg__scores-line-item\">\
            <button data-size=\"64\" class=\"mg__button mg__button--action\">Большое</button>\
            </div>\
            <div class=\"mg__scores-line-item\">\
            <button id=\"mg__button--reset\" class=\"mg__button mg__button--cancel\">Назад в меню</button>\
            </div>\
            </div>\
            <div class=\"mg__scores-line--centered\">\
            <div id=\"mg__scores-table\" class=\"mg__scores-table\">" + table + "</div>\
            </div>";
            this.game.appendChild(this.gameScores);
            var sizeButtons = document.querySelectorAll(".mg__button--action");
            for (var _i2 = 0; _i2 < sizeButtons.length; ++_i2) {
                if (Number.parseInt(sizeButtons[_i2].getAttribute("data-size")) === size) {
                    sizeButtons[_i2].classList.add("mg__button--selected");
                }
            }
            var columnHeads = document.querySelectorAll(".mg__scores-table-heading");
            for (var _i3 = 0; _i3 < columnHeads.length; _i3++) {
                if (columnHeads[_i3].getAttribute("data-tag") === sortKey) {
                    if (sortDirection !== "desc") {
                        columnHeads[_i3].classList.add("selected--plus");
                    } else {
                        columnHeads[_i3].classList.add("selected--minus");
                    }
                }
            }
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
    }, {
        key: "bindShowMenu",
        value: function bindShowMenu(handler) {
            document.querySelector("#mg__button--reset").addEventListener("click", function () {
                handler();
            });
        }
    }, {
        key: "bindStartGame",
        value: function bindStartGame(handler) {
            var _this2 = this;

            document.querySelector("#mg__button--start").addEventListener("click", function () {
                if (_this2.gameFieldSize !== null && _this2.skinPath !== null) {
                    handler(_this2.gameFieldSize);
                }
            });
        }
    }, {
        key: "bindSuspendOrResumeGame",
        value: function bindSuspendOrResumeGame(handler) {
            var suspend = document.querySelector("#mg__button--suspend");
            var cardNodes = document.querySelectorAll(".mg__card--inner");

            suspend.addEventListener("click", function () {
                if (!suspend.classList.contains("mg__button--disabled")) {
                    if (suspend.classList.contains("mg__button--action")) {
                        suspend.classList.remove("mg__button--action");
                        suspend.classList.add("mg__button--cancel");
                        suspend.innerHTML = "Возобновить";
                        for (var i = 0; i < cardNodes.length; ++i) {
                            cardNodes[i].classList.toggle("paused");
                        }
                    } else if (suspend.classList.contains("mg__button--cancel")) {
                        suspend.classList.remove("mg__button--cancel");
                        suspend.classList.add("mg__button--action");
                        suspend.innerHTML = "Пауза";
                        for (var _i4 = 0; _i4 < cardNodes.length; ++_i4) {
                            cardNodes[_i4].classList.toggle("paused");
                        }
                    }
                    handler();
                }
            });
        }
    }, {
        key: "bindCardClickHandler",
        value: function bindCardClickHandler(handler) {
            var cards = document.querySelectorAll(".mg__card--inner");

            var _loop3 = function _loop3(i) {
                cards[i].addEventListener("click", function () {
                    if (!cards[i].classList.contains("flipped") && !cards[i].classList.contains("solved") && !cards[i].classList.contains("paused")) {
                        cards[i].classList.add("flipped");
                        handler(Number.parseInt(cards[i].getAttribute("data-position")));
                    }
                });
            };

            for (var i = 0; i < cards.length; i++) {
                _loop3(i);
            }
        }
    }, {
        key: "bindShowScores",
        value: function bindShowScores(handler) {
            document.querySelector("#mg__button--scores").addEventListener("click", function () {
                handler();
            });
        }
    }, {
        key: "bindShowScoresBySize",
        value: function bindShowScoresBySize(handler) {
            var sizeButtons = document.querySelectorAll(".mg__button--action");

            var _loop4 = function _loop4(i) {
                sizeButtons[i].addEventListener("click", function () {
                    handler(Number.parseInt(sizeButtons[i].getAttribute("data-size")));
                });
            };

            for (var i = 0; i < sizeButtons.length; i++) {
                _loop4(i);
            }
        }
    }, {
        key: "bindShowSortedScores",
        value: function bindShowSortedScores(handler) {
            var colHeads = document.querySelectorAll(".mg__scores-table-heading");
            var activeSizeButton = document.querySelector(".mg__button--selected");
            var direction = void 0;

            var _loop5 = function _loop5(i) {
                colHeads[i].addEventListener("click", function () {
                    if (colHeads[i].classList.contains("selected--minus")) {
                        direction = "asc";
                    } else {
                        direction = "desc";
                    }
                    handler(Number.parseInt(activeSizeButton.getAttribute("data-size")), colHeads[i].getAttribute("data-tag"), direction);
                });
            };

            for (var i = 0; i < colHeads.length; i++) {
                _loop5(i);
            }
        }
    }, {
        key: "bindSaveScore",
        value: function bindSaveScore(handler) {
            var input = document.querySelector("#mg__win-input");
            document.querySelector("#mg__button--submit").addEventListener("click", function () {
                if (input.value !== null && input.value !== "") {
                    handler(input.value);
                }
            });
        }
    }]);

    return GameView;
}();

exports.default = GameView;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _scoresRepository = __webpack_require__(1);

var _scoresRepository2 = _interopRequireDefault(_scoresRepository);

var _gameView = __webpack_require__(2);

var _gameView2 = _interopRequireDefault(_gameView);

var _gameController = __webpack_require__(5);

var _gameController2 = _interopRequireDefault(_gameController);

var _app = __webpack_require__(9);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_app2.default.container);

var view = new _gameView2.default();

var repo = new _scoresRepository2.default("pairs-memory-game");

var controller = new _gameController2.default(view, repo);
controller.setMaxField(64);
//controller.setFakeRepoData();

window.addEventListener("load", controller.showMenu());

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _game = __webpack_require__(6);

var _game2 = _interopRequireDefault(_game);

var _gameView = __webpack_require__(2);

var _gameView2 = _interopRequireDefault(_gameView);

var _scoresRepository = __webpack_require__(1);

var _scoresRepository2 = _interopRequireDefault(_scoresRepository);

var _helpers = __webpack_require__(0);

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameController = function () {
    function GameController(view, repo) {
        _classCallCheck(this, GameController);

        if (view instanceof _gameView2.default && repo instanceof _scoresRepository2.default) {
            this.view = view;
            this.repo = repo;
        } else {
            throw new Error("Invalid GameController ctor args.");
        }
        this.game = null;
        this.intervalId = null;
        this.firstClicked = null;
        this.maxFieldSize = 16;
    }

    _createClass(GameController, [{
        key: "setMaxField",
        value: function setMaxField(maxFieldSize) {
            this.maxFieldSize = maxFieldSize;
        }
    }, {
        key: "showMenu",
        value: function showMenu() {
            this.game = null;
            this.view.renderMenu();
            this.view.bindStartGame(this.startGame.bind(this));
            this.view.bindShowScores(this.showScores.bind(this));
        }
    }, {
        key: "startGame",
        value: function startGame(fieldSize) {
            var _this = this;

            this.game = new _game2.default(fieldSize, this.maxFieldSize);
            this.view.renderGame(this.game.gameField);
            this.view.flipAllCards();
            window.setTimeout(function () {
                _this.view.flipAllCards();
                _this.game.start();
                _this.intervalId = window.setInterval(function () {
                    _this.refreshTime();
                }, 50);
                _this.view.enableSuspendButton();
            }, fieldSize / 8 * 1000);
            this.view.bindShowMenu(this.showMenu.bind(this));
            this.view.bindCardClickHandler(this.cardClickHandler.bind(this));
            this.view.bindSuspendOrResumeGame(this.suspendOrResumeGame.bind(this));
        }
    }, {
        key: "cardClickHandler",
        value: function cardClickHandler(position) {
            var _this2 = this;

            var result = this.game.cardClickHandler(position);
            window.setTimeout(function () {
                switch (result) {
                    case "first":
                        _this2.firstClicked = position;
                        break;

                    case "second":
                        _this2.view.flipBack(_this2.firstClicked);
                        _this2.view.flipBack(position);
                        _this2.firstClickedId = null;
                        break;

                    case "solved":
                        _this2.view.setSolved(_this2.firstClicked);
                        _this2.view.setSolved(position);
                        _this2.firstClickedId = null;
                        break;

                    case "end":
                        _this2.endGame();
                        break;

                    default:
                        break;
                }
            }, 500);
            this.refreshClicks();
        }
    }, {
        key: "suspendOrResumeGame",
        value: function suspendOrResumeGame() {
            this.game.suspendOrResume();
        }
    }, {
        key: "endGame",
        value: function endGame() {
            this.game.end();
            clearInterval(this.intervalId);
            this.intervalId = null;
            this.showWinScreen();
        }
    }, {
        key: "refreshTime",
        value: function refreshTime() {
            if (this.game.state === "run") {
                this.view.setValue("time", this.game.timer.getCurrentValue());
            }
        }
    }, {
        key: "refreshClicks",
        value: function refreshClicks() {
            if (this.game.state === "run") {
                this.view.setValue("clicks", this.game.clicks);
            }
        }
    }, {
        key: "showWinScreen",
        value: function showWinScreen() {
            var duration = this.game.timer.getCurrentValue();
            var score = this.game.getScore();
            this.view.renderWinScreen(duration, score);
            this.view.bindShowMenu(this.showMenu.bind(this));
            this.view.bindSaveScore(this.saveScore.bind(this));
        }
    }, {
        key: "saveScore",
        value: function saveScore(nickname) {
            this.repo.insert({
                id: Date.now(),
                name: nickname,
                size: this.game.gameField.length,
                duration: this.game.timer.getCurrentValue(),
                score: this.game.getScore()
            });
            this.showScores(this.game.gameField.length);
        }
    }, {
        key: "showScores",
        value: function showScores() {
            var fieldSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 16;
            var sortKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "name";
            var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "asc";

            var scoresBySize = this.repo.getAllBySize(fieldSize);
            var sortedScores = scoresBySize.slice(0).sort(_helpers2.default.compareBy(sortKey, direction));
            this.view.renderScores(fieldSize, sortedScores, sortKey, direction);
            this.view.bindShowMenu(this.showMenu.bind(this));
            this.view.bindShowScoresBySize(this.showScores.bind(this));
            this.view.bindShowSortedScores(this.showScores.bind(this));
        }
    }, {
        key: "setFakeRepoData",
        value: function setFakeRepoData() {
            var fake = new Array();
            for (var i = 0; i < 10; i++) {
                fake.push({
                    id: Date.now(),
                    name: "Player" + i,
                    size: 16,
                    duration: i * 10,
                    score: i * 100
                });
            }
            for (var _i = 0; _i < 15; _i++) {
                fake.push({
                    id: Date.now(),
                    name: "Player" + _i,
                    size: 36,
                    duration: _i * 20,
                    score: _i * 200
                });
            }
            for (var _i2 = 0; _i2 < 5; _i2++) {
                fake.push({
                    id: Date.now(),
                    name: "Player" + _i2,
                    size: 64,
                    duration: _i2 * 100,
                    score: _i2 * 1000
                });
            }
            for (var _i3 = 0; _i3 < fake.length; _i3++) {
                this.repo.insert(fake[_i3]);
            }
        }
    }]);

    return GameController;
}();

exports.default = GameController;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _card = __webpack_require__(7);

var _card2 = _interopRequireDefault(_card);

var _timer = __webpack_require__(8);

var _timer2 = _interopRequireDefault(_timer);

var _helpers = __webpack_require__(0);

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
    function Game(fieldSize, maxFieldSize) {
        _classCallCheck(this, Game);

        this.gameField = Game.getNewGameField(fieldSize, maxFieldSize);
        this.timer = new _timer2.default();
        this.clicks = 0;
        this.startTimeoutId = null;
        this.isFirstClicked = false;
        this.firstClickedId = null;
        this.state = "stop";
        this.unresolvedCount = fieldSize / 2;
    }

    _createClass(Game, [{
        key: "start",
        value: function start() {
            this.timer.start();
            this.state = "run";
        }
    }, {
        key: "suspendOrResume",
        value: function suspendOrResume() {
            if (this.state === "run") {
                this.timer.stop();
                this.state = "suspended";
            } else if (this.state === "suspended") {
                this.timer.start();
                this.state = "run";
            }
        }
    }, {
        key: "end",
        value: function end() {
            this.timer.stop();
            this.state = "stop";
        }
    }, {
        key: "cardClickHandler",
        value: function cardClickHandler(position) {
            this.clicks++;
            var result = "";
            if (this.isFirstClicked === false) {
                this.isFirstClicked = true;
                this.firstClickedId = this.gameField[position - 1].cardId;
                result = "first";
            } else {
                if (this.firstClickedId === this.gameField[position - 1].cardId) {
                    result = "solved";
                    this.unresolvedCount--;
                } else {
                    result = "second";
                }
                this.isFirstClicked = false;
                this.firstClickedId = null;
            }
            if (this.unresolvedCount <= 0) {
                result = "end";
            }
            return result;
        }
    }, {
        key: "getScore",
        value: function getScore() {
            return this.gameField.length * 1000 - this.clicks * 10 - Math.floor(this.timer.getCurrentValue() * 10 / 1000);
        }
    }], [{
        key: "getNewGameField",
        value: function getNewGameField(fieldSize, maxFieldSize) {
            var possibleCards = new Array();
            for (var i = 0; i < maxFieldSize / 2; ++i) {
                possibleCards.push(new _card2.default(i + 1));
            }
            _helpers2.default.shuffle(possibleCards);

            var gameField = new Array();
            for (var _i = 0; _i < fieldSize / 2; ++_i) {
                gameField.push(possibleCards[_i]);
                gameField.push(possibleCards[_i]);
            }
            gameField = _helpers2.default.shuffle(gameField);
            for (var _i2 = 0; _i2 < gameField.length; ++_i2) {
                gameField[_i2].cardPosition = _i2 + 1;
            }
            return gameField;
        }
    }]);

    return Game;
}();

exports.default = Game;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Card = function Card(id) {
    _classCallCheck(this, Card);

    this.cardId = id;
    this.cardState = "facedown";
    this.cardPosition = null;
};

exports.default = Card;

/***/ }),
/* 8 */
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
            if (this.state === "stopped") {
                this.state = "started";
                this.startTime = Date.now();
            }
        }
    }, {
        key: "stop",
        value: function stop() {
            if (this.state === "started") {
                this.state = "stopped";
                this.value += Math.round((Date.now() - this.startTime) / 1000);
                this.startTime = null;
            }
        }
    }, {
        key: "getCurrentValue",
        value: function getCurrentValue() {
            if (this.state === "started") {
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
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiODlhMWUzOTA1MWNjMGVhNzNmMCIsIndlYnBhY2s6Ly8vc3JjL2pzL2hlbHBlcnMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vc3JjL2pzL2luZnJhc3RydWN0dXJlL3Njb3Jlc1JlcG9zaXRvcnkuanMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy92aWV3cy9nYW1lVmlldy5qcyIsIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vc3JjL2pzL2NvbnRyb2xsZXJzL2dhbWVDb250cm9sbGVyLmpzIiwid2VicGFjazovLy9zcmMvanMvbW9kZWxzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9tb2RlbHMvY2FyZC5qcyIsIndlYnBhY2s6Ly8vc3JjL2pzL21vZGVscy90aW1lci5qcyIsIndlYnBhY2s6Ly8vLi4vc3R5bGVzL3Nhc3MvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYjg5YTFlMzkwNTFjYzBlYTczZjAiLCJcInVzZSBzdHJpY3RcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVscGVycyB7XHJcblxyXG4gICAgc3RhdGljIGdldEZvcm1hdHRlZERhdGVUaW1lKHRpbWVTcGFuKSB7XHJcbiAgICAgICAgbGV0IGR0ID0gbmV3IERhdGUodGltZVNwYW4pO1xyXG5cclxuICAgICAgICBsZXQgZGQgPSBkdC5nZXREYXRlKCk7XHJcbiAgICAgICAgaWYgKGRkIDwgMTApIHsgZGQgPSBcIjBcIiArIGRkOyB9XHJcblxyXG4gICAgICAgIGxldCBtbSA9IGR0LmdldE1vbnRoKCkgKyAxO1xyXG4gICAgICAgIGlmIChtbSA8IDEwKSB7IG1tID0gXCIwXCIgKyBtbTsgfVxyXG5cclxuICAgICAgICBsZXQgeXkgPSBkdC5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgICAgICBsZXQgaGggPSBkdC5nZXRIb3VycygpO1xyXG4gICAgICAgIGlmIChoaCA8IDEwKSB7IGhoID0gXCIwXCIgKyBoaDsgfVxyXG5cclxuICAgICAgICBsZXQgbWluID0gZHQuZ2V0TWludXRlcygpO1xyXG4gICAgICAgIGlmIChtaW4gPCAxMCkgeyBtaW4gPSBcIjBcIiArIG1pbjsgfVxyXG5cclxuICAgICAgICBsZXQgc3MgPSBkdC5nZXRTZWNvbmRzKCk7XHJcbiAgICAgICAgaWYgKHNzIDwgMTApIHsgc3MgPSBcIjBcIiArIHNzOyB9XHJcblxyXG4gICAgICAgIHJldHVybiBkZCArIFwiLlwiICsgbW0gKyBcIi5cIiArIHl5ICsgXCIgLSBcIiArIGhoICsgXCI6XCIgKyBtaW4gKyBcIjpcIiArIHNzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRGb3JtYXR0ZWRUaW1lKHNlY29uZHMpIHtcclxuICAgICAgICBsZXQgcmV0U3RyID0gXCJcIjtcclxuICAgICAgICBpZiAoc2Vjb25kcyA8IDYwKSB7XHJcbiAgICAgICAgICAgIHJldFN0ciA9IHNlY29uZHMgKyBcIiDRgdC10LouXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgMzYwMCkge1xyXG4gICAgICAgICAgICByZXRTdHIgPSBNYXRoLmZsb29yKChzZWNvbmRzIC8gNjApKSArIFwiINC80LjQvS4gXCIgKyAoc2Vjb25kcyAlIDYwKSArIFwiINGB0LXQui5cIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXRTdHIgPVxyXG4gICAgICAgICAgICAgICAgTWF0aC5mbG9vcigoc2Vjb25kcyAvIDM2MDApKSArIFwiINGH0LDRgS4gXCJcclxuICAgICAgICAgICAgICAgICsgTWF0aC5mbG9vcigoc2Vjb25kcyAlIDM2MDApIC8gNjApICsgXCIg0LzQuNC9LiBcIlxyXG4gICAgICAgICAgICAgICAgKyAoKHNlY29uZHMgJSAzNjAwKSAlIDYwKSArIFwiINGB0LXQui5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldFN0cjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2h1ZmZsZShhcnJheSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBhcnJheS5sZW5ndGggLSAxOyBpID4gMDsgLS1pKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcclxuICAgICAgICAgICAgW2FycmF5W2ldLCBhcnJheVtqXV0gPSBbYXJyYXlbal0sIGFycmF5W2ldXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjb21wYXJlQnkoa2V5LCBvcmRlciA9IFwiYXNjXCIpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgaWYgKCFhLmhhc093blByb3BlcnR5KGtleSkgfHwgIWIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZhckEgPSAodHlwZW9mIGFba2V5XSA9PT0gXCJzdHJpbmdcIikgP1xyXG4gICAgICAgICAgICAgICAgYVtrZXldLnRvVXBwZXJDYXNlKCkgOiBhW2tleV07XHJcbiAgICAgICAgICAgIGNvbnN0IHZhckIgPSAodHlwZW9mIGJba2V5XSA9PT0gXCJzdHJpbmdcIikgP1xyXG4gICAgICAgICAgICAgICAgYltrZXldLnRvVXBwZXJDYXNlKCkgOiBiW2tleV07XHJcblxyXG4gICAgICAgICAgICBsZXQgY29tcGFyaXNvbiA9IDA7XHJcbiAgICAgICAgICAgIGlmICh2YXJBID4gdmFyQikge1xyXG4gICAgICAgICAgICAgICAgY29tcGFyaXNvbiA9IDE7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFyQSA8IHZhckIpIHtcclxuICAgICAgICAgICAgICAgIGNvbXBhcmlzb24gPSAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgKG9yZGVyID09PSBcImRlc2NcIikgPyAoY29tcGFyaXNvbiAqIC0xKSA6IGNvbXBhcmlzb25cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9oZWxwZXJzL2hlbHBlcnMuanMiLCJcInVzZSBzdHJpY3RcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmVzUmVwb3NpdG9yeSB7XHJcblx0Y29uc3RydWN0b3IobmFtZSwgY2FsbGJhY2spIHtcclxuXHJcblx0XHRjb25zdCBzdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcclxuXHRcdGxldCBsaXZlU2NvcmVzO1xyXG5cclxuXHRcdHRoaXMuZ2V0TG9jYWxTdG9yYWdlID0gKCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gbGl2ZVNjb3JlcyB8fCBKU09OLnBhcnNlKHN0b3JhZ2UuZ2V0SXRlbShuYW1lKSB8fCBcIltdXCIpO1xyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLnNldExvY2FsU3RvcmFnZSA9IChzY29yZXMpID0+IHtcclxuXHRcdFx0c3RvcmFnZS5zZXRJdGVtKG5hbWUsIEpTT04uc3RyaW5naWZ5KGxpdmVTY29yZXMgPSBzY29yZXMpKTtcclxuXHRcdH07XHJcblxyXG5cdFx0aWYgKGNhbGxiYWNrKSB7XHJcblx0XHRcdGNhbGxiYWNrKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXRBbGxCeVNpemUoc2l6ZSkge1xyXG5cdFx0Y29uc3QgcmVjb3JkcyA9IHRoaXMuZ2V0TG9jYWxTdG9yYWdlKCk7XHJcblxyXG5cdFx0cmV0dXJuIHJlY29yZHMuZmlsdGVyKHJlY29yZCA9PiB7XHJcblx0XHRcdGlmIChyZWNvcmQuc2l6ZSAhPT0gc2l6ZSkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0aW5zZXJ0KGl0ZW0sIGNhbGxiYWNrKSB7XHJcblx0XHRjb25zdCBkYXRhID0gdGhpcy5nZXRMb2NhbFN0b3JhZ2UoKTtcclxuXHRcdGRhdGEucHVzaChpdGVtKTtcclxuXHRcdHRoaXMuc2V0TG9jYWxTdG9yYWdlKGRhdGEpO1xyXG5cclxuXHRcdGlmIChjYWxsYmFjaykge1xyXG5cdFx0XHRjYWxsYmFjaygpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvaW5mcmFzdHJ1Y3R1cmUvc2NvcmVzUmVwb3NpdG9yeS5qcyIsIlwidXNlIHN0cmljdFwiXHJcblxyXG5pbXBvcnQgSGVscGVycyBmcm9tIFwiLi8uLi9oZWxwZXJzL2hlbHBlcnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc2tpblBhdGggPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZ2FtZUZpZWxkU2l6ZSA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy5nYW1lLmlkID0gXCJtZ1wiO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5jbGFzc05hbWUgPSBcIm1nXCI7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLmdhbWVTdGFydC5pZCA9IFwibWdfX21lbnVcIjtcclxuICAgICAgICB0aGlzLmdhbWVTdGFydC5jbGFzc05hbWUgPSBcIm1nX19tZW51XCI7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZUFjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy5nYW1lQWN0aW9uLmlkID0gXCJtZ19fZ2FtZVwiO1xyXG4gICAgICAgIHRoaXMuZ2FtZUFjdGlvbi5jbGFzc05hbWUgPSBcIm1nX19nYW1lXCI7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZVdpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy5nYW1lV2luLmlkID0gXCJtZ19fd2luXCI7XHJcbiAgICAgICAgdGhpcy5nYW1lV2luLmNsYXNzTmFtZSA9IFwibWdfX3dpblwiO1xyXG5cclxuICAgICAgICB0aGlzLmdhbWVTY29yZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuZ2FtZVNjb3Jlcy5pZCA9IFwibWdfX3Njb3Jlc1wiO1xyXG4gICAgICAgIHRoaXMuZ2FtZVNjb3Jlcy5jbGFzc05hbWUgPSBcIm1nX19zY29yZXNcIjtcclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FwcGNvbnRhaW5lclwiKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmdhbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlck1lbnUoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhckdhbWUoKTtcclxuICAgICAgICB0aGlzLnNraW5QYXRoID0gbnVsbDtcclxuICAgICAgICB0aGlzLmdhbWVGaWVsZFNpemUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXJ0LmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgIFwiPGRpdiBjbGFzcz1cXFwibWdfX21lbnUtbGluZS0tY2VudGVyZWRcXFwiPlxcXHJcbiAgICAgICAgICAgIDxoMiBjbGFzcz1cXFwibWdfX21lbnUtaGVhZGluZ1xcXCI+0J/QvtGC0YDQtdC90LjRgNGD0LnRgtC1INGB0LLQvtC5INC80L7Qt9CzITwvaDI+XFxcclxuICAgICAgICAgICAgPHAgY2xhc3M9XFxcIm1nX19tZW51LXRleHRcXFwiPtCt0YLQviDQv9GA0L7RgdGC0LDRjyDQuNCz0YDQsCDQvdCwINC/0LDQvNGP0YLRjCAtINC90LXQvtCx0YXQvtC00LjQvNC+INC30LDQv9C+0LzQvdC40YLRjCDQv9C+0LvQvtC20LXQvdC40LUg0LrQsNGA0YIg0LgsXFxcclxuICAgICAgICAgICAg0L/QvtC+0YfQtdGA0LXQtNC90L4g0L/QtdGA0LXQstC+0YDQsNGH0LjQstCw0Y8g0LjRhSwg0YHQvtCx0YDQsNGC0Ywg0L/QsNGA0Ysg0Lgg0L7Rh9C40YHRgtC40YLRjCDQuNCz0YDQvtCy0L7QtSDQv9C+0LvQtS48L3A+XFxcclxuICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWdfX21lbnUtbGluZS0tY2VudGVyZWRcXFwiPlxcXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1nX19tZW51LWxpbmUtaXRlbVxcXCI+XFxcclxuICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJtZ19fbWVudS1zdWItaGVhZGluZ1xcXCI+0JLRi9Cx0LXRgNC40YLQtSDRgNCw0LfQvNC10YAg0L/QvtC70Y86PC9oMz5cXFxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XFxcIm1nX19tZW51LXNpemUtc2VsZWN0XFxcIj5cXFxyXG4gICAgICAgICAgICA8bGk+PHNwYW4gZGF0YS1zaXplPVxcXCIxNlxcXCI+0JzQsNC70LXQvdGM0LrQuNC5ICg0IHggNCk8L3NwYW4+PC9saT5cXFxyXG4gICAgICAgICAgICA8bGk+PHNwYW4gZGF0YS1zaXplPVxcXCIzNlxcXCI+0KHRgNC10LTQvdC40LkgKDYgeCA2KTwvc3Bhbj48L2xpPlxcXHJcbiAgICAgICAgICAgIDxsaT48c3BhbiBkYXRhLXNpemU9XFxcIjY0XFxcIj7QkdC+0LvRjNGI0L7QuSAoOCB4IDgpPC9zcGFuPjwvbGk+XFxcclxuICAgICAgICAgICAgPC91bD5cXFxyXG4gICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtZ19fbWVudS1saW5lLWl0ZW1cXFwiPlxcXHJcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwibWdfX21lbnUtc3ViLWhlYWRpbmdcXFwiPtCS0YvQsdC10YDQuNGC0LUg0YLQtdC80YMg0LrQsNGA0YI6PC9oMz5cXFxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XFxcIm1nX19tZW51LXNraW4tc2VsZWN0XFxcIj5cXFxyXG4gICAgICAgICAgICA8bGk+PHNwYW4gZGF0YS1wYXRoPVxcXCJmbGFnc1xcXCI+0KTQu9Cw0LPQuCDRgdGC0YDQsNC9PC9zcGFuPjwvbGk+XFxcclxuICAgICAgICAgICAgPGxpPjxzcGFuIGRhdGEtcGF0aD1cXFwibmV3LXllYXJcXFwiPtCd0L7QstGL0Lkg0LPQvtC0PC9zcGFuPjwvbGk+XFxcclxuICAgICAgICAgICAgPGxpPjxzcGFuIGRhdGEtcGF0aD1cXFwib3V0ZG9vcnNcXFwiPtCi0YPRgNC40LfQvDwvc3Bhbj48L2xpPlxcXHJcbiAgICAgICAgICAgIDxsaT48c3BhbiBkYXRhLXBhdGg9XFxcInBva2Vtb25zXFxcIj7Qn9C+0LrQtdC80L7QvdGLPC9zcGFuPjwvbGk+XFxcclxuICAgICAgICAgICAgPGxpPjxzcGFuIGRhdGEtcGF0aD1cXFwic3BvcnRzXFxcIj7QodC/0L7RgNGCPC9zcGFuPjwvbGk+XFxcclxuICAgICAgICAgICAgPC91bD5cXFxyXG4gICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtZ19fbWVudS1saW5lLS1jZW50ZXJlZFxcXCI+XFxcclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cXFwibWdfX2J1dHRvbi0tc3RhcnRcXFwiIGNsYXNzPVxcXCJtZ19fYnV0dG9uIG1nX19idXR0b24tLWRpc2FibGVkXFxcIj7QndCw0YfQsNGC0Ywg0LjQs9GA0YM8L2J1dHRvbj5cXFxyXG4gICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtZ19fbWVudS1saW5lLS1jZW50ZXJlZFxcXCI+XFxcclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cXFwibWdfX2J1dHRvbi0tc2NvcmVzXFxcIiBjbGFzcz1cXFwibWdfX2J1dHRvbiBtZ19fYnV0dG9uLS1pbmZvXFxcIj7Qn9C+0YHQvNC+0YLRgNC10YLRjCDRgNC10LrQvtGA0LTRizwvYnV0dG9uPlxcXHJcbiAgICAgICAgICAgIDwvZGl2PlwiO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5hcHBlbmRDaGlsZCh0aGlzLmdhbWVTdGFydCk7XHJcbiAgICAgICAgdGhpcy5zZXRNZW51RXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TWVudUV2ZW50cygpIHtcclxuICAgICAgICBsZXQgc3RhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21nX19idXR0b24tLXN0YXJ0XCIpO1xyXG5cclxuICAgICAgICBsZXQgc2l6ZU5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInVsLm1nX19tZW51LXNpemUtc2VsZWN0IHNwYW5cIik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc2l6ZU5vZGVzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemVOb2Rlcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNpemVOb2Rlc1tqXS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzaXplTm9kZXNbaV0uY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lRmllbGRTaXplID0gTnVtYmVyLnBhcnNlSW50KHNpemVOb2Rlc1tpXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNpemVcIikpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2tpblBhdGggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydC5jbGFzc0xpc3QucmVtb3ZlKFwibWdfX2J1dHRvbi0tZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQuY2xhc3NMaXN0LmFkZChcIm1nX19idXR0b24tLWFjdGlvblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc2tpbk5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInVsLm1nX19tZW51LXNraW4tc2VsZWN0IHNwYW5cIik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBza2luTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc2tpbk5vZGVzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNraW5Ob2Rlcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNraW5Ob2Rlc1tqXS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBza2luTm9kZXNbaV0uY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5za2luUGF0aCA9IHNraW5Ob2Rlc1tpXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBhdGhcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lRmllbGRTaXplICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQuY2xhc3NMaXN0LnJlbW92ZShcIm1nX19idXR0b24tLWRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0LmNsYXNzTGlzdC5hZGQoXCJtZ19fYnV0dG9uLS1hY3Rpb25cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJHYW1lKGNhcmRzKSB7XHJcbiAgICAgICAgaWYgKCFjYXJkcyB8fCBjYXJkcy5sZW5ndGggIT09IHRoaXMuZ2FtZUZpZWxkU2l6ZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIEdhbWVWaWV3IHJlbmRlckdhbWUgYXJncy5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2xlYXJHYW1lKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lQWN0aW9uLmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgIFwiPGRpdiBjbGFzcz1cXFwibWdfX2dhbWUtbGluZS0tY2VudGVyZWRcXFwiPlxcXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1nX19nYW1lLWxpbmUtaXRlbVxcXCI+XFxcclxuICAgICAgICAgICAgPHNwYW4+0JrQvtC70LjRh9C10YHRgtCy0L4g0YXQvtC00L7Qsjo8L3NwYW4+XFxcclxuICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWdfX2dhbWUtbGluZS1pdGVtXFxcIj5cXFxyXG4gICAgICAgICAgICA8c3BhbiBpZD1cXFwibWdfX2dhbWUtY2xpY2tzXFxcIiBjbGFzcz1cXFwibWdfX2dhbWUtY2xpY2tzXFxcIj4wPC9zcGFuPlxcXHJcbiAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1nX19nYW1lLWxpbmUtaXRlbVxcXCI+XFxcclxuICAgICAgICAgICAgPHNwYW4+0J/RgNC+0YjQu9C+INCy0YDQtdC80LXQvdC4Ojwvc3Bhbj5cXFxyXG4gICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtZ19fZ2FtZS1saW5lLWl0ZW1cXFwiPlxcXHJcbiAgICAgICAgICAgIDxzcGFuIGlkPVxcXCJtZ19fZ2FtZS10aW1lXFxcIiBjbGFzcz1cXFwibWdfX2dhbWUtdGltZVxcXCI+MDwvc3Bhbj5cXFxyXG4gICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtZ19fZ2FtZS1saW5lLWl0ZW1cXFwiPlxcXHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XFxcIm1nX19idXR0b24tLXN1c3BlbmRcXFwiIGNsYXNzPVxcXCJtZ19fYnV0dG9uIG1nX19idXR0b24tLWRpc2FibGVkXFxcIj7Qn9Cw0YPQt9CwPC9idXR0b24+XFxcclxuICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWdfX2dhbWUtbGluZS1pdGVtXFxcIj5cXFxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJtZ19fYnV0dG9uLS1yZXNldFxcXCIgY2xhc3M9XFxcIm1nX19idXR0b24gbWdfX2J1dHRvbi0tY2FuY2VsXFxcIj7QkiDQvNC10L3RjjwvYnV0dG9uPlxcXHJcbiAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgIDwvZGl2PlwiO1xyXG5cclxuICAgICAgICB0aGlzLmdhbWVBY3Rpb25XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLmdhbWVBY3Rpb25XcmFwcGVyLmNsYXNzTmFtZSA9IFwibWdfX3dyYXBwZXJcIjtcclxuICAgICAgICB0aGlzLmdhbWVBY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUFjdGlvbkNvbnRhaW5lci5jbGFzc05hbWUgPSBcIm1nX19jb250ZW50cyBtZ19fc2l6ZS1cIiArIHRoaXMuZ2FtZUZpZWxkU2l6ZTtcclxuICAgICAgICB0aGlzLmdhbWVBY3Rpb25Db250YWluZXIuaWQgPSBcIm1nX19jb250ZW50c1wiO1xyXG5cclxuICAgICAgICBsZXQgcGF0aCA9IHRoaXMuc2tpblBhdGg7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbiA9IGNhcmRzW2ldLmNhcmRJZDtcclxuICAgICAgICAgICAgdGhpcy5nYW1lQWN0aW9uQ29udGFpbmVyLmlubmVySFRNTCArPVxyXG4gICAgICAgICAgICAgICAgXCI8ZGl2IGNsYXNzPVxcXCJtZ19fY2FyZCBtZ19fY2FyZC1cIiArIChpICsgMSkgKyBcIlxcXCI+XFxcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1nX19jYXJkLS1pbm5lclxcXCIgZGF0YS1wb3NpdGlvbj1cXFwiXCIgKyAoaSArIDEpICsgXCJcXFwiPlxcXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwibWdfX2NhcmQtLW91dHNpZGVcXFwiPjxpbWcgc3JjPVxcXCJpbWcvXCIgKyBwYXRoICsgXCIvMDAucG5nXFxcIj48L3NwYW4+XFxcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJtZ19fY2FyZC0taW5zaWRlXFxcIj48aW1nIHNyYz1cXFwiaW1nL1wiXHJcbiAgICAgICAgICAgICAgICArIHBhdGggKyBcIi9cIiArIChuID49IDEwID8gXCJcIiA6IFwiMFwiKSArIG4gKyBcIi5wbmdcXFwiPjwvc3Bhbj5cXFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgIDwvZGl2PlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdhbWVBY3Rpb25XcmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuZ2FtZUFjdGlvbkNvbnRhaW5lcik7XHJcbiAgICAgICAgdGhpcy5nYW1lQWN0aW9uLmFwcGVuZENoaWxkKHRoaXMuZ2FtZUFjdGlvbldyYXBwZXIpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5hcHBlbmRDaGlsZCh0aGlzLmdhbWVBY3Rpb24pO1xyXG4gICAgICAgIGxldCBjYXJkQ29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWdfX2NhcmRcIik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkQ29udGFpbmVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjYXJkQ29udGFpbmVyc1tpXS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZsaXBBbGxDYXJkcygpIHtcclxuICAgICAgICBsZXQgY2FyZE5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZ19fY2FyZC0taW5uZXJcIik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkTm9kZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgY2FyZE5vZGVzW2ldLmNsYXNzTGlzdC50b2dnbGUoXCJmbGlwcGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbmFibGVTdXNwZW5kQnV0dG9uKCkge1xyXG4gICAgICAgIGxldCBzdXNwZW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZ19fYnV0dG9uLS1kaXNhYmxlZFwiKTtcclxuICAgICAgICBzdXNwZW5kLmNsYXNzTGlzdC5yZW1vdmUoXCJtZ19fYnV0dG9uLS1kaXNhYmxlZFwiKTtcclxuICAgICAgICBzdXNwZW5kLmNsYXNzTGlzdC5hZGQoXCJtZ19fYnV0dG9uLS1hY3Rpb25cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZmxpcEJhY2socG9zaXRpb24pIHtcclxuICAgICAgICBsZXQgZmxpcHBlZENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1nX19jYXJkLVwiICsgcG9zaXRpb24gKyBcIiAubWdfX2NhcmQtLWlubmVyXCIpO1xyXG4gICAgICAgIGlmIChmbGlwcGVkQ2FyZC5wYXJlbnROb2RlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGZsaXBwZWRDYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJmbGlwcGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRWYWx1ZShlbGVtZW50LCB2YWx1ZSkge1xyXG4gICAgICAgIGxldCBjb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZ19fZ2FtZS1cIiArIGVsZW1lbnQpO1xyXG4gICAgICAgIGlmIChjb3VudGVyLnBhcmVudE5vZGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY291bnRlci5pbm5lckhUTUwgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U29sdmVkKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgbGV0IHNvbHZlZENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1nX19jYXJkLVwiICsgcG9zaXRpb24gKyBcIiAubWdfX2NhcmQtLWlubmVyXCIpO1xyXG4gICAgICAgIGlmIChzb2x2ZWRDYXJkLnBhcmVudE5vZGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgc29sdmVkQ2FyZC5jbGFzc0xpc3QuYWRkKFwic29sdmVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJXaW5TY3JlZW4oZHVyYXRpb24sIHNjb3JlKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhckdhbWUoKTtcclxuICAgICAgICB0aGlzLmdhbWVXaW4uaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgXCI8ZGl2IGNsYXNzPVxcXCJtZ19fd2luLWxpbmUtLWNlbnRlcmVkXFxcIj5cXFxyXG4gICAgICAgICAgICA8aDIgY2xhc3M9XFxcIm1nX193aW4taGVhZGluZ1xcXCI+0J/QvtC30LTRgNCw0LLQu9GP0LXQvCEg0JLRiyDQstGL0LjQs9GA0LDQu9C4ITwvaDI+XFxcclxuICAgICAgICAgICAgPHAgY2xhc3M9XFxcIm1nX193aW4tdGV4dFxcXCI+0JLRiyDRgdC/0YDQsNCy0LjQu9C40YHRjCDQt9CwIFwiICsgZHVyYXRpb24gKyBcIiDRgdC10LrRg9C90LQuINCS0LDRiCDRgdGH0LXRgiAtIFwiICsgc2NvcmUgKyBcIi48L3A+XFxcclxuICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWdfX3dpbi1saW5lLS1jZW50ZXJlZFxcXCI+XFxcclxuICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJtZ19fd2luLXN1Yi1oZWFkaW5nXFxcIj7QktCy0LXQtNC40YLQtSDRgdCy0L7QtSDQuNC80Y8g0LTQu9GPINCy0L3QtdGB0LXQvdC40Y8g0LfQsNC/0LjRgdC4INCyINGA0LXQutC+0YDQtNGLOjwvaDM+XFxcclxuICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWdfX3dpbi1saW5lLS1jZW50ZXJlZFxcXCI+XFxcclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJtZ19fd2luLWlucHV0XFxcIiBjbGFzcz1cXFwibWdfX3dpbi1pbnB1dFxcXCIgYXV0b2ZvY3VzPlxcXHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XFxcIm1nX19idXR0b24tLXN1Ym1pdFxcXCIgY2xhc3M9XFxcIm1nX19idXR0b24gbWdfX2J1dHRvbi0tZGlzYWJsZWRcXFwiPtCS0L3QtdGB0YLQuDwvYnV0dG9uPlxcXHJcbiAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1nX193aW4tbGluZS0tY2VudGVyZWRcXFwiPlxcXHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XFxcIm1nX19idXR0b24tLXJlc2V0XFxcIiBjbGFzcz1cXFwibWdfX2J1dHRvbiBtZ19fYnV0dG9uLS1jYW5jZWxcXFwiPtCSINC80LXQvdGOPC9idXR0b24+XFxcclxuICAgICAgICAgICAgPC9kaXY+XCI7XHJcbiAgICAgICAgdGhpcy5nYW1lLmFwcGVuZENoaWxkKHRoaXMuZ2FtZVdpbik7XHJcbiAgICAgICAgdGhpcy5zZXRXaW5TY3JlZW5FdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRXaW5TY3JlZW5FdmVudHMoKSB7XHJcbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZ19fd2luLWlucHV0XCIpO1xyXG4gICAgICAgIGxldCBzdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21nX19idXR0b24tLXN1Ym1pdFwiKTtcclxuXHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGlucHV0LnZhbHVlICE9PSBudWxsICYmIGlucHV0LnZhbHVlICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXQuY2xhc3NMaXN0LnJlbW92ZShcIm1nX19idXR0b24tLWRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgc3VibWl0LmNsYXNzTGlzdC5hZGQoXCJtZ19fYnV0dG9uLS1hY3Rpb25cIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXQuY2xhc3NMaXN0LnJlbW92ZShcIm1nX19idXR0b24tLWFjdGlvblwiKTtcclxuICAgICAgICAgICAgICAgIHN1Ym1pdC5jbGFzc0xpc3QuYWRkKFwibWdfX2J1dHRvbi0tZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJTY29yZXMoc2l6ZSwgc2NvcmVzQnlTaXplLCBzb3J0S2V5ID0gXCJuYW1lXCIsIHNvcnREaXJlY3Rpb24gPSBcImFzY1wiKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhckdhbWUoKTtcclxuICAgICAgICBsZXQgdGFibGUgPSBcclxuICAgICAgICAgICAgXCI8dGFibGU+XFxcclxuICAgICAgICAgICAgPHRoZWFkPlxcXHJcbiAgICAgICAgICAgIDx0cj5cXFxyXG4gICAgICAgICAgICA8dGQgY2xhc3M9XFxcIm1nX19zY29yZXMtdGFibGUtaGVhZGluZ1xcXCIgZGF0YS10YWc9XFxcIm5hbWVcXFwiPtCY0LzRjzwvdGQ+XFxcclxuICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJtZ19fc2NvcmVzLXRhYmxlLWhlYWRpbmdcXFwiIGRhdGEtdGFnPVxcXCJpZFxcXCI+0JTQsNGC0LAg0Lgg0LLRgNC10LzRjyDQuNCz0YDRizwvdGQ+XFxcclxuICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJtZ19fc2NvcmVzLXRhYmxlLWhlYWRpbmdcXFwiIGRhdGEtdGFnPVxcXCJkdXJhdGlvblxcXCI+0JTQu9C40YLQtdC70YzQvdC+0YHRgtGMPC90ZD5cXFxyXG4gICAgICAgICAgICA8dGQgY2xhc3M9XFxcIm1nX19zY29yZXMtdGFibGUtaGVhZGluZ1xcXCIgZGF0YS10YWc9XFxcInNjb3JlXFxcIj7QodGH0LXRgjwvdGQ+XFxcclxuICAgICAgICAgICAgPC90cj5cXFxyXG4gICAgICAgICAgICA8L3RoZWFkPlxcXHJcbiAgICAgICAgICAgIDx0Ym9keT5cIjtcclxuICAgICAgICBpZiAoc2NvcmVzQnlTaXplLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjb3Jlc0J5U2l6ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGFibGUgKz1cclxuICAgICAgICAgICAgICAgICAgICBcIjx0cj48dGQ+XCIgKyBzY29yZXNCeVNpemVbaV0ubmFtZSArIFwiPC90ZD5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cIiArIEhlbHBlcnMuZ2V0Rm9ybWF0dGVkRGF0ZVRpbWUoc2NvcmVzQnlTaXplW2ldLmlkKSArIFwiPC90ZD5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cIiArIEhlbHBlcnMuZ2V0Rm9ybWF0dGVkVGltZShzY29yZXNCeVNpemVbaV0uZHVyYXRpb24pICsgXCI8L3RkPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPlwiICsgc2NvcmVzQnlTaXplW2ldLnNjb3JlICsgXCI8L3RkPjwvdHI+XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0YWJsZSArPSBcIjx0cj48dGQgY2xhc3M9XFxcIndpZGVcXFwiIGNvbHNwYW49XFxcIjRcXFwiPtCd0LXRgiDRgNC10LfRg9C70YzRgtCw0YLQvtCyINC40LPRgCDQvdCwINC/0L7Qu9C1INGA0LDQt9C80LXRgNC+0LwgXCJcclxuICAgICAgICAgICAgICAgICsgc2l6ZSArIFwiLjwvdGQ+PC90cj5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFibGUgKz0gXCI8L3Rib2R5PjwvdGFibGU+XCI7XHJcbiAgICAgICAgdGhpcy5nYW1lU2NvcmVzLmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgIFwiPGRpdiBjbGFzcz1cXFwibWdfX3Njb3Jlcy1saW5lLS1jZW50ZXJlZFxcXCI+XFxcclxuICAgICAgICAgICAgPGgyIGNsYXNzPVxcXCJtZ19fc2NvcmVzLWhlYWRpbmdcXFwiPtCg0LXQutC+0YDQtNGLPC9oMj5cXFxyXG4gICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtZ19fc2NvcmVzLWxpbmUtLWNlbnRlcmVkXFxcIj5cXFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtZ19fc2NvcmVzLWxpbmUtaXRlbVxcXCI+XFxcclxuICAgICAgICAgICAg0KDQsNC30LzQtdGA0Ysg0L/QvtC70LXQuTpcXFxyXG4gICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtZ19fc2NvcmVzLWxpbmUtaXRlbVxcXCI+XFxcclxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXNpemU9XFxcIjE2XFxcIiBjbGFzcz1cXFwibWdfX2J1dHRvbiBtZ19fYnV0dG9uLS1hY3Rpb25cXFwiPtCc0LDQu9C10L3RjNC60L7QtTwvYnV0dG9uPlxcXHJcbiAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1nX19zY29yZXMtbGluZS1pdGVtXFxcIj5cXFxyXG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtc2l6ZT1cXFwiMzZcXFwiIGNsYXNzPVxcXCJtZ19fYnV0dG9uIG1nX19idXR0b24tLWFjdGlvblxcXCI+0KHRgNC10LTQvdC10LU8L2J1dHRvbj5cXFxyXG4gICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtZ19fc2NvcmVzLWxpbmUtaXRlbVxcXCI+XFxcclxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXNpemU9XFxcIjY0XFxcIiBjbGFzcz1cXFwibWdfX2J1dHRvbiBtZ19fYnV0dG9uLS1hY3Rpb25cXFwiPtCR0L7Qu9GM0YjQvtC1PC9idXR0b24+XFxcclxuICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWdfX3Njb3Jlcy1saW5lLWl0ZW1cXFwiPlxcXHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XFxcIm1nX19idXR0b24tLXJlc2V0XFxcIiBjbGFzcz1cXFwibWdfX2J1dHRvbiBtZ19fYnV0dG9uLS1jYW5jZWxcXFwiPtCd0LDQt9Cw0LQg0LIg0LzQtdC90Y48L2J1dHRvbj5cXFxyXG4gICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtZ19fc2NvcmVzLWxpbmUtLWNlbnRlcmVkXFxcIj5cXFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVxcXCJtZ19fc2NvcmVzLXRhYmxlXFxcIiBjbGFzcz1cXFwibWdfX3Njb3Jlcy10YWJsZVxcXCI+XCIgKyB0YWJsZSArXHJcbiAgICAgICAgICAgIFwiPC9kaXY+XFxcclxuICAgICAgICAgICAgPC9kaXY+XCI7XHJcbiAgICAgICAgdGhpcy5nYW1lLmFwcGVuZENoaWxkKHRoaXMuZ2FtZVNjb3Jlcyk7XHJcbiAgICAgICAgbGV0IHNpemVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZ19fYnV0dG9uLS1hY3Rpb25cIik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplQnV0dG9ucy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBpZiAoTnVtYmVyLnBhcnNlSW50KHNpemVCdXR0b25zW2ldLmdldEF0dHJpYnV0ZShcImRhdGEtc2l6ZVwiKSkgPT09IHNpemUpIHtcclxuICAgICAgICAgICAgICAgIHNpemVCdXR0b25zW2ldLmNsYXNzTGlzdC5hZGQoXCJtZ19fYnV0dG9uLS1zZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY29sdW1uSGVhZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1nX19zY29yZXMtdGFibGUtaGVhZGluZ1wiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbkhlYWRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2x1bW5IZWFkc1tpXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhZ1wiKSA9PT0gc29ydEtleSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNvcnREaXJlY3Rpb24gIT09IFwiZGVzY1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uSGVhZHNbaV0uY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkLS1wbHVzXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5IZWFkc1tpXS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWQtLW1pbnVzXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckdhbWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXJ0LnBhcmVudE5vZGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLnJlbW92ZUNoaWxkKHRoaXMuZ2FtZVN0YXJ0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZUFjdGlvbi5wYXJlbnROb2RlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5yZW1vdmVDaGlsZCh0aGlzLmdhbWVBY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5nYW1lV2luLnBhcmVudE5vZGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLnJlbW92ZUNoaWxkKHRoaXMuZ2FtZVdpbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmdhbWVTY29yZXMucGFyZW50Tm9kZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUucmVtb3ZlQ2hpbGQodGhpcy5nYW1lU2NvcmVzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYmluZFNob3dNZW51KGhhbmRsZXIpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21nX19idXR0b24tLXJlc2V0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGhhbmRsZXIoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kU3RhcnRHYW1lKGhhbmRsZXIpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21nX19idXR0b24tLXN0YXJ0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWVGaWVsZFNpemUgIT09IG51bGwgJiYgdGhpcy5za2luUGF0aCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlcih0aGlzLmdhbWVGaWVsZFNpemUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZFN1c3BlbmRPclJlc3VtZUdhbWUoaGFuZGxlcikge1xyXG4gICAgICAgIGxldCBzdXNwZW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZ19fYnV0dG9uLS1zdXNwZW5kXCIpO1xyXG4gICAgICAgIGxldCBjYXJkTm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1nX19jYXJkLS1pbm5lclwiKTtcclxuICAgICAgICBcclxuICAgICAgICBzdXNwZW5kLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc3VzcGVuZC5jbGFzc0xpc3QuY29udGFpbnMoXCJtZ19fYnV0dG9uLS1kaXNhYmxlZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN1c3BlbmQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWdfX2J1dHRvbi0tYWN0aW9uXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VzcGVuZC5jbGFzc0xpc3QucmVtb3ZlKFwibWdfX2J1dHRvbi0tYWN0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN1c3BlbmQuY2xhc3NMaXN0LmFkZChcIm1nX19idXR0b24tLWNhbmNlbFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzdXNwZW5kLmlubmVySFRNTCA9IFwi0JLQvtC30L7QsdC90L7QstC40YLRjFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZE5vZGVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmROb2Rlc1tpXS5jbGFzc0xpc3QudG9nZ2xlKFwicGF1c2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3VzcGVuZC5jbGFzc0xpc3QuY29udGFpbnMoXCJtZ19fYnV0dG9uLS1jYW5jZWxcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdXNwZW5kLmNsYXNzTGlzdC5yZW1vdmUoXCJtZ19fYnV0dG9uLS1jYW5jZWxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VzcGVuZC5jbGFzc0xpc3QuYWRkKFwibWdfX2J1dHRvbi0tYWN0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN1c3BlbmQuaW5uZXJIVE1MID0gXCLQn9Cw0YPQt9CwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkTm9kZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZE5vZGVzW2ldLmNsYXNzTGlzdC50b2dnbGUoXCJwYXVzZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaGFuZGxlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZENhcmRDbGlja0hhbmRsZXIoaGFuZGxlcikge1xyXG4gICAgICAgIGxldCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWdfX2NhcmQtLWlubmVyXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY2FyZHNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghY2FyZHNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmxpcHBlZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICYmICFjYXJkc1tpXS5jbGFzc0xpc3QuY29udGFpbnMoXCJzb2x2ZWRcIilcclxuICAgICAgICAgICAgICAgICAgICAmJiAhY2FyZHNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwicGF1c2VkXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZHNbaV0uY2xhc3NMaXN0LmFkZChcImZsaXBwZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcihOdW1iZXIucGFyc2VJbnQoY2FyZHNbaV0uZ2V0QXR0cmlidXRlKFwiZGF0YS1wb3NpdGlvblwiKSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYmluZFNob3dTY29yZXMoaGFuZGxlcikge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWdfX2J1dHRvbi0tc2NvcmVzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGhhbmRsZXIoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kU2hvd1Njb3Jlc0J5U2l6ZShoYW5kbGVyKSB7XHJcbiAgICAgICAgbGV0IHNpemVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZ19fYnV0dG9uLS1hY3Rpb25cIik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplQnV0dG9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBzaXplQnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlcihOdW1iZXIucGFyc2VJbnQoc2l6ZUJ1dHRvbnNbaV0uZ2V0QXR0cmlidXRlKFwiZGF0YS1zaXplXCIpKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBiaW5kU2hvd1NvcnRlZFNjb3JlcyhoYW5kbGVyKSB7XHJcbiAgICAgICAgbGV0IGNvbEhlYWRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZ19fc2NvcmVzLXRhYmxlLWhlYWRpbmdcIik7XHJcbiAgICAgICAgbGV0IGFjdGl2ZVNpemVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1nX19idXR0b24tLXNlbGVjdGVkXCIpO1xyXG4gICAgICAgIGxldCBkaXJlY3Rpb247XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xIZWFkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb2xIZWFkc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbEhlYWRzW2ldLmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkLS1taW51c1wiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IFwiYXNjXCI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IFwiZGVzY1wiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaGFuZGxlcihOdW1iZXIucGFyc2VJbnQoYWN0aXZlU2l6ZUJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNpemVcIikpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbEhlYWRzW2ldLmdldEF0dHJpYnV0ZShcImRhdGEtdGFnXCIpLCBkaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYmluZFNhdmVTY29yZShoYW5kbGVyKSB7XHJcbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZ19fd2luLWlucHV0XCIpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWdfX2J1dHRvbi0tc3VibWl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpbnB1dC52YWx1ZSAhPT0gbnVsbCAmJiBpbnB1dC52YWx1ZSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlcihpbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvdmlld3MvZ2FtZVZpZXcuanMiLCJcInVzZSBzdHJpY3RcIlxyXG5cclxuaW1wb3J0IFNjb3Jlc1JlcG9zaXRvcnkgZnJvbSBcIi4vaW5mcmFzdHJ1Y3R1cmUvc2NvcmVzUmVwb3NpdG9yeVwiO1xyXG5pbXBvcnQgR2FtZVZpZXcgZnJvbSBcIi4vdmlld3MvZ2FtZVZpZXdcIjtcclxuaW1wb3J0IEdhbWVDb250cm9sbGVyIGZyb20gXCIuL2NvbnRyb2xsZXJzL2dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vLi4vc3R5bGVzL3Nhc3MvYXBwLnNjc3NcIjtcclxuXHJcbmNvbnNvbGUubG9nKHN0eWxlcy5jb250YWluZXIpO1xyXG5cclxuY29uc3QgdmlldyA9IG5ldyBHYW1lVmlldygpO1xyXG5cclxuY29uc3QgcmVwbyA9IG5ldyBTY29yZXNSZXBvc2l0b3J5KFwicGFpcnMtbWVtb3J5LWdhbWVcIik7XHJcblxyXG5jb25zdCBjb250cm9sbGVyID0gbmV3IEdhbWVDb250cm9sbGVyKHZpZXcsIHJlcG8pO1xyXG5jb250cm9sbGVyLnNldE1heEZpZWxkKDY0KTtcclxuLy9jb250cm9sbGVyLnNldEZha2VSZXBvRGF0YSgpO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGNvbnRyb2xsZXIuc2hvd01lbnUoKSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9hcHAuanMiLCJcInVzZSBzdHJpY3RcIlxyXG5cclxuaW1wb3J0IEdhbWUgZnJvbSBcIi4vLi4vbW9kZWxzL2dhbWVcIjtcclxuaW1wb3J0IEdhbWVWaWV3IGZyb20gXCIuLy4uL3ZpZXdzL2dhbWVWaWV3XCI7XHJcbmltcG9ydCBTY29yZXNSZXBvc2l0b3J5IGZyb20gXCIuLy4uL2luZnJhc3RydWN0dXJlL3Njb3Jlc1JlcG9zaXRvcnlcIjtcclxuaW1wb3J0IEhlbHBlcnMgZnJvbSBcIi4vLi4vaGVscGVycy9oZWxwZXJzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2aWV3LCByZXBvKSB7XHJcbiAgICAgICAgaWYgKHZpZXcgaW5zdGFuY2VvZiBHYW1lVmlldyAmJiByZXBvIGluc3RhbmNlb2YgU2NvcmVzUmVwb3NpdG9yeSkge1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xyXG4gICAgICAgICAgICB0aGlzLnJlcG8gPSByZXBvO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgR2FtZUNvbnRyb2xsZXIgY3RvciBhcmdzLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nYW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLmludGVydmFsSWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZmlyc3RDbGlja2VkID0gbnVsbDtcclxuICAgICAgICB0aGlzLm1heEZpZWxkU2l6ZSA9IDE2O1xyXG4gICAgfVxyXG5cclxuICAgIHNldE1heEZpZWxkKG1heEZpZWxkU2l6ZSkge1xyXG4gICAgICAgIHRoaXMubWF4RmllbGRTaXplID0gbWF4RmllbGRTaXplO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dNZW51KCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy52aWV3LnJlbmRlck1lbnUoKTtcclxuICAgICAgICB0aGlzLnZpZXcuYmluZFN0YXJ0R2FtZSh0aGlzLnN0YXJ0R2FtZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnZpZXcuYmluZFNob3dTY29yZXModGhpcy5zaG93U2NvcmVzLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0R2FtZShmaWVsZFNpemUpIHtcclxuICAgICAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZShmaWVsZFNpemUsIHRoaXMubWF4RmllbGRTaXplKTsgXHJcbiAgICAgICAgdGhpcy52aWV3LnJlbmRlckdhbWUodGhpcy5nYW1lLmdhbWVGaWVsZCk7XHJcbiAgICAgICAgdGhpcy52aWV3LmZsaXBBbGxDYXJkcygpO1xyXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy52aWV3LmZsaXBBbGxDYXJkcygpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuc3RhcnQoKTtcclxuICAgICAgICAgICAgdGhpcy5pbnRlcnZhbElkID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaFRpbWUoKTtcclxuICAgICAgICAgICAgfSwgNTApO1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuZW5hYmxlU3VzcGVuZEJ1dHRvbigpO1xyXG4gICAgICAgIH0sIChmaWVsZFNpemUgLyA4KSAqIDEwMDApO1xyXG4gICAgICAgIHRoaXMudmlldy5iaW5kU2hvd01lbnUodGhpcy5zaG93TWVudS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnZpZXcuYmluZENhcmRDbGlja0hhbmRsZXIodGhpcy5jYXJkQ2xpY2tIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMudmlldy5iaW5kU3VzcGVuZE9yUmVzdW1lR2FtZSh0aGlzLnN1c3BlbmRPclJlc3VtZUdhbWUuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FyZENsaWNrSGFuZGxlcihwb3NpdGlvbikge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLmdhbWUuY2FyZENsaWNrSGFuZGxlcihwb3NpdGlvbik7XHJcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImZpcnN0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJzdENsaWNrZWQgPSBwb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwic2Vjb25kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LmZsaXBCYWNrKHRoaXMuZmlyc3RDbGlja2VkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcuZmxpcEJhY2socG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RDbGlja2VkSWQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgXCJzb2x2ZWRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcuc2V0U29sdmVkKHRoaXMuZmlyc3RDbGlja2VkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcuc2V0U29sdmVkKHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcnN0Q2xpY2tlZElkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmRHYW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoQ2xpY2tzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3VzcGVuZE9yUmVzdW1lR2FtZSgpIHtcclxuICAgICAgICB0aGlzLmdhbWUuc3VzcGVuZE9yUmVzdW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZW5kR2FtZSgpIHtcclxuICAgICAgICB0aGlzLmdhbWUuZW5kKCk7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xyXG4gICAgICAgIHRoaXMuaW50ZXJ2YWxJZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zaG93V2luU2NyZWVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaFRpbWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5zdGF0ZSA9PT0gXCJydW5cIikge1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuc2V0VmFsdWUoXCJ0aW1lXCIsIHRoaXMuZ2FtZS50aW1lci5nZXRDdXJyZW50VmFsdWUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hDbGlja3MoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5zdGF0ZSA9PT0gXCJydW5cIikge1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuc2V0VmFsdWUoXCJjbGlja3NcIiwgdGhpcy5nYW1lLmNsaWNrcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dXaW5TY3JlZW4oKSB7XHJcbiAgICAgICAgbGV0IGR1cmF0aW9uID0gdGhpcy5nYW1lLnRpbWVyLmdldEN1cnJlbnRWYWx1ZSgpO1xyXG4gICAgICAgIGxldCBzY29yZSA9IHRoaXMuZ2FtZS5nZXRTY29yZSgpO1xyXG4gICAgICAgIHRoaXMudmlldy5yZW5kZXJXaW5TY3JlZW4oZHVyYXRpb24sIHNjb3JlKTtcclxuICAgICAgICB0aGlzLnZpZXcuYmluZFNob3dNZW51KHRoaXMuc2hvd01lbnUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy52aWV3LmJpbmRTYXZlU2NvcmUodGhpcy5zYXZlU2NvcmUuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZVNjb3JlKG5pY2tuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5yZXBvLmluc2VydCh7XHJcbiAgICAgICAgICAgIGlkOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICBuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICAgICAgc2l6ZTogdGhpcy5nYW1lLmdhbWVGaWVsZC5sZW5ndGgsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLmdhbWUudGltZXIuZ2V0Q3VycmVudFZhbHVlKCksXHJcbiAgICAgICAgICAgIHNjb3JlOiB0aGlzLmdhbWUuZ2V0U2NvcmUoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2hvd1Njb3Jlcyh0aGlzLmdhbWUuZ2FtZUZpZWxkLmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1Njb3JlcyhmaWVsZFNpemUgPSAxNiwgc29ydEtleSA9IFwibmFtZVwiLCBkaXJlY3Rpb24gPSBcImFzY1wiKSB7XHJcbiAgICAgICAgY29uc3Qgc2NvcmVzQnlTaXplID0gdGhpcy5yZXBvLmdldEFsbEJ5U2l6ZShmaWVsZFNpemUpO1xyXG4gICAgICAgIGNvbnN0IHNvcnRlZFNjb3JlcyA9IHNjb3Jlc0J5U2l6ZS5zbGljZSgwKS5zb3J0KEhlbHBlcnMuY29tcGFyZUJ5KHNvcnRLZXksIGRpcmVjdGlvbikpO1xyXG4gICAgICAgIHRoaXMudmlldy5yZW5kZXJTY29yZXMoZmllbGRTaXplLCBzb3J0ZWRTY29yZXMsIHNvcnRLZXksIGRpcmVjdGlvbik7XHJcbiAgICAgICAgdGhpcy52aWV3LmJpbmRTaG93TWVudSh0aGlzLnNob3dNZW51LmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMudmlldy5iaW5kU2hvd1Njb3Jlc0J5U2l6ZSh0aGlzLnNob3dTY29yZXMuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy52aWV3LmJpbmRTaG93U29ydGVkU2NvcmVzKHRoaXMuc2hvd1Njb3Jlcy5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRGYWtlUmVwb0RhdGEoKSB7XHJcbiAgICAgICAgbGV0IGZha2UgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgZmFrZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGlkOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJQbGF5ZXJcIiArIGksXHJcbiAgICAgICAgICAgICAgICBzaXplOiAxNixcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBpICogMTAsXHJcbiAgICAgICAgICAgICAgICBzY29yZTogaSAqIDEwMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZha2UucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpZDogRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiUGxheWVyXCIgKyBpLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogMzYsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogaSAqIDIwLFxyXG4gICAgICAgICAgICAgICAgc2NvcmU6IGkgKiAyMDBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZha2UucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpZDogRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiUGxheWVyXCIgKyBpLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogNjQsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogaSAqIDEwMCxcclxuICAgICAgICAgICAgICAgIHNjb3JlOiBpICogMTAwMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmYWtlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVwby5pbnNlcnQoZmFrZVtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb250cm9sbGVycy9nYW1lQ29udHJvbGxlci5qcyIsIlwidXNlIHN0cmljdFwiXHJcblxyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi9jYXJkXCI7XHJcbmltcG9ydCBUaW1lciBmcm9tIFwiLi90aW1lclwiO1xyXG5pbXBvcnQgSGVscGVycyBmcm9tIFwiLi8uLi9oZWxwZXJzL2hlbHBlcnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xyXG4gICAgY29uc3RydWN0b3IoZmllbGRTaXplLCBtYXhGaWVsZFNpemUpIHtcclxuICAgICAgICB0aGlzLmdhbWVGaWVsZCA9IEdhbWUuZ2V0TmV3R2FtZUZpZWxkKGZpZWxkU2l6ZSwgbWF4RmllbGRTaXplKTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gbmV3IFRpbWVyKCk7XHJcbiAgICAgICAgdGhpcy5jbGlja3MgPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lb3V0SWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaXNGaXJzdENsaWNrZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmZpcnN0Q2xpY2tlZElkID0gbnVsbDtcclxuICAgICAgICB0aGlzLnN0YXRlID0gXCJzdG9wXCI7XHJcbiAgICAgICAgdGhpcy51bnJlc29sdmVkQ291bnQgPSBmaWVsZFNpemUgLyAyO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMudGltZXIuc3RhcnQoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gXCJydW5cIjtcclxuICAgIH1cclxuXHJcbiAgICBzdXNwZW5kT3JSZXN1bWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFwicnVuXCIpIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lci5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBcInN1c3BlbmRlZFwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gXCJzdXNwZW5kZWRcIikge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBcInJ1blwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbmQoKSB7XHJcbiAgICAgICAgdGhpcy50aW1lci5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFwic3RvcFwiO1xyXG4gICAgfVxyXG5cclxuICAgIGNhcmRDbGlja0hhbmRsZXIocG9zaXRpb24pIHtcclxuICAgICAgICB0aGlzLmNsaWNrcysrO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBcIlwiO1xyXG4gICAgICAgIGlmICh0aGlzLmlzRmlyc3RDbGlja2VkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzRmlyc3RDbGlja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5maXJzdENsaWNrZWRJZCA9IHRoaXMuZ2FtZUZpZWxkW3Bvc2l0aW9uIC0gMV0uY2FyZElkO1xyXG4gICAgICAgICAgICByZXN1bHQgPSBcImZpcnN0XCI7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmlyc3RDbGlja2VkSWQgPT09IHRoaXMuZ2FtZUZpZWxkW3Bvc2l0aW9uIC0gMV0uY2FyZElkKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBcInNvbHZlZFwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51bnJlc29sdmVkQ291bnQtLTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IFwic2Vjb25kXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pc0ZpcnN0Q2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2xpY2tlZElkID0gbnVsbDtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy51bnJlc29sdmVkQ291bnQgPD0gMCkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBcImVuZFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNjb3JlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWVGaWVsZC5sZW5ndGggKiAxMDAwIFxyXG4gICAgICAgICAgICAgLSB0aGlzLmNsaWNrcyAqIDEwXHJcbiAgICAgICAgICAgICAtIE1hdGguZmxvb3IoKHRoaXMudGltZXIuZ2V0Q3VycmVudFZhbHVlKCkgKiAxMCkgLyAxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0TmV3R2FtZUZpZWxkKGZpZWxkU2l6ZSwgbWF4RmllbGRTaXplKSB7XHJcbiAgICAgICAgbGV0IHBvc3NpYmxlQ2FyZHMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heEZpZWxkU2l6ZSAvIDI7ICsraSkge1xyXG4gICAgICAgICAgICBwb3NzaWJsZUNhcmRzLnB1c2gobmV3IENhcmQoaSArIDEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgSGVscGVycy5zaHVmZmxlKHBvc3NpYmxlQ2FyZHMpO1xyXG5cclxuICAgICAgICBsZXQgZ2FtZUZpZWxkID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZFNpemUgLyAyOyArK2kpIHtcclxuICAgICAgICAgICAgZ2FtZUZpZWxkLnB1c2gocG9zc2libGVDYXJkc1tpXSk7XHJcbiAgICAgICAgICAgIGdhbWVGaWVsZC5wdXNoKHBvc3NpYmxlQ2FyZHNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnYW1lRmllbGQgPSBIZWxwZXJzLnNodWZmbGUoZ2FtZUZpZWxkKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVGaWVsZC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBnYW1lRmllbGRbaV0uY2FyZFBvc2l0aW9uID0gaSArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBnYW1lRmllbGQ7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL21vZGVscy9nYW1lLmpzIiwiXCJ1c2Ugc3RyaWN0XCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xyXG4gICAgY29uc3RydWN0b3IoaWQpIHtcclxuICAgICAgICB0aGlzLmNhcmRJZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuY2FyZFN0YXRlID0gXCJmYWNlZG93blwiO1xyXG4gICAgICAgIHRoaXMuY2FyZFBvc2l0aW9uID0gbnVsbDtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvbW9kZWxzL2NhcmQuanMiLCJcInVzZSBzdHJpY3RcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IDA7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFwic3RvcHBlZFwiO1xyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gXCJzdG9wcGVkXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFwic3RhcnRlZFwiO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0b3AoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFwic3RhcnRlZFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBcInN0b3BwZWRcIjtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZSArPSBNYXRoLnJvdW5kKChEYXRlLm5vdygpIC0gdGhpcy5zdGFydFRpbWUpIC8gMTAwMCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRUaW1lID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q3VycmVudFZhbHVlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBcInN0YXJ0ZWRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSArIE1hdGgucm91bmQoKERhdGUubm93KCkgLSB0aGlzLnN0YXJ0VGltZSkgLyAxMDAwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL21vZGVscy90aW1lci5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3R5bGVzL3Nhc3MvYXBwLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7O0FDN0RBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOzs7Ozs7QUFyRUE7Ozs7Ozs7QUNGQTtBQUNBOzs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUF0Q0E7Ozs7Ozs7QUNGQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWdDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUFDQTtBQUdBO0FBQUE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQW5CQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOUJBO0FBQ0E7QUFrQkE7QUFBQTtBQVlBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBREE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7QUFEQTtBQWVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFBQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFEQTtBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFDQTtBQUNBO0FBQUE7QUFTQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQWJBO0FBQ0E7QUFHQTtBQUFBO0FBVUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBelpBOzs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNqQkE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0QkE7QUF3QkE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBNUpBOzs7Ozs7O0FDUEE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUEvRUE7Ozs7Ozs7QUNOQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BOzs7Ozs7O0FDRkE7QUFDQTs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBNUJBOzs7Ozs7QUNGQTs7O0EiLCJzb3VyY2VSb290IjoiIn0=