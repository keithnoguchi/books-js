const select = document.querySelector('select')
const list = document.querySelector('ul')
const h1 = document.querySelector('h1')

select.onchange = function() {
    const choice = select.value
    let days = 31

    switch (choice) {
        case 'february':
            days = 28
            break
        case 'april':
        case 'june':
        case 'september':
        case 'november':
            days = 30
            break
        default:
            days = 31
            break
    }

    createCalendar(days, choice)
}

function createCalendar(days, choice) {
    list.innerHTML = ''
    h1.textContent = choice
    for (let i = 1; i <= days; i++) {
        const listItem = document.createElement('li')
        listItem.textContent = i
        list.appendChild(listItem)
    }
}

createCalendar(31, 'january')
