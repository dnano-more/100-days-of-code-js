// DOM selectors

// selecting through id
console.log(document.getElementById('title'));  // <h1 id="title" class="heading">DOM learning on chai aur code</h1>

console.log(document.getElementById('title').id);  // 'title'

console.log(document.getElementById('title').class);  // undefined (it is not correct syntax for accessing class)

console.log(document.getElementById('title').className);  // 'heading'

console.log(document.getElementById('title').getAttribute);  // ƒ getAttribute() { [native code] }

console.log(document.getElementById('title').getAttribute('id'));  // 'title'
console.log(document.getElementById('title').getAttribute('class'));  // 'heading'

// set attributes
console.log(document.getElementById('title').setAttribute('class', 'test'));  // it overrides original with new attribute
console.log(document.getElementById('title').setAttribute('class', 'test heading'));  // sahi tarika another class set karne ka with existing one.

const title = document.getElementById('title');

// styling elements
title.style.backgroundColor = 'blue'
title.style.padding = '14px'
title.style.borderRadius = '10px'

// extracting content from element
console.log(title.textContent);  // saara text content dikhata hain including hidden also. 
console.log(title.innerHTML);   // it supports to HTML elements
console.log(title.innerText);   // only shows visible text


// selecting className
console.log(document.getElementsByClassName('heading'));


// IMP and real use-case based selectors
console.log(document.querySelector('h1'));  // it gives first h1 from document
console.log(document.querySelector('h2'));  // it gives first h2 from document i.e- <h2>Second first heading.</h2>

console.log(document.querySelector('#title'));
console.log(document.querySelector('.heading'));

console.log(document.querySelector('input[type ="password"]'));



// Better commenting using ChatGPT
// 🟢 DOM SELECTORS & ELEMENT MANIPULATION

// 🔹 Selecting element by ID
console.log(document.getElementById('title'));  
// → <h1 id="title" class="heading">DOM learning on chai aur code</h1>

console.log(document.getElementById('title').id);  // → "title"

// ⚠️ Wrong way: 'class' is not a valid property name
console.log(document.getElementById('title').class);  // → undefined

console.log(document.getElementById('title').className);  // → "heading"

// 🔹 Get attribute (returns the attribute value)
console.log(document.getElementById('title').getAttribute('id'));     // → "title"
console.log(document.getElementById('title').getAttribute('class'));  // → "heading"

// 🔹 Set attribute (overwrites the existing one)
document.getElementById('title').setAttribute('class', 'test');

// ✅ Better way: include both old + new class names
document.getElementById('title').setAttribute('class', 'test heading');

const title = document.getElementById('title');

// 🎨 Styling elements (inline styles)
title.style.backgroundColor = 'blue';
title.style.padding = '14px';
title.style.borderRadius = '10px';

// 🧾 Extracting content from an element
console.log(title.textContent);  // shows ALL text, including hidden ones
console.log(title.innerText);    // shows only visible text
console.log(title.innerHTML);    // returns HTML markup inside the element

// 🔹 Selecting elements by class name (returns HTMLCollection)
console.log(document.getElementsByClassName('heading'));

// 🔹 Modern & powerful selectors (querySelector)
console.log(document.querySelector('h1'));                // first <h1>
console.log(document.querySelector('h2'));                // first <h2>
console.log(document.querySelector('#title'));            // element with ID 'title'
console.log(document.querySelector('.heading'));          // first element with class 'heading'
console.log(document.querySelector('input[type="password"]'));  // input element of type password
