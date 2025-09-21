// Date in detail

let tarikh = new Date();
console.log(typeof tarikh);  // object

console.log(tarikh);    // 2025-09-20T15:13:19.481Z
console.log(tarikh.toString());  // Sat Sep 20 2025 20:46:03 GMT+0530 (India Standard Time)
console.log(tarikh.toDateString());  // Sat Sep 20 2025
console.log(tarikh.toLocaleDateString());  // 9/20/2025
console.log(tarikh.toLocaleString());  // 9/20/2025, 8:50:58 PM

// Specific date creation
// let myCreatedDate = new Date(2025, 0, 22);
// let myCreatedDate = new Date(2025, 0, 22, 8, 10);
//console.log(myCreatedDate.toLocaleString());  // 1/22/2025, 8:10:00 AM  (Because array starts from '0'. [0 ==> Jan, 1 ==> Feb,... 11 ==> Dec]

let myCreatedDate = new Date("2025-01-15");
console.log(myCreatedDate.toLocaleString());  // 1/15/2025, 5:30:00 AM  (In case of 'YYYY/MM/DD' months starts from 1)

let indDate = new Date("01-16-2025");
console.log(indDate.toLocaleString());  //1/16/2025, 12:00:00 AM


// Timestamps in dates
let myTimeStamp = Date.now();
console.log(myTimeStamp);   // 1758383346027 (milisecond value from January 1, 1970)
console.log(indDate.getDate());   // 16


// convert to seconds
console.log(Date.now());  // 1758384129320
console.log(Math.floor(Date.now()/1000));  // 1758384318


// Some more methods of Date Object
let newDate = new Date();
console.log(newDate);    // 2025-09-20T16:08:32.200Z
console.log(newDate.getDate());  // 20
console.log(newDate.getDay());  // 6  (0=Sunday, 6=Saturday)
console.log(newDate.getMonth());  // 8  (month 0 se start ho raha hain.)
console.log(newDate.getMonth() + 1);  // 9  
console.log(newDate.getHours());  // 21
console.log(newDate.getMinutes());  // 44
console.log(newDate.getTime());   // 1758384817076
console.log(newDate.getSeconds());  // 55
console.log(newDate.getFullYear());  // 2025
console.log(newDate.getMilliseconds());  // 724
console.log(newDate.getTimezoneOffset());  // -330


// string interpolation 
console.log(`Today is day of the week ${newDate.getDay()} and date is ${newDate.getDate()}`);

// we can customize date format
newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: "Asia/Calcutta"
});

console.log(newDate);  // 2025-09-20T16:50:56.167Z

/*
Month hamesha 0 based hota hai.
Days aur Years 1 based hote hain.
Jo bhi set methods use karoge (setFullYear, setMonth, etc.), wo timestamp update kar dete hain, aur agar console.log() sirf number dikhata hai toh samajh lo wo internal milliseconds dikha raha hai. Readable banane ke liye .toString() ya .toLocaleString() lagao. */