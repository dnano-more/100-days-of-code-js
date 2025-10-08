// if statement

/* Syntax:
if (condition) {
    
} 
Note: If condition is true then code is execute within the scope otherwise exicution will skiped

//Example:
if (2==2) {
    //code will execute
    console.log(2+5);
}
if (2=='A2') {
    //code will not execute
    console.log(2+2);
} 
    */


//Comparison Operators: less than(<), greater than(>), greater than or equalto(<=), less than or equalto(<=), loose equalto(==), strict equalto(===), loose not equalto(!=), strict not equal(!==) 

const isUserLoggedIn = true

if (isUserLoggedIn) {
    console.log('User is logged in..!');
}

const temprature = 28

// if (temprature < 50) {
//     console.log("Temprature is less than 50");
// }
// console.log("Temprature is greter than 50");

// How we handle false case then? Answer is 'else' block code. 
if (temprature < 50) {
    console.log("Temprature is less than 50");
} else {
    console.log("Temprature is greter than 50");
}

//sope me dekhte hain
const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`);  // Its gives ReferenceError


// Shorthand notation of 'if statement'
const balance = 1000
if (balance > 500) console.log('Balance is full');  // It is a implicite scope example.

if (balance > 500) console.log('Balance is full'), console.log('balance is blah blah');  // This type of fancy code will works but it considerd as bad practice — Always prefer {} for clarity, especially when multiple statements are there.


// nested if 

if (balance < 500) {
    console.log("Balance is less than 500");
} else if (balance < 700) {
    console.log("Balance is less than 700");
} else if (balance < 900) {
    console.log("Balnce is less than 900")
} else {
    console.log("Balnce is less than 1200")
}


// real use case example
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {    // If all conditions are true then code will be executed otherwise skiped
    console.log("Allow to buy course"); 
}

if(loggedInFromGoogle || loggedInFromEmail) {   // If any one condition are true then code will be executed -//-
    console.log("User logged in..!"); 
} 