//arrays are written in []
//arrays does not necessarily require same type of elements
//arrays use 0 based indexing
//arrays are resizable
//arrays use shallow copy -- that is the copies made access the same reference point
//deep copy - means the copy access different reference point

const myArr = [1,2,3,4,5,"abc",[1,2,3]] //can include mixed datatypes
const myArr2 = new Array(1,2,3,4)
console.log(myArr[6]);
console.log(myArr);

//---------------------Array methods-------------------
myArr.push(6) //adds new element
myArr.pop() //pops last element
console.log(myArr);

myArr.unshift(9); //adds the element to the first, shifts all elements
myArr.shift()// pop for unshift
console.log(myArr); 

console.log(myArr.includes(5));
console.log(myArr.indexOf(5)); // returns -1 if not exists


//join
const newArray = myArr.join() //Converts to string, comma separated values
console.log(newArray);  
console.log(myArr); 

//slice and splice
//splice alters the array, remove out the sliced part from the array
//slice does not alter the array
console.log("A ",myArr); 
const myn1 = myArr.slice(1,3)  // slice gives the corresponding slice of array here [2,3] without the upper limit
console.log(myn1);
console.log("B ",myArr);
const myn2 = myArr.splice(1,3) // splice gives the slice of array with the limit included -- here [2,3,4]
console.log(myn2);
console.log("c ",myArr); 









