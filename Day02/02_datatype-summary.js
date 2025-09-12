/* Primitive data types:
* There are 7 primitive data types in js.
* String
* Number
* Boolean
* Null
* Undefined
* Symbol
* Bigint
*/

// Declaration:
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);  // false. If symbols have the same description, they are still unique.

const bigNumber = 588384534859524683764n

/* Refrence data types ( Non primitive ):
* Array
* Object
* Function
*/

// Declaration:
const heros = ["Shaktiman", "Naagraj", "Doga", "Hatim", "Hobo"]

let myInfo = {
    name: "Dnano",
    age: 23
}

const myFunction = function () {
    console.log("Hello world..!");
}

console.log(typeof score);  // number
console.log(typeof isLoggedIn);  // boolean
console.log(typeof outsideTemp);  // object. this is a quirk in js. null is considered as an object.
console.log(typeof id);  // symbol
console.log(typeof bigNumber);  // bigint
console.log(typeof heros);  // object
console.log(typeof myInfo);  // object
console.log(typeof myFunction);  // typeof myFunction output shows 'function' but its called as object function.
