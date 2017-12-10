"use strict"

import Helpers from "./../helpers/helpers";

export default class GameView {
    /**
	 * GameView ctor without params
	 */
    constructor() {
        this._skinPath = null;
        this._gameFieldSize = null;

        this._game = document.createElement("div");
        this._game.className = "mg";

        this._gameStart = document.createElement("div");
        this._gameStart.className = "mg__menu";

        this._gameAction = document.createElement("div");
        this._gameAction.className = "mg__game";

        this._gameWin = document.createElement("div");
        this._gameWin.className = "mg__win";

        this._gameScores = document.createElement("div");
        this._gameScores.className = "mg__scores";

        document.querySelector("#appcontainer").appendChild(this._game);
    }

    /**
	 * Render the main game menu markup
	 */
    renderMenu() {
        this.clearGame();
        this._skinPath = null;
        this._gameFieldSize = null;
        this._gameStart.innerHTML =
            `<div class="mg__menu-line--centered">
            <h2 class="mg__menu-heading">Потренируйте свой мозг!</h2>
            <p class="mg__menu-text">Это простая игра на память - необходимо запомнить положение карт и,
            поочередно переворачивая их, собрать пары и очистить игровое поле.</p>
            </div>
            <div class="mg__menu-line--centered">
            <div class="mg__menu-line-item">
            <h3 class="mg__menu-sub-heading">Выберите размер поля:</h3>
            <ul class="mg__menu-size-select">
            <li><span data-size="16">Маленький (4 x 4)</span></li>
            <li><span data-size="36">Средний (6 x 6)</span></li>
            <li><span data-size="64">Большой (8 x 8)</span></li>
            </ul>
            </div>
            <div class="mg__menu-line-item">
            <h3 class="mg__menu-sub-heading">Выберите тему карт:</h3>
            <ul class="mg__menu-skin-select">
            <li><span data-path="flags">Флаги стран</span></li>
            <li><span data-path="new-year">Новый год</span></li>
            <li><span data-path="outdoors">Туризм</span></li>
            <li><span data-path="pokemons">Покемоны</span></li>
            <li><span data-path="sports">Спорт</span></li>
            </ul>
            </div>
            </div>
            <div class="mg__menu-line--centered">
            <button id="mg__button--start" class="mg__button mg__button--disabled">Начать игру</button>
            </div>
            <div class="mg__menu-line--centered">
            <button id="mg__button--scores" class="mg__button mg__button--info">Посмотреть рекорды</button>
            </div>`;
        this._game.appendChild(this._gameStart);
        this.setMenuEvents();
    }

    /**
	 * Set event handlers for "view" actions in main menu
	 */
    setMenuEvents() {
        document.querySelectorAll("ul.mg__menu-size-select span").forEach((item, index, arr) => {
            item.addEventListener("click", () => {
                arr.forEach(i => i.classList.remove("selected"));
                item.classList.add("selected");
                this._gameFieldSize = Number.parseInt(item.getAttribute("data-size"));
                this.enableStartButton();
            });
        });

        document.querySelectorAll("ul.mg__menu-skin-select span").forEach((item, index, arr) => {
            item.addEventListener("click", () => {
                arr.forEach(i => i.classList.remove("selected"));
                item.classList.add("selected");
                this._skinPath = item.getAttribute("data-path");
                this.enableStartButton();
            });
        });
    }

    /**
	 * Render the game action markup
     * 
     * @param {Array} cardIds Array of card id's in right order
	 */
    renderGame(cardIds) {
        if (!cardIds || cardIds.length !== this._gameFieldSize) {
            throw new Error("Invalid GameView renderGame args.");
        }
        this.clearGame();
        this._gameAction.innerHTML =
            `<div class="mg__game-line--centered">
            <div class="mg__game-line-item">
            <span>Количество ходов:</span>
            </div>
            <div class="mg__game-line-item">
            <span id="mg__game-clicks" class="mg__game-clicks">0</span>
            </div>
            <div class="mg__game-line-item">
            <span>Прошло времени:</span>
            </div>
            <div class="mg__game-line-item">
            <span id="mg__game-time" class="mg__game-time">0</span>
            </div>
            <div class="mg__game-line-item">
            <button id="mg__button--suspend" class="mg__button mg__button--disabled">Пауза</button>
            </div>
            <div class="mg__game-line-item">
            <button id="mg__button--reset" class="mg__button mg__button--cancel">В меню</button>
            </div>
            </div>`;

        this._gameActionWrapper = document.createElement("div");
        this._gameActionWrapper.className = "mg__wrapper";
        this._gameActionContainer = document.createElement("div");
        this._gameActionContainer.className = `mg__contents mg__size-${this._gameFieldSize}`;
        let path = this._skinPath;
        cardIds.forEach((item, index) => {
            this._gameActionContainer.innerHTML +=
                `<div class="mg__card mg__card-${(index + 1)}">
                <div class="mg__card--inner" data-position="${(index + 1)}">
                <span class="mg__card--outside"><img src="img/${path}/00.png"></span>
                <span class="mg__card--inside"><img src="img/${path}/${(item >= 10 ? "" : "0")}${item}.png"></span>
                </div>
                </div>`;
        });
        this._gameActionWrapper.appendChild(this._gameActionContainer);
        this._gameAction.appendChild(this._gameActionWrapper);
        this._game.appendChild(this._gameAction);
        document.querySelectorAll(".mg__card").forEach(i => {
            i.addEventListener("mousedown touchstart", (event) => {
                event.preventDefault();
            });
        });
    }

    /**
	 * Set "flipped" class to all card elements
	 */
    flipAllCards() {
        document.querySelectorAll(".mg__card--inner").forEach(i => i.classList.toggle("flipped"));
    }

    /**
	 * Change class of "Start" button to "mg__button--action"
	 */
    enableSuspendButton() {
        this.enableButton(document.querySelector("#mg__button--suspend"));
    }

    /**
	 * Change class of "Suspend" button to "mg__button--action"
	 */
    enableStartButton() {
        if (this._skinPath !== null && this._gameFieldSize !== null) {
            this.enableButton(document.querySelector("#mg__button--start"));
        }
    }

    /**
	 * Change class of button to "mg__button--action"
	 */
    enableButton(button) {
        if (button.classList.contains("mg__button--disabled")) {
            button.classList.remove("mg__button--disabled");
            button.classList.add("mg__button--action");
        }
    }

    /**
	 * Change class of button to "mg__button--disabled"
	 */
    disableButton(button) {        
        if (button.classList.contains("mg__button--action")) {
            button.classList.remove("mg__button--action");
            button.classList.add("mg__button--disabled");
        }
    }

    /**
	 * Force card in selected position to flip
     * 
     * @param position Position of card to flip
	 */
    flipBack(position) {
        let flippedCard = document.querySelector(`.mg__card-${position} .mg__card--inner`);
        if (flippedCard.parentNode !== null) {
            flippedCard.classList.remove("flipped");
        }
    }

    /**
	 * Change value of selected element
     * 
     * @param {HTMLNode} element Element, which value changed
     * @param {String} value Value to change
	 */
    setValue(element, value) {
        let counter = document.querySelector("#mg__game-" + element);
        if (counter.parentNode !== null) {
            counter.innerHTML = value;
        }
    }

    /**
	 * Set card state to solved
     * 
     * @param {Nimber} position Position of card
	 */
    setSolved(position) {
        let solvedCard = document.querySelector(`.mg__card-${position} .mg__card--inner`);
        if (solvedCard.parentNode !== null) {
            solvedCard.classList.add("solved");
        }
    }

    /**
	 * Render the end of game screen markup
     * 
     * @param {Number} duration Array of card id's in right order
     * @param {Number} score Array of card id's in right order
	 */
    renderWinScreen(duration, score) {
        this.clearGame();
        this._gameWin.innerHTML =
            `<div class="mg__win-line--centered">
            <h2 class="mg__win-heading">Поздравляем! Вы выиграли!</h2>
            <p class="mg__win-text">Вы справились за ${duration} секунд. Ваш счет - ${score}.</p>
            </div>
            <div class="mg__win-line--centered">
            <h3 class="mg__win-sub-heading">Введите свое имя для внесения записи в рекорды:</h3>
            </div>
            <div class="mg__win-line--centered">
            <input type="text" id="mg__win-input" class="mg__win-input" autofocus>
            <button id="mg__button--submit" class="mg__button mg__button--disabled">Внести</button>
            </div>
            <div class="mg__win-line--centered">
            <button id="mg__button--reset" class="mg__button mg__button--cancel">В меню</button>
            </div>`;
        this._game.appendChild(this._gameWin);
        this.setWinScreenEvents();
    }

    /**
	 * Set style events for input bar and submit button
	 */
    setWinScreenEvents() {
        let input = document.querySelector("#mg__win-input");
        let submit = document.querySelector("#mg__button--submit");

        input.addEventListener("input", () => {
            if (input.value !== null && input.value !== "") {
                this.enableButton(submit);
            } else {
                this.disableButton(submit);
            }
        });
    }

    /**
	 * Render the scores screen markup
     * 
     * @param {Number} size Size of game to render scores by size
     * @param {Array} scoresBySize Array of game scores by selected size
     * @param {String} sortKey Key to sort the scores
     * @param {String} sortDirection Direction to sort the scores
	 */
    renderScores(size, scoresBySize, sortKey = "name", sortDirection = "asc") {
        this.clearGame();
        let table = 
            `<table>
            <thead>
            <tr>
            <td class="mg__scores-table-heading" data-tag="name">Имя</td>
            <td class="mg__scores-table-heading" data-tag="id">Дата и время игры</td>
            <td class="mg__scores-table-heading" data-tag="duration">Длительность</td>
            <td class="mg__scores-table-heading" data-tag="score">Счет</td>
            </tr>
            </thead>
            <tbody>`;
        if (scoresBySize.length !== 0) {
            scoresBySize.forEach(i => {
                table +=
                    `<tr><td>${i.name}</td>
                    <td>${Helpers.getFormattedDateTime(i.id)}</td>
                    <td>${Helpers.getFormattedTime(i.duration)}</td>
                    <td>${i.score}</td></tr>`;
            });
        } else {
            table +=
                `<tr><td class="wide" colspan="4">Нет результатов игр на поле размером ${size}.</td></tr>`;
        }
        table += "</tbody></table>";
        this._gameScores.innerHTML =
            `<div class="mg__scores-line--centered">
            <h2 class="mg__scores-heading">Рекорды</h2>
            </div>
            <div class="mg__scores-line--centered">
            <div class="mg__scores-line-item">
            Размеры полей:
            </div>
            <div class="mg__scores-line-item">
            <button data-size="16" class="mg__button mg__button--action">Маленькое</button>
            </div>
            <div class="mg__scores-line-item">
            <button data-size="36" class="mg__button mg__button--action">Среднее</button>
            </div>
            <div class="mg__scores-line-item">
            <button data-size="64" class="mg__button mg__button--action">Большое</button>
            </div>
            <div class="mg__scores-line-item">
            <button id="mg__button--reset" class="mg__button mg__button--cancel">Назад в меню</button>
            </div>
            </div>
            <div class="mg__scores-line--centered">
            <div id="mg__scores-table" class="mg__scores-table">${table}
            </div>
            </div>`;
        this._game.appendChild(this._gameScores);
        document.querySelectorAll(".mg__button--action").forEach(i => {
            if (Number.parseInt(i.getAttribute("data-size")) === size) {
                i.classList.add("mg__button--selected");
            }
        });
        document.querySelectorAll(".mg__scores-table-heading").forEach(i => {
            if (i.getAttribute("data-tag") === sortKey) {
                if (sortDirection !== "desc") {
                    i.classList.add("selected--plus");
                } else {
                    i.classList.add("selected--minus");
                }
            }
        });
    }

    /**
	 * Remove all dom elements in game container
	 */
    clearGame() {
        if (this._gameStart.parentNode !== null) {
            this._game.removeChild(this._gameStart);
        }
        if (this._gameAction.parentNode !== null) {
            this._game.removeChild(this._gameAction);
        }
        if (this._gameWin.parentNode !== null) {
            this._game.removeChild(this._gameWin);
        }
        if (this._gameScores.parentNode !== null) {
            this._game.removeChild(this._gameScores);
        }
    }

    /**
	 * Set event handler for "controller" actions in main menu
     * 
     *  @param {Function()} handler Handler binded in gameController
	 */
    bindShowMenu(handler) {
        document.querySelector("#mg__button--reset").addEventListener("click", () => {
            handler();
        });
    }

    /**
	 * Set event handler for "controller" actions in game action screen
     * 
     *  @param {Function()} handler Handler binded in gameController
	 */
    bindStartGame(handler) {
        document.querySelector("#mg__button--start").addEventListener("click", () => {
            if (this._gameFieldSize !== null && this._skinPath !== null) {
                handler(this._gameFieldSize);
            }
        });
    }

    /**
	 * Set event handler for "controller" actions for "Suspend" button
     * 
     *  @param {Function()} handler Handler binded in gameController
	 */
    bindSuspendOrResumeGame(handler) {
        let suspend = document.querySelector("#mg__button--suspend");
        let cardNodes = document.querySelectorAll(".mg__card--inner");
        
        suspend.addEventListener("click", () => {
            if (!suspend.classList.contains("mg__button--disabled")) {                
                let state = handler();
                if (!state) {
                    suspend.classList.remove("mg__button--action");
                    suspend.classList.add("mg__button--cancel");
                    suspend.innerHTML = "Возобновить";
                } else {
                    suspend.classList.remove("mg__button--cancel");
                    suspend.classList.add("mg__button--action");
                    suspend.innerHTML = "Пауза";
                }
                cardNodes.forEach(c => c.classList.toggle("paused"));
            }
        });
    }

    /**
	 * Set event handlers for "controller" actions for all cards in game action screen
     * 
     *  @param {Function()} handler Handler binded in gameController
	 */
    bindCardClickHandler(handler) {
        document.querySelectorAll(".mg__card--inner").forEach(i => {
            i.addEventListener("click", () => {
                if (!i.classList.contains("flipped")
                    && !i.classList.contains("solved")
                    && !i.classList.contains("paused")) {
                    i.classList.add("flipped");
                    handler(Number.parseInt(i.getAttribute("data-position")));
                }
            });
        });
    }

    /**
	 * Set event handler for "controller" actions in scores screen
     * 
     *  @param {Function()} handler Handler binded in gameController
	 */
    bindShowScores(handler) {
        document.querySelector("#mg__button--scores").addEventListener("click", () => {
            handler();
        });
    }

    /**
	 * Set event handlers for "controller" actions for game size buttons
     * 
     *  @param {Function()} handler Handler binded in gameController
	 */
    bindShowScoresBySize(handler) {
        document.querySelectorAll(".mg__button--action").forEach(i => {
            i.addEventListener("click", () => {
                handler(Number.parseInt(i.getAttribute("data-size")));
            });
        });
    }

    /**
	 * Set event handlers for "controller" actions for headings of score table
     * 
     *  @param {Function()} handler Handler binded in gameController
	 */
    bindShowSortedScores(handler) {
        let activeSizeButton = document.querySelector(".mg__button--selected");
        let direction;
        document.querySelectorAll(".mg__scores-table-heading").forEach(i => {
            i.addEventListener("click", () => {
                if (i.classList.contains("selected--minus")) {
                    direction = "asc";
                } else {
                    direction = "desc";
                }
                handler(Number.parseInt(activeSizeButton.getAttribute("data-size")),
                    i.getAttribute("data-tag"), direction);
            });
        });
    }

    /**
	 * Set event handler for "controller" actions for score submit button
     * 
     *  @param {Function()} handler Handler binded in gameController
	 */
    bindSaveScore(handler) {
        let input = document.querySelector("#mg__win-input");
        document.querySelector("#mg__button--submit").addEventListener("click", () => {
            if (input.value !== null && input.value !== "") {
                handler(input.value);
            }
        });
    }
}