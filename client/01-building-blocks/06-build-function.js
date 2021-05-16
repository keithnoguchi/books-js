document.querySelector('button').onclick = () => {
    const html = document.querySelector('html')
    const panel = document.createElement('div')
    panel.setAttribute('class', 'msgBox')
    html.appendChild(panel)

    const msg = document.createElement('p')
    msg.textContent = 'This is a message box'
    panel.appendChild(msg)

    const close = document.createElement('button')
    close.textContent = 'x'
    close.onclick = () => {
        close.remove()
        msg.remove()
    }
    panel.appendChild(close)
}
