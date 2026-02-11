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
console.log(email.substring(2,6)); //cannot use negative value as start value


