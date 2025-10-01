
function calculateCartPrice(num1) {
    return num1
}

console.log(calculateCartPrice(39000));  // O/p : 39000  
// Its fine with single argument. But example- flipkart ki cart me user kitne bhi items add kar sakta hain. To ham kaise is problem ko solve kar sakte hain with function?

// We can resolve this problem with rest operator (...) - it means saare ek bundle me pack karke dedo
function calculateCartPrice2(...num1) {
    return num1
}

console.log(calculateCartPrice2(39000, 49000, 79000));  // O/p : [ 39000, 49000, 79000 ]    

// Samll interview question. What will be the output of following example.
function calculateCartPrice3(value1, value2, ...num1) {
    return num1
}
// solution : value1, value2 ko return nahi kiya hai to ye dono ki argumetns print nahi hongi aur bache huye saari values rest operator ki madad se num1 parameter me save hokar console pe print ho jayengi.
console.log(calculateCartPrice3(3999, 299, 1999, 449, 9999, 49));  // O/p : [ 1999, 449, 9999, 49 ]


// lets play with object as argument
const user = {
    userName: "Dnano",
    price: 399
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
}

handleObject(user);  // O/p: Username is Dnano and price is 399

// But agar pass kiye huye object me property hi nahi hui to? I think undefined return karega.
function handleObject2(anyObject) {
    console.log(`Item name is ${anyObject.itemName}`);
}

handleObject2(user);  // O/p: Item name is undefined (my guess was right.)

// Kya ho object bina variable me save kiye bagair direct function ki argument me hi do to?
function handleObject3(anyObject) {
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
}

handleObject3({
    userName: 'sam',
    price: 299
})              // O/p : Username is sam and price is 299 (It works same!)


// Lets pass array as an argument in function
const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));  // 300

// Direct aaray as argument
console.log(returnSecondValue([200, 300, 400, 500]));  // 300  (super easy!)
