// Callback Functions and High Order Functions

function add(a, b, callBackFn) {
    const result = a + b;
    callBackFn(result);
}

add(5, 3, function (val) {
    console.log(val);
});

const showResult = function (val) {
    console.log(val);
}
add('hello', ' world', showResult);

// const log2 = val => console.log(val)  // its shorthand oneliner for arrow functions
add(2, 10, val => console.log(val));
add(40, 10, result => console.log(result));

// mast experiment
function add(a, b, callBackFn) {
    const result = a + b;
    callBackFn(result);

    return () => console.log(result);
}

// add(2, 2, () => { });  // ye internally exicute ho gaya hain but console pe output nahi milega kiv ki ise kisi variable me stoare nahi kiya hain.
let resultFunction = add(2, 2, () => { });

console.log(resultFunction);  //[Function (anonymous)]
resultFunction(); // 4


// Array high order function

// forEach() 
const student = ['dnano', 'ravi', 'rohit', 'ashok']

function PrintMe(names) {
    console.log(names);
}
// student.forEach(PrintMe);

let result = student.forEach((val) => console.log(val + ' → CS Student'));
// console.log(result);

// map()
// student.map((val) => console.log(val + ' → CS Student'));

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function multiply(item) {
    return item * 2
}
const newArr = num.map(multiply);
console.log(newArr);

['Dnyaneshwar'].map((print) => console.log(print));


// Then what is the difference between .forEach() and .map() ?

function double(n) {
    return n + 10
}

const forEachMethod = num.forEach(double);
console.log(forEachMethod); // undefined

const mapMethod = num.map(double);
console.log(mapMethod); // output: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


console.log(num); // same as original. No change is showing. It means .map() returns new array.
