const Person = require('./Person')
class Pet extends Person {

    get location() {
        return "Indore"
    }
    constructor(firstName, lastName) {
        //call parent class constructor
        super(firstName, lastName)
    }

}

let pet = new Pet("Tommy", "Jackson")
pet.fullName()
console.log(pet.location)