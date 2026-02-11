const name = "Akhil"
let repoCount = 25

//Another way of string creation
let email = new String("akhil@gmail.com")

console.log(name + repoCount ); // not prefereed or outdated way

console.log(`My name is ${name} and my repo count is ${repoCount}`); // using backticks is preferred: 
// this is string interpolation

//Length of string
console.log(name.length);

//Indexing
console.log(email[4]); //here string is not indexed but stored as key value pairs

//toLowerCase -- toUpperCase
console.log(name.toLowerCase());  // does not change the value(stored in heap)
console.log(email.toUpperCase());

//charAt -- indexOf   
console.log(email.charAt(3));   //returns i
console.log(email.indexOf("l")); // returns 4


//substring and slicing
//substring does not support negative indexing and when start and end are interchanged(if by mistake) it is swapped
//slicing is exact opposite, slice is more preferred
console.log(email.substring(2,6)); //cannot use negative value as start value
newString = email.slice(-7,-3);
console.log(`Sliced string is ${newString}`);

//trim : trims blank space
const word = "   Akku  "
console.log(word.trim());
console.log(word.trimStart());
console.log(word.trimEnd());

//replace and includes
const url = "www.tarento.com"
console.log(url.replace('.','@'));
console.log(url.replaceAll('.','@'));

console.log(url.includes('www@'));





