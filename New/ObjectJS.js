//Objects is the collection of properties
let person={
    firstName : "Sandip",
    lastName : "Chopkar",
    job : "Engineer",
    age: 29,
    fullName: function(){
       return this.firstName+this.lastName
    }
}
console.log(person.fullName())
console.log(person.firstName)     //by using object.key
console.log(person['lastName'])    //by using object[index] -> here index will be the key
console.log(person.job)

person.firstName="Shubham"   // change properties value at runtime
console.log(person.firstName)

person.gender="male"  // add properties value at runtime
console.log(person)

delete person.gender  // delete properties value at runtime
console.log(person)

console.log('gender' in person)  // will tell is this property is present or not in object
console.log('firstName' in person)  // will tell is this property is present or not in object

//iterate object by using key
for(let key in person){
    console.log(person[key])
}

