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