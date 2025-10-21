// for 

for (let i = 1; i <= 5; i++) {
    //console.log(i);
    if (i == 5) {
        //console.log("5 is best number!")
    }
}

for (let i = 1; i <= 5; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number!")
    }
    console.log(element)
}

// Nested for
for (let i = 0; i <= 3; i++) {
    //console.log(`Outer loop: ${i}`);

    for (let j = 1; j <= 5; j++) {
        //console.log(`Inner loop value: ${j} and outer loop value: ${i}`);
    }
}
/* Output
Outer loop: 0
Inner loop value: 1 and outer loop value: 0
Inner loop value: 2 and outer loop value: 0
Inner loop value: 3 and outer loop value: 0
Inner loop value: 4 and outer loop value: 0
Inner loop value: 5 and outer loop value: 0
Outer loop: 1
Inner loop value: 1 and outer loop value: 1
Inner loop value: 2 and outer loop value: 1
Inner loop value: 3 and outer loop value: 1
Inner loop value: 4 and outer loop value: 1
Inner loop value: 5 and outer loop value: 1
Outer loop: 2
Inner loop value: 1 and outer loop value: 2
Inner loop value: 2 and outer loop value: 2
Inner loop value: 3 and outer loop value: 2
Inner loop value: 4 and outer loop value: 2
Inner loop value: 5 and outer loop value: 2
Outer loop: 3
Inner loop value: 1 and outer loop value: 3
Inner loop value: 2 and outer loop value: 3
Inner loop value: 3 and outer loop value: 3
Inner loop value: 4 and outer loop value: 3
Inner loop value: 5 and outer loop value: 3
*/

// Number table(1 TO 30) using for loop
for (let num = 1; num <= 30; num++) {
    console.log(`Table of ${num}`);

    for (let j = 1; j <= 10; j++) {  //note: Do not use same variable name in nested loop
        console.log(num * j);
    }
}

let myArray = ["flash", "batman", "superman"]
let arr = 0
while (arr < myArray.length - 2) {
    console.log(`Value is ${myArray[arr]}`);
    // arr++
    arr = arr + 1
}

let score = 11
do {
    console.log(`Score is ${score}`);
    score++
} // while (score <= 20);
while (score <= 10);  //output: Score is 11

// Best example of do while loop- try it on brower console
let userInput;

do {
  userInput = prompt("Please enter a number between 1 and 10:");
  // Check if input is not a number, or outside the range 1-10
  if (isNaN(userInput) || userInput < 1 || userInput > 10) {
    alert("Invalid input. Please enter a number between 1 and 10.");
  }
} while (isNaN(userInput) || userInput < 1 || userInput > 10);

alert(`You entered the valid number: ${userInput}`);
/* 
* do { ... }: 
The code inside the do block will execute at least once. This ensures the user is prompted for input initially.

* userInput = prompt(...): 
This line displays a dialog box to the user, asking for input, and stores the entered value in the userInput variable.

* if (isNaN(userInput) || userInput < 1 || userInput > 10): 
This condition checks if the input is not a number (isNaN), or if it's outside the desired range (less than 1 or greater than 10). If the input is invalid, an alert message is shown.

* } while (isNaN(userInput) || userInput < 1 || userInput > 10);: 
After the do block executes, the while condition is evaluated. If the userInput is still invalid (i.e., isNaN is true or the number is out of range), the loop will repeat, prompting the user for input again. This continues until valid input is provided.
*/