import {Bottle} from "./Bottle.js";

class Bottler {
    constructor(canvas, img, explosionImg) {
        this.bottles = [];
        this.interval = undefined;
        this.canvas = canvas;
        this.img = img;
        this.explosionImg = explosionImg;
    }

    start() {
        this.interval = setInterval(() => this.add(), 500)
    }

    stop() {
        clearInterval(this.interval)
    }

    add() {
        this.bottles.push(new Bottle(this.canvas, this.img, this.explosionImg));
    }

    draw(ctx) {
        this.bottles = this.bottles.filter(bottle => bottle.isAlive())

        this.bottles.forEach((bottle) => {
            bottle.draw(ctx);
        });
    }

    get() {
        return this.bottles
    }

}

export {Bottler}