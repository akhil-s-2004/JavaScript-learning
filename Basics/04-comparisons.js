console.log( 2== 2);
// ==, !=, <, >, <=, >= are the comparison operators
/* when different datatypes are compared using comparison operators first conversion takes place*/
console.log("01" == 1);//this is not preferred as this is not a clean code
console.log("5" > 3);

console.log(null > 0); // returns false
console.log(null == 0); //returns false
console.log(null >= 0); //returns true
// this is because the comparison(<,>,<= ...) and equality(==, !=) operators work differently
// comparison operator first converts null to 0, hence >= gives true

console.log(undefined == 0); // always return false
console.log(undefined > 0); //always return false


// this type of comparisons usiong null and undefined are not preferred in production grade coding

