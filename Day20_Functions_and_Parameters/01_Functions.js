// Functions

// Example of a simple function 
function sayMyName() {
    console.log("D");
    console.log("N");
    console.log("A");
    console.log("N");
    console.log("O");
}

sayMyName  // Reference of function
sayMyName()  // Exicution of function

/* Add two numbers function
function addTwoNums(number1, number2) {   
    // Here addTwoNums is function name and in paranthesis number1 and number2 is parameters of function. '{}' is me funtion ki defination hoti hain.
    console.log(number1 + number2)
}

addTwoNums(2, 5)  // 7  (We are calling addTwoNums function here with arguments 2 and 5)

const result = addTwoNums(2, 5)
console.log(`Result: ${result}`);  // Result: undefined  (Because ham kuch return nahi kar rahe function me se)
*/
// note : return karna ek alag concept hota hain aur console.log ye bas print karta hain console pe 
function addTwoNums(number1, number2) {
    let addition = number1 + number2
    return addition;
}

const result = addTwoNums(4, 5)
console.log(`Result: ${result}`);  // Result: 9

function loginUserMessage(username) {
    return `${username} ursername just logged in.`
}

loginUserMessage("Dnano")   //yahan is line ka matlab function call karo, then wo phir exicute hoga aur return bhi karega but print nahi hoga.
console.log(loginUserMessage("Dnano"));  // Ab jake print hoga

// What will happen when we do not pass any arguments in function 
//console.log(loginUserMessage());  // O/p : undefined ursername just logged in. (it not gives null value)

function loginUserMessage1(username) {
    if (!username) {
        return "Please enter username"; 
    }
    return `${username} username just logged in.`;
}


console.log(loginUserMessage1())  // O/p : Please enter username

// We can set default parameter value in function. When nothig is given in argument then defualt value returned.
// Example - 
function loginUserMessage2(username = "Sam") {
    if(!username) {
        console.log("Please enter username");
        return
    }
    return `${username} ursername just logged in.`
}

console.log(loginUserMessage2())  // O/p : Sam ursername just logged in.
console.log(loginUserMessage2("Dnyaneshwar"))  // O/p : Dnyaneshwar ursername just logged in. (Argument pass karne par default replace ho jayega)

//  Kya function me return keword ke baad wala code exicute hota hai? lets check
function afterReturnFn(firstName, lastName) {
    return firstName + lastName;
    console.log("This is my full name.")
}

console.log(afterReturnFn("Dnano ", "More"))  // Dnano More (next lines console.log not exicuted)

