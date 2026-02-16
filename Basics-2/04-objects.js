const user = {}
user.name = "akhil"
user.age = 18
user.isLoggedIn =  true

const regularUser = {
    email : "ak@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Akhil",
            lastname : "Nair",
            middlename : "S"
        }
    }
} //nested objects within object is possible

//console.log(regularUser.fullname.userfullname.lastname);

//concatenating objects
const obj1 = {
    1: "a" , 2: "b"
}
const obj2 = {
    3: "a" , 4: "b"
}

const obj3 = {obj1, obj2} //does not creates a concatenation, but an object with two values only
console.log(obj3);

const obj4 = Object.assign({} , obj1, obj2) //appends the objects -- {} is an optional always preferred, {} is target, remaining are sources
console.log(obj4);

const obj5 = {...obj1,...obj2} // spread operator is preferred
console.log(obj5);
 

//when data from DB is fetched we get an array of objects
users = [
    {
        id: 1,
        name : "ak"
    },
    {

    },
    {

    }
]

//Object functions

console.log(Object.keys(user)); // returns keys
console.log(Object.values(user));  // returns values
console.log(Object.entries(user));  // returns an array of arrays(key value pairs)


//destructuring of object 

const course = {
    coursename : "javascript",
    price : 999,
    courseInstructor : "hitesh"
}

//course.courseInstructor   to access course instructor

const {courseInstructor: instructor} = course // now we can just use courseInstructor to access it

console.log(instructor);
 // this is used in react

//json api in object format
//  {
//     "name" : "ak",
//     "coursename" : "js",
//     "price" : "free"
//  }
