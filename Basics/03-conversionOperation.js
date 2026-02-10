let age = "21abc"
console.log(typeof age); // returns datatype as string

let isAge = Number(age) // the datatype is number, but Number(N Caps) is used for conversion
console.log(typeof isAge); //returns datatype as number
// when the string is alphabetic or alphanumeric still the conversion 
// happens with the value being NaN(Not a number)
console.log(isAge);

let num = 21
let stringAge = String(num)

let isLoggedIn = 1
let isName = ""
let isLoggedIn1 = Boolean(isLoggedIn) //false is number is 0, true otherwise for all numbers
let isName1 = Boolean(isName) // false if string is empty, true otherwise

console.log(isLoggedIn1);
console.log(isName1);


let isTrue = null
let isTrue1 = Boolean(isTrue)
console.log(isTrue1);


//{String, Number, Boolean} for conversionss

/* ___________________________Operations____________________________ */

console.log(2+2);
console.log(2-2);
console.log(2/2);
console.log(2*2);

console.log(9%2);

console.log( 2 ** 3);

console.log(2 + 2 + "1"); // gives 41  first operand and operator gets the higher precedence
console.log("1" + 2 + 2); // gives 122
console.log(8+""); // default of "" is 0
 
let counter = 0
console.log(++counter );
counter ++ // first maintains the value before operation
console.log(++counter); // first adds the values
