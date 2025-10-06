// Immediately Invoked Function Expression (IIFE)

// Why IIFE?
// 1. To avoid polluting the global scope
// 2. To create a private scope for variables and functions
// 3. To execute code immediately without the need to call it separately

// Global scope ke polution se problem hoti hain kai baar, problem ye hain ki global scope me bahut saare variables and functions hote hain aur ise variable name clash ho jaata hain. To isko avoid karne ke liye IIFE use karte hain.

// Normal function
function chai() {
    console.log('DB CONNECTED')
}
chai();  //output: DB connected


// Syntax - ()() here first parenthesis is function defination and second is exicution 

// IIFE converted
(function chai() {
    // Named IIFE
    console.log('DB CONNECTED');
})();  
//output: DB connected                           


(function iife() {
    console.log('DB CONNECTED TWO');
})();  
//output: DB CONNECTED TWO

// note: function ka exicution rokne ke liye semicolon lagana jaruri hain. Agar semicolon nahi lagate ho to wo pichle statement ke sath jod dega aur error dega.


// Using arrow function
(() => {
    // Unamed IIFE
    console.log('DB CONNECTED THREE');
})();  // DB CONNECTED THREE


// Adding parameter and argument
((nano) => {
    console.log(`DB CONNECTED ${nano}`);

}) ('NANO');  // DB CONNECTED NANO 


// Here’s a cheeky modern example:
(() => {
  const config = {
    apiUrl: "https://api.nano.dev",
    timeout: 3000
  };
  console.log("App initialized with:", config.apiUrl);
})();


// Practice - Write an IIFE that takes your name as a parameter and logs:
(function(name) {
    console.log(`Welcome, ${name}! Ready to code?`);
    
})("Dnano");