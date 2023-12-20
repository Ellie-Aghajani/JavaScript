
// variable declaration 
let firstName = 'Ellie';
console.log(firstName);

// variables cannot:
// be a reserved keyword
// start with a number
// have a space or hyphen 

//value of a variable can change
firstName = 'Danny';
console.log(firstName);

//use const when you don't need to re-assign the value 
const username = 'elimo'; 
console.log(username);

//value types:
//string
let name = 'Mostafa';
//number
let year = 1990;
//boolean
let isMarried = true;
//undefined
let age; //if you don't initialize it
//null
let favoriteFood = null //use null when you want to clear the value


console.log(typeof year);


//reference types: Object, Array, Function 

//objects: we put multiple related variables inside it
//instead of:
//let name = 'Eli';
//let age = 32;
//declare an object with key value pairs
let person = {
    name: 'Eli',
    age: 32
}
//object literal {}
//access properties
  //dot notation
  person.name = 'John';
  console.log(person.name);
  //bracket notation
  person['name'] = 'Mary';
  console.log(person.name);

