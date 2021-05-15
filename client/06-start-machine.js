const btn = document.querySelector('button')
const p = document.querySelector('p')

btn.addEventListener('click', updateBtn)

function updateBtn() {
    if (btn.textContent === 'Start machine!') {
        btn.textContent = 'Stop machine'
        p.textContent = 'The machine has started!'
    } else {
        btn.textContent = 'Start machine!'
        p.textContent = 'The machine is stopped.'
    }
}
