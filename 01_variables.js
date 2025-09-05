const accountId = 144553
let accountEmail = "lavisha@google.com"
var accountPassword = "12345"
accountCity = "Indore"

// accountId = 2 //not allowed

accountEmail = "vyas@google.com"
accountPassword = "21212121"
accountCity = "Bengaluru"
let accountState;

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail, accountPassword, accountCity, accountState])