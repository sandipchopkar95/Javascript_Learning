class Person{
age=25  // simple property

//property using getter method
get location(){   
    return "Canada"
}
//constructor is a method which executes by default when we create object of that class
constructor(firstName,lastName){
this.firstName=firstName
this.lastName=lastName
}

fullName(){
    //return this.firstName+this.lastName
    console.log(this.firstName+this.lastName)
}
}

let person = new Person()
console.log(person.age)
console.log(person.location)
let person1=new Person("Sandip","Chopkar")
person1.fullName()
let person2=new Person("Dinesh","Borude")
person2.fullName()