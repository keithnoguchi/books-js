for (let i = 1; i <= 16; i++) {
    const div = document.createElement('div')
    document.body.appendChild(div)
}

const divs = document.querySelectorAll('div')
divs.forEach((div) => {
    div.addEventListener('click', (e) => {
        e.target.style.backgroundColor = color()
    })
})

function color() {
    return `rgb(${random(255)}, ${random(255)}, ${random(255)})`
}

function random(n) {
    return Math.floor(Math.random() * n)
}
