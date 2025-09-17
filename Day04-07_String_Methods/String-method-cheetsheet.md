# 📑 String Methods Cheatsheet (Getting Info)

| Method / Property | Syntax                     | Returns                  | Special Notes                                      |
|-------------------|----------------------------|--------------------------|---------------------------------------------------|
| `.length`         | `str.length`              | Number                   | Total length of the string (spaces, emojis count)|
| `.charAt()`       | `str.charAt(index)`       | Character (string)       | Out of range → `""`                              |
| `.charCodeAt()`   | `str.charCodeAt(index)`   | Number (UTF-16 code)     | Out of range → `NaN`                             |
| `.codePointAt()`  | `str.codePointAt(index)`  | Number (Unicode code point) | Out of range → `undefined`, correct for emojis |
| `.includes()`     | `str.includes(search, pos?)` | `true` / `false`       | Case-sensitive, optional start position          |
| `.indexOf()`      | `str.indexOf(search, from?)` | Index (Number) or `-1` | First match, negative `from` = `0`              |
| `.lastIndexOf()`  | `str.lastIndexOf(search, from?)` | Index (Number) or `-1` | Last match, negative `from` = `0`               |
| `.startsWith()`   | `str.startsWith(search, pos?)` | `true` / `false`     | Case-sensitive, `pos` = start index             |
| `.endsWith()`     | `str.endsWith(search, len?)` | `true` / `false`      | Case-sensitive, `len` = consider slice size     |

## 🃏 String Methods Flashcards (Getting Info)

### ✨ Length

- 📌 str.length

- 📏 String ki total size

- ✅ Returns: Number

- 📝 Spaces, emojis, sab count hote hain

---

### 🔡 charAt()

- 📌 str.charAt(index)

- 🧩 Specific index ka character

- ✅ Returns: 1-char string

- ❌ Out of range → ""

---

### 🔢 charCodeAt()

- 📌 str.charCodeAt(index)

- 🔠 Character ka UTF-16 code

- ✅ Returns: Number

- ❌ Out of range → NaN

---

### 🌍 codePointAt()

- 📌 str.codePointAt(index)

- 🌈 Full Unicode code point deta hai (emojis ke liye correct)

- ✅ Returns: Number

- ❌ Out of range → undefined

---

### 🔍 includes()

- 📌 str.includes(search, pos?)

- 🔎 Check karta hai text present hai ya nahi

- ✅ Returns: true/false

- 📝 Case-sensitive

---

### 📍 indexOf()

- 📌 str.indexOf(search, from?)

- 🔎 First occurrence index

- ✅ Returns: Number / -1

- 📝 Negative from → 0

---

### 📍 lastIndexOf()

- 📌 str.lastIndexOf(search, from?)

- 🔎 Last occurrence index

- ✅ Returns: Number / -1

- 📝 Negative from → 0

---

### 🚀 startsWith()

- 📌 str.startsWith(search, pos?)

- ⏩ Check karta hai string start se match karti hai ya nahi

- ✅ Returns: true/false

- 📝 Case-sensitive

---

### 🏁 endsWith()

- 📌 str.endsWith(search, len?)

- ⏪ Check karta hai string end se match karti hai ya nahi

- ✅ Returns: true/false

- 📝 Case-sensitive, len = virtual cut size

## JavaScript String Methods Cheatsheet (Beginner-Friendly)

This cheatsheet summarizes the most important **JavaScript String methods** for beginners.  
Advanced/rarely used methods are noted but can be skipped for now.

---

## 1️⃣ Getting Information from Strings

- **.length** → Returns the length of the string.  

```js
console.log("Hello".length); // 5
```

- **.charAt(index)** → Returns character at given index.  

```js
console.log("Hello".charAt(1)); // "e"
```

- **.charCodeAt(index)** → Returns UTF-16 code of char.  

```js
console.log("ABC".charCodeAt(0)); // 65
```

- **.codePointAt(index)** → Returns full Unicode code point.  

```js
console.log("😊".codePointAt(0)); // 128522
```

---

## 2️⃣ Searching & Checking

- **.includes(substring)** → Checks if string contains substring.  

```js
console.log("JavaScript".includes("Script")); // true
```

- **.indexOf(substring)** → Returns first index, or -1 if not found.  

```js
console.log("banana".indexOf("a")); // 1
```

- **.lastIndexOf(substring)** → Returns last index.  

```js
console.log("banana".lastIndexOf("a")); // 5
```

- **.startsWith(prefix)** → Checks beginning.  

```js
console.log("Hello".startsWith("He")); // true
```

- **.endsWith(suffix)** → Checks ending.  

```js
console.log("Hello".endsWith("lo")); // true
```

- **.search(regex)** → Finds first match index (with regex).  

```js
console.log("hello123".search(/[0-9]/)); // 5
```

- **.match(regex)** → Returns match result (array or null).  

```js
console.log("abc123".match(/\d+/)); // ["123"]
```

- **.matchAll(regex)** → Returns all matches (iterator, advanced).  
⚠️ Advanced → Skip for now.

---

## 3️⃣ Cleaning & Modifying

- **.toUpperCase() / .toLowerCase()** → Changes case.  

```js
console.log("Hello".toUpperCase()); // "HELLO"
```

- **.trim()** → Removes spaces (start & end).  

```js
console.log("   Hi   ".trim()); // "Hi"
```

- **.trimStart() / .trimEnd()** → Removes only start/end spaces.  

```js
console.log("   Hi".trimStart()); // "Hi"
```

- **.replace(search, replaceValue)** → Replace first occurrence.  

```js
console.log("banana".replace("a", "o")); // "bonana"
```

- **.replaceAll(search, replaceValue)** → Replace all occurrences.  

```js
console.log("banana".replaceAll("a", "o")); // "bonono"
```

- **.padStart(length, padString)** → Adds padding at start.  

```js
console.log("42".padStart(5, "0")); // "00042"
```

- **.padEnd(length, padString)** → Adds padding at end.  

```js
console.log("42".padEnd(5, "0")); // "42000"
```

- **.repeat(count)** → Repeats string.  

```js
console.log("Hi".repeat(3)); // "HiHiHi"
```

---

## 4️⃣ Extracting Substrings

- **.slice(start, end)** → Extracts part of string.  

```js
console.log("JavaScript".slice(0, 4)); // "Java"
console.log("JavaScript".slice(-6, -3)); // "Scr"
```

- **.substring(start, end)** → Similar but doesn’t allow negatives.  

```js
console.log("JavaScript".substring(0, 4)); // "Java"
```

- **substr(start, length)** → ❌ Deprecated (don’t use).

---

## 5️⃣ Splitting & Joining

- **.split(separator)** → Splits string into array.  

```js
console.log("a,b,c".split(",")); // ["a","b","c"]
```

---

## 6️⃣ String Construction & Template Tools

- **Template Literals (`${}`)** → String interpolation.  

```js
let name = "John";
console.log(`Hello, ${name}!`); // "Hello, John!"
```

- **.concat()** → Joins strings (not preferred, use `+` or template).  

```js
console.log("Hello".concat(" ", "World")); // "Hello World"
```

---

## 7️⃣ Unicode & Advanced (Skip for now)

- **.normalize()** → Unicode normalization (rare).  
- **.localeCompare()** → String comparison with locale rules.  
- **String.fromCharCode()** → Creates string from UTF-16 codes.  
- **String.fromCodePoint()** → Creates string from Unicode code points.  

⚠️ These are **advanced methods** → skip for now.

---

# ✅ Beginner’s Must-Learn Summary

1. `.length`  
2. `.includes()` / `.indexOf()` / `.lastIndexOf()`  
3. `.startsWith()` / `.endsWith()`  
4. `.toUpperCase()` / `.toLowerCase()`  
5. `.trim()` (+ trimStart/trimEnd)  
6. `.replace()` / `.replaceAll()`  
7. `.padStart()` / `.padEnd()`  
8. `.repeat()`  
9. `.slice()` / `.substring()`  
10. `.split()`  
11. Template literals (`${}`)

👉 Master these first. Others can wait!

---
