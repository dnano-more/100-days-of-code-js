// for in loop
//for...in  --> Enumerable (Object)   -->    Keys   -->  Plain objects 

const myObject = {
    js : "javascript",
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"    
}

for (const key in myObject) {
   console.log(key);  // saari keys print ho gai hain
   console.log(`${key} shortcut is for ${myObject[key]}`); 
}


// for in loop array pe chala ke dekhte hain (it works but not recomended)
const languages = ['js', 'rb', 'py', 'java', 'cpp']

for (const key in languages) {
    console.log(key);   // index print kardi hain
    console.log(languages[key]);  // value return karega ab 
}


// lets add for-in loop into map boject
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");

for (const key in map) {
    console.log(key);     // sala kuch bhi nahi hua re! pata nahi kaha atak gai keys?
}
// map ke uper is tarah iteration nahi ki ja sakti.