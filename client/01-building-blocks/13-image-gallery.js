const displayedImage = document.querySelector('.display-img')
const thumbBar = document.querySelector('.thumb-bar')

const button = document.querySelector('button')
const overlay = document.querySelector('.overlay')

for (let i = 1; i <= 5; i++) {
    const newImage = document.createElement('img')
    newImage.setAttribute('src', `images/pic${i}.jpg`)
    thumbBar.appendChild(newImage)
    newImage.addEventListener('click', (e) => {
        displayedImage.src = e.target.src
    })
}

button.addEventListener('click', () => {
    const buttonClass = button.getAttribute('class')
    if (buttonClass === 'dark') {
        button.setAttribute('class', 'light')
        button.textContent = 'Lighten'
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
    } else {
        button.setAttribute('class', 'dark')
        button.textContent = 'Darken'
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)'
    }
})
