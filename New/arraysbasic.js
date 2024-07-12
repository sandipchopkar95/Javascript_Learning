
//let marks=Array(6)
//var marks=new Array(1,2,3,4,5,6)

let marks=[1,2,3,4,5,6]

console.log(marks[2])  // will give value of 2nd index
marks[3]="Sandip"     //update value at 3rd index
console.log(marks)
console.log(marks.length)  //will give the lengh of array

marks.push(7)   //add new value at the end of array
console.log(marks)

marks.pop()  //delete last value of array
console.log(marks)

marks.unshift(0) //add new value at beginging
console.log(marks)

console.log(marks.indexOf("Sandip")) //give the index of value

console.log(marks.includes("Sandip"))  //will check whether value are present or not in array

console.log(marks.slice(2,4))  //will create subArray from main array

console.log(" ***Some of Array value *** ")
let myArray=[11,22,33,44,55,66]
let sum=0
for(let i=0;i<myArray.length;i++){
    sum=sum+myArray[i]
}
console.log(sum)