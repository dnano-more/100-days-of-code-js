// High order array methods

// .filter() - Creates a new array with all elements that pass a test (a condition you define).
const numbers = [2, 6, 3, 4, 5, 8, 12, 15, 16];

const sumArr = numbers.filter((num) => num % 2 === 0);
console.log(sumArr);  //[ 2, 6, 4, 8, 12, 16 ]

// Real-life use
const users = [
  { name: "Nano", age: 23 },
  { name: "Rohan", age: 17 },
  { name: "Meena", age: 20 },
];

const adults = users.filter(user => user.age >= 18);
console.log(adults); 
// [{ name: "Nano", age: 23 }, { name: "Meena", age: 20 }]


// .reduce() - Reduces an array to a single value (number, string, object, whatever you decide).
/* Syntax
array.reduce((accumulator, currentValue) => {
  // your logic here
  return updatedAccumulator;
}, initialValue); */

const nums = [1, 2, 3, 4, 5];

const sum = nums.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum); // 15

// we want to count how many times each item appears
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(fruitCount);
// { apple: 3, banana: 2, orange: 1 }



// .find()
const randNum = [3, 2, 6, 4, 8, 6, 9];

const ans = randNum.find((num) => num === 2 * 2);
console.log(ans); //4

// .findIndex()
const index = randNum.findIndex((num) => num === 2 * 2);
console.log(index); //3

const index2 = randNum.findIndex((num) => num === 3 * 4);
console.log(index2); //-1


