// Yeh file HTML ke DOM ke saath connect ho kar kuch basic cheezein karegi

// 1️⃣ H1 element ko access karo
const title = document.getElementById('title');

// 2️⃣ Console mein element aur uska text print karo
console.log("Title element:", title);
console.log("Original text:", title.innerText);

// 3️⃣ Text ko change karo
title.innerText = "DOM updated using external JavaScript!";

// 4️⃣ Style change karo
title.style.color = "yellow";
title.style.fontSize = "2.5rem";

// 5️⃣ Ek naya paragraph create karke body mein add karo
const newPara = document.createElement('p');
newPara.innerText = "Yeh paragraph JavaScript se add kiya gaya hai.";
newPara.style.color = "lightgreen";
document.body.appendChild(newPara);
