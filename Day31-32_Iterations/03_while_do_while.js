// while loop

let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    // index = index + 2
    index += 2
}

// with aaray
let myArray = ["flash", "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr++
}


// do-while loop - Bas ek bar agar loop ko chalana hain to use me ata hain ye
let score = 11

do {
    console.log(`Score is ${score}`);
    score++ 
} while (score <= 10);


/*
Summary:
for loop → when you know how many times
while loop → when condition controls iteration
do...while → run at least once
*/
