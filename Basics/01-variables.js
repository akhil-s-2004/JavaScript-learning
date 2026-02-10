const name = "Akhil"
//name = "akhill" // not possible as variables defined with const cannot be changed

let userEmail = "akhil@gmail.com"
var userPasswd = 1234 // var had scope issues and was used in the past, now 'let' is most used.

userDetails = 1234  // not recommended

console.log(name) // for printing the value into console
console.table([name,userEmail,userPasswd, userDetails]) // for printing all the variables and therir values together