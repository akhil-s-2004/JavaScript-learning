const marvel_heros = ["ironman", "spiderman", "captain america"]
const dc_heros = ["batman", "superman", "flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros); // this just appends the entire dc_heros list together as a single element

//using concat
// const heros = marvel_heros.concat(dc_heros)
// console.log(heros);

//using spread operator:  ...(more preferred)
const heros = [...marvel_heros, ...dc_heros]
console.log(heros);

//flattening the array: flat function
const other_array = [1,2,3,[4,5],6,[7,[8,9,0]]]
console.log(other_array);

const new_other_array = other_array.flat(Infinity) //infinty flattens it to any depth(else provide depth)
console.log(new_other_array);


// to Array
console.log(Array.isArray("Akhil"));  //returns false
console.log(Array.from("Akhil"));
console.log(Array.from({name : "akhil"}));

let score1 = 10
let score2 = 20
let score3 = 30
console.log(Array.of(score1,score2,score3));




