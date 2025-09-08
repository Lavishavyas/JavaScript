//singleton
//Object.create

//object literals


const mySym = Symbol("key1")


const JsUser = {
    name : "Lavisha", 
    "full name" : "Lavisha Vyas",
    [mySym] : "mykey1",
    age : 21, 
    location : "Indore", 
    email : "lavisha@google.com",
    isLoggedIn : false,
    lastLoginDay : ["Monday", "Tuesday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "lavisha@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "lavisha@microsoft.com"
// console.log(JsUser);

JsUser.greetings = function() {
    console.log("Hello Js User");
}

JsUser.greetingsTwo = function() {
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());

