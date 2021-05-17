// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance#ecmascript_2015_classes
const title = document.querySelector('h1')
title.textContent = 'ECMAScript 2015 Classes'

class Person {
    constructor(first, last, age, gender, interests) {
        this.name = {
            first,
            last
        }
        this.age = age
        this.gender = gender
        this.interests = interests
    }

    greeting() {
        alert(`Hi! I'm ${this.name.first}`)
    }

    farewell() {
        alert(`${this.name.first} has left the building. Bye for now!`)
    }
}

let person1 = new Person('Dave', 'Smith', 22, 'male', ['tennis', 'baseball'])

class Teacher extends Person {
    constructor(first, last, age, gender, interests, subject, grade) {
        super(first, last, age, gender, interests)
        this._subject = subject
        this.grade = grade
    }

    get subject() {
        return this._subject
    }

    set subject(subject) {
        this._subject = subject
    }
}

let teacher1 = new Teacher('Mike', 'Daves', 43, 'male', ['basketball'], 'english', 4)
