// String methods for getting information from strings.

// .length property
let word = "Supercalifragilisticexpialidocious";
const lengthOfWord = word.length;
console.log("The length of word is: " + lengthOfWord);  // The length of word is: 34

// .charAt()
let charAtStr = word;
console.log(charAtStr.charAt(0));  // S
console.log(charAtStr.charAt(1));  // u
console.log(charAtStr.charAt(2));  // p
console.log(charAtStr.charAt(3));  // e
console.log(charAtStr.charAt(4));  // r

// using negative index and index greater than string.
console.log(charAtStr.charAt(-3));  // negative index gives empty string
console.log(charAtStr.charAt(40));  // index > length gives empty string

// accessing without parameter
console.log(charAtStr.charAt());  // default parameter is 0 → output: S


// .indexOf()
let line = "Hello, I am a beginner in learning JavaScript. I will definitely master it.";
console.log(line.indexOf("JavaScript")); // 35
console.log(line.indexOf("I", 8));       // 47
console.log(line.indexOf("I", -8));      // 7  (negative value treated as 0)
console.log(line.indexOf("B", -8));      // -1 (case-sensitive)
console.log(line.indexOf("Python"));     // -1


// .lastIndexOf()
console.log(line.lastIndexOf("I"));        // 47
console.log(line.lastIndexOf("I", 30));    // 7
console.log(line.lastIndexOf("I", -8));    // -1 (negative value treated as 0)
console.log(line.lastIndexOf("B"));        // -1 (case-sensitive)
console.log(line.lastIndexOf("Python"));   // -1


// .charCodeAt()
console.log(line.charCodeAt(0));   // 72
console.log(line.charCodeAt(7));   // 73
console.log(line.charCodeAt(100)); // NaN (index greater than length)
console.log(line.charCodeAt(-3));  // NaN (negative index)
console.log(line.charCodeAt());    // 72 (default parameter is 0)
console.log(line.charCodeAt(line.length - 1)); // 46 (last character '.') at the last in string index starts from length-1


// .search()
console.log(line.search("JavaScript")); // 35
console.log(line.search("Python"));     // -1
console.log(line.search());            // 0 (no parameter provided) default is undefined which is converted to string "undefined" and searched.

// Using some special regex patterns and flags
console.log(line.search(/in/));         // 17 (regex allowed) returns index of first match, works same as string search but this is regex.
console.log(line.search(/In/i));        // 17 (case-insensitive), it converts string to lowercase and then searches
console.log(line.search(/Am/));         // -1 (case-sensitive), because we are not using 'i' flag
console.log(line.search(/\s/));         // 6 (searching for whitespace character) returns index of first match
console.log(line.search(/\w/));         // 0 (searching for word character) returns index of first match
console.log(line.search(/\d/));         // -1 (no digit in the string)
console.log(line.search(/!/));          // -1 (no special character '!' in the string)

let multiLine = "first line\nSecond line";
console.log(multiLine.search(/^Second/m)); // Matches "Second" at start of line, returns 11

let sLine = "abc\ndef";
console.log(sLine.search(/c.def/s)); // Matches across newline, returns 2

let unicodeStr = "😊";
console.log(unicodeStr.search(/\u{1F60A}/u)); // Matches emoji, returns 0



// .match()
let goodThought = "in learning, consistency is in small steps";
console.log(goodThought.match("steps")); // [ 'steps', index: 37, input: 'in learning, consistency is in small steps', groups: undefined ]

pattern = /consistency/g;
console.log(goodThought.match(pattern)); // [ 'consistency' ]

pattern = /in/g;
console.log(goodThought.match(pattern)); // [ 'in', 'in' ]

pattern = /In/gi;   // i = case-insensitive; capital/lowercase matter nahi karta.
console.log(line.match(pattern)); // [ 'in', 'in', 'in' ]  

pattern = /Python/g;
console.log(goodThought.match(pattern)); // null (no match)

pattern = /in/;
console.log(line.match(pattern));
// [ 'in', index: 43, input: 'Hello, I am a beginner in learning JavaScript. I will definitely master it.', groups: undefined ]

pattern = /in/gi; // i = case-insensitive
console.log(line.match(pattern)); // [ 'in', 'in', 'in' ]




// .includes()
console.log(line.includes("JavaScript")); // true
console.log(line.includes("Python"));     // false
console.log(line.includes("I"));          // true
console.log(line.includes("I", 10));          // true
let dummyStr = 'gibrishssa';
console.log(dummyStr.includes("a", 10));       // false (index greater than length)


// .startsWith()
console.log(line.startsWith("Hello"));  // true
console.log(line.startsWith("hello"));  // false (case-sensitive)
console.log(line.startsWith("I"));      // false
console.log(line.startsWith("I", 7));   // true
console.log(line.startsWith("I", 8));   // false
console.log(line.startsWith("I", -8));  // false (negative = 0)
console.log(line.startsWith("Python")); // false
console.log(dummyStr.startsWith("a", 10)); // false (index greater than length)


// .endsWith()
console.log(line.endsWith("it."));    // true
console.log(line.endsWith("It."));    // false (case-sensitive)
console.log(line.endsWith("I"));      // false
console.log(line.endsWith("I", 50));  // false
console.log(line.endsWith("H", 0));  // false  because if the length argument less than or equal to 0, it returns false.
console.log(line.endsWith("I", -8));  // false (negative = 0)
console.log(line.endsWith("Python")); // false
console.log(dummyStr.endsWith("", 0));    // true (empty string always matches)
