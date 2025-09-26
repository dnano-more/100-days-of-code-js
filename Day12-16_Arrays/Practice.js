// Array practice

let months = ["January", "February", "March", "April"];

// Access values by their indexes( index starts from 0 )
console.log(months[0]);  // 'January'
console.log(months[3]);  // 'April'

// if array is nested
let nestedArr = [1, 2, 3, 4, [3, 5], 5];
console.log(nestedArr[4][1]);  // 5

// find length of aaray
console.log(months.length);  // 4
console.log(months[months.length - 1]);  // It means last element batao. O/p: 'April'
console.log(months[months.length - 2]);  // "March"

// Adding element in aaray without using any method
let numbers = [1, 2, 3, 4];
console.log(numbers);

numbers[4] = 5;
numbers[5] = 6;
console.log(numbers);  // [ 1, 2, 3, 4, 5, 6 ]

// Replacing array element 
numbers[0] = 9;
numbers[2] = 7;
console.log(numbers);  // [ 9, 2, 7, 4, 5, 6 ]  (0th and 2th index element is replaced)


// Array methods
// push() - Appends new elements to the end of an array, and returns the new length of the array.
let subjects = ["Maths", "Science", "History"];

subjects.push("Geography", "Plitical Science", true, 32, undefined, null, 12312494273468726378237n, [1, 2, 3], { id: 123 });  // we can push any data type into this
console.log(subjects);


// pop() - Removes the last element from an array and returns it.
let removeLastArr = [29, "dfhj", true, "Hello"];
console.log(removeLastArr);

let a, b, c, d, e;
a = removeLastArr.pop();  // "Hello"
b = removeLastArr.pop();  // true
c = removeLastArr.pop();  // "dfhj"
d = removeLastArr.pop();  // 29
e = removeLastArr.pop();  // undefined ( beacause aaray is empty)

console.log(a, b, c, d, e); // "Hello" true "dfhj" 29 undefined
console.log(removeLastArr); //o/p: [] ( This method is modifies original aaray.)


// shift() - Reverse method of Pop(). Same behaviour like pop() but it removes elements from starting an aaray.
let ShiftArr = ["dummy", "shift", "varchar"];
console.log(ShiftArr);  // [ 'dummy', 'shift', 'varchar' ]

ShiftArr.shift();
console.log(ShiftArr);  // [ 'shift', 'varchar' ]


// unshift() - Reverse of push().
let weekDays = ["Wednesday", "Thurasday", "Frieday", "Saturday"];
console.log(weekDays);

// weekDays.unshift("Monday");
// console.log(weekDays);      // [ 'Monday', 'Wednesday', 'Thurasday', 'Frieday', 'Saturday' ]

// weekDays.unshift("Tuesday");
// console.log(weekDays);      // [ 'Tuesday', 'Monday', 'Wednesday', 'Thurasday', 'Frieday', 'Saturday' ]

weekDays.unshift("Monday", "Tuesday")
console.log(weekDays);  // [ 'Monday', 'Tuesday', 'Wednesday', 'Thurasday', 'Frieday', 'Saturday' ]


// concat() - Combines two or more arrays. This method returns a new array without modifying any existing arrays.
let marvel_heros = ["Captain", "Dr.Strange", "Hulk"];
let dc_heros = ["Wonder Women", "Aquaman", "Harley Quinn"];
let vertigo_heros = ["Lucifer", "Robin", "Lucifer Morningstar"]

let hollywood_heros = marvel_heros.concat(dc_heros, vertigo_heros);
console.log(hollywood_heros);
//O/p: [ 'Captain', 'Dr.Strange', 'Hulk', 'Wonder Women', 'Aquaman', 'Harley Quinn', 'Lucifer', 'Robin', 'Lucifer Morningstar'];

// join() - Adds all the elements of an array into a string, separated by the specified separator string.
let allHeros = hollywood_heros.join(' <-> ');  //  by default seperator is (,). You can give any string seprator. accept spaces also.
console.log(allHeros);
// O/p: Captain <-> Dr.Strange <-> Hulk <-> Wonder Women <-> Aquaman <-> Harley Quinn <-> Lucifer <-> Robin <-> Lucifer Morningstar

allHeros = hollywood_heros.join(' + ');
console.log(allHeros);  // O/p: Captain + Dr.Strange + Hulk + Wonder Women + Aquaman + Harley Quinn + Lucifer + Robin + Lucifer Morningstar

// isArray() - checks the variable is aary or not.
let var1 = "This is js"
let var2 = 286
let var3 = [1, 2, 3, 4]

// let checkArr = Array.isArray(var1);  // false
// let checkArr = Array.isArray(var2);  // false
let checkArr = Array.isArray(var3);  // true
console.log(checkArr);

// reverse() - It reverse the aaray elements from their place. This method mutates the array and returns a reference to the same array.

const words = ["first", "second", "third", "fourth"]
console.log(words);

words.reverse();
console.log(words);  // O/p: [ 'fourth', 'third', 'second', 'first' ]

// toReversed() - Returns a copy of an array with its elements reversed. Its not modify the original aaray.
const toReversedArr = words.toReversed();
console.log(toReversedArr);
// O/p: [ 'first', 'second', 'third', 'fourth' ]

// slice() - Returns a copy of a section of an array.
const colors = ['red', 'green', 'blue', 'yellow'];

console.log(colors.slice(1, 3));  // O/p: [ 'green', 'blue' ]
console.log(colors.slice());     // O/p: [ 'red', 'green', 'blue', 'yellow' ] 
// (Agar start param nahi doge to by default 0 index se start karega aur end nahi diya to aary ke last tak sclice karega.)
console.log(colors.slice(0, -1)); // O/p: [ 'red', 'green', 'blue' ]  ( accept -1 values too. )

// splice() - Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
const mahine = ["January", "February", "March", "April", "May", "June"];

// 3rd wale index ka month ko delete karte hain
console.log(mahine.splice(2, 1));  // O/p: [ 'March' ]
console.log(mahine);  // O/p: [ 'January', 'February', 'April', 'May', 'June' ]

// Pure aaray elements ko hi delete karte hain
console.log(mahine.splice(0))  // O/p: [ 'January', 'February', 'April', 'May', 'June' ]
console.log(mahine);  // O/p: []

// Ab empty array mein elements add karte hain
console.log(mahine.splice(0, 0, "July", "August"))  // O/p: []
console.log(mahine);  // O/p: [ 'July', 'August' ]

// toSpliced() - Copies an array and removes elements and, if necessary, inserts new elements in their place. Returns the copied array.
const mahine2 = ["January", "February", "March", "April", "May", "June"];

let copiedSpliceArr = mahine2.toSpliced(2, 3);  // ["March", "April", "May"] rmove ho jayenge.
console.log(copiedSpliceArr);  // O/p: [ 'January', 'February', 'June' ]

console.log(mahine2);  // verified that original aary is not modified

// Lests add deleted months back to their place.
let copiedSpliceArr2 = copiedSpliceArr.toSpliced(2, 0, "March", "April", "May")
console.log(copiedSpliceArr2); 
// O/p: [ 'January', 'February', 'March', 'April', 'May', 'June' ]


// indexOf() - Returns the index of the first occurrence of a value in an array, or -1 if it is not present. 
let indexOfElement = mahine2.indexOf("May");
console.log(indexOfElement);  // 4

indexOfElement = mahine2.indexOf("may");
console.log(indexOfElement);  // -1  ( case sensitive hota hain ye.)

indexOfElement = mahine2.indexOf("hello");
console.log(indexOfElement);  // -1

// includes() -
let includes = mahine2.includes("February");
console.log(includes);  // true
includes = mahine2.includes("february");
console.log(includes);  // false (case sensitive)
