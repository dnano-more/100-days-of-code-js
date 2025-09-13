const name = "dnano"

let repoCount = 13

console.log(name + repoCount + " Value");  // Old declaration way. not recomended.

// String interpolation:

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);  

// You can use string methods directly.
// Example:
console.log(`Hello my name is ${name.toUpperCase()} and my repocount is ${repoCount}`);  


// String object
const gameName = new String('Battlegrounds Mobile India')
console.log(gameName.__proto__);  // {}. you can see full object in browsers developer tools.

// some string methods
console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());  // Changes not affect to original string because string is in stack memory.
console.log(gameName[0]);
console.log(gameName.charAt(4));
console.log(gameName.indexOf('l'));  // 4

const newString = gameName.substring(0, 6) // ommits last chracter.
console.log(newString);  // Battle

const anotherString = gameName.slice(0)  // Battlegrounds. You can use negative value to slice out a portion of string.
console.log(anotherString);

const trimedStrig = "      hello..!       "
console.log(`This is original string: ${trimedStrig}`);  // removes white spaces and trailing lines.
console.log(`This is trimed string: ${trimedStrig.trim()}`);  // removes white spaces and trailing lines.

const url = "https://dnano.com/dnano%20more/user%20information"

console.log(url.replace('%20', '-'))  // in this operation begining value wiil be replaced.
console.log(url.replaceAll('%20', '-'))  // all matches replaced

console.log(url.includes('dnano','user'));  // return boolean value

const str = "Battlegrounds-Mobile-India"
console.log(str.split('-'));  // finds symbol/seprator in string and seprate words and return it to an aary object.

