

const flag=true

if(!flag){
    console.log("Matched")
}else{
    console.log("Not matched")
}

console.log("**********************************************************")

let number=1
while(number<=5){
    console.log("Inside while : value of a is : "+number)
    number++
}

console.log("**********************************************************")

let number2=0
do{
    console.log("Inside do while : value of a is : "+number2)
    number2++
}while(number2<=5);           // to end do while we need to put semicolon
console.log("After do while : value of a is : "+number2)

console.log("**********************************************************")

for(let k=0;k<=5;k++){
    console.log("Inside For : value of K is : "+k)
}

console.log("**********************************************************")
//print multiple of 2
for(let k=1;k<=10;k++){
    if(k%2==0){
        console.log("Multiple of 2 : "+k)
    }
}

console.log("**********************************************************")
//print multiple of 2 and 5 only
for(let k=1;k<=10;k++){
    if(k%2==0 && k%5==0){
        console.log("Multiple of 2 & 5 : "+k)
    }
}

console.log("**********************************************************")
//print multiple of 2 and 5 only and print only first 5 entries
let n=0
for(let k=1;k<=100;k++){
    if(k%2==0 && k%5==0 ){
        console.log("First 5 entries of Multiple of 2 & 5 : "+k)
        n++
        if(n==5){
            break
        }
    }
}


