// map

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.map((num) => num + 10)
console.log(newNums);  // returns seprate new array

// using forEach
const forEachNum = []

myNums.forEach((num) => {
    forEachNum.push(num + 10)
})
console.log(forEachNum); 


// chaining
const chainingMap = myNums
                    .map((num) => num * 10)  // [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
                    .map((num) => num + 1)  // yahan par original wale arry ki value par iteration nahi hota hai balki issi ke upar wale map ke result ki value milegi aur iterate karega
                    .filter((num) => num >= 40)

console.log(chainingMap);