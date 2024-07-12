console.log(" ***Some of Array value *** ")
let marks=[11,22,33,44,55,66]
let sum=0
for(let i=0;i<marks.length;i++){
    sum=sum+marks[i]
}
console.log(sum)
//Reduce filter map
let total=marks.reduce((sum,marks)=>sum+marks,0) //sum using reduce
console.log(total)

var scores=[11,12,13,14,15]
//create new array with even value
var evenScore=[]
for(let i=0;i<=scores.length;i++){
    if(scores[i]%2==0){
        evenScore.push(scores[i])
    }
}
console.log(evenScore)

let newFilterEvenScore=scores.filter(scores=>scores%2==0)  //new array using filter
console.log(newFilterEvenScore)
