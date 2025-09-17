// 🔹 Practice Questions on Getting Information from Strings
// 1. .length

// 👉 Ek string "JavaScript is awesome!" ka length nikal ke print karo.

let str = "JavaScript is awesome!"
console.log(str.length);  // 22


// 2. .charAt()

// 👉 String "HELLO" me index 1 aur 4 par kaunsa character hai?

let str2 = "HELLO";
console.log(str2.charAt(1));  // E
console.log(str2.charAt(4));  // O


// 3. .charCodeAt()

// 👉 "A" aur "a" ka ASCII (Unicode) value nikal kar print karo.

let capStr = "A"
let smallStr = "a"

console.log(capStr.charCodeAt("A"));   // 65
console.log(smallStr.charCodeAt("a"));  // 97


// 4. .codePointAt()

// 👉 String "😊JS" me first character (emoji) ka code point nikal kar print karo.

let emojiStr = "😊JS";
console.log(emojiStr.codePointAt(0));  // 128522


/* 5. .includes()

👉 Check karo string "I love programming" me:

    ◽ "love" present hai ya nahi

    ◽ "code" present hai ya nahi */

let loveStr = "I love programming"

console.log(loveStr.includes("love"));  // true
console.log(loveStr.includes("code"));  // false


/* 👉 "banana" string ke liye:

.indexOf("a") ka output kya aayega?

.lastIndexOf("a") ka output kya aayega? */

let indexStr = "banana"

console.log(indexStr.indexOf("a"));    // 1
console.log(indexStr.lastIndexOf("a"));  // 5


/* 👉 "JavaScript is fun" ke liye:

.startsWith("Java") ka output?

.startsWith("Script") ka output? */

let funStr = "JavaScript is fun"

console.log(funStr.startsWith("Java"));  // true
console.log(funStr.startsWith("Script"));  // false


/* .endsWith()

👉 Usi string "JavaScript is fun" check karo ki "fun" se end hota hai ya nahi.
👉 Check karo ki "Java" se end hota hai ya nahi. */

console.log(funStr.endsWith("fun"));   // true
console.log(funStr.endsWith("Java"));  // fase


/* ⚡Bonus Mix Question:
Ek string "coding" lo.

👉 iska length nikalna

👉 2nd index ka character nikalna

👉 check karna "ing" included hai ya nahi

👉 last "g" ka index nikalna */

let mixQuest = "coding"

console.log(mixQuest.length);           // 6
console.log(mixQuest.charAt(2));       // d
console.log(mixQuest.includes('ing'));  // true
console.log(mixQuest.indexOf('g'));    // 5


// 🔹 Practice Questions on Modifying String methods

/* 
*🟡 Medium Level

1. Ek string " JavaScript is fun " ko trim karke words me todho using .split(" ").
👉 Expected: ["JavaScript","is","fun"] */

let jsFunStr = " JavaScript is fun "
let trimedStr = jsFunStr.trim();
// console.log(trimedStr);

let stoarTreamedStr = trimedStr
console.log(stoarTreamedStr.split(" "));


// "123" string ko .padStart(5, "0") se "00123" banao. Fir usi ko .padEnd(8,"*") se "00123***" banao.

let numStr = "123"
let padStartStr = numStr.padStart(5, "0");
console.log(padStartStr)

let padEndStr = padStartStr.padEnd(8, "*");
console.log(padEndStr);

// "banana" me pehla "a" ko "o" se replace karo aur fir result ko uppercase me convert karo.

let fruit = "banana"
let replacedStr = fruit.replace("a", "o");
console.log(replacedStr.toUpperCase());

// Ek string "FrontendDeveloper" se "End" substring extract karo using .slice().

let role = "FrontendDeveloper" 
console.log(role.indexOf("end"));  // 5
console.log(role.slice(5, 8))  // end

// "hello world world" me sabhi "world" ko "JS" se replace karo.

let repeatedWords = "hello world world"
console.log(repeatedWords.replaceAll("world", "JS"))

// 🔴 Tricky Level

// Ek sentence " Coding is awesome! " ko trim karke fir .repeat(2) karo.
// 👉 Expected: "Coding is awesome!Coding is awesome!"

// "987" string ko .padStart(6,"0") aur .padEnd(8,"#") ke saath modify karo.
// 👉 Expected: "000987##"

// "apple,banana,grapes,mango" ko .split(",") se array me convert karo aur fir usme se "banana" ko .replace() se "kiwi" karo.
// 👉 Expected Array: ["apple","kiwi","grapes","mango"]

// "JavascriptJavascriptJavascript" string me se beech wala "Javascript" cut karke nikal do using .substring().

// Ek string "a-b-c-d" ko .split("-") use karke array banao aur fir us array ko join karke "abcd" banao (hint: .join("")).