module.exports= class Person{
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