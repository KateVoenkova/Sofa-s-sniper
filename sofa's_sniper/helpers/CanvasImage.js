
import {GameObject} from "./GameObject.js";

class CanvasImage {
    constructor(img, x, y, width, height) {
        this.img = img; // Изображение (HTMLImageElement)
        this.x = x; // Координата X
        this.y = y; // Координата Y
        this.width = width; // Ширина изображения
        this.height = height; // Высота изображения
    }

    moveTo(x, y) {
        this.x = x;
        this.y = y;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    intersects(pointX, pointY) {
        return (
            pointX >= this.x &&
            pointX <= this.x + this.width &&
            pointY >= this.y &&
            pointY <= this.y + this.height
        );
    }
}

export { CanvasImage };