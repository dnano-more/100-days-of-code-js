"use strict"; // Treat all JS code as newer version

// alert( 2 + 2 ) // we are using node.js not browser

console.log(3
    +
    3) // code readability should be high

let name = "nano"
let age = 23
let isLoggedIn = false


// number => 2 to the power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => not assinged value.
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null);  // object

// console.table( [ typeof 8374, name, isLoggedIn, null, undefined, BigInt, [] ] );

console.log( typeof [8374, isLoggedIn, null, undefined] );  // object

console.log(typeof function name(params) {
    
});  // function

console.log(typeof undefined);  // undefined
console.log(typeof null);      // object
console.log(typeof BigInt);    // function
console.log(typeof Symbol);    // function

console.table([
  typeof 8374,         // "number"
  typeof name,         // depends on what 'name' is
  typeof isLoggedIn,   // depends on what 'isLoggedIn' is
  typeof null,         // "object" (quirk in JS)
  typeof undefined,    // "undefined"
  typeof BigInt(1),    // "bigint"
  typeof Object,       // "function"
  typeof [],            // "object"
  typeof Function       // "function"
]);


