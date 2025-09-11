// Data type conversions

let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

// to Number() conversion
let valueInNumber = Number(score)  // Standerd way of conveting to number
console.log(typeof valueInNumber);  // number
console.log(valueInNumber);  // Nan


// Investigative study:
let nullValue = null

let checkInNumber = Number(nullValue)
console.log(typeof checkInNumber)  // number
console.log(checkInNumber);  // 0


let undefinedValue = undefined

let undefinedToNumber = Number(undefinedValue)
console.log(typeof undefinedToNumber)  // number
console.log(undefinedToNumber);  // Nan


let booleanValue = true

let trueToNumber = Number(booleanValue)
console.log(typeof trueToNumber)  // number
console.log(trueToNumber);  // 1. If the value is false then output will be '0'


let stringValue = "coder-dnano"

let stringToNumber = Number(stringValue)
console.log(typeof stringToNumber)  // number
console.log(stringToNumber);  // Nan


let objectValue = {}

let objectValueToNumber = Number(objectValue)
console.log(typeof objectValueToNumber)  // number
console.log(`empty object value: ${objectValueToNumber}`);  // Nan

let arrayValue = []

let arrayValueToNumber = Number(arrayValue)
console.log(typeof arrayValueToNumber)  // number
console.log(`empty Array value: ${arrayValueToNumber}`);  // 0. If there are elements in an arry output will be NaN

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// to Boolean() conversion
let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn);  // boolean
console.log(booleanIsLoggedIn);  // true. If value is 0 then output will be false.

let emptyString = ""

let emptyStringToBoolean = Boolean(emptyString)
console.log(typeof emptyStringToBoolean);  // boolean
console.log(emptyStringToBoolean);  // false

let stringName = "dnano"

let stringValueToBoolean = Boolean(stringName)
console.log(typeof stringValueToBoolean);  // boolean
console.log(stringValueToBoolean);  // true

let simpleNullValue = null

let nulltoBooleanValue = Boolean(simpleNullValue)
console.log(typeof nulltoBooleanValue);  // boolean
console.log(nulltoBooleanValue);  // false

let undefinedName = undefined

let undefinedNameToBoolean = Boolean(undefinedName)
console.log(typeof undefinedNameToBoolean);  // boolean
console.log(undefinedNameToBoolean);  // false

let objectName = {}

let objectToBoolean = Boolean(objectName)
console.log(typeof objectToBoolean);  // boolean
console.log(objectToBoolean);  // true

let arrayName = []

let arrayToBoolean = Boolean(arrayName)
console.log(typeof arrayToBoolean);  // boolean
console.log(arrayToBoolean);  // true

let NaNvalue = NaN

let NaNToBoolean = Boolean(NaNvalue)
console.log(typeof NaNToBoolean);  // boolean
console.log(NaNToBoolean);  // false

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// to String() conversion
let someNumber = 125

let numberToString = String(someNumber)
console.log(typeof numberToString);  // string
console.log(numberToString);  // "125"

let someBooleanValue = true

let booleanToString = String(someBooleanValue)
console.log(typeof booleanToString);  // string
console.log(booleanToString);  // "true". If value is false then output will be "false"

let someNullValue = null

let nullToString = String(someNullValue)
console.log(typeof nullToString);  // string
console.log(nullToString);  // "null"

let someUndefinedValue = undefined

let undefinedToString = String(someUndefinedValue)
console.log(typeof undefinedToString);  // string
console.log(undefinedToString);  // "undefined"

let someArray = [1, 2, 3]

let arrayToString = String(someArray)
console.log(typeof arrayToString);  // string
console.log(arrayToString);  // "1,2,3"

let someObject = {a: 1}

let objectToString = String(someObject)
console.log(typeof objectToString);  // string
console.log(objectToString);  // "[object Object]"



