// constructor function.
function Person(first, last, age, gender, interests) {
    this.name = {
        first: first,
        last: last
    }
    this.age = age
    this.gender = gender
    this.interests = interests
    this.bio = () => {
        alert(`${this.name.first} ${this.name.last} is ${this.age} years old.` +
            `She likes ${this.interests[0]} and ${this.interests[1]}.`)
    }
    this.greeting = () => {
        alert(`Hi! I'm ${this.name.first.toUpperCase()}.`)
    }
}
