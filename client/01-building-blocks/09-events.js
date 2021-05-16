window.addEventListener('load', change)
document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', change)
})

function change(e) {
    const color = `rgb(${random(255)}, ${random(255)}, ${random(255)})`
    document.body.style.backgroundColor = color
    if (e.type !== 'load') {
        e.target.style.backgroundColor = color
    }
}

function random(n) {
    return Math.floor(Math.random() * (n+1))
}
