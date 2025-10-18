// reduce

const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currVal) {
    console.log(`acc: ${acc} and currVal: ${currVal}`);
    return acc + currVal
}, 0)

console.log(myTotal);


// Using arrow fn
const total = myNums.reduce((acc, curr) => acc + curr, 2);
console.log(total);


// real example:
const shoppingCart = [
    {
        itemName: "JS course",
        price: 2999
    },
    {
        itemName: "Py course",
        price: 999
    },
    {
        itemName: "Mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);
