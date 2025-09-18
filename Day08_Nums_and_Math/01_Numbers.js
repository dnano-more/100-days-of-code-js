// Numbers in detail

// declaration of number

// JavaScript mein ek hi type ka number hota hai (integer & float dono same).
const score = 89
console.log(score);  // 89

const decimalNum = 2.45
console.log(decimalNum);  // 2.45


// declaration of number using Number constructor and ( using new kyeword )
let n1 = Number("123");  // 123
let n2 = Number("abc");  // NaN
console.log(n1, n2);

const balance = new Number(10000)
console.log(balance);  // [Number: 57]

const strToNum = Number("123");    // string → number (123)
console.log(strToNum);  


// Important Number Properties
console.log(Number.MAX_VALUE);       // o/p: 1.7976931348623157e+308   //sabse bada number
console.log(Number.MIN_VALUE);       // o/p: 5e-324                    //sabse chhota positive number
console.log(Number.MAX_SAFE_INTEGER);  // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER);  // -9007199254740991
console.log(Number.POSITIVE_INFINITY);  // Infinity
console.log(Number.NEGATIVE_INFINITY);  // -Infinity
console.log(Number.NaN);             // NaN


// Number Methods

// .tostring(base) - it converts number to string
let num = 255
console.log(num.toString());  // '255' 

// Base dene par dusre number system me convert hota hai.
console.log(num.toString(2));  // '11111111' (2 → binary)
console.log(num.toString(8));   // "377"       (8 → octal)
console.log(num.toString(16));  // 'ff'    (16 → hexadecimal)

// Intresting fact -> we can use string properties/methods with after .toString()
console.log(num.toString(2).length);  // 8
console.log(num.toString().charAt(0));  // '2'
console.log(num.toString(16).toUpperCase()); // 'FF'
console.log(num.toString(8).includes("3"));  // true


// .toFixed(digits) - Fixed decimal places ke saath string return karta hai. Mostly prices ke liye.
let ammount = 100.00
console.log(ammount.toFixed(1));  // '100.0'
console.log(ammount.toFixed(0));  // '100'


// .toPrecision(totalDigits) - Total digits (decimal + integer) specify karta hai.

let anotherNumber = 12.4999
console.log(anotherNumber.toPrecision(2));  // '12'   
console.log(anotherNumber.toPrecision(3));  // '12.5'  

anotherNumber = 142.9384;
console.log(anotherNumber.toPrecision(3))  // '143'  // decimal ke baad wali value ko roundup kar dega. // here first priorty is going to before the decimal number.

anotherNumber = 129314.92347
console.log(anotherNumber.toPrecision(4))  // '1.293e+5' // here is '1.293' is precise value and other is in exponential


// .toLocaleString(locale) - Local number format return karta hai.
let hundreds = 1000000

console.log(hundreds.toLocaleString());  // '1,000,000'  <-- this is US standerd("en-US") format
console.log(hundreds.toLocaleString('en-IN'));  // '10,00,000'
console.log(hundreds.toLocaleString("de-DE")); // "1.000.000" (Germany, dot instead of comma)

// Number.isNaN(value) - Sirf tab true deta hai jab value exactly NaN ho.
console.log(Number.isNaN(123));     // false
console.log(Number.isNaN("abc"));   // false
console.log(Number.isNaN(NaN));     // true


// Number.isInteger(value) - Check karta hai ki value integer hai ya nahi.
console.log(Number.isInteger(10));   // true
console.log(Number.isInteger(10.5)); // false

