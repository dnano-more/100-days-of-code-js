// forEach

const coding = ['js', 'rubi', 'java', 'py', 'cpp']

coding.forEach(function (item) {
    // console.log(item);
})


// forEach with arrow function
coding.forEach((item) => {
    // console.log(item);
})


// Can we pass declaired function on forEach?
function printMe(item) {
    console.log(item);
}

coding.forEach(printMe);  // Yes, we can pass parameter as function in forEach (Note: hame bas function ka reffrence dena hota hain)


// More parameters in forEach callback function
coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})


// real usecase example [iterating over arrays of objects — which happens all the time in APIs, databases, and UI rendering.]
const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    // console.log(item.languageName)
})

coding.forEach(item => console.log(item));


//forEach → always returns undefined.
const result = coding.forEach(item => item);
console.log(result); // undefined


/* 
✅ Runs the callback once for every element in the array.
✅ Automatically passes:
    item → the element itself
    index → the element’s index
    arr → the full array
*/