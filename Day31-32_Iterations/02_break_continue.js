// break and continue keywords

// break
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break;   // Stops the loop immediately (break keyword ends the exicution flow of loop) 
    }
    console.log(`Value of i is ${index}`);
}

// continue
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue;   // Skips only this iteration (continue keyword skips that one time exicution flow of loop) 
    }
    console.log(`Value of i is ${index}`);
}