const title = document.querySelector('h1')
title.textContent = 'Inheritance in JavaScript'

const input = document.querySelector('input')
const p = document.querySelector('p')

// Get the code and output the result in the paragraph section.
document.querySelector('button').addEventListener('click', () => {
    const code = input.value
    p.textContent = eval(code)
})

// test person instance.
const test = new Person('Test', 'Smith', 23, 'male', ['music', 'bike'])

function Person(first, last, age, gender, interests) {
    this.name = {
        first,
        last
    }
    this.age = age
    this.gender = gender
    this.interests = interests
}

Person.prototype.greeting = function() {
    alert(`Hi! I'm ${this.name.first}.`)
}

Person.prototype.farewell = function() {
    alert(`${this.name.first} has left the building. Bye for now!`)
}

Person.prototype.bio = function() {
    let string = `${this.name.first} ${this.name.last} is ${this.age} years old. `
    let pronoun;

    switch (this.gender) {
        case 'male':
        case 'Male':
        case 'm':
        case 'M':
            pronoun = 'He likes '
            break
        case 'female':
        case 'Female':
        case 'f':
        case 'F':
            pronoun = 'She likes '
            break
        default:
            pronoun = 'They like '
            break
    }
    string += pronoun

    switch (this.interests.length) {
        case 1:
            string += `${this.interests[0]}.`
            break
        case 2:
            string += `${this.interests[0]} and ${this.interests[1]}.`
            break
        default:
            for (let i = 0; i < this.interests.length; i++) {
                if (i === this.interests.length - 1) {
                    string += `and ${this.interests[i]}.`
                } else {
                    string += `${this.interests[i]}, `
                }
            }
            break
    }
    alert(string)
}

function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests)
    this.subject = subject
}

Teacher.prototype = Object.create(Person.prototype)
Object.defineProperty(Teacher.prototype, 'constructor', {
    value: Teacher,
    enumerable: false, // so that it does not appear in 'for in' loop
    writable: true
})

// test teacher instance.
const teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football'], 'math')

Teacher.prototype.greeting = function() {
    let prefix

    switch (this.gender) {
        case 'male':
        case 'Male':
        case 'm':
        case 'M':
            prefix = 'Mr.'
            break
        case 'female':
        case 'Female':
        case 'f':
        case 'F':
            prefix = 'Ms.'
            break
        default:
            prefix = 'Mx.'
            break
    }
    alert(`Hello. My name is ${prefix} ${this.name.last}, and I teach ${this.subject}`)
}
