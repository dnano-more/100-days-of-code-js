
// Nested function
function one() {
    const username = "Dnano"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);  // ReferenceError: website is not defined (scope ke bahar access nihi milna chaiye)
    
    // two()  
}

one()  // O/p: empty hoga(kinv ki hamne one() ko to exicute kiya but two() ko nahi). 


// if else ke under dekhte hain
const topanNav = "dm"
if(true) {
    const username = "Dnano"
    
    if (username === "Dnano") {
        const website = " youtube"
        console.log(topanNav + username + website);  // Tinho strings concatinate ho jayengi (kiv ki username uske parent directory me hain. parent ka parent bhi hoga to bhi access hota hain.)
    }
    // console.log(website);  // ReferenceError aayega (kiv ki ham scope ke bahar access karne koshish kar rahe hain. scope child me parent access hota hai, but parent me child access nahi hota.)
}
// console.log(username);  // error aayega (same here also)


// Another example
function outer() {
    const a = "outer";
    function middle() {
        const b = "middle";
        function inner() {
            console.log(a, b); // outer + middle accessible
        }
        inner();
    }
    middle();
}
outer();


//+++++++++++++++++++++++++++++++++++++++++++++++++++ intresting +++++++++++++++++++++++++++++++++++++++++++++++++++

// ✅ Function declaration hoisting:
console.log(addone(5))  // Works fine
function addone(num) {
    return num + 1 
}
/*
* JS Execution Context runs in two phases:
* 1. Memory Creation Phase (variables/functions hoist hote hain)
* 2. Execution Phase (line by line code run hota hai) */

// ❌ Function expression hoisting:
//console.log(addTwo(5))          // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num) {
    return num + 2
}


// Ek aur tiny experiment:
console.log(x);  // undefined (var hoisting)
var x = 10;

// console.log(y);  // ReferenceError (TDZ)
let y = 20;

// To isse mujhe ye samaz aata hai ki simple function declairation me variable pehale bhi access kiya ja sakta hain. Magar kisi ek variable me jab stoare karte hain function ko aur before initialization acsess karne ki koshish karte hain to ReferenceError milta hain 