const accountId = 123
var accountEmail = "ahsanalise226@gmail.com"
let accountPassword = "12345"
accountCity = "karachi"

accountEmail = "aa8100399@gmail.com"
accountPassword = "123456789"
accountCity = "islamabad"
let accountState;

// accountId = 12345 not allowed because const should be deaclare at a time 


console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

// Notes
// prefer not to use var
// because issue create in block scope and funtional scope
// const jis ko 1 bar declare krdiya ab bar bar nhi krskty 
// var maybe change at different places
// we have learn investigation --to--> documentation
// var const let hamesha memory kay andar assign krdiya kro
// console.table is another method of console.log
// we have no need to use var beacuse var change hoskta hy is kee wajah sy program ma mixup hota hy is waja
// sy var ko ab hum use nhi krta ab hum sirf let oor const use krta hein.
//scope---->{}
