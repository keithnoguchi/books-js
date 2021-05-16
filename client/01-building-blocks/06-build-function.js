buttons = document.querySelectorAll('button')
buttons[0].onclick = () => {
    displayMessage("Hey yo!", 'standard')
}
buttons[1].onclick = () => {
    displayMessage("Oops!", 'warning')
}
buttons[2].onclick = () => {
    displayMessage("let's chat!", 'chat')
}

function displayMessage(msgText, msgType) {
    const html = document.querySelector('html')
    const panel = document.createElement('div')
    panel.setAttribute('class', 'msgBox')
    html.appendChild(panel)

    const msg = document.createElement('p')
    msg.textContent = msgText
    panel.appendChild(msg)

    if (msgType === 'warning') {
        msg.style.backgroundImage = 'url(icons/warning.png)'
        panel.style.backgroundColor = 'red'
    } else if (msgType === 'chat') {
        msg.style.backgroundImage = 'url(icons/chat.png)'
        panel.style.backgroundColor = 'aqua'
    } else {
        msg.style.paddingLeft = '20px'
    }
    const close = document.createElement('button')
    close.textContent = 'x'
    close.onclick = () => {
        close.remove()
        msg.remove()
    }
    panel.appendChild(close)
}
