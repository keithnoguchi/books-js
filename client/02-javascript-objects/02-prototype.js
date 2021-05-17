// Understanding prototype objects
//
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
const title = document.createElement('h1')
title.textContent = "Let's play with Prototype!"
document.body.appendChild(title)

let bob = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing'])

function Person(first, last, age, gender, interests) {
    this.name = {
        'first': first,
        'last': last
    }
    this.age = age
    this.gender = gender
    this.interests = interests
    this.bio = () => {
        alert(`${this.name.first} ${this.name.last} is ${this.age} years old.`)
    }
    this.greeting = () => {
        alert(`Hi ${this.name.first}!`)
    }
}

