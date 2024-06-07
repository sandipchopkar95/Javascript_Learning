//Singlton
//Object.create

//object literals

const mySym=Symbol("key1")

const JsUser={
    name:"Sandip",
    "full name":"Chopkar",
    [mySym]:"mykey1",
    age:28,
    address:"Indore",
    email:"test@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"] 
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])   
// console.log(typeof JsUser[mySym])   
// console.log(JsUser[mySym]) 

JsUser.email="test@test.com"
//Object.freeze(JsUser)
JsUser.email="test@microsoft.com"

// console.log(JsUser)

//function
JsUser.greeting=function(){
    console.log("Hello User")
}

console.log(JsUser.greeting())

JsUser.greetingTwo=function(){
    console.log(`"Hello User",${this.name}`)
    console.log("Hello User",this.name)
}
console.log(JsUser.greetingTwo())