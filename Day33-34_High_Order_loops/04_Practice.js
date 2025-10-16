// Day35 Practice – High Order Loops (for...of, for...in, forEach)
// --------------------------------------------------------------

// 🧩 1️⃣ EASY LEVEL — WARM-UP ROUND

// Q1. Print all values from an array using for...of
const fruits = ['apple', 'banana', 'mango'];
for (const fruit of fruits) {
  console.log(fruit);
}
// Output: apple, banana, mango


// Q2. Print all keys and values from an object using for...in
const user = {
  name: "Dnano",
  age: 21,
  country: "India"
};

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}
// Output:
// name: Dnano
// age: 21
// country: India


// Q3. Print all items from an array using forEach
const cities = ['Delhi', 'Tokyo', 'New York'];
cities.forEach((city, index) => {
  console.log(`${index}: ${city}`);
});
// Output:
// 0: Delhi
// 1: Tokyo
// 2: New York



// ⚙️ 2️⃣ MEDIUM LEVEL — LOGIC BUILDING

// Q4. Count the number of vowels in a string using for...of
const str = "JavaScript";
let count = 0;
const vowels = "aeiouAEIOU";

for (const char of str) {
  if (vowels.includes(char)) count++;
}
console.log(`Vowels count: ${count}`);
// Output: Vowels count: 3


// Q5. Using for...in, print only subjects with marks > 80
const marks = {
  math: 90,
  science: 78,
  english: 85,
  coding: 99
};

for (const subject in marks) {
  if (marks[subject] > 80) {
    console.log(`${subject}: ${marks[subject]}`);
  }
}
// Output:
// math: 90
// english: 85
// coding: 99


// Q6. Using forEach, print all even numbers from an array
const numbers = [1, 2, 3, 4, 5, 6];
numbers.forEach(num => {
  if (num % 2 === 0) console.log(num);
});
// Output: 2, 4, 6



// 🧠 3️⃣ SMART LEVEL — REAL-LIFE TYPE PRACTICE

// Q7. Using for...of, loop through a Map and print key–value pairs
const countries = new Map();
countries.set("IN", "India");
countries.set("USA", "United States");
countries.set("FR", "France");

for (const [code, name] of countries) {
  console.log(`${code} → ${name}`);
}
// Output:
// IN → India
// USA → United States
// FR → France


// Q8. Using for...in, copy all object properties into a new object
const source = { a: 1, b: 2, c: 3 };
const target = {};

for (const key in source) {
  target[key] = source[key];
}
console.log(target);
// Output: { a: 1, b: 2, c: 3 }


// Q9. Using forEach, extract all usernames from an array of objects
const users = [
  { username: "nano", isActive: true },
  { username: "raj", isActive: false },
  { username: "rubi", isActive: true }
];

const activeUsers = [];

users.forEach(user => {
  if (user.isActive) activeUsers.push(user.username);
});

console.log(activeUsers);
// Output: ["nano", "rubi"]



// 💥 4️⃣ BONUS CHALLENGE – COMBO POWER
const data = {
  frontend: ['HTML', 'CSS', 'JavaScript'],
  backend: ['Node', 'Express'],
  database: ['MongoDB', 'SQL']
};

for (const section in data) {
  const techs = data[section];
  console.log(`${section} → ${techs.join(', ')}`);
}
// Output:
// frontend → HTML, CSS, JavaScript
// backend → Node, Express
// database → MongoDB, SQL



// 🏁 Summary:
// for...of → best for arrays, strings, maps
// for...in → best for objects
// forEach → best for array callbacks and small transformations
