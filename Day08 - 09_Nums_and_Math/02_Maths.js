// Math in detail.

// The Math object is not a constructor — you can’t do new Math().
// It’s just a built-in object with properties and methods for mathematical operations.

// Math obj
console.log(Math);  // Object [Math] {}

// Math properties
console.log(Math.PI);   // 3.141592653589793
console.log(Math.E);    // 2.718281828459045  (Euler’s number)


// Math values 
//Math.abs() -→ It means natuaral number mein convert kardo like (1,2,3,...)
console.log(Math.abs(-10));  // 10 
console.log(Math.abs(8));  // 8   (positive number remain poistive only negative converted to positive)

// Math.round() -→ rounds to nearest integer
console.log(Math.round(4.3));  // 4
console.log(Math.round(4.7));  // 5

// Math.floor() -→ rounds down and Math.ceil() -→ rounds up
console.log(Math.floor(5.9));  // 5
console.log(Math.ceil(5.1));  // 6

// .min() and .max()
console.log(Math.min(4, 2, 5, 8, 7));  // 2
console.log(Math.max(4, 2, 5, 8, 7));  // 8


// 0 se 1 ke beech mein random decimal number degi har bar (naya number har bar jaise ki- 0.29576489522570104, 0.9998085676695527, 0.7408996866716662)
console.log(Math.random());  // 0.7280226621932402
console.log(Math.random());  // 0.4722071275318074
console.log(Math.random());  // 0.0987356544721929

// decimal point change kar diya (0 se 9 tak value)
console.log(Math.random() * 10);  // 3.643287392116814
console.log(Math.random() * 10);  // 7.839970626854528

// Math.random() → gives a number between 0 and <1.
console.log(Math.floor(Math.random() * 10));   // 4  (it gives number  0 to 9)
console.log(Math.floor(Math.random() * 10) + 1);  // 7  (it gives number  1 to 10)

// If above two lines of code is looking difficult to you then learn following method:
// Math.trunc(x) -→ removes decimal part
let decNum = 6.662923243383487
console.log(Math.trunc(decNum));  // 6

// Math.pow(x, y) → x to the power y
console.log(Math.pow(2, 3));  // 8

//Math.sqrt(x) → square root
console.log(Math.sqrt(25));   // 5


// Find number in between min and max 
let min = 10
let max = 20
let num = Math.random() * (max - min + 1)
// 👆Expaination: isme 1.645... se lekar 10.354... tar number milenge ( range define kiya --> (min - max) aur 0.632... na aaye isliye --> (+ 1) add kiya taki (1.789... to 10.234...) inmese mile number)

let floorNum = Math.floor(num)   // bada number nahi ayega decimal ke baad (value floor ho jayegi)
console.log(floorNum + min)    // Aur isme 10 aur 20 ke beech wale numbers milenge