// Function Declaration
function walk() {
  console.log('walk');
}

// Named Function Expression
let run = function walk() {
  console.log('run');
};
run();

//Anonymous Function Expression
const run = function() {
  console.log('run');
}; 
//sum
function sum(){
  let total = 0;
  for (let value of arguments){
   total += value;
  }
  return total;

}
console.log(sum(1, 2, 3));


//rest operator
function sum(...args){
  return args.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3, 4, 5));


//interest rate 

function interest (principal, rate = 3.5 , years ){
  return principal * rate / 100 * years;

}
interest(800000, undefined, 15);


//getters and setters
// getters => access properties
// setters => change (mutate) them
const person = {
  firstName: 'Ellie',
  lastName : 'Aghajani',
  // fullName () {
  //   return `${this.firstName} ${this.lastName}`
  // }      this is read only 
  // to call this method: person.fullName()
  get fullName () {
    return `${this.firstName} ${this.lastName}`
  }, // call it: person.fullname
  set fullName (value) {
    if (typeof value !== 'string'){
      throw new Error('the value is not a string.');
    }
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName =parts[1];
  }
}
try{
  person.fullName = null;
}
catch(e){
  console.log(e);
}
person.fullName = 'John Smith';
console.log(person);


//Example
const address = {
  number : 1,
  street: 'Victoria', 
  city: 'Vancouver',
  set fullAddress (value){
    if (typeof value !== 'string'){
      throw new Error('input is not a valid string.')
    };
    const parts = value.split(',');
    this.number = parts[0];
    this.street = parts[1];
    this.city = parts[2]
    
  },
  get fullAddress (){
    return `${this.number}, ${this.street}, ${this.city}`
  }
}
try {
  address.fullAddress = null;
}
catch(e){
  console.log(e);
}
address.fullAddress = '2, Elliot, Vancouver';
console.log(address);



//Example 2
//error handling
const greetings = {
  firstName : 'Ellie',
  lastName: 'Aghajani',
  get greet (){
    return `Hello ${this.firstName} ${this.lastName}!`
  },
  set greet (value){
    if (typeof value !== 'string'){
      throw new Error('invalid input');
    }
    const parts = value.split(' ');
    this.firstName = parts[1];
    this.lastName = parts[2];
  }
};

try{
  greetings.greet = null;
}
catch(e){
  alert(e);
}

console.log(greetings.greet);
greetings.greet = 'Hello Z A !';
console.log(greetings.greet);

//global vs local variables

const color = 'red';//global

function display() {
  const color = 'blue';//local
  console.log(color);
}
 
//var vs. let/const
var color = 'red';
//attaches to Window object

//this keyword:
//the object that is executing the current function

//method (function inside an object) => obj
const video = {
  title : 'a',
  play (){
    console.log(this);
  }
};
//function => Window object
function playVideo (){
  console.log(this);
};
playVideo();

//call a function using the new operator:
function Video(title){
  this.title = title; //this creates an empty object{} and adds to it
  console.log(this);
}
const v = new Video('a'); 

//solve the problem of pointing this to the Window obj in a callback function:
//use the second parameter of forEach loop:

const video = {
  title : 'a',
  tags : ['a', 'b', 'c'],
  showTags(){
    this.tags.forEach((tag)=>{
      console.log(this.title, tag);
    }, this)

  }
};
video.showTags();