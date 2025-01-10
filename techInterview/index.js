//Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples
//2 of 3 and 5

// function fizzbuzz(n) {
//   for (let i = 0; i <= 100; i++) {
//     if (n % 5 === 0 && n % 3 === 0) {
//       console.log(n, "fizzbuzz");
//     } else if (n % 5 === 0) {
//       console.log(n, "buzz");
//     } else if (n % 3 === 0) {
//       console.log(n, "fizz");
//     } else {
//       console.log(n);
//     }
//   }
//   return;
// }

// another way to answer

const fizzBuzz = () => {
  for (let i = 0; i <= 100; i++) {
    let retString = "";
    if (n % 5 === 0) retString += "fizz";
    if (n % 3 === 0) retString += "buzz";
    if (n % 3 !== 0 || n % 5 === 0) retString += i;
  }
  console.log(retString);
};

console.log(fizzBuzz());
// console.log(fizzbuzz());
