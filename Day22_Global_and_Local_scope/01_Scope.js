// Scope '{}' in detail

// Normal variable declairation and and their results
let a = 10
const b = 20
var c = 30

console.log(a);
console.log(b);
console.log(c);


// Adding these variable into local scope and checking their outputs
// note: Object ka curly brace scope nahi hota wo object declairation hao hain.
// {} ye functions, if else aur bhi jagah hota hain tab ise scope bolte hain.
if (true) {
    let d = 100
    const f = 200
    var g = 300
}

// console.log(d);  // O/p : ReferenceError: d is not defined
// console.log(f);  // O/p : ReferenceError: f is not defined
console.log(g);  // O/p: 300 

// lets check real problem of var
var x = 50

if(true) {
    var x = 20
} 

console.log(x)  // O/p : 20  (problem ye hai ki pata kaise kare ki kaunse x variable ki hame value mili hain(large code file mein))

// Bahar yani global me declaire kiye huye variables ko loacal me access hota hain. ex ⬇
let s = 45
if(true) {
    console.log(s);  // 45
} 


// let ka scope dekhte hain
let k = 35
if (true) {
    let k = 40 
    console.log("INNER: ", k)  // 
}

console.log(k);  // 35  (let scope global ka global aur local and local ka bas local me access hota hain.)

// 'let' real use case
const array = [1, 2, 3];
for (let index = 0; index < array.length; index++) {
    const element = array[index]; 
    console.log(element);
}
// Uper wale for loop me jo index variable use kiya hain wo bas ham uske aage ke scope me use karna chahenge na ki pure code me same variable.
 
/* 
* Short interview note: 
*   let and const → Block scoped
*   var → Function scoped (agar function ke andar ho) / global (agar function ke bahar ho)
*   Global scope → Browser me window object ke andar hota hai, Node.js me global object ke andar.
*/