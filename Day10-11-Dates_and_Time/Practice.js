/* 
*📝 Practice Set – Date & Time (Easy)
*Current Date. Ek program likho jo aaj ki date (sirf date part) print kare format me:👉 DD/MM/YYYY */

let today = new Date();
console.log(today.toLocaleDateString("en-IN"));  // 21/9/2025

/* 
*Current Time. Ek program likho jo abhi ka time print kare format me:👉 HH:MM:SS */

let time = new Date();
console.log(time.toLocaleTimeString());  // 9:56:16 PM

/* 
*Get Year. Ek program likho jo current date se sirf year nikaal kar print kare.*/

let year = new Date();
console.log(year.getFullYear())  // 2025

/* Custom Birthday
*Ek Date banao apne birthday ka.
*Sirf day of week (Sunday, Monday…) print karo.*/

let birthDate = new Date("2002-05-25");
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

console.log(weekDays[birthDate.getDay()])  // Saturday

/* Next Year’s Date
Ek Date banao aaj ke hisaab se.
Usme setFullYear() use karke next year ka same date print karo.*/

let date = new Date();
date.setFullYear(date.getFullYear() + 1);

console.log(date.toDateString());  // Mon Sep 21 2026

