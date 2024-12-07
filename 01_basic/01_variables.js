const accountId = 14453
let accountEmail = "aaaa@gmail.com"
var accountPass = "Aastha@123"
accountCity = "Lucknow"

// accountId = 21  not allowed under const keyword
accountEmail = "aastha.com"
accountPass = "aastha@xyz"
accountCity = "kanpur"

console.log(accountId);
console.log(accountEmail);
console.log(accountPass);
console.log(accountCity);
console.table([accountId, accountEmail, accountPass, accountCity])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
