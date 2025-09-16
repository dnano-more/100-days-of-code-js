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