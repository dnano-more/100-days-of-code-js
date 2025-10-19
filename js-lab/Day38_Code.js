// Day37 - Object Destructuring & Function Argument Reference
// -----------------------------------------------

// 🧩 Object Destructuring

const myObj = {
  name: "Dnano",
  age: 23,
  role: "SDE1",
  // salary: undefined
};

// Extracting property normally
const { role } = myObj;
console.log(role); // "SDE1"

// Renaming property while destructuring
const { role: jobRole } = myObj;
console.log(jobRole); // "SDE1"

// Setting a default value if property doesn’t exist
const { salary = 50000 } = myObj;
console.log(salary); // 50000

// Note: These do not mutate the original object
console.log(myObj); // salary key not added


// 🧠 Passing object to function

function handleObject3(anyObject) {
  console.log(
    `Username is ${anyObject.userName} and price is ${anyObject.price}`
  );
}

// Directly passing an object literal
handleObject3({
  userName: "sam",
  price: 299,
});

// Reference behavior test
const user = { name: "Nano", age: 24 };

function modifyUser(obj) {
  obj.name = "NanoX"; // modifies same object (shared reference)
  console.log("Inside function:", obj);
}

modifyUser(user);
console.log("Outside function:", user); // change reflected


// 💬 Summary:
// - Destructuring extracts values, doesn’t create links.
// - Default values apply only to new variables, not object itself.
// - Passing objects to functions shares reference (changes are visible outside).
// - Reassigning inside function breaks reference (no effect outside).

// 💡 Learned how destructuring + references work under the hood
// and how JS manages stack & heap memory for objects.
