"use strict";  // just used to ensure we are using the latest version and standards of js:-  not at all compulsory

//alert( 3+3 ) // we are using node, not browser, hence cannot run

//code readability is the most important part
console.log( 3 +
    3
)// this is not at all preferrerd

console.log(3+3); console.log("akhil"); //not at all preferred

/*
preferred one
*/
console.log(3+3)
console.log("akhil")

/*
Documentation :- 
                1. ECMA Standards :- official doc
                2. mdn :- mozilla doc
*/

let name = "Akhil"   //String
let age = 21        // Number
let isLoggedIn = true   //boolean
let rollNo = null   //standalone value
let phoneNo;    //undefined one
//symbol used for unique property, more used in react

// null does not mean it is undefined, it means that the variable is empty or has no values as of now.

console.log(typeof(rollNo))  // gives object(null is not a datatype)
console.log(typeof(phoneNo)); //gives undefined itself

//Primitive Datatypes
// 7 types: string, number, boolean, null, undefined, bigint, Symbol

let id = Symbol('123')
let anotherId = Symbol('123')

console.log(id == anotherId); // will not be same as Symbol returns unique id

//Non primitive datatypes
//3 : array, object, functions

let heros = ["spiderman", "superman", "batman"] //array

let num = {
    name : "Akhil",
    age : 20
}// object

const myFunc = function(){
    console.log("Heloo world");
    
}// function
