// more selectors

// CSS selectors   
//document.querySelector('p:first-child');  // null

document.querySelector('ul');

const myUl = document.querySelector('ul');
myUl.querySelector('li'); // first child return karega 

const turnGree = myUl.querySelector('li');
turnGree.style.backgroundColor = 'green'
turnGree.style.padding = '10px'
turnGree.innerText = 'five'


// .querySelectorAll()
document.querySelectorAll('li');  // NodeList(3) [li, li, li]
//its not array. you can not use all methods of array with this Nodelist

const tempLiList = document.querySelectorAll('li');
//tempLiList.style.backgroundColor = 'red'    // Not a valid way to change style of all li
tempLiList[0].style.color = 'yellow'  // Now its working

// same with h1
const myH1 = document.querySelectorAll('h1');
//myH1.style.color = 'green' //Uncaught TypeError: Cannot set properties of undefined (setting 'color')
myH1[0].style.color = 'green'

tempLiList.forEach((l) => l.style.backgroundColor = 'blue');

// Remember NodeList is not an array. Agar apko array ke methods use karne hai to apko convert karna padega NodeList ko array me
const liArray = Array.from( document.querySelectorAll('li') );
console.log(liArray);  // now we can use all array methods.


//.getElementsByClassName()
document.getElementsByClassName('list-item');  // it returns HTML collection. You can't loop through it.

// lets convert into array
const tempClassList = document.getElementsByClassName('list-item');
const arryHTMl = Array.from(tempClassList); // now this is array.

arryHTMl.map( (li) => {
    li.style.color = 'white';
    li.style.fontSize = '30px';
    li.style.listStyleType = 'square';
    li.style.margin = '10px';
    li.style.padding = '10px';
    li.style.backgroundColor = 'gray';
    li.style.width = '100px';
});


/* better commenting using ChatGPT
// 🟢 DOM SELECTORS — PART 2 (querySelectorAll, HTMLCollection, and styling)

// 🔹 CSS Selectors using querySelector()
document.querySelector('ul');  // selects the first <ul> element

const myUl = document.querySelector('ul');

// Select the first <li> inside the <ul>
const turnGreen = myUl.querySelector('li');

// Apply inline styles + modify text
turnGreen.style.backgroundColor = 'green';
turnGreen.style.padding = '10px';
turnGreen.innerText = 'five';


// 🔹 querySelectorAll() — returns a NodeList (NOT a real array)
document.querySelectorAll('li');  // → NodeList(3) [li, li, li]

const tempLiList = document.querySelectorAll('li');

// ❌ Can't apply style directly to NodeList
// tempLiList.style.backgroundColor = 'red'; // ❌ Invalid

// ✅ Access individual elements by index
tempLiList[0].style.color = 'yellow';

// Example with <h1>
const myH1 = document.querySelectorAll('h1');
// myH1.style.color = 'green'; // ❌ Invalid
myH1[0].style.color = 'green'; // ✅ Correct way

// ✅ Loop through NodeList using forEach()
tempLiList.forEach((li) => {
    li.style.backgroundColor = 'blue';
});


// 🔹 Converting NodeList → Array
// (to use advanced array methods like map, filter, reduce, etc.)
const liArray = Array.from(document.querySelectorAll('li'));
console.log(liArray);  // → Now it's a true array


// 🔹 getElementsByClassName() — returns an HTMLCollection
// Similar to NodeList but doesn’t support forEach() or map()
document.getElementsByClassName('list-item');  // → HTMLCollection

// Convert HTMLCollection → Array
const tempClassList = document.getElementsByClassName('list-item');
const arrayHTML = Array.from(tempClassList);

// ✅ Apply multiple styles using map()
arrayHTML.map((li) => {
    li.style.color = 'white';
    li.style.fontSize = '30px';
    li.style.listStyleType = 'square';
    li.style.margin = '10px';
    li.style.padding = '10px';
    li.style.backgroundColor = 'gray';
    li.style.width = '100px';
});
*/