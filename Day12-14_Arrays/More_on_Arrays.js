const marvel_heros = ["Ironman", "Thor", "Spiderman"]
const dc_heros = ["Superman", "Batman", "Flash"]

/*
* // trying to merge aaray
marvel_heros.push(dc_heros);  // Appends new elements to the end of an array, and returns the new length of the array.
console.log(marvel_heros);   
// O/p: [ 'Ironman', 'Thor', 'Spiderman', [ 'Superman', 'Batman', 'Flash' ] ]

* // Access elements of aaray within array.
console.log(marvel_heros[3][1]);  // O/p: 'Batman' 
*/

// There is a method to merge two or more arrays - (.concat() method)
// .concat() - Combines two or more arrays. This method returns a new array without modifying any existing arrays.

let allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);
// O/p: [ 'Ironman', 'Thor', 'Spiderman', 'Superman', 'Batman', 'Flash' ]


// Alternative method of concat - spread operator
// Spread operator - Multiple arrays ya extra values ko ek jagah merge karne ke liye
const movie = ['Atlas', 'Interstellar', 'Oblivion']
const all_new_heros = [...marvel_heros, ...dc_heros, ...movie];  // (...) means spread kardo aaray ke elements ko.
console.log(all_new_heros);
// O/p: [ 'Ironman', 'Thor', 'Spiderman', 'Superman', 'Batman', 'Flash', 'Atlas', 'Interstellar', 'Oblivion']


// Nesting aaray (rare use)
const nestingArr = [1, 2, 3, [4, 5, 6], 7, [3, 4, [5, 9]]]

const nest_out_arr = nestingArr.flat(Infinity); // ( It spread out elements in one array. )
console.log(nest_out_arr);
// o/p: [1, 2, 3, 4, 5, 6, 7, 3, 4, 5, 9]


// Usefull array methods
// .isArray() - determines value is array or not. It returns boolean value
console.log(Array.isArray("Dnano"));  // false
console.log(Array.isArray([1,2,3]));  // true


// .from() - Creates an array from an array-like object.
console.log(Array.from("Dnano"));   // O/p: [ 'D', 'n', 'a', 'n', 'o' ] 

// we can create array from object
console.log(Array.from({name: "Dnano"}));  // o/p: [] 
// .from() ko batana padta hain keys ka array banana hain ya values ka varna empty array([]) return karega

// .of() - Returns a new array from a set of elements( like - variables, arrays).
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  // O/p: [ 100, 200, 300 ]
