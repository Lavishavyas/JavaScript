//Primitive
//7 types : String , Number, Boolean, null, undefined, Symbol, BigInt.

//Javascript is dynamic type language

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

// const bigNumber = 34536373735343242424334535353555n

//Non Primitive / Refrence 
//Array, Objects, Functions, 

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Lavisha",
    age: 21,
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof outsideTemp);

//https://262.ecma-international.org/5.1/#sec-11.4.3



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap (Non Primitive)

let myYoutubeName = "lavishavyasdotcom"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "lavisha@google.com"

console.log(userOne.email);
console.log(userTwo.email);