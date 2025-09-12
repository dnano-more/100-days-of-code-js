// Basic comparisons
/*
console.log(5 < 10);      // true
console.log(5 > 10);      // false
console.log(5 <= 5);     // true
console.log(5 >= 5);     // true

console.log(5 == '5');    // true (type coercion)
console.log(5 === '5');   // false (strict equality)
console.log(5 != '5');    // false (type coercion)
console.log(5 !== '5');   // true (strict inequality)
*/

console.log(null > 0);  // flase
console.log(null == 0);  // flase
console.log(null >= 0);  // true

/* note:
* Equality checks (===) and comparisons (>, <, >=, <=) handle null differently.
* Comparison operators convert null to the number 0.
* Therefore, null >= 0 evaluates to true (because 0 >= 0), and null > 0 evaluates to false (because 0 > 0 is false).
*/

console.log(undefined == 0);  // flase. because undefined is not equal to any value, including 0.
console.log(undefined > 0);  // flase
console.log(undefined < 0);  // flase. beacause undefined is not converted to a number in comparisons, so both comparisons yield false.
console.log(undefined >= 0);  // flase

// strict check "==="
console.log( "2" === 2);  // false. because value and data types are not same.


/* summary:
* 1. Use strict equality (===) to avoid unexpected type coercion.
* 2. Be cautious when comparing null and undefined with other values, as they can lead to unexpected results.
* 3. Always test and verify comparisons in your specific context to ensure they behave as expected.
* 4. Type coercion can produce unexpected results, so it's important to understand how JavaScript handles different data types during comparisons.
*/