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
