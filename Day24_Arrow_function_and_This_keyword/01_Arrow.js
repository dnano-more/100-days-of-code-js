// 'this' keyword overview

const user = {
    username: "dnano",
    price: 999,

    welcomeMessage: function () {
        // 'this' means the current object (like in this case current obj is user)
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
user.welcomeMessage()  // welcomeMessage method is called
// output: dnano, welcome to website

user.username = "dnyaneshwar"
user.welcomeMessage()  // output: dnyaneshwar, welcome to website

console.log(this);  // {}  (In node.js it will be empty object)


function chai() {
    let username = "Nano"
    console.log(this.username)   // undefined  (fuction me 'this' nahi karta kam shayad)
}
chai()


const FnExp = function () {
    let username = "nanu"
    console.log(this.username)  // undefined 
}
FnExp()


// Arrow function declairation
const ArrowFn = () => {
    let username = "nanu"
    console.log(this.username)  // undefined 
}
ArrowFn()

// Explicit return
const addTwo = (num1, num2) => {  // iss syntax me curly brace use hai isliye ise return karna hota hain.
    return num1 + num2
}
console.log(addTwo(5, 7))  //12

// Implicit return
const addThree = (num1, num2) => (num1 + num2)  // agar paranthesis use karoge to return karne ki jarurat nahi hai wo automatically return kar dega (yaha parentheses hi lagane chahiye na ki curly braces)
console.log(addTwo(5, 5))  //10

// How we can return object
const addFour = (num1, num2) => ({username: "Nano"})  // Without parentheses, JS will think {} is a code block, not an object.
console.log(addFour())  // output: { username: 'Nano' }