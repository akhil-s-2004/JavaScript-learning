const score =10
console.log(score);


const balance = new Number(100)
console.log(balance);

const bal = 123.4567

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // decimal value precision
console.log(bal.toPrecision(6)); // precision upto given attribute(rounds of)

const otherNumber = 20000000000
console.log(otherNumber.toLocaleString('EN-IN'));

console.log(Number.EPSILON); //Number. - check other props

//_______________MATH___________

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));


//Math.random()  gives value betwwen 0 and 1

console.log(Math.random());

//to get random value between two limits
const min = 5;
const max =45;

console.log(Math.floor((Math.random()*(max-min+1))+min));
//Math.floor to get the value without fraction
//Math.random()* (max-min+1) :  +1 if random gives 0.00... so at least to ensure that the minimum number is 1 and 
// (max-min) +min ensures that the numbers stays between the limits








