// Declairation of objects

// We have two ways, 
// 1 - Object literals
// 2 - Object constructor
// note - 'singleton' object literal se nahi banta balki hamesha constructor se banta hain.
// Object.create  (example of singleton object)


// 1 - Object literals :

// IMP - symbol declairation and how to use symbol as a key in JsUser object ⬇
const mySym = Symbol("key1");

const JsUser = {
    name: "Dnano", // By default key is string. (intresting fact ye hain ki ham keys define kar sakte hain. hame jo chahiye wo; Array ki taraha 0 1 2... aisa chakkar nahi hain yaha par)
    "Full Name": "Dnyaneshwar More",
    age: 23,
    location: "Latur",
    email: "dnano@google.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    [mySym]: "myKey1"  // symbol ko refer karna hain to [] me dalkar dena hoga key ko
}


// Accessing values of Object
console.log(JsUser.name);
console.log(JsUser["Full Name"]);
console.log(JsUser[mySym]);

// Changing values of Object
JsUser.email = "dnano@paypal.com"
console.log(JsUser["email"]);  // O/p: 'dnano@paypal.com'

// We can freeze object. Matlab koi values ko change na kar sake (values lock rahe) 
// Object.freeze(JsUser);
JsUser.email = "dnano@microsoft.com"
console.log(JsUser["email"]);  // O/p: 'dnano@paypal.com' (value is not changed.)
console.log(JsUser);

// Using function as a key in object
JsUser.greeting = function() {
    console.log("Hello, JS User..!");
}

console.log(JsUser.greeting);  //O/p: [Function (anonymous)]
JsUser.greeting();  //O/p: Hello, JS User..!

JsUser.greetingTwo = function() {
    console.log(`Hello, JS User ${this.name}..!`);  // ( same object ko reference karna tha, uski properties access karni thi isliye this.name use kiya )
}

JsUser.greetingTwo();  //O/p: Hello, JS User Dnano..!
