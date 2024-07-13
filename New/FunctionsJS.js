//block of code

function add(a,b){
return a+b                    //we need to return for evrery function
}

console.log(add(2,2))

//do not have name...called as anyonymus function -- Function expressions
let sumOfInteger= function(c,d){
    return c+d
}

console.log(sumOfInteger(2,3))

let sumOfNumber= (c,d)=>c+d    //short version of above function 

console.log(sumOfNumber(2,3))

/********************************************************************************************** */
console.log("SCOPE OF VARIABLES")
//SCOPE OF VARIABLES
// var
//global level  //function level
var abc="Sandip";
function add (){
    var  xyz="Chopkar"
    return xyz
}
console.log(add())
console.log(abc)
//console.log(xyz)   //it will throw error, because it is at function level

