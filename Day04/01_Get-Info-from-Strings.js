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

// .search()
console.log(line.search("JavaScript")); // 35
console.log(line.search("I"));          // 7
console.log(line.search("Python"));     // -1
console.log(line.search(/in/));         // 43 (regex allowed)
console.log(line.search(/In/i));        // 43 (case-insensitive)
console.log(line.search(/In/));         // -1 (case-sensitive)


// .match()
let pattern = /I/g; // g = global search
console.log(line.match(pattern)); // [ 'I', 'I' ]

pattern = /JavaScript/g;
console.log(line.match(pattern)); // [ 'JavaScript' ]

pattern = /Python/g;
console.log(line.match(pattern)); // null (no match)

pattern = /in/g;
console.log(line.match(pattern)); // [ 'in', 'in' ]

pattern = /in/;
console.log(line.match(pattern));
// [ 'in', index: 43, input: 'Hello, I am a beginner in learning JavaScript. I will definitely master it.', groups: undefined ]

pattern = /in/gi; // i = case-insensitive
console.log(line.match(pattern)); // [ 'in', 'in', 'in' ]

pattern = /In/gi;
console.log(line.match(pattern)); // [ 'in', 'in', 'in' ]


// .includes()
console.log(line.includes("JavaScript")); // true
console.log(line.includes("Python"));     // false
console.log(line.includes("I"));          // true
console.log(line.includes("I", 8));       // true


// .startsWith()
console.log(line.startsWith("Hello"));  // true
console.log(line.startsWith("hello"));  // false (case-sensitive)
console.log(line.startsWith("I"));      // false
console.log(line.startsWith("I", 7));   // true
console.log(line.startsWith("I", 8));   // false
console.log(line.startsWith("I", -8));  // false (negative = 0)
console.log(line.startsWith("Python")); // false


// .endsWith()
console.log(line.endsWith("it."));    // true
console.log(line.endsWith("It."));    // false (case-sensitive)
console.log(line.endsWith("I"));      // false
console.log(line.endsWith("I", 50));  // false
console.log(line.endsWith("I", -8));  // false (negative = 0)
console.log(line.endsWith("Python")); // false
