import {loadAllImages} from './helpers/functions.js';
import {Game} from "./objects/Game.js";

const IMAGES = {
    "cross": "images/cross.png",
    "bottle": "images/bottle.png",
    "explosion": "images/explosion.png" // добавлено изображение для взрыва
};

const canvas = document.getElementById("screen");
const menu = document.getElementById("menu");
const startButton = document.getElementById("start-game");
const recordDisplay = document.getElementById("record");

let record = localStorage.getItem('record') || 0;
recordDisplay.textContent = record;

loadAllImages(IMAGES).then(() => {
    const game = new Game(canvas, IMAGES, (score) => {
        // Обновляем рекорд
        if (score > record) {
            record = score;
            localStorage.setItem('record', record);
            recordDisplay.textContent = record;
        }
        menu.style.display = 'flex'; // Возвращаем меню после окончания игры
    });

    startButton.addEventListener('click', () => {
        menu.style.display = 'none';
        game.start();
    });
});
