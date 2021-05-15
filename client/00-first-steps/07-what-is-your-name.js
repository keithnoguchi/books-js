const button = document.querySelector('button')

button.onclick = function() {
    let name = window.prompt('What is your name?')
    window.alert('Hello ' + name + ', nice to see you!')
}
