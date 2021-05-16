const WIDTH = document.documentElement.clientWidth
const HEIGHT = document.documentElement.clientHeight

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = WIDTH
canvas.height = HEIGHT

document.querySelector('button').onclick = () => {
    draw()
}

function draw(number) {
    ctx.clearRect(0, 0, WIDTH, HEIGHT)
    for (let i = 0; i < 100; i++) {
        ctx.beginPath()
        ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
        ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI)
        ctx.fill()
    }
}

function random(number) {
    return Math.floor(Math.random() * number)
}
