"use strict"

// import Card from "./../models/card";
// import Timer from "./../models/timer";
// import Game from "./../models/game";
// import ScoresRepository from "./../infrastructure/scoresRepository";

export default class GameView {
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

    renderMenu() {
        this.clearGame();
        this.gameStart.innerHTML =
            "<div class=\"mg__menu-line--centered\">\
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
            <button id=\"mg__button--start\" class=\"mg__button mg__button--action\">Начать игру</button>\
            </div>\
            <div class=\"mg__menu-line--centered\">\
            <button id=\"mg__button--scores\" class=\"mg__button mg__button--info\">Посмотреть рекорды</button>\
            </div>";
        this.game.appendChild(this.gameStart);
        this.setMenuEvents();
    }

    setMenuEvents() {
        var sizeNodes = document.querySelectorAll("ul.mg__menu-size-select span");
        for (let i = 0; i < sizeNodes.length; i++) {
            sizeNodes[i].addEventListener("click", () => {
                for (let j = 0; j < sizeNodes.length; j++) {
                    sizeNodes[j].classList.remove("selected");
                }
                sizeNodes[i].classList.add("selected");
                this.gameFieldSize = sizeNodes[i].getAttribute("data-size");
            });
        }

        var skinNodes = document.querySelectorAll("ul.mg__menu-skin-select span");
        for (let i = 0; i < skinNodes.length; i++) {
            skinNodes[i].addEventListener("click", () => {
                for (let j = 0; j < skinNodes.length; j++) {
                    skinNodes[j].classList.remove("selected");
                }
                skinNodes[i].classList.add("selected");
                this.skinPath = skinNodes[i].getAttribute("data-path");
            });
        }
    }

    renderGame(cards) {
        if (!cards || cards.length != this.gameFieldSize) {
            throw new Error("Invalid GameView renderGame args.");
        }
        this.clearGame();
        this.gameAction.innerHTML =
            "<div class=\"mg__game-line--centered\">\
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
        this.gameActionContainer.id = "mg__contents";

        var path = this.skinPath;
        for (var i = 0; i < cards.length; i++) {
            var n = cards[i].cardId;
            this.gameActionContainer.innerHTML +=
                "<div class=\"mg__card mg__card-" + (i + 1) + "\">\
                <div class=\"mg__card--inner\">\
                <span class=\"mg__card--outside\"><img src=\"img/" + path + "/00.png\"></span>\
                <span class=\"mg__card--inside\"><img src=\"img/" 
                    + path + "/" + (n >= 10 ? "" : "0") + n + ".png\"></span>\
                </div>\
                </div>";
        }
        this.gameActionWrapper.appendChild(this.gameActionContainer);
        this.gameAction.appendChild(this.gameActionWrapper);
        this.game.appendChild(this.gameAction);
        this.setGameEvents();
    }

    flipAllCards() {
        var cardNodes = document.querySelectorAll(".mg__card--inner");
        var cardNodesArr = Array.from(cardNodes);
        
        for (let i = 0; i < cardNodesArr.length; ++i) {
            console.log("flip");
            console.log(cardNodesArr[i].classList);
            cardNodesArr[i].classList.add("flipped");
        }
    }

    setGameEvents() {
        var suspend = document.getElementById("mg__button--suspend");

        suspend.addEventListener("click", () => {
            // if (suspend.classList.cont) {

            // }
        });
    }

    setValue(element, value) {
        var counter = document.getElementById("mg__game-" + element);
        if (counter.parentNode !== null) {
            counter.innerHTML = value;
        }
    }

    renderWinScreen(duration, score) {
        this.skinPath = null;
        this.gameFieldSize = null;
        this.clearGame();
        this.gameWin.innerHTML =
            "<div class=\"mg__win-line--centered\">\
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

    setWinScreenEvents() {
        var input = document.getElementById("mg__win-input");
        var submit = document.getElementById("mg__button--submit");

        input.addEventListener("input", () => {
            if (input.value != null && input.value != "") {
                submit.classList.remove("mg__button--disabled");
                submit.classList.add("mg__button--action");
            } else {
                submit.classList.remove("mg__button--action");
                submit.classList.add("mg__button--disabled");
            }
        });
    }

    renderScores(size, scoresBySize) {
        this.clearGame();
        var table = "<table><thead><tr><td>Имя</td><td>Дата и время игры</td><td>Длительность</td>\
        <td>Счет</td></thead><tbody>";
        if (scoresBySize.length != 0) {
            for (let i = 0; i < scoresBySize.length; i++) {
                table += 
                    "<tr><td>" + scoresBySize[i].name + "</td>\
                    <td>" + (new Date(scoresBySize[i].id)).toString + "</td>\
                    <td>" + scoresBySize[i].duration + "</td>\
                    <td>" + scoresBySize[i].score + "</td></tr>";
            }
        } else {
            table += "<tr><td class=\"wide\" colspan=\"4\">Нет результатов игр на поле размером "
                + size + ".</td></tr>";
        }
        table += "</tbody></table>";
        this.gameScores.innerHTML =
            "<div class=\"mg__scores-line--centered\">\
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
            <div id=\"mg__scores-table\" class=\"mg__scores-table\">" + table +
            "</div>\
            </div>";
        // let sizeButtons = document.getElementsByClassName("mg__button mg__button--action");
        // for (let j = 0; j < sizeButtons.length; j++) {
        //     console.log(typeof sizeButtons[j].getAttribute("data-size"));
        //     if (sizeButtons[j].getAttribute("data-size") == size) {                
        //         sizeButtons[j].classList.add("selected");
        //     }
        // }
        this.game.appendChild(this.gameScores);
    }

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

    bindShowMenu(handler) {
        document.getElementById("mg__button--reset").addEventListener("click", () => {
            handler();
        });
    }

    bindStartGame(handler) {
        document.getElementById("mg__button--start").addEventListener("click", () => {
            if (this.gameFieldSize != null && this.skinPath != null) {
                handler(this.gameFieldSize);
            }
        });
    }

    bindShowScores(handler) {
        document.getElementById("mg__button--scores").addEventListener("click", () => {
            handler();
        });
    }

    bindShowScoresBySize(handler) {
        var sizeButtons = document.getElementsByClassName("mg__button mg__button--action");
        for (let i = 0; i < sizeButtons.length; i++) {
            sizeButtons[i].addEventListener("click", () => {
                handler(Number.parseInt(sizeButtons[i].getAttribute("data-size")));
            });
        }
    }

    bindSaveScore(handler) {
        var input = document.getElementById("mg__win-input");
        document.getElementById("mg__button--submit").addEventListener("click", () => {
            if (input.value != null && input.value != "") {
                handler(input.value);
            }
        });
    }
}