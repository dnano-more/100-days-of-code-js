### Day 01: Variables and Data Types

#### Difference between txt file and .js file :
- A `.txt` file stores only plain, unformatted text for general notes or data, while a `.js` file contains JavaScript code with specific syntax that can be executed by browsers or Node.js to perform programming tasks.

#### Key Concepts :
- **Variables**: Containers for storing data values.
- **Data Types**: Different types of data (e.g., strings, numbers, booleans).

#### Notes :
- Declaring variables using `let`, `const`, and `var`.
- you can declare variable in JS without naming it [ example: age = 23; ] But not good practice.
- You do not update or change `const` variables after their initial assignment.
- Prefer not to use `var` because of issue in block scope and functional scope.
- Understanding primitive data types:
  - String: Textual data enclosed in quotes ( "" or ' ' or ` ` ).
  - Number: Numeric data (integers and floats).
  - Boolean: Logical values (`true` or `false`).
  - Undefined: A variable that has been declared but has not yet been assigned a value.
  - Null: A variable that has been explicitly assigned a null value.
  - Symbol: A unique and immutable primitive value often used as the key of an object property.

#### Conversions between data types :
- To `Number()`:
  - `Number("123")` converts the string "123" to the number 123.
  - `Number("abc")` => results in `NaN`
  - `Number(true)` converts the boolean `true` to the number 1.
  - `Number(false)` converts the boolean `false` to the number 0.
  - `Number(null)` converts `null` to the number 0.
  - `Number(undefined)` => results in `NaN`
  - `Number("   123   ")` trims whitespace and converts to 123.
  - `Number("123abc")` => results in `NaN`
  - `Number("")` converts an empty string to 0.
  - All of above are typeof is "number"
- To `Boolean()`:
  - `Boolean(0)` => results in `false`
  - `Boolean(1)` => results in `true`
  - `Boolean("")` => results in `false`
  - `Boolean("Hello")` => results in `true`
  - `Boolean(null)` => results in `false`
  - `Boolean(undefined)` => results in `false`
  - `Boolean([])` => results in `true` (empty array is truthy)
  - `Boolean({})` => results in `true` (empty object is truthy)
  - `Boolean(NaN)` => results in `false`
  - All of above are typeof is "boolean"
- To `String()`:
  - `String(125)` => results in string "125".
  - `String(true)` => results in string "true".
  - `String(false)` => results in string "false".
  - `String(null)` => results in string "null".
  - `String(undefined)` => results in string "undefined".
  - `String([1, 2, 3])` => results in string "1,2,3".
  - `String({a: 1})` => results in string "[object Object]".
  - All of above are typeof is "string"

#### Operations :
- Addition (`+`):
  - If either operand is a string, the other is converted to a string and concatenation occurs.
    - Example: `"Hello" + " " + "World"` results in `"Hello World"`.
    - Example: `"The answer is " + 42` results in `"The answer is 42"`.
    - Example: `5 + "5"` results in `"55"`.
    - Example: `5 + 5` results in `10`.
  - If first and second operands are numbers and last operand is string then all converted to string and concatenation occurs.
    - Example: `5 + 5 + "5"` results in `"105"`.
- Subtraction (`-`), Multiplication (`*`), Division (`/`), and Modulus (`%`):
  - Both operands are converted to numbers.
    - Example: `"10" - 2` results in `8`.
    - Example: `"10" * 2` results in `20`.
    - Example: `"10" / 2` results in `5`.
    - Example: `"10" % 3` results in `1`.