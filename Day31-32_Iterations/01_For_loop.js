// for loop
/* Syntax
for (initialization; condition; increment) { ... }

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
    When JS runs it, it works in this order:

    1.Initialization: let i = 0 — runs only once at the start.
    2.Condition check: i <= 10 — if true, it enters the loop body.
    3.Loop body: executes the code inside { ... }.
    4.Increment step: after the body finishes, it runs i++.
    5.Then back to step 2 (condition check again).
    */

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is a best number..!");
    }
    //console.log(element);
}

// Nested for
for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop: ${i}`);

    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and outer loop value: ${i}`);
    }
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop: ${i}`);

    for (let j = 1; j <= 10; j++) {
        console.log(i + '*' + j + ' = ' + i*j);
    }
}