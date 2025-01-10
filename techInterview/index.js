//Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples
//2 of 3 and 5

const fizzbuzz = () => {
  let results = [];
  for (let i = 0; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      results.push(`${i} "fizzbuzz"`);
    } else if (i % 5 === 0) {
      results.push(`${i} "buzz"`);
    } else if (i % 3 === 0) {
      results.push(`${i} "fizz"`);
    } else {
      results.push(`${i}`);
    }
  }
  return results;
};
const fff = fizzbuzz();
console.log(fff);
// another way to answer

// const fizzBuzz = () => {
//   const results = [];
//   for (let i = 0; i <= 100; i++) {
//     let retString = "";
//     if (i % 5 === 0) retString += "fizz";
//     if (i % 3 === 0) retString += "buzz";
//     if (retString === "") retString = i;
//     results.push(retString);
//   }
//   return results;
// };

// const output = fizzBuzz();
// console.log(output);
