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
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName =parts[1];
  }
}

person. fullName = 'John Smith';
console.log(person);