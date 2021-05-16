const p = document.querySelector('p')

const input = document.querySelector('.numberInput')
input.onchange = () => {
    const num = input.value
    if (isNaN(num)) {
        p.textContent = 'You need to enter a number'
    } else {
        p.textContent = `${num} squared is ${squared(num)}. ` +
            `${num} cubed is ${cubed(num)}. ` +
            `${num} factorial is ${factorial(num)}. `
    }
}

function squared(number) {
    return number * number
}

function cubed(number) {
    return squared(number) * number
}

function factorial(number) {
    if (number < 0) return undefined
    if (number === 0) return 1
    let x = number - 1
    while (x > 1) {
        number *= x
        x--
    }
    return number
}
