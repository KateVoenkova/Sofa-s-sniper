function loadAllImages(images) {
    let loaded_images = 0

    return new Promise(resolve => {
        Object.keys(images).forEach((image_title) => {
            let img = new Image()

            img.addEventListener("load", () => {
                loaded_images += 1
                if (loaded_images === Object.keys(images).length) {
                    resolve()
                }
            });

            img.src = images[image_title]
            images[image_title] = img
        })
    })
}

function random(a, b) {
    return Math.random() * (b - a) + a
}

export {random, loadAllImages}