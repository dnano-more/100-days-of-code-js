// Array in JavaSripct

// Declairation of aaray
const myArray = [0, 1, 2, 3, 4, 5]
const myHeros = ['Shaktiman', "Naagraj", "Hatim", "Hobo"]

const myArray2 = new Array(0, 1, 2, 3, 4, 5);  // No need to add brackets, it adds automatically.
console.log(myArray2);


// Array methods
// Accessing elements
console.log(myArray.at(0))
console.log(myArray[3])

// .push() - It Adds new elements to end of an aaray. 
myArray.push(6)
myArray.push(7, 8, 9)
console.log(myArray);  // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// .pop() - Removes last element from an array and returns that element
const popArr = [1, 2, 3]
const removed = popArr.pop()

console.log(removed) // 3
console.log(popArr)     // [1, 2]

// .unshift - // Adds the element to begining of the array and returns new length.
let numbers = [1, 2, 3, 4, 5, 6]

numbers.unshift(7, 8, 9)
console.log(numbers);   // [7, 8, 9, 1, 2, 3, 4, 5, 6]

// .shift() - // Removes the element of begining of the array and returns that removed element
numbers.shift()
numbers.shift()
console.log(numbers);  // [9, 1, 2, 3, 4, 5, 6]  (7, 8 - removed)


// Methods to get info from array. .includes(), .indexOf()- same as string methods
console.log(numbers.includes(7));  // false
console.log(numbers.indexOf(5));  // 5

// .join() - Array ko string banata hain
const newArr = numbers.join()

console.log(numbers);  // [9, 1, 2, 3, 4, 5, 6]
console.log(newArr);   // '9,1,2,3,4,5,6'


// .slice() and .splice()
const arr = [1, 2, 3, 4, 5]

console.log("A ", arr);

const sliceArr  = arr.slice(1, 3)
console.log(sliceArr);             // [ 2, 3 ]  (same as string.slice() method)
console.log("B ", arr);

const spliceArr  = arr.splice(1, 3)  // (This method modify the original aaray. returns array of deleted elements)
console.log(spliceArr);             // [ 2, 3, 4]  
console.log("C ", arr);             // [ 1, 5 ]


// Note: slice() is used to extract parts of an array without modifying it, 
// whereas splice() is used to change the content of an array by removing, replacing, or adding elements.