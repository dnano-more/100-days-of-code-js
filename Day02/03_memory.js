// Stack memory => Primitive datatype
// Heap memory => Non Primitive datatype

// Stack memory example:
let myFullName = "Dnayneshwar Pravin More"

let anotherName = myFullName
anotherName = "dnano-more"

console.log(myFullName);  // Dnayneshwar Pravin More
console.log(anotherName);  // dnano-more   //Change made in copy value not affected any change in the original value.


// Heap memory example:
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userOne.email = "dano@google.com"

console.log(userOne.email);  // dano@google.com   //Reference value is changed.
console.log(userTwo.email);  // dano@google.com
