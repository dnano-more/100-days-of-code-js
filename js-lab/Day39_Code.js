// Day38 - Arrow Function 'this' + Execution Context and Call Stack Demo

//---------------------------------------------
// 🧩 Part 1 - 'this' in Arrow vs Normal Function
//---------------------------------------------

const user = {
    username: "dnano",

    // Normal function -> gets its own 'this' (object)
    normalFn: function () {
        console.log("Normal Fn ->", this.username);
    },

    // Arrow function -> inherits 'this' from outer scope (global)
    arrowFn: () => {
        console.log("Arrow Fn ->", this.username);
    },
};

user.normalFn();   // Output: "dnano"
user.arrowFn();    // Output: undefined


//---------------------------------------------
// 🔍 Bonus Experiment - Global 'var' case
//---------------------------------------------

// 'var' attaches to global object (browser: window)
var username = "Nano_Global";

const testObj = {
    arrowFn: () => {
        console.log("Arrow Fn (global 'var') ->", this.username);
    },
};

testObj.arrowFn();  // Output: "Nano_Global" (because 'this' = global)
console.log("Global this:", this);


//---------------------------------------------
// ⚙️ Part 2 - Execution Context and Call Stack
//---------------------------------------------

function one() {
    console.log("one");
    two();
}

function two() {
    console.log("two");
    three();
}

function three() {
    console.log("three");
}

one();
two();
three();

/*
📜 Execution Flow:

1️⃣ Global Execution Context created
    -> one, two, three functions stored in memory

2️⃣ one() called → creates new EC → logs "one" → calls two()
3️⃣ two() called → new EC → logs "two" → calls three()
4️⃣ three() called → new EC → logs "three"
   (then pops back each completed function from call stack)

5️⃣ After one() done, two() called again → "two", "three"
6️⃣ Then three() → "three"

🧮 Final Output:
one
two
three
two
three
three
*/
