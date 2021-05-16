const select = document.querySelector('select')
const html = document.querySelector('html')
document.body.style.padding = '10px'

select.onchange = function() {
    select.value === 'black' ? update('black', 'white') : update('white', 'black')
}

function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor
    html.style.color = textColor
}
