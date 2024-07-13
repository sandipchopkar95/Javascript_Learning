let day="Sunday"
console.log(day.length) // length of String
console.log(day.slice(0,4)) // convert to substring
console.log(day[1])   //give value of index
console.log(day.split("n")) // split for after n
let splitday=day.split("n")
console.log(splitday[0])  //give splitted first array
console.log(splitday[0].trim())
console.log(splitday[0].length)  //give splitted first array
console.log(splitday[0].trim().length)

let date="09"
let nextdate="16"
let diff=parseInt(nextdate)-parseInt(date)   //Convert string to number
console.log(diff)
console.log(typeof(diff.toString()))  //Convert number to string
console.log("*******************************************")
let funday ="Sunday"+" is funday"
console.log(funday)
let val=funday.indexOf("is")  //will give the index of where string start
console.log(val)

let value=funday.indexOf("day") 
let count =0
while(value!==-1){
    count++
    value=funday.indexOf("day",value+1) 
}
console.log(count)

