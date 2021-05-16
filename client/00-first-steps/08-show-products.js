const list = document.querySelector('.output ul')
const totalBox = document.querySelector('.output p')
const reset = document.getElementById('reset')
const show = document.getElementById('show')

function drawOutput() {
    totalBox.textContent = 'Total: $1.00'
}

window.addEventListener('load', drawOutput)
