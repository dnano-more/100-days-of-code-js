/* 
* 🧩 Tricky Practice Questions on Strings
*Q1.
◽ String: "abracadabra"
◽ Total length nikalna
◽ First "bra" ka index
◽ Last "bra" ka index */

let str = "abracadabra"

console.log(str.length);  // 11
console.log(str.indexOf("bra"))  // 1
console.log(str.lastIndexOf("bra"))  // 8

/* 
*Q2.
◽ String: "OpenAI creates AI solutions"
◽ Check karo string "Open" se start hoti hai ya nahi
◽ Check karo string "solutions" se end hoti hai ya nahi
◽ "AI" kitni baar aata hai (count karna .indexOf + loop use karke) */

let str2 = "OpenAI creates AI solutions"

console.log(str2.startsWith("Open"));  // true
console.log(str2.endsWith("solutions"))  // true
console.log(str2.match(/AI/g).length) // 2


/*
*Q3
◽ String: "123-456-7890"
◽ Index 4 par kaunsa character hai?
◽ "456" included hai ya nahi?
◽ Last "-" ka index kya hai? */

let phoneNo = "123-456-7890"

console.log(phoneNo.charAt(4));  // 4
console.log(phoneNo.includes("456"));  // true
console.log(phoneNo.lastIndexOf("-"));  // 7


/*
*Q4.
◽ String: "JavaScriptJavaScript"
◽ First "Script" ka index
◽ Last "Script" ka index
◽ Check karo "Java" se start hoti hai ya nahi
◽ Check karo "Python" included hai ya nahi */

let javaScript = "JavaScriptJavaScript"

console.log(javaScript.indexOf("Script"));  // 4
console.log(javaScript.lastIndexOf("Script"));  // 14
console.log(javaScript.startsWith('Java'));  // true
console.log(javaScript.includes("python"));  // false

/*
*Q5. (Challenge 😎)
◽ Ek string hai "hello world". Tumhe output chahiye:
◽ "H" (first character uppercase)
◽ Last character ka Unicode value
◽ "world" included hai ya nahi
◽ "hello" included hai ya nahi
◽ "HELLO" included hai ya nahi */

let str3 = "hello world"

console.log(str3.charAt(0).toUpperCase());  // H
console.log(str3.charCodeAt(10));   // 100
console.log(str3.includes("world"));  // true
console.log(str3.includes("HELLO"));  // false


/*
* 🔴 Tricky Level

* Ek sentence " Coding is awesome! " ko trim karke fir .repeat(2) karo.
* 👉 Expected: "Coding is awesome!Coding is awesome!" */

let coding = " Coding is awesome! "
let trimedStr = coding.trim().repeat(2)  // now I'm becoming pro in coding😎
console.log(trimedStr);


/* 
* "987" string ko .padStart(6,"0") aur .padEnd(8,"#") ke saath modify karo.
* 👉 Expected: "000987##" */

let numStr = "987"
let padStr = numStr.padStart(6,"0").padEnd(8,"#")
console.log(padStr)


/*
* "apple,banana,grapes,mango" ko .split(",") se array me convert karo aur fir usme se "banana" ko .replace() se "kiwi" karo.
* 👉 Expected Array: ["apple","kiwi","grapes","mango"] */

let fruits = "apple,banana,grapes,mango"
let splitedStr = fruits.replace("banana", "kiwi").split(",")
console.log(splitedStr);

// console.log(splitedStr.replace("banana", "kiwi"));  // Nahi hoga replace kinv ki splitedStr is variable mein array stoar hai.


/*
* "JavascriptJavascriptJavascript" string me se beech wala "Javascript" cut karke nikal do using .substring(). */

let bigStr = "JavascriptJavascriptJavascript"
let findMiddleString = bigStr.indexOf("t")  // 9 

console.log(bigStr.substring(10, 20));


// Ek string "a-b-c-d" ko .split("-") use karke array banao aur fir us array ko join karke "abcd" banao (hint: .join("")).

let abcd = "a-b-c-d"
let splitedStr2 = abcd.split("-").join("");

console.log(splitedStr2);
