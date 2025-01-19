// Question1: Write a function to transform an array of numbers by doubling each value.
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

//Question2: swapp key values in an object
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

//Question3: return the sum of arguments
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

//Question4:  Use `filter` to Remove Odd Numbers**
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

//Question5:  Use `reduce` to Calculate the Sum of an Array**
// Question: Write a function to calculate the sum of an array of numbers.
// Explanation for reduce():
// 1. The first argument is the accumulator (sum), and the second is the current element.
// 2. reduce() iterates over the array, applying the function to each element.
const sumOfArray = (array) => {
  if (array.length === 0) return 0;
  return array.reduce((a, b) => a + b);
};

const sumOfArrayLoop = (array) => {
  if (array.length === 0) return 0;
  let total = 0;
  for (let number of array) {
    total += number;
  }
  return total;
};

const sumOfArrayIndex = (array) => {
  if (array.length === 0) return 0;
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};

// **Deep Clone an Object**
// Question: Write a function to deep clone an object.
// Convert the object to a JSON string and then parse it back
const deepCloneObject = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

//shalow clone an object
const shallowCloneObj = (obj) => {
  return { ...obj };
};

// Iterate Over an Object**
// Question: Write a function to iterate over an object and log its keys and values.
// Explanation:
// 1. for...in iterates over all enumerable properties of the object.
// 2. hasOwnProperty ensures inherited properties are skipped.
const logKeyValues = (obj) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`Key: ${key}, Value: ${obj[key]}`);
    }
  }
};

//Object.entries(obj) returns an array of [key, value] pairs.
//now that you have an array, use forEach on it and destructure these pairs in the .forEach() callback.
const showKeyValues = (obj) => {
  Object.entries(obj).forEach((key, value) => {
    console.log(`Key: ${key}, Value: ${value}`);
  });
};
//Destructuring is a feature in JavaScript that allows you to unpack values from arrays or properties from objects into separate variables. When used with .forEach(), destructuring can make it easier to access key-value pairs or individual elements.

//Example: Destructuring in Arrays
const fruits = [
  ["apple", "red"],
  ["banana", "yellow"],
  ["grape", "purple"],
];

fruits.forEach(([name, color]) => {
  console.log(`Fruit: ${name}, Color: ${color}`);
});
//[name, color] destructures the elements of each sub-array into two variables: name and color.
//Destructuring with .forEach() and Objects

//Implement a Custom `forEach`**
// Question: Write a custom implementation of Array.prototype.forEach.

Array.prototype.myForEach = function (callback) {
  // Iterate over the array
  for (let i = 0; i < this.length; i++) {
    // Call the callback with the current element, index, and array
    callback(this[i], i, this);
  }
};

// Example Usage:
[1, 2, 3].myForEach((value, index) =>
  console.log(`Index: ${index}, Value: ${value}`)
);

// Explanation:
// 1. The callback function receives the current element, index, and array as arguments.
// 2. myForEach works similarly to the built-in forEach method.

// Implement a Custom `map`**
// Question: Write a custom implementation of Array.prototype.map.
// Explanation:
// 1. myMap iterates over the array and applies the callback to each element.
// 2. It returns a new array with the transformed elements, just like the built-in map.
Array.prototype.myMap = function (callback) {
  const results = [];
  for (let i = 0; i < this.length; i++) {
    const transformed = callback(this[i], i, this);
    results.push(transformed);
  }
  return results;
};

// Closure Example**
// Question: Write a function that demonstrates closure by maintaining a private variable.
// Explanation:
// 1. Closure allows the inner functions to access the outer function's variables.
// 2. count is private to createCounter but accessible through the returned methods.
const closure = () => {
  let count = 0;

  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
  };
};

//Check if a String Contains Only Unique Characters**
// Question: Write a function to check if a string has all unique characters.

const hasUniqueCharacters = (inputString) => {
  const seenCharacters = new Set(); // Use a Set to store characters
  for (let char of inputString) {
    if (seenCharacters.has(char)) return false; // Duplicate found
    seenCharacters.add(char); // Add character to the set
  }
  return true; // No duplicates
};

// Example Usage:
console.log(hasUniqueCharacters("abcde")); // Output: true
console.log(hasUniqueCharacters("hello")); // Output: false

// Explanation:
// 1. A Set only stores unique values, making it perfect for this task.
// 2. If a character is already in the set, it's a duplicate.
