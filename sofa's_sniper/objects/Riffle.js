import { CanvasImage } from "../helpers/CanvasImage.js";

class Riffle extends CanvasImage {
    constructor(mouse, bottler, score, img) {
        super(img, 0, 0, 50, 50);
        this.mouse = mouse;
        this.bottler = bottler;
        this.missedShots = [];
        this.mouse.onClick((x, y) => {
            let hit = false;
            this.bottler.get().forEach((bottle) => {
                if (bottle.intersects(x, y)) {
                    bottle.kill();
                    score.addPoints(1);
                    hit = true;
                }
            });
            if (!hit) {
                this.missedShots.push({x, y});
            }
        });
    }

    draw(ctx) {
        this.moveTo(this.mouse.X(), this.mouse.Y());
        super.draw(ctx);

        // Рисуем следы от пуль
        ctx.fillStyle = 'black';
        this.missedShots.forEach(shot => {
            ctx.beginPath();
            ctx.arc(shot.x, shot.y, 10, 0, Math.PI * 2);
            ctx.fill();
        });
    }
}

export {Riffle};
