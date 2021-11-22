const slider = document.querySelector(".slider")
const container = document.querySelector(".container")
const beforeImage = document.querySelector(".before_image_container")

const drag = e => {
    let size = container.offsetWidth
    let xPos = e.offsetX
    slider.style.left = `${xPos}px`
    beforeImage.style.width = `${xPos}px`

    if (xPos < 50) {
        slider.style.left = `0`
        beforeImage.style.width = `0`
    }
    if (xPos + 50 > size) {
        slider.style.left = size + "px"
        beforeImage.style.width = size + "px"
    }
}


container.addEventListener("mousemove", drag)