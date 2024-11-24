import {Riffle} from "./Riffle.js";
import {Mouse} from "./Mouse.js";
import {Bottler} from "./Bottler.js";
import {Score} from "./Score.js";

class Game {
    constructor(canvas, images, onGameEnd) {
        this.canvas = canvas;
        this.bottler = new Bottler(canvas, images.bottle, images.explosion);
        this.score = new Score(canvas);
        this.riffle = new Riffle(new Mouse(), this.bottler, this.score, images.cross);
        this.interval = undefined;
        this.onGameEnd = onGameEnd;
        this.timeLimit = 60 * 1000; // 1 минута
        this.startTime = 0;
    }

    start() {
        this.score.reset();
        this.bottler.start();
        this.startTime = Date.now();
        this.interval = setInterval(() => this.frame(), 30);

        // Завершаем игру через минуту
        setTimeout(() => this.stop(), this.timeLimit);
    }

    stop() {
        clearInterval(this.interval);
        this.bottler.stop();
        this.onGameEnd(this.score.points); // Передаём результат
    }

    frame() {
        const ctx = this.canvas.getContext('2d');
        this.makeFullscreen(ctx);
        this.bottler.draw(ctx);
        this.riffle.draw(ctx);
        this.score.draw(ctx);
    }

    makeFullscreen(ctx) {
        this.canvas.width = document.body.clientWidth;
        this.canvas.height = document.body.clientHeight;

        ctx.fillStyle = "#f5f5dc";
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

export {Game};
