let marks=[1,2,3,4,5,6,7,8,9,0]
let newmarks=marks.map(marks=>marks*3)
console.log(newmarks)
let sum=0
//let val=0
var sandip=[1,2,3,4,5,6,7,8,9,10]
let newArray=sandip.filter(sandip=>sandip%2==0).map(sandip=>sandip*3).reduce((sum,val)=>sum+val,0)
console.log(newArray)

let fruits=["banana","mango","apple","orange"]
fruits.sort()
console.log(fruits)
console.log(fruits.reverse())

var num=[1,3,1,8,5,23,13,15]
num.sort(function(a,b){
return a-b
})

console.log(num)

var num=[1,3,1,8,5,23,13,15]
let newSortedNumber= num.sort((a,b)=>a-b)
console.log(newSortedNumber)