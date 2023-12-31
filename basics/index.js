
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

//use array to store a list
//position of elements in array : index
//index starts at 0
let scores = [];
scores[0] = 20;
scores[1] = 18;
scores[2] = 17;

console.log(scores);

//typeof array is object
//can access its properties with dot notation
console.log(scores.length);

//funtions: a set of statements that perform a task or calculates a value
function nameOfFunction(parameters){
    //body of the function
}
//call the function
nameOfFunction();

function area (width, height){
    console.log(width * height);
} 
area(5, 6);