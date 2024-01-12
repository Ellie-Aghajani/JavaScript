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
//