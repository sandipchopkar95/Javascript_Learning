const accountId=123451           //can not use second variable with same name (to change the value)
let accountEmail="test@gmail.com"  //can not use second variable with same name (to change the value)
var accountPassword="12345"       //prefer not to use because of scope function
accountCity="Indore"         //can be change if define second value with same variable name
let accountState;         //not defined

//const accountId=154321                  //will give compile time error
//let accountEmail="sandip@gmail.com"   //will give compile time error
var accountPassword="54321"
accountCity="Indore"



console.table([accountId,accountEmail,accountPassword,accountCity,accountState])  //to print value in table