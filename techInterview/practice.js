// Question: Write a function to transform an array of numbers by doubling each value.
//solution 1
const transform = (array) => {
  return array.map((element) => element * 2);
};
//solution 2
const doubledArray = (array) => {
  const doubled = [];
  for (let element of array) {
    doubled.push(element * 2);
  }
  return doubled;
};

array = [1, 2, 3];
console.log(transform(array));

//swapp key values in an object
const swappedObj = (obj) => {
  const swapped = {};
  //loop to swap
  for (let key in obj) {
    swapped[obj[key]] = key;
  }
  return swapped;
};

const obj = { a: 1, b: 2, c: 3 };
console.log(swappedObj(obj));

//return the sum of arguments
//use(for..of)
const sum = (...numbers) => {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
};

console.log(sum(1, 2, 3, 4));

//use for(let i ...)
const totalNumbers = (...numbers) => {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
};

console.log(totalNumbers(1, 2, 3, 4, 5));

//2. Use `filter` to Remove Odd Numbers**
// Question: Write a function to filter out odd numbers from an array.
// Explanation for filter():
// 1. filter() keeps elements that satisfy the condition (even numbers here).
// 2. It doesn't modify the original array and returns a new one.
//use filter
const filterEven = (array) => {
  return array.filter((number) => number % 2 === 0);
};
//use loop for..of
const filterEvenNum = (array) => {
  const even = [];
  for (let number of array) {
    if (number % 2 === 0) {
      even.push(number);
    }
  }
  return even;
};
//use loop for..index
const filterEvenNums = (array) => {
  const even = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      even.push(array[i]);
    }
  }
  return even;
};

console.log(filterEvenNums([1, 2, 3, 4, 5, 6]));

// Solution 1: Using reduce()
const sumWithReduce = (numbersArray) => {
  // reduce() accumulates values by applying a function to each element
  return numbersArray.reduce((sum, currentNumber) => sum + currentNumber, 0);
};

// Solution 2: Using a loop
const sumWithLoop = (numbersArray) => {
  let totalSum = 0;
  for (let number of numbersArray) {
    totalSum += number; // Add each number to the total
  }
  return totalSum;
};

// Example Usage:
console.log(sumWithReduce([1, 2, 3, 4])); // Output: 10
console.log(sumWithLoop([1, 2, 3, 4])); // Output: 10

// Explanation for reduce():
// 1. The first argument is the accumulator (sum), and the second is the current element.
// 2. reduce() iterates over the array, applying the function to each element.

//3. Use `reduce` to Calculate the Sum of an Array**
// Question: Write a function to calculate the sum of an array of numbers.
const sumOfArray = (array) => {
  return array.reduce((a, b) => a + b);
};
