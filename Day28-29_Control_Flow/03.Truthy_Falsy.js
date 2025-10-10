const userEmail = ""

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Dont have user email");
}

/* 
* falsy values: false, 0, -0, 0n, "", null, undefined, NaN 
* 
*  And all other are considerd as Truthy values.
* truthy values: "0", "false", " ", [], {}, function(){}

*/
let emptyArr = []

if (Array.isArray(emptyArr)) {
    console.log("Empty array ([]) is a truthy, but empty value");   
} else {
    console.log("sdsdbchsn sa");
}


// In Objets
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("The object is empty");
}


// Nullish Coalescing Operator (??)

let val1;
val1 = 5 ?? 10
console.log(val1);  // 5  

val1 = null ?? 10
console.log(val1);  // 10  (pehali value nahi aai server se to isne dusri(10) value pickkar li)

val1 = undefined ?? 10
console.log(val1);  // 10  (pehli value define hain to pick karlo nahi to dusri uthalo)

val1 = null ?? 8 ?? 20
console.log(val1);  // 8  (Oh it means ki availble rehane vali phehli pick karo)

let score = 0 ?? 100;     // Output: 0 (not 100)
let name = "" ?? "Guest"; // Output: "" (not "Guest")


// Ternory Opertaor
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Ice Tea is under rupees 80 now..!") : console.log("Ice Tea is over priced.")

const msg = iceTeaPrice <= 80 
  ? "Ice Tea is affordable 🍵" 
  : "Ice Tea is luxury pricing 💸";
console.log(msg);
