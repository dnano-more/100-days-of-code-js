// Modifying String Methods

// .toUpperCase()
let myName = "my name is Dnayaneshwar More🙂"
console.log(myName);  // my name is Dnayaneshwar More
console.log(myName.toUpperCase());  // MY NAME IS DNAYANESHWAR MORE  // no effect on emoji, symbol and numbers


// .toLowerCase() 
console.log(myName.toLowerCase());  // my name is dnayaneshwar more🙂
console.log(myName);  // my name is Dnayaneshwar More


// .trim()
let goodWord = "     Prodigious    "
console.log(goodWord);          //      Prodigious    
console.log(goodWord.trim());   // Prodigious

// .trimStart() / .trimEnd()
console.log(goodWord);              // "     Prodigious    "
console.log(goodWord.trimStart());  // "Prodigious     "
console.log(goodWord.trimEnd());    // "     Prodigious"


// .padStart()
let num = "42";

console.log(num.padStart(5, "0"));  // "00042"
console.log(num.padStart(5, "*"));  // "***42"
console.log(num.padStart(2, "0"));  // "42"  (kyunki already length = 2)

let otp = "123";
console.log(otp.padStart(6, "0"));  // "000123"



// .padEnd()
console.log(num.padEnd(5, "1"));  // "42111"
console.log(num.padEnd(6, "-"));  // "42----"
console.log(num.padEnd(2, "*"));  // "42" (kyunki already 2 chars hai)

let item = "Apple";
console.log(item.padEnd(10, " "));  // "Apple     "


// .repeat()
let str = "Hey! ";

console.log(str.repeat(1));  // "Hey! "
console.log(str.repeat(3));  // "Hi! Hi! Hi! "
console.log(str.repeat(0));  // ""  (empty string)
console.log(str.repeat(1.5));  // "Hey! "          // foor kar dega matlab 1
// console.log(str.repeat(-2));  // RangeError: Invalid count value: -2   // value must be positive

// Pattern printing use 
console.log("-".repeat(10));
// "----------"

console.log("⭐".repeat(5));
// "⭐⭐⭐⭐⭐"
