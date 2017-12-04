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

    setMenuEvents() {
        var sizeNodes = document.querySelectorAll("ul.mg__menu-level-select span");        
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

        document.getElementById("mg__button--start").addEventListener("click", () => {
            if (this.gameFieldSize != null && this.skinPath != null) {
                this.renderGame();
            }
        });

        document.getElementById("mg__button--scores").addEventListener("click", () => {
            this.renderScores();
        });
    }

    renderGame() {
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
            this.gameActionContainer.innerHTML +=  "<div class=\"mg__card mg__card-" + n + "\">\
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

    setGameEvents() {
        
        document.getElementById("mg__button--suspend").addEventListener("click", () => {
            this.renderMenu();
        });
        
        document.getElementById("mg__button--reset").addEventListener("click", () => {
            this.renderMenu();
        });
    }

    renderWinScreen(duration, score) {
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

        submit.addEventListener("click", () => {
            if (input.value != null && input.value != "") {
                // TODO: связь с хранилищем
                this.renderMenu();
            }
        });
        
        document.getElementById("mg__button--reset").addEventListener("click", () => {
            this.renderMenu();
        });
    }

    renderScores() {
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

    setScoresEvents() {
        var dummy = "<tr> <td>Имя1</td> <td>15.01.17 11:16</td> <td>100500</td> <td>100500</td></tr>\
                    <tr> <td>Имя2</td> <td>17.03.17 13:26</td> <td>200600</td> <td>200600</td></tr>\
                    <tr> <td>Имя3</td> <td>19.05.17 15:46</td> <td>300700</td> <td>300700</td></tr>"
        document.getElementById("mg__button--small").addEventListener("click", () => {
            this.renderScoreTableBySize(dummy);
        });

        document.getElementById("mg__button--medium").addEventListener("click", () => {
            this.renderScoreTableBySize(dummy);
        });

        document.getElementById("mg__button--big").addEventListener("click", () => {
            this.renderScoreTableBySize(dummy);
        });        
        
        document.getElementById("mg__button--reset").addEventListener("click", () => {
            this.renderMenu();
        });
    }

    renderScoreTableBySize(inner) {
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
}