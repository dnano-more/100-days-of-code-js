// 2. Declairing objects using constructor obj

// Singleton object example -
const farmMate = new Object();
console.log(farmMate);

// non-singleton object 
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);


// Assigning object within object and accessing properties of it
const regularUser = {
    email : 'nano@gmail.com',
    location : "remote",
    bio : {
        role : "Web Developer",
        UserFullname : {
            firstName : "Nano",
            lastName : "More"
        }
    }
}

console.log(regularUser.email);
console.log(regularUser.bio?.UserFullname)  // we can access nested object and their keys using (.) notation.
// Nested object access karte time kabhi kabhi error aa jata hai agar koi property missing ho isliye (?) is notation ka use karna safe hain.

// Combining objects
const obj1 = {1 : "Nano", 2 : "Abhi"}
const obj2 = {3 : "Gaju", 4 : "Rahul"}
const obj3 = {5 : "Sachin", 6 : "Harsh"}

const mergeObj = { obj1, obj2 }  // (Ye actually merge nahi karta. Ye bas obj1 aur obj2 ko alag keys bana deta hai)

const obj4 = Object.assign({}, obj1, obj2, obj3)  // (Its old but reliable option)
//here '{}' is target and 'obj1, obj2, obj3,...' is source. Agar target nahi doge to by by default first object target ban jata hain 
console.log(obj4);
// O/p: { '1': 'Nano', '2': 'Abhi', '3': 'Gaju', '4': 'Rahul', '5': 'Sachin', '6': 'Harsh' }

// Using spread operator
const group = {...obj1, ...obj2, ...obj3}     // (This is modern spread operator, zyada readable)
console.log(group);  // output is same as obj4 


// DB se aane wale records ko JS objects/arrays ke form me kaise handle karte hain? 
const users = [
    {
        id : 1,
        email : "nano@gmail.com"
    },
    {
        id : 2,
        email : "abhi@gmail.com"
    },
    {
        id : 3,
        email : "sachin@gmail.com"
    },
    {
        id : 4,
        email : "harsh@gmail.com"
    },
]

console.log(users[0].email, users[2].email);  //  O/p: 'nano@gmail.com' 'sachin@gmail.com'

// Intresting and important methods:
// Object.keys() - Ek aaray mein object ki sari keys return karega.
console.log(tinderUser);

console.log(Object.keys(tinderUser));  
// O/p : [ 'id', 'name', 'isLoggedIn' ]


// Object.values() - Ek aaray mein object ki sari values return karega.
console.log(Object.values(tinderUser));  
// O/p : [ '123abc', 'Sammy', false ]


// Object.entries - Ek aaray mein object ki sari keys/values return karega.
console.log(Object.entries(tinderUser));  
// O/p : [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]


// Object.hasOwnProperty() - Determines whether an object has a property with the specified name. result boolean value milti hain.
// Old way: tinderUser.hasOwnProperty('isLoggedIn')
console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // O/p : true

// New way: Object.hasOwn(tinderUser, 'isLoggedIn')
console.log(Object.hasOwn(tinderUser, 'isLoggedIn'));  // O/p : true

