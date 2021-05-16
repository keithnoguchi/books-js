const select = document.querySelector('select')
const para = document.querySelector('p')
let temerature = 29

select.onchange = setWeather

function setWeather() {
    switch (select.value) {
        case 'sunny':
            para.textContent = 'It is nice and sunny outside today'
            break
        case 'rainy':
            para.textContent = 'Rain is falling outside'
            break
        case 'snowing':
            para.textContent = 'The snow is coming down'
            break
        case 'overcast':
            para.textContent = 'It isn\'t raining, but the sky is grey and gloomy'
            break
        default:
            para.textContent = ''
    }
}
