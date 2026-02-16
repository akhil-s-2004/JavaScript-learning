// singleton
// Object.create

//object literals
const newSym = Symbol("newId")

const jsUser = { // stores as key value pairs
    name : "Akhil",
    "college name" : "RIT",
    //newSym : "ID1", // this does not store it as symbol but as string
    [newSym] : "ID1", // correct way of using symbol as key
    age : 18,
    employeeId : "I228",
    lastLoggedIn : ["Friday", "Monday"] ,
    isLoggedIn : false
} // be default key(name) is identifies as string

//Accessing object
console.log(jsUser.name);
console.log(jsUser.age);

console.log(jsUser["name"]); // here the key has always to be string, coz the internal representation of key is string

// console.log(jsUser.college name); // will raise an error, coz we could not access key given as string with space in between(here "college name") using . accesing because space in between
console.log(jsUser["college name"]);
console.log(jsUser[newSym]); // cannot be accessed using . accessing

// updating object values
jsUser.name = "Akhil S Nair"
console.log(jsUser);

// when we have to restrict updating an object we use Object.freeze
// Object.freeze(jsUser)

jsUser.name = "Akhil" // will not be edited
console.log(jsUser);

// for adding methods or functions in object

jsUser.greeting = function(){
    console.log(`hELLO wORLD, i am ${this.name}`); // this gives the key value of current object in use
}

console.log(jsUser.greeting());
console.log(jsUser.greeting); // returns [Function (anonymous)]

