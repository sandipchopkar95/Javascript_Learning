const name="Sandip"
const repoCount=50

//console.log(name+repoCount+" Value");      //outdated

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)   //modern way

const gameName=new String('Sandipkmif')

console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(5))
console.log(gameName.trim())
const subString=gameName.substring(1,5)
console.log(subString)

const anotherString=gameName.slice(-8,3)  //here we can use negative value
console.log(anotherString)

const newString1="    SANDIPKMIF "
console.log(newString1)
console.log(newString1.trim())

const url="https://sandip.com/sandip%20chopkar"
console.log(url.replace('%20','-'))

console.log(url.includes('and'))

const url2="https://sandip.com/sandip/20chopkar/name/company"
console.log(url2.split('/'))

