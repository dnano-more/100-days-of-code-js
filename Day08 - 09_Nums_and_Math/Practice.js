/* 
*📝 JavaScript Number – Practice Exercises

*Q1️⃣ Ek number 123 ko string me convert karo aur uska type print karo.*/
let ekNumber = 123
let numToStr = ekNumber.toString();
console.log(typeof numToStr);       // string

/* 
*Q2️⃣ Number 255 ko binary, octal and hexadecimal string me convert karke print karo.*/
let num = 255 

console.log(num.toString(2));  // 11111111
console.log(num.toString(8));  // 377
console.log(num.toString(16)); // ff

/* 
* Q3️⃣ Number 3.14159 ka output do: 2 decimal places and 4 decimal places */
let num2 = 3.14159

console.log(num2.toFixed(2));  // 3.14
console.log(num2.toFixed(4));  // 3.1416

/* 
*Q4️⃣ Number 98765.4321 ko 4 total digits tak precision karo aur output check karo. */
let num3 = 98765.4321

console.log(num3.toPrecision(4));  // 9.877e+4


/*
*Q5️⃣ 1000000 ko default locale "en-IN", "en-US" aur "de-DE" format me print karo. */
let paisa = 1000000

console.log(paisa.toLocaleString("en-IN"));  // 10,00,000
console.log(paisa.toLocaleString("en-US"));  // 1,000,000
console.log(paisa.toLocaleString("de-DE"));  // 1.000.000


/* 
* Q6️⃣ Ek variable me "123abc" rakho aur usse Number() me convert karo. Output aur uska Number.isNaN() result print karo.*/
let variable = "123abc"
let toNum = Number(variable);

console.log(Number.isNaN(toNum));  // true


/* 
* Q7️⃣ 10.0 aur 10.5 par Number.isInteger() check karo. Output samjho.*/
let n1 = 10.0
let n2 = 10.5

console.log(Number.isInteger(n1));  // true
console.log(Number.isInteger(n2));  //false 


/* 
* Q8️⃣ Ek number 255 ko hexadecimal string me convert karke uppercase me print karo.*/

let n3 = 255
let hexValue = n3.toString(16);

console.log(hexValue.toUpperCase());  // FF


/*
* Q9️⃣ Ek number 42 ko string me convert karo, phir us par string method .includes("4") lagao. Output kya aayega?*/
let n4 = 42
let toStr = n4.toString();

console.log(toStr.includes("4"));  // true


/* 
*🔟 Ek price 199.99 lo. Usse toFixed(0) karo aur usse toFixed(2) karoAur dono results compare karo.*/
let price = 199.99

console.log(price.toFixed(0));  // 200
console.log(price.toFixed(2));  // 199.99

/* 📝 Practice Set (Math Object)

* 1.Random Range
* Generate a random integer between 50 and 100 (inclusive).*/
let min = 50
let max = 100

// let randInt = Math.floor(Math.random() * 100 + 1)
// console.log(randInt + min) 

let randInt = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randInt) 

// ⚡ Mini-Quiz

// Write a formula for a random decimal between 10 and 20.
// 👉 Should you add +1 or not?

// No I do not add +1
let minNum = 5
let maxNum = 10
let randecimal = Math.random() * (maxNum - minNum) + minNum;
console.log(randecimal)

//2. Write a formula for a random integer between 1 and 6 (like rolling a dice 🎲).
// 👉 Should you add +1 or not?

// Yes. I will add +1
let dice1 = 1
let dice6 = 6
let dice = Math.floor(Math.random() * (dice6 - dice1 + 1)) + dice1;
console.log(dice);

// Suppose you write this:
Math.floor(Math.random() * (20 - 10)) + 10;
// What will be the possible range of integers? (inclusive of what, exclusive of what?)
// Answer - The possible range of intergers is 10 to 19

//Random integer between 0 and 9 (like picking a digit)
// 👉 Formula with or without +1?

//Answer - Its with +1
let i = 0
let b = 9
let c = Math.floor(Math.random() * (b - i +1 ) + i);
console.log(c);

//Random decimal between -3 and 3
// 👉 Formula with or without +1?

// Answer - No +1
let minValue = -3
let maxValue = 3
let randValue = Math.random() * (maxValue - minValue) + minValue;
console.log(randValue);


//Rounding Trick: What’s the difference between Math.floor(4.999) and Math.trunc(4.999)?
//Write the outputs.
console.log(Math.floor(4.999));  // 4 (if its negative o/p would be -5)
console.log(Math.trunc(4.999));  // 4 


//Find Winner: Given three scores 85, 92, 88, use Math.max to find the highest score.
console.log(Math.max(85, 92, 88));  // 92

/*
*Square Power:
*Use Math.pow and Math.sqrt to check:
*Is the square root of 144 equal to 12?
*Is 5² equal to 25? */

console.log(Math.sqrt(144) === 12);  // true
console.log(Math.pow(5, 2) === 25);  // true
