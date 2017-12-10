"use strict"

import Helpers from "./../helpers/helpers";

export default class GameView {
    /**
	 * GameView ctor without params
	 */
    constructor() {
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

    /**
	 * Render the main game menu markup
	 */
    renderMenu() {
        this.clearGame();
        this.skinPath = null;
        this.gameFieldSize = null;
        this.gameStart.innerHTML =
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
        this.game.appendChild(this.gameStart);
        this.setMenuEvents();
    }

    /**
	 * Set event handlers for "view" actions in main menu
	 */
    setMenuEvents() {
        let start = document.querySelector("#mg__button--start");

        let sizeNodes = document.querySelectorAll("ul.mg__menu-size-select span");
        for (let i = 0; i < sizeNodes.length; i++) {
            sizeNodes[i].addEventListener("click", () => {
                for (let j = 0; j < sizeNodes.length; j++) {
                    sizeNodes[j].classList.remove("selected");
                }
                sizeNodes[i].classList.add("selected");
                this.gameFieldSize = Number.parseInt(sizeNodes[i].getAttribute("data-size"));
                if (this.skinPath !== null) {
                    start.classList.remove("mg__button--disabled");
                    start.classList.add("mg__button--action");
                }
            });
        }

        let skinNodes = document.querySelectorAll("ul.mg__menu-skin-select span");
        for (let i = 0; i < skinNodes.length; i++) {
            skinNodes[i].addEventListener("click", () => {
                for (let j = 0; j < skinNodes.length; j++) {
                    skinNodes[j].classList.remove("selected");
                }
                skinNodes[i].classList.add("selected");
                this.skinPath = skinNodes[i].getAttribute("data-path");
                if (this.gameFieldSize !== null) {
                    start.classList.remove("mg__button--disabled");
                    start.classList.add("mg__button--action");
                }
            });
        }
    }

    /**
	 * Render the game action markup
     * 
     * @param {Array} cardIds Array of card id's in right order
	 */
    renderGame(cardIds) {
        if (!cardIds || cardIds.length !== this.gameFieldSize) {
            throw new Error("Invalid GameView renderGame args.");
        }
        this.clearGame();
        this.gameAction.innerHTML =
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

        this.gameActionWrapper = document.createElement("div");
        this.gameActionWrapper.className = "mg__wrapper";
        this.gameActionContainer = document.createElement("div");
        this.gameActionContainer.className = `mg__contents mg__size-${this.gameFieldSize}`;
        this.gameActionContainer.id = "mg__contents";

        let path = this.skinPath;
        for (let i = 0; i < cardIds.length; i++) {
            let n = cardIds[i];
            this.gameActionContainer.innerHTML +=
                `<div class="mg__card mg__card-${(i + 1)}">
                <div class="mg__card--inner" data-position="${(i + 1)}">
                <span class="mg__card--outside"><img src="img/${path}/00.png"></span>
                <span class="mg__card--inside"><img src="img/${path}/${(n >= 10 ? "" : "0")}${n}.png"></span>
                </div>
                </div>`;
        }
        this.gameActionWrapper.appendChild(this.gameActionContainer);
        this.gameAction.appendChild(this.gameActionWrapper);
        this.game.appendChild(this.gameAction);
        let cardContainers = document.querySelectorAll(".mg__card");
        for (let i = 0; i < cardContainers.length; i++) {
            cardContainers[i].addEventListener("mousedown", (event) => {
                event.preventDefault();
            });
        }
    }

    /**
	 * Set "flipped" class to all card elements
	 */
    flipAllCards() {
        let cardNodes = document.querySelectorAll(".mg__card--inner");
        for (let i = 0; i < cardNodes.length; ++i) {
            cardNodes[i].classList.toggle("flipped");
        }
    }

    /**
	 * Change class of "Suspend" button to "mg__button--action"  
	 */
    enableSuspendButton() {
        let suspend = document.querySelector(".mg__button--disabled");
        suspend.classList.remove("mg__button--disabled");
        suspend.classList.add("mg__button--action");
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
        this.gameWin.innerHTML =
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
        this.game.appendChild(this.gameWin);
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
                submit.classList.remove("mg__button--disabled");
                submit.classList.add("mg__button--action");
            } else {
                submit.classList.remove("mg__button--action");
                submit.classList.add("mg__button--disabled");
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
            for (let i = 0; i < scoresBySize.length; i++) {
                table +=
                    `<tr><td>${scoresBySize[i].name}</td>
                    <td>${Helpers.getFormattedDateTime(scoresBySize[i].id)}</td>
                    <td>${Helpers.getFormattedTime(scoresBySize[i].duration)}</td>
                    <td>${scoresBySize[i].score}</td></tr>`;
            }
        } else {
            table +=
                `<tr><td class="wide" colspan="4">Нет результатов игр на поле размером ${size}.</td></tr>`;
        }
        table += "</tbody></table>";
        this.gameScores.innerHTML =
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
        this.game.appendChild(this.gameScores);
        let sizeButtons = document.querySelectorAll(".mg__button--action");
        for (let i = 0; i < sizeButtons.length; ++i) {
            if (Number.parseInt(sizeButtons[i].getAttribute("data-size")) === size) {
                sizeButtons[i].classList.add("mg__button--selected");
            }
        }
        let columnHeads = document.querySelectorAll(".mg__scores-table-heading");
        for (let i = 0; i < columnHeads.length; i++) {
            if (columnHeads[i].getAttribute("data-tag") === sortKey) {
                if (sortDirection !== "desc") {
                    columnHeads[i].classList.add("selected--plus");
                } else {
                    columnHeads[i].classList.add("selected--minus");
                }
            }            
        }        
    }

    /**
	 * Remove all dom elements in game container
	 */
    clearGame() {
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
            if (this.gameFieldSize !== null && this.skinPath !== null) {
                handler(this.gameFieldSize);
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
                if (suspend.classList.contains("mg__button--action")) {
                    suspend.classList.remove("mg__button--action");
                    suspend.classList.add("mg__button--cancel");
                    suspend.innerHTML = "Возобновить";
                    for (let i = 0; i < cardNodes.length; ++i) {
                        cardNodes[i].classList.toggle("paused");
                    }
                } else if (suspend.classList.contains("mg__button--cancel")) {
                    suspend.classList.remove("mg__button--cancel");
                    suspend.classList.add("mg__button--action");
                    suspend.innerHTML = "Пауза";
                    for (let i = 0; i < cardNodes.length; ++i) {
                        cardNodes[i].classList.toggle("paused");
                    }
                }
                handler();
            }
        });
    }

    /**
	 * Set event handlers for "controller" actions for all cards in game action screen
     * 
     *  @param {Function()} handler Handler binded in gameController
	 */
    bindCardClickHandler(handler) {
        let cards = document.querySelectorAll(".mg__card--inner");
        for (let i = 0; i < cards.length; i++) {
            cards[i].addEventListener("click", () => {
                if (!cards[i].classList.contains("flipped")
                    && !cards[i].classList.contains("solved")
                    && !cards[i].classList.contains("paused")) {
                    cards[i].classList.add("flipped");
                    handler(Number.parseInt(cards[i].getAttribute("data-position")));
                }
            });
        }
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
        let sizeButtons = document.querySelectorAll(".mg__button--action");
        for (let i = 0; i < sizeButtons.length; i++) {
            sizeButtons[i].addEventListener("click", () => {
                handler(Number.parseInt(sizeButtons[i].getAttribute("data-size")));
            });
        }
    }

    /**
	 * Set event handlers for "controller" actions for headings of score table
     * 
     *  @param {Function()} handler Handler binded in gameController
	 */
    bindShowSortedScores(handler) {
        let colHeads = document.querySelectorAll(".mg__scores-table-heading");
        let activeSizeButton = document.querySelector(".mg__button--selected");
        let direction;
        for (let i = 0; i < colHeads.length; i++) {
            colHeads[i].addEventListener("click", () => {
                if (colHeads[i].classList.contains("selected--minus")) {
                    direction = "asc";
                } else {
                    direction = "desc";
                }
                handler(Number.parseInt(activeSizeButton.getAttribute("data-size")),
                    colHeads[i].getAttribute("data-tag"), direction);
            });
        }
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