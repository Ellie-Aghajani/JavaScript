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
// 1. A Set only stores unique values, making it perfect for this task.
// 2. If a character is already in the set, it's a duplicate.
const allUniq = (string) => {
  const seenCharacters = new Set();
  for (let char of string) {
    if (seenCharacters.has(char)) return false;
    seenCharacters.add(char);
  }
  return true;
};

// Question: Write a debounce function
//to limit how often a function is executed.
// Explanation:
// 1. debounce delays the execution of the function until after the specified delay.
// 2. It resets the timer on every call, so the function only runs once the calls stop.

const debounce = (callback, delay) => {
  let timer; // Timer to control execution
  return (...args) => {
    clearTimeout(timer); // Clear any existing timer
    timer = setTimeout(() => callback(...args), delay); // Set a new timer
  };
};
//consider this Object
const drivers = {
  AgF4g: {
    name: "Daniel Ricciardo",
    team: "Renault F1 Team",
    cars: ["Toyota Corolla 2018", "BMW M3", "F1"],
  },
  FfE4c: {
    name: "Lando Norris",
    team: "McLaren",
    cars: ["DB8", "CLK489", "F1"],
  },
  Df4cf: { name: "Sebastian Vettel", team: "Ferrari", cars: ["BMW M3", "F1"] },
  I4fTw: { name: "Nicholas Latifi", team: "Renault F1 Team", cars: ["F1"] },
  pT4vD: { name: "Kimi Raikkonen", team: "Alfa Romeo", cars: ["BMW M3", "F1"] },
  RaMfV: { name: "Romain Grosjean", team: "Ferrari", cars: ["Opel Cadet"] },
};
//Write a function to return an array of all the drivers names
//const driveName = obj[key].name
const showDriverName = (obj) => {
  const results = [];
  for (let key in obj) {
    const driveName = obj[key].name;
    results.push(driveName);
  }
  return results;
};

//Write a function that returns an object with the
//key being Team Name and
//the value being an array of drivers for that team

//const team = obj[key].team;
//const driveName = obj[key].name

const teamDriver = (obj) => {
  const results = {}; //results[team]: [...driverName]
  for (let key in obj) {
    const team = obj[key].team;
    const driveName = obj[key].name;
    if (!results[team]) {
      results[team] = [];
    }
    results[team].push(driveName);
  }
  return results;
};

// Question: Write a throttle function to limit how often a function can be called.

const throttle = (callback, limit) => {
  let inThrottle = false; // Flag to prevent immediate calls
  return (...args) => {
    if (!inThrottle) {
      callback(...args); // Call the function
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit); // Reset throttle after limit
    }
  };
};

// Explanation:
// 1. throttle ensures the function is executed at most once every specified interval.
// 2. Useful for events like scroll or resize to improve performance.
