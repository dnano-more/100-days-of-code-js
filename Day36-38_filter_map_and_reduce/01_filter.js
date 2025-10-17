// const coding = ['js', 'rubi', 'java', 'py', 'cpp']

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })

// console.log(values);
// forEach() → Just loops through elements, doesn’t return anything.


// filter use
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let filterdVal = myNums.filter((num) => num > 4);
let filterdVal = myNums.filter((num) => {
    return num > 4
});

console.log(filterdVal);


//Using forEach
const newNums = []

myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num)
    }
})

console.log(newNums, '<-- Thi is new nums');


// real usecase example:
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];


// Sirf 'History' genre ki book ko nikana ho to aise -->
let userBooks = books.filter((bk) => bk.genre === 'History')
// console.log(userBooks);

// Wahi Books jo 1995 aur use niche ke publish huye and uska genre 'History' ho -->
userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})
// console.log(userBooks);


// Book jinka edition 2010 aur uske baad ka ho to -->
userBooks = books.filter((bk) => { return bk.edition >= 2010})
// console.log(userBooks);


// chaining filters — example:
const recentFiction = books
  .filter(bk => bk.genre === "Fiction")
  .filter(bk => bk.edition >= 2010);

console.log(recentFiction);
