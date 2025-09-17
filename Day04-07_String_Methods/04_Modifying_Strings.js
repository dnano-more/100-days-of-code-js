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
console.log(str.repeat(3));  // "Hey! Hey! Hey! "
console.log(str.repeat(0));  // ""  (empty string)
console.log(str.repeat(1.5));  // "Hey! "          // foor kar dega matlab 1
// console.log(str.repeat(-2));  // RangeError: Invalid count value: -2   // value must be positive

// Pattern printing use 
console.log("-".repeat(10));
// "----------"

console.log("⭐".repeat(5));
// "⭐⭐⭐⭐⭐"


// .replace()

let str2 = "I like Javascript"
console.log(str2.replace("like", "write"));  // I write Javascript

let repeatedStr = "I like Javascript and Javascript"
console.log(repeatedStr.replace("Javascript", "Python"));  // O/p: "I like Python and Javascript" //first match ko hi repace karta hain
console.log(repeatedStr.replace(/Javascript/g, "Ruby"));   // o/p: "I like Ruby and Ruby"
console.log(repeatedStr.replace("Javascripttt", "php"));  // agar galat searchValue dete ho to original string return karega
console.log(repeatedStr.replace("JAVASCRIPT", "php"));  // same as galat searchValue - || -


// .replaceAll()
let repeatedWords = "Software Engineer, Software Engineer, Software Engineer"

console.log(repeatedWords.replaceAll("Engineer", "Developer"));  // o/p: "Software Developer, Software Developer, Software Developer"

let str3 = "Hello HELLO hello";
console.log(str3.replaceAll(/hello/gi, "Hi"));  // o/p: "Hi Hi Hi"  //(g -→ global, i -→ case-insensitive)


// .slice()
let sliceStr = "Om bhat swaha!"

console.log(sliceStr.slice(3, 7))  // bhat
console.log(sliceStr.slice(3))  // bhat swaha!
console.log(sliceStr.slice(5, -2))  // o/p: 'at swah'
console.log(sliceStr.length)  // 14
console.log(sliceStr.slice(-1, 6))  // o/p: empty string   // startIndex.length - 1, so actually here slice(13, 6)
// If satrt >= end ho --> empty string

console.log(sliceStr.slice(3, 3))  // o/p: empty string  // start = end returns empty string and also with satrt > length.


// .substring()
console.log(sliceStr);  // "Om bhat swaha!"
console.log(sliceStr.substring(1));  // o/p: "m bhat swaha!"
console.log(sliceStr.substring(3, 7));  // o/p: "bhat"
console.log(sliceStr.substring(3, -2));  // o/p: "om"  // negative end ko 0 treat karega (-2 = 0) so koi end value hogi hi nahi.
console.log(sliceStr.substring(11, 3));  // o/p: "bhat swa" // if start > end then its swap values like substring(3, 11) now satrt -> 3 and end -> 11


// .split()
let splitStr = "JavaScript is awesome man!";

console.log(splitStr.split(" "));  // o/p: [ 'JavaScript', 'is', 'awesome', 'man!' ]  //here seprator is space ' '
console.log(splitStr.split(" ", 2));  // o/p: [ 'JavaScript', 'is' ]  //second param means kitni substrings include ho array mein
console.log(splitStr.split(""));  
/* o/p: [
  'J', 'a', 'v', 'a', 'S', 'c',
  'r', 'i', 'p', 't', ' ', 'i',
  's', ' ', 'a', 'w', 'e', 's',
  'o', 'm', 'e', ' ', 'm', 'a',
  'n', '!'
] */

console.log(splitStr.split());  // o/p: [ 'JavaScript is awesome man!' ]  // if seprator not found then it returns entire string to one element in array.

