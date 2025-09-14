# Day 04: Working with Strings and exploring all methods of it

## 1️⃣ Getting Information from Strings

## 1. String ``.length`` property

- If you want to find the number of characters in a string, then you can use the ``.length`` property.
  - Example:

    ```javascript
    let word = "Supercalifragilisticexpialidocious";

    const lengthOfWord = word.length;
    console.log("The lenght of word is: " + lengthOfWord);  // The lenght of word is: 34
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
    console.log(phrase.search("JavaScript")); // 18
    console.log(phrase.search(/learning/i)); // 9 (case-insensitive search)
    console.log(phrase.search("Python")); // -1
    ```

  - Notes:
    - The search is case-sensitive when using a string.
    - When using a regular expression, you can use flags like `i` for case-insensitivity.
    - If no match is found, it returns -1.

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
