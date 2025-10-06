// This working
const user = {
  username: "Dnano",
  normalFunc: function() {
    console.log("Normal:", this.username);
  },
  arrowFunc: () => {
    console.log("Arrow:", this.username);
  }
};

user.normalFunc(); // ✅ Normal: Dnano
user.arrowFunc();  // ❌ Arrow: undefined

// normalFunc → its this points to user (because it’s called as user.normalFunc()).
// arrowFunc → doesn’t have its own this, so it takes it from outside (global), not user.


// Q.1 Predict the output

const person = {
    name: "Nano",
    sayHi: function () {
        console.log(`Hi, ${this.name}!`);
    }
};

const greet = person.sayHi;
greet();  // 🤔 What will this print?
// person.sayHi()

// Output should be 'Hi undefined!' 
// Reason - Ham Object method 'sayHi' ko 'greet' naam ke variable me stoare kar rahe hain; Aur jab hum 'greet()' ko call karte hain, to wo global context me call hota hain, jaha 'this' ka reference global object (browser me 'window', Node.js me 'global') hota hain. Aur global object me 'name' property defined nahi hai, isliye output 'undefined' aayega

// But I want to keep this
const greetings = person.sayHi.bind(person)
greetings();  // Output: Hi, Nano!


// ⚡ Q2 — Arrow Trap
const team = {
  members: ["A", "B", "C"],
  showMembers: () => {
    console.log(this.members);
  }
};

team.showMembers();  // What’s the output?

// Output should be undefined. Outer scope gobal object hain yaha par. question 1 ki tarah yahan par bhi global object me 'members' property nahi hain isliye 'undefined' aayega.


// 💡 Q3 — Implicit vs Explicit Return
const addOne = (num) => { num + 1 };
const addTwo = (num) => (num + 2);

console.log(addOne(5));  // undefined
console.log(addTwo(5));  // 7
//👉 Why are the two outputs different?

// Reason: 'addTwo' is a implicit return matlab ki retrun keyword likh ne ki jarurat nahi hain wo automatically return kar dega. Aur 'addOne' explicit return hain jahan ki retun likhna jaruri hota hain. Agar return nahin likhte ho to phir undefined value dega. 


// 🧠 Q4 — Return Object - Write an arrow function that returns this object:
const learningReact = () => ({ framework: "React", level: "beginner" }) 

// Experiment
const obj = {
    username: "nano",

    ArrowFn: () => {
        console.log(this.username)
    }
}
obj.ArrowFn()  // undefined
