/*
* 🔹 Sprint 1 (20 min) – Array Basics (Day 12)
* 1. Ek array banao: ["Ironman", "Thor", "Spiderman"].
*   ◽ push() se "Hulk" add karo.
*   ◽ pop() se last element hatao.
*   ◽ shift() se first element hatao.
*   ◽ unshift() se "Captain" add karo start me. */

let heros = ["Ironman", "Thor", "Spiderman"];
console.log(heros);

heros.push("Hulk")
console.log(heros);

heros.pop()
console.log(heros);

heros.shift()
console.log(heros);

heros.unshift("Captain")
console.log(heros);


/*
* 2. Do arrays merge karo:
*   ◽ concat() se merge karo.
*   ◽ Spread operator [...marvel, ...dc] use karke merge karo. */

const marvel = ["Ironman", "Thor"];
const dc = ["Superman", "Batman"];

let allHeros = marvel.concat(dc);
console.log(allHeros);

let superHeros = [...marvel, ...dc];
console.log(superHeros);

/* 
* Outputs: 
[ 'Ironman', 'Thor', 'Spiderman' ]
[ 'Ironman', 'Thor', 'Spiderman', 'Hulk' ]
[ 'Ironman', 'Thor', 'Spiderman' ]
[ 'Thor', 'Spiderman' ]
[ 'Captain', 'Thor', 'Spiderman' ]
[ 'Ironman', 'Thor', 'Superman', 'Batman' ]
[ 'Ironman', 'Thor', 'Superman', 'Batman' ]
*/


/* 
* 🔹 Sprint 2 (20 min) – Array Advanced (Day 13 starter)
* 3. Ek nested array lo: [1, 2, [3, 4, [5, 6]]]
*   ◽ flat(1) ka output check karo.
*   ◽ flat(2) ka output check karo.*/

let nestedArr = [1, 2, [3, 4, [5, 6]]];

let depth1 = nestedArr.flat(1);
console.log(depth1);

let depth2 = nestedArr.flat(2);
console.log(depth2);


/* 
* 4. Array.isArray() se check karo:
*   ◽ "Hello"
*   ◽ [1,2,3] */

console.log(Array.isArray("Hello"));  // false 
console.log(Array.isArray([1, 2, 3]));  // true

/*
* 5. Array.from("Hello") ka output check karo.
*    Array.of(100, 200, 300) ka output check karo.*/

let newArr = Array.from("Hello");
console.log(newArr);

let arrOf = Array.of(100, 200, 300);
console.log(arrOf);

/* 
* Outputs:
[ 1, 2, 3, 4, [ 5, 6 ] ]
[ 1, 2, 3, 4, 5, 6 ]
false
true
[ 'H', 'e', 'l', 'l', 'o' ]
[ 100, 200, 300 ]
*/


/* 
* 🔹 Sprint 3 (20 min) – Mixed Practice
* 6. Do arrays banao aur ek hi array me merge + flatten karke final output print karo.*/

let arr1 = ["Nano", "More", "Student"]
let arr2 = [[2, 3], 1, 3, [65, 80, [3]]]

let mergedArr = [...arr1, ...arr2]
console.log(mergedArr.flat(Infinity));


/* 
* 7. Ek function likho jo check kare input array hai ya nahi.*/

console.log(Array.isArray("Hello"));
console.log(Array.isArray([1,2,3]));


/* 
* 8. Ek string "12345" ko array me convert karo numbers ke form me.
*   ◽ Output: [1, 2, 3, 4, 5]*/

let str = "12345"

let arr = Array.from(str, Number)
console.log(arr);

/*
* Outputs: 
[ 'Nano', 'More', 'Student', 2, 3, 1, 3, 65, 80, 3 ]
false
true
[ 1, 2, 3, 4, 5 ]
*/