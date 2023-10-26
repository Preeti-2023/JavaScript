const accountId=1
let accountEmail= "prityraj609@gmail.com"
var accountPassword= "12345"
accountCity ="Delhi"
let accountState;
/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

//accountId=2
console.log(accountId);
console.table([accountEmail,accountPassword,accountCity, accountId,accountState])