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
