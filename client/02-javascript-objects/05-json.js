let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'

let req = new XMLHttpRequest()
req.open('GET', requestURL)
req.responseType = 'json'
req.send()

req.onload = function() {
    const superHeroes = req.response
    populateHeader(superHeroes)
    showHeroes(superHeroes)
}

const header = document.querySelector('header')

function populateHeader(obj) {
    const h1 = document.createElement('h1')
    h1.textContent = obj['squadName']
    header.appendChild(h1)
    const p = document.createElement('p')
    p.textContent = `Hometown: ${obj['homeTown']} ` +
        `// Formed: ${obj['formed']}`
    header.appendChild(p)
}

const section = document.querySelector('section')

function showHeroes(obj) {
    const heroes = obj['members']

    for (let i = 0; i < heroes.length; i++) {
        const article = document.createElement('article')
        const h2 = document.createElement('h2')
        const p1 = document.createElement('p')
        const p2 = document.createElement('p')
        const p3 = document.createElement('p')

        h2.textContent = heroes[i].name
        p1.textContent = `Secret identity: ${heroes[i].secretIdentity}`
        p2.textContent = `Age: ${heroes[i].age}`
        p3.textContent = 'Superpowers:'

        const superPowers = heroes[i].powers
        const ul = document.createElement('ul')
        for (let j = 0; j < superPowers.length; j++) {
            const listItem = document.createElement('li')
            listItem.textContent = superPowers[j]
            ul.appendChild(listItem)
        }
        article.appendChild(h2)
        article.appendChild(p1)
        article.appendChild(p2)
        article.appendChild(p3)
        article.appendChild(ul)

        section.appendChild(article)
    }
}
