//primitive
// 7 types: String, Number, Boolean, null, Symbol, BigInt
// JS is a 
const score=100 //false, SANDIP
const scoreValue=100.05
const isLoggedIn=false
const outsideTemp=null
let userEmail;   //undefined
const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId)   //vale is different

//const bigNumber=2131231224244342353535n




//Reference Type (non primitive)
//Arrays, Objects, Functions

const heroes=["shaktiman","naagraj","doga"];
let obj={
    name:"SANDIP",
    age:32,
city:"Indore"
}

const myfunction=function(){
console.log("Hello world")
}

console.log(typeof heroes)