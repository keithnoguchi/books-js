const form = document.querySelector('form')
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const result = document.querySelector('p')

form.addEventListener('submit', (e) => {
    if (fname.value === '' || lname.value === '') {
        e.preventDefault()
        result.textContent = 'You need to fill in both names!'
    }
})
