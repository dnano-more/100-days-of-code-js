# Day 04 - 07: Working with Strings and exploring all methods of it

## 1️⃣ Getting Information from Strings

## 1. String ``.length`` property

- If you want to find the number of characters in a string, then you can use the ``.length`` property.
  - Example:

    ```javascript
    let word = "Supercalifragilisticexpialidocious";

    const lengthOfWord = word.length;
    console.log("The length of word is: " + lengthOfWord);  // The length of word is: 34
    ```

  - It also counts spaces and special characters.

## 2. charAt() method

- The ``charAt()`` method returns the character at a specified index in a string.
  - Syntax: ``string.charAt(index)``
    - Parameters:
    - `index`: The position of the character you want to retrieve. The index is zero-based, meaning the first character is at index 0, the second character is at index 1, and so on.
  - Example:
  
    ```javascript
    let word = "Supercalifragilisticexpialidocious";
    console.log(word.charAt(0));  // S
    console.log(word.charAt(1));  // u
    console.log(word.charAt(2));  // p
    console.log(word.charAt(3));  // e
    console.log(word.charAt(4));  // r
    ```

  - Notes:
    - If the index is negative, it returns an empty string.
    - If the index is greater than the string length, it returns an empty string.
    - If no index is provided, it defaults to 0 and returns the first character of the string.

## 3. indexOf() method

- The ``indexOf()`` method returns the index of the first occurrence of a   specified value in a string. If the value is not found, it returns -1.
  - Syntax: ``string.indexOf(searchValue, fromIndex)``
    - Parameters:
      - `searchValue`: The substring you want to search for.
      - `fromIndex` (optional): The position in the string to start the search. Default is 0.
  - Example:
  
    ```javascript
    let phrase = "Hello, I am a beginner in learning JavaScript. I will definitely master it.";
    console.log(phrase.indexOf("JavaScript")); // 35
    console.log(phrase.indexOf("I", 14)); // 47
    console.log(phrase.indexOf("Python")); // -1
    ```

  - Notes:
    - The search is case-sensitive.
    - If `fromIndex` is greater than or equal to the string length, it returns -1.
    - If `fromIndex` is negative, it is treated as 0.

## 4. lastIndexOf() method

- The ``lastIndexOf()`` method returns the index of the last occurrence of a specified value in a string. If the value is not found, it returns -1.
  - Syntax: ``string.lastIndexOf(searchValue, fromIndex)``
    - Parameters:
      - `searchValue`: The substring you want to search for.
      - `fromIndex` (optional): The position in the string to start the search backwards. Default is the string's length.
  - Example:
  
    ```javascript
    let phrase = "Hello, I am a beginner in learning JavaScript. I will definitely master it.";
    console.log(phrase.lastIndexOf("I")); // 47
    console.log(phrase.lastIndexOf("JavaScript")); // 35
    console.log(phrase.lastIndexOf("Python")); // -1
    ```

  - Notes:
    - The search is case-sensitive.
    - If `fromIndex` is greater than or equal to the string length, the entire string is searched.
    - If `fromIndex` is negative, it is treated as 0.

## 5. charCodeAt() method

- The ``charCodeAt()`` method returns the Unicode of the character at a specified index in a string.
  - Syntax: ``string.charCodeAt(index)``
    - Parameters:
      - `index`: The position of the character you want to retrieve the Unicode for. The index is zero-based.
  - Example:
  
    ```javascript
    let word = "Hello";
    console.log(word.charCodeAt(0)); // 72 (Unicode for 'H')
    console.log(word.charCodeAt(1)); // 101 (Unicode for 'e')
    console.log(word.charCodeAt(4)); // 111 (Unicode for 'o')
    ```

  - Notes:
    - If the index is out of range, it returns `NaN`.
    - If no index is provided, it defaults to 0 and returns the Unicode of the first character.

## 6. search() method

- The ``search()`` method searches a string for a specified value and returns the position of the match. It can take a string or a regular expression as an argument.
  - Syntax: ``string.search(searchValue)``
    - Parameters:
      - `searchValue`: The substring or regular expression to search for.
  - Example:
  
    ```javascript
    let phrase = "Hello, I am learning JavaScript.";
    console.log(phrase.search("JavaScript")); // 21
    console.log(phrase.search(/learning/i)); // 12 (case-insensitive search)
    console.log(phrase.search("Python")); // -1
    ```

  - Notes:
    - The search is case-sensitive when using a string.
    - When using a regular expression, you can use flags like `i` for case-insensitivity.
    - If no match is found, it returns -1.

  - Regular expressions can include special characters and patterns for more complex searches.
  - Common flags for regular expressions:
    - `i`(case-insensitive): Makes the search ignore case.
    - `m`(multiline): It treats ^ and $ as matching at the start and end of each line, not just the whole string
    - `s`(dotAll): allows `.` to match newline characters
    - `u`(unicode): enables full Unicode support

## 7. match() method

- The ``match()`` method retrieves the matches when matching a string against a regular expression.
  - Syntax: ``string.match(regexp)``
    - Parameters:
      - `regexp`: A regular expression object or a string to search for.
  - Example:
  
    ```javascript
    let phrase = "The rain in SPAIN stays mainly in the plain.";
    console.log(phrase.match(/ain/g)); // ["ain", "ain", "ain"]
    console.log(phrase.match(/AIN/i)); // ["AIN"] (case-insensitive)
    console.log(phrase.match(/xyz/)); // null (no match)
    ```

  - Notes:
    - If the regular expression has the global flag (`g`), it returns an array of all matches.
    - If there are no matches, it returns `null`.
    - Without the global flag, it returns an array with the first match and its details.

## 8. includes() method

- The ``includes()`` method checks if a string contains a specified substring and returns `true` or `false`.
  - Syntax: ``string.includes(searchValue, fromIndex)``
    - Parameters:
      - `searchValue`: The substring to search for.
      - `fromIndex` (optional): The position in the string to start the search. Default is 0.
  - Example:
  
    ```javascript
    let phrase = "Hello, I am learning JavaScript.";
    console.log(phrase.includes("JavaScript")); // true
    console.log(phrase.includes("javascript")); // false (case-sensitive)
    console.log(phrase.includes("I", 10)); // false (search starts at index 10)
    ```

  - Notes:
    - The search is case-sensitive.
    - If `fromIndex` is greater than or equal to the string length, it returns `false`.
    - If `fromIndex` is negative, it is treated as 0.
    - If `searchValue` is an empty string, it always returns `true`.
    - If `searchValue` is not provided, it defaults to `undefined`, and the method returns `false`.

## 9. startsWith() method

- The ``startsWith()`` method checks if a string begins with a specified substring and returns `true` or `false`.
  - Syntax: ``string.startsWith(searchValue, fromIndex)``
    - Parameters:
      - `searchValue`: The substring to search for at the start of the string.
      - `fromIndex` (optional): The position in the string to start the search. Default is 0.
  - Example:
  
    ```javascript
    let phrase = "Hello, I am learning JavaScript.";
    console.log(phrase.startsWith("Hello")); // true
    console.log(phrase.startsWith("hello")); // false (case-sensitive)
    console.log(phrase.startsWith("I", 7)); // true (search starts at index 7)
    ```

  - Notes:
    - The search is case-sensitive.
    - If `fromIndex` is greater than or equal to the string length, it returns `false`.
    - If `fromIndex` is negative, it is treated as 0.

## 10. endsWith() method

- The ``endsWith()`` method checks if a string ends with a specified substring and returns `true` or `false`.
  - Syntax: ``string.endsWith(searchValue, length)``
    - Parameters:
      - `searchValue`: The substring to search for at the end of the string.
      - `length` (optional): If provided, it is used as the length of the string to consider. Default is the string's actual length.
  - Example:
  
    ```javascript
    let phrase = "Hello, I am learning JavaScript.";
    console.log(phrase.endsWith("JavaScript.")); // true
    console.log(phrase.endsWith("javascript.")); // false (case-sensitive)
    console.log(phrase.endsWith("learning", 20)); // true (considers only first 20 characters)
    ```

  - Notes:
    - The search is case-sensitive.
    - If `length` is greater than the string length, it considers the entire string.
    - If `length` is less than or equal to 0, it returns `false`.

## 2️⃣ Modifying Strings

## 11. toUpperCase() method

- The `toUpperCase()` method returns a new string with all the characters converted to uppercase.  
  - (sab letters uppercase me)

  - Syntax:

    ```javascript
    string.toUpperCase()
    ```

  - Example:

    ```javascript
    let phrase = "Hello world!";
    let upperCasePhrase = phrase.toUpperCase();
    console.log(upperCasePhrase); // "HELLO WORLD!"
    ```

  - Notes:
    - This method does not change the original string. It returns a new string.
    - It works on all characters that have a corresponding uppercase value, including letters and special characters.

---

## 12. toLowerCase() method

- The `toLowerCase()` method returns a new string with all the characters converted to lowercase.  
  - (sab letters lowercase me)

  - Syntax:

    ```javascript
    string.toLowerCase()
    ```

  - Example:

    ```javascript
    let phrase = "HELLO WORLD!";
    let lowerCasePhrase = phrase.toLowerCase();
    console.log(lowerCasePhrase); // "hello world!"
    ```

  - Notes:
    - Similar to `toUpperCase()`, this method also returns a new string without modifying the original.

---

## 13. trim() method

- The `trim()` method removes whitespace from both the beginning and end of a string.  
  - (starting aur ending spaces remove karta hai)

  - Syntax:  

    ```javascript
    string.trim()
    ```

  - Example:

    ```javascript
    let phrase = "   Hello World!   ";
    let trimmedPhrase = phrase.trim();
    console.log(trimmedPhrase); // "Hello World!"
    ```

  - Notes:
    - This method removes spaces, tabs, and newlines from both sides of the string.
    - Beech ka space (middle spaces) as-it-is rehta hai.

---

## 14. trimStart() / trimEnd() methods

- The `trimStart()` method removes whitespace from the beginning of a string.  
- The `trimEnd()` method removes whitespace from the end of a string.  
  - (sirf ek side ka space remove)

  - Syntax:

    ```javascript
    string.trimStart()
    string.trimEnd()
    ```

  - Example:

    ```javascript
    let phrase = "   Hello World!   ";
    let trimmedStart = phrase.trimStart();
    let trimmedEnd = phrase.trimEnd();

    console.log("Start trimmed: '" + trimmedStart + "'"); // "Start trimmed: 'Hello World!   '"
    console.log("End trimmed: '" + trimmedEnd + "'");     // "End trimmed: '   Hello World!'"
    ```

  - Notes:
    - These methods are useful for more specific control over whitespace removal.

---

## 15. padStart() method

- The `padStart()` method pads the current string with another string until the resulting string reaches the given length from the start.  
  - (string ke aage fill karta hai)

  - Syntax:

    ```javascript
    string.padStart(targetLength, padString)
    ```

  - Parameters:
    - `targetLength`: The length of the resulting string after padding.
    - `padString` (optional): The string to pad with. Defaults to a single space.

  - Example:

    ```javascript
    let str = "5";
    let paddedStr = str.padStart(3, "0");
    console.log(paddedStr); // "005"
    ```

  - Notes:
    - If `targetLength` is less than or equal to the original string's length, the string is returned without any changes.
    - Mostly numbers ko fixed digits me dikhane ke liye use hota hai (e.g., bank account, OTP, date formatting).

---

## 16. padEnd() method

- The `padEnd()` method pads the current string with another string until the resulting string reaches the given length from the end.  
  - (string ke baad fill karta hai)

  - Syntax:

    ```javascript
    string.padEnd(targetLength, padString)
    ```

  - Parameters:
    - `targetLength`: The length of the resulting string after padding.
    - `padString` (optional): The string to pad with. Defaults to a single space.

  - Example:

    ```javascript
    let str = "Hello";
    let paddedStr = str.padEnd(10, "!");
    console.log(paddedStr); // "Hello!!!!!"
    ```

  - Notes:
    - This is often used for formatting data, such as aligning columns in a table-like format.

---

## 17. repeat() method

- The `repeat()` method returns a new string with the specified number of copies of the original string concatenated together.  
  - (string ko n times repeat karta hai)

  - Syntax:

    ```javascript
    string.repeat(count)
    ```

  - Parameters:
    - `count`: The number of times to repeat the string.

  - Example:

    ```javascript
    let str = "abc";
    let repeatedStr = str.repeat(3);
    console.log(repeatedStr); // "abcabcabc"
    ```

  - Notes:
    - `count` must be a positive number.  
    - If it's 0, an empty string is returned.
    - Agar count < 0 → RangeError aata hai.
    - Agar count fractional (jaise 2.5) ho → JavaScript usko floor kar deta hai (i.e., 2).
    - Is real use pattern printing ya dummy data banane me helpful hain.

---

## 18. replace() method

- The `replace()` method returns a new string with one or all of the specified patterns replaced with a new value. By default, it only replaces the first match.  
  - (ek part ko replace karta hai)

  - Syntax:
  
    ```javascript
    string.replace(searchValue, newValue)
    ```

  - Parameters:
    - `searchValue`: The value to search for. This can be a string or a regular expression.
    - `newValue`: The value to replace the match with.

  - Example:
  
    ```javascript
    let phrase = "Hello, world! Hello again!";
    let newPhrase = phrase.replace("Hello", "Hi");
    console.log(newPhrase); // "Hi, world! Hello again!"
    ```

  - Notes:
    - This method is case-sensitive.  
    - To replace all occurrences, you can use a regular expression with the global flag (`g`), or use `replaceAll()`.

---

## 19. replaceAll() method

- The `replaceAll()` method returns a new string with all matches of a specified pattern replaced with a new value.  
  - (saare matches ko replace karta hai)

  - Syntax:
  
    ```javascript
    string.replaceAll(searchValue, newValue)
    ```

  - Parameters:
    - `searchValue`: The value to search for. This can be a string or a regular expression.
    - `newValue`: The value to replace all matches with.

  - Example:

    ```javascript
    let phrase = "Hello, world! Hello again!";
    let newPhrase = phrase.replaceAll("Hello", "Hi");
    console.log(newPhrase); // "Hi, world! Hi again!"
    ```

  - Notes:
    - This method is a more modern alternative to using `replace()` with a global regex for string replacement.

## 3️⃣ Extracting Substrings and Splitting Strings

## 20. slice() method

- The `slice()` method extracts a section of a string and returns it as a new string, without modifying the original string.  
  - (string ke beech ka part nikalta hai)

  - Syntax:

    ```javascript
    string.slice(startIndex, endIndex)
    ```

  - Parameters:
    - `startIndex`: The position where extraction begins (zero-based).
    - `endIndex` (optional): The position before which to end extraction. If omitted, it extracts till the end of the string.

  - Example:

    ```javascript
    let phrase = "Hello, world!";
    let slicedPhrase = phrase.slice(7, 12);
    console.log(slicedPhrase); // "world"
    ```

  - Notes:
    - If `startIndex` is negative, it is treated as `string.length + startIndex`.
    - If `endIndex` is negative, it is treated as `string.length + endIndex`.
    - If `startIndex` is greater than or equal to the string length, an empty string is returned.
    - If `endIndex` is omitted or greater than the string length, extraction continues to the end of the string.
  - 📝 Key Points:
    - Positive indexes → left se count hote hain (0 first character).
    - Negative indexes → right se count hote hain (-1 last character).
    - Agar end chhod do → string ke end tak slice karega.
    - Out of range indexes ignore hote hain, error nahi aata.

## 21. substring() method

- The `substring()` method extracts a portion of a string between two specified indices and returns it as a new string.  
  - (start aur end ke beech ka part nikalta hai)

- Syntax:

  ```javascript
  string.substring(startIndex, endIndex)
  ````

- Parameters:
  - startIndex: The position where extraction starts (0-based).
  - endIndex (optional): The position where extraction ends (but not included).
    -If omitted, extraction continues to the end of the string.

- Example:

  ```javascript
  let text = "JavaScript";
  console.log(text.substring(0, 4));   // "Java"
  console.log(text.substring(4, 10));  // "Script"
  console.log(text.substring(4));      // "Script"
  console.log(text.substring(10, 4));  // "Script" (swaps indices if start > end)
  ```

- Notes:
  - If ``startIndex`` > ``endIndex``, they are automatically swapped.
  - Negative values are treated as 0.
  - It does not change the original string.
  - Similar to ``.slice()``, but it does not accept negative indices.

## 🔥 .slice() vs .substring() (JavaScript)

| Feature / Case               | **.slice(start, end)**                                                           | **.substring(start, end)**                                                  |
| ---------------------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| **Basic purpose**            | Part of string nikalna                                                           | Part of string nikalna                                                      |
| **End index**                | Exclusive (include nahi hota)                                                    | Exclusive (include nahi hota)                                               |
| **Negative indexes**         | Support karta hai (end se count karta hai) <br>👉 `str.slice(-3)` → last 3 chars | Negative ko **0** treat karta hai <br>👉 `str.substring(-3)` → poori string |
| **If start > end**           | Empty string `""` return karta hai                                               | Start & end values **swap** ho jaati hain                                   |
| **Changes original string?** | ❌ (naya string return karta hai)                                                 | ❌ (naya string return karta hai)                                            |
| **Usage preference**         | ✅ Modern JS me recommended                                                       | ⚠️ Old codebases me dikhta hai                                              |

## 22. split() method

- The `split()` method splits a string into an array of substrings based on a specified separator.  
  - (string ko tod kar array banata hai)

- Syntax:

  ```javascript
  string.split(separator, limit)
  ````

- Parameters:
  - ``separator`` (optional): Specifies the character, string, or regular expression to split the string.
    - If omitted, the entire string is returned as a single-element array.
    - If an empty string ``""`` is given, the string is split into individual characters.
  - ``limit`` (optional): An integer that specifies the maximum number of substrings to include in the array.

- Example:

  ```javascript
    let text = "apple,banana,cherry,orange";
    console.log(text.split(","));  // ["apple", "banana", "cherry", "orange"]
    console.log(text.split(",", 2));  // ["apple", "banana"]
    console.log(text.split(""));  // ["a", "p", "p", "l", "e", ",", "b", "a", "n", "a", "n", "a", ...]
    console.log(text.split());  // ["apple,banana,cherry,orange"]
  ```

- Notes:
  - Returns an array of substrings, never modifies the original string.
  - If separator is not found, the returned array contains the entire string as a single element.
  - Useful for converting CSV strings, sentences, or characters into arrays.
