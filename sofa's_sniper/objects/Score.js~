class Score {
    constructor(canvas) {
        this.points = 0
        this.canvas = canvas
    }

    addPoints(points) {
        this.points += points
    }

    draw(ctx) {
        ctx.font = "48px serif";
        ctx.fillStyle = "green"
        let textSize = ctx.measureText(this.points)
        ctx.fillText(this.points, this.canvas.width - 50 - textSize.width, 50);
    }
}

export {Score}