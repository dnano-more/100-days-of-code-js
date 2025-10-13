// for of
// for...of --> Iterable (Array, String, Map, Set)   --> Values   --> Arrays, strings, maps

["", "", ""]
[{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);  // direct access values (not indexes)
}

// String pe bhi laga sakte hain ye loop

const greetings = "Hello world..!"
for (const greet of greetings) {
if (greet === " " || greet === ".") continue;
    console.log(greet);
}


// Maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");

// console.log(map);  // thodi si object jaisi dikhnewali from me map objet banta hain isse (Output is always [key, value] pairs.)

// lets add same value again. kya hota hain check karte hain.
map.set("IN", "India");
console.log(map);      // confirmed! value ko unique rakhta hain map (it automatically ignores duplicates)

//map pe for of loop lagate hain:
for (const key of map) {
    console.log(key); 
    /* output: [ 'IN', 'India' ]
               [ 'USA', 'United States of America' ]
               [ 'FR', 'France' ]
    */
}

// keys aur values destructureing kar ke alag alag from me dikhaya ja sakta hain -
for (const [key, value] of map) {
    console.log(key, ':-', value); 
    /* output: IN :- India
               USA :- United States of America
               FR :- France
    */
}


// Object pe lagake dekhte hain for of loop ko
const myObj = {
    'game1' : 'NFS',
    'game2' : 'PUBG'
}

// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);    // TypeError: myObj is not iterable
// }
//note: object iterate nahi hote for op loop se.

// Magar phir bhi main access karna hi chahata hun to:
for (const [key, value] of Object.entries(myObj)) {
  console.log(key, value);
}

