import {GameObject} from "../helpers/GameObject.js";

class Mouse extends GameObject {
    constructor() {
        super(0, 0)

        this.click_subscribers = []

        addEventListener("mousemove", e => this.#move(e))
        addEventListener("mousedown", e => this.#click(e))
    }

    #move(e) {
        this.x = e.clientX
        this.y = e.clientY
    }

    onClick(callback) {
        this.click_subscribers.push(callback)
    }

    #click(e) {
        this.click_subscribers.forEach(f => f(e.clientX, e.clientY))
    }
}

export {Mouse}