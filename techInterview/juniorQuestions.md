1. **Array Methods**: `map`, `filter`, `reduce`, `forEach`, etc.
2. **Objects**: Key manipulation, deep cloning, merging.
3. **Strings**: Common operations.
4. **DOM Manipulation**.
5. **Asynchronous JavaScript**: Promises, `async/await`.
6. **General Concepts**: Closures, scope, prototypes, etc.
7. **Algorithms**: Common patterns like two-pointer, recursion, etc.

---

### **1. Use `map` to Transform an Array**

```javascript
// Question: Write a function to transform an array of numbers by doubling each value.

// Solution 1: Using map()
const doubleNumbersWithMap = (numbersArray) => {
  // map() applies a callback to each element and returns a new array
  return numbersArray.map((number) => number * 2);
};

// Solution 2: Using a loop
const doubleNumbersWithLoop = (numbersArray) => {
  const doubledArray = [];
  for (let number of numbersArray) {
    doubledArray.push(number * 2); // Multiply each number by 2
  }
  return doubledArray;
};

// Example Usage:
console.log(doubleNumbersWithMap([1, 2, 3])); // Output: [2, 4, 6]
console.log(doubleNumbersWithLoop([1, 2, 3])); // Output: [2, 4, 6]

// Explanation for map():
// 1. map() iterates over the array and applies the provided callback to each element.
// 2. It returns a new array without modifying the original array.
```

---

### **2. Use `filter` to Remove Odd Numbers**

```javascript
// Question: Write a function to filter out odd numbers from an array.

// Solution 1: Using filter()
const removeOddNumbersWithFilter = (numbersArray) => {
  // filter() creates a new array with elements that pass the condition
  return numbersArray.filter((number) => number % 2 === 0);
};

// Solution 2: Using a loop
const removeOddNumbersWithLoop = (numbersArray) => {
  const evenNumbers = [];
  for (let number of numbersArray) {
    if (number % 2 === 0) {
      evenNumbers.push(number); // Add even numbers to the result
    }
  }
  return evenNumbers;
};

// Example Usage:
console.log(removeOddNumbersWithFilter([1, 2, 3, 4])); // Output: [2, 4]
console.log(removeOddNumbersWithLoop([1, 2, 3, 4])); // Output: [2, 4]

// Explanation for filter():
// 1. filter() keeps elements that satisfy the condition (even numbers here).
// 2. It doesn't modify the original array and returns a new one.
```

---

### **3. Use `reduce` to Calculate the Sum of an Array**

```javascript
// Question: Write a function to calculate the sum of an array of numbers.

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
```

---

### **4. Deep Clone an Object**

```javascript
// Question: Write a function to deep clone an object.

// Solution 1: Using JSON methods
const deepCloneWithJSON = (inputObject) => {
  // Convert the object to a JSON string and then parse it back
  return JSON.parse(JSON.stringify(inputObject));
};

// Solution 2: Using recursion
const deepCloneWithRecursion = (inputObject) => {
  if (typeof inputObject !== "object" || inputObject === null) {
    return inputObject; // Return the value if it's not an object
  }

  const clone = Array.isArray(inputObject) ? [] : {}; // Create a new array or object

  for (let key in inputObject) {
    if (inputObject.hasOwnProperty(key)) {
      // Recursively clone each property
      clone[key] = deepCloneWithRecursion(inputObject[key]);
    }
  }

  return clone;
};

// Example Usage:
const originalObject = { a: 1, b: { c: 2 } };
const clonedObject = deepCloneWithRecursion(originalObject);
clonedObject.b.c = 42; // Modify the clone
console.log(originalObject.b.c); // Output: 2 (original remains unchanged)

// Explanation:
// 1. JSON method is simpler but doesn't handle functions or special objects like Dates.
// 2. Recursion handles all types but requires more coding effort.
```

---

### **5. Iterate Over an Object**

```javascript
// Question: Write a function to iterate over an object and log its keys and values.

const logObjectKeysAndValues = (inputObject) => {
  // Use for...in to loop through object properties
  for (let key in inputObject) {
    if (inputObject.hasOwnProperty(key)) {
      console.log(`Key: ${key}, Value: ${inputObject[key]}`);
    }
  }
};

// Example Usage:
logObjectKeysAndValues({ name: "Ellie", age: 25 });

// Explanation:
// 1. for...in iterates over all enumerable properties of the object.
// 2. hasOwnProperty ensures inherited properties are skipped.
```

---

### **6. Implement a Custom `forEach`**

```javascript
// Question: Write a custom implementation of Array.prototype.forEach.

Array.prototype.myForEach = function (callback) {
  // Iterate over the array
  for (let index = 0; index < this.length; index++) {
    // Call the callback with the current element, index, and array
    callback(this[index], index, this);
  }
};

// Example Usage:
[1, 2, 3].myForEach((value, index) =>
  console.log(`Index: ${index}, Value: ${value}`)
);

// Explanation:
// 1. The callback function receives the current element, index, and array as arguments.
// 2. myForEach works similarly to the built-in forEach method.
```

---

L

### **7. Implement a Custom `map`**

```javascript
// Question: Write a custom implementation of Array.prototype.map.

Array.prototype.myMap = function (callback) {
  const result = []; // Create an empty array to store results
  for (let index = 0; index < this.length; index++) {
    // Apply the callback to each element and push to result
    result.push(callback(this[index], index, this));
  }
  return result; // Return the transformed array
};

// Example Usage:
const numbers = [1, 2, 3];
const doubled = numbers.myMap((number) => number * 2);
console.log(doubled); // Output: [2, 4, 6]

// Explanation:
// 1. myMap iterates over the array and applies the callback to each element.
// 2. It returns a new array with the transformed elements, just like the built-in map.
```

---

### **8. Shallow Copy an Object**

```javascript
// Question: Write a function to make a shallow copy of an object.

const shallowCopy = (inputObject) => {
  // Use Object.assign() to copy properties into a new object
  return Object.assign({}, inputObject);
};

// Alternative: Using spread operator
const shallowCopyWithSpread = (inputObject) => {
  return { ...inputObject }; // Spread properties into a new object
};

// Example Usage:
const original = { a: 1, b: 2 };
const copy = shallowCopy(original);
copy.a = 42; // Modifies the copy
console.log(original.a); // Output: 1 (original remains unchanged)

// Explanation:
// 1. Shallow copy duplicates only the top-level properties.
// 2. Nested objects are still referenced, not deeply cloned.
```

---

### **9. Closure Example**

```javascript
// Question: Write a function that demonstrates closure by maintaining a private variable.

const createCounter = () => {
  let count = 0; // Private variable

  return {
    increment: () => ++count, // Increments the count
    decrement: () => --count, // Decrements the count
    getCount: () => count, // Returns the current count
  };
};

// Example Usage:
const counter = createCounter();
console.log(counter.increment()); // Output: 1
console.log(counter.getCount()); // Output: 1
console.log(counter.decrement()); // Output: 0

// Explanation:
// 1. Closure allows the inner functions to access the outer function's variables.
// 2. count is private to createCounter but accessible through the returned methods.
```

---

### **10. Check if a String Contains Only Unique Characters**

```javascript
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
```

---

### **11. Debounce a Function**

```javascript
// Question: Write a debounce function to limit how often a function is executed.

const debounce = (callback, delay) => {
  let timer; // Timer to control execution
  return (...args) => {
    clearTimeout(timer); // Clear any existing timer
    timer = setTimeout(() => callback(...args), delay); // Set a new timer
  };
};

// Example Usage:
const logMessage = debounce((message) => console.log(message), 500);
logMessage("Hello"); // Only runs if no new call is made within 500ms

// Explanation:
// 1. debounce delays the execution of the function until after the specified delay.
// 2. It resets the timer on every call, so the function only runs once the calls stop.
```

---

### **12. Throttle a Function**

```javascript
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

// Example Usage:
const logScroll = throttle(() => console.log("Scrolled!"), 1000);
window.addEventListener("scroll", logScroll);

// Explanation:
// 1. throttle ensures the function is executed at most once every specified interval.
// 2. Useful for events like scroll or resize to improve performance.
```

---

### **13. Use `Promise.all` to Handle Multiple Promises**

```javascript
// Question: Write a function to fetch data from multiple APIs simultaneously.

const fetchMultipleAPIs = async (urls) => {
  try {
    // Use Promise.all to fetch all URLs at the same time
    const responses = await Promise.all(
      urls.map((url) => fetch(url).then((res) => res.json()))
    );
    return responses; // Return an array of results
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Example Usage:
fetchMultipleAPIs([
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/users",
]).then((data) => console.log(data));

// Explanation:
// 1. Promise.all waits for all promises to resolve or rejects if any promise fails.
// 2. map() applies fetch to each URL, and responses are converted to JSON.
```

---

### **14. Create a Polyfill for `bind`**

```javascript
// Question: Write a custom implementation of Function.prototype.bind.

Function.prototype.myBind = function (context, ...args) {
  const fn = this; // Store the original function
  return function (...newArgs) {
    // Combine original and new arguments
    return fn.apply(context, [...args, ...newArgs]);
  };
};

// Example Usage:
const person = { name: "Ellie" };
function sayHello(greeting) {
  return `${greeting}, ${this.name}`;
}
const boundFunc = sayHello.myBind(person, "Hello");
console.log(boundFunc()); // Output: "Hello, Ellie"

// Explanation:
// 1. bind creates a new function with a specific context (this).
// 2. myBind mimics this by using apply() to invoke the function with the correct context.
```

---

### **15. Event Delegation**

```javascript
// Question: Write a function to handle clicks on dynamically added buttons.

const setupEventDelegation = (parentSelector, childSelector, callback) => {
  const parentElement = document.querySelector(parentSelector); // Select the parent element
  if (parentElement) {
    parentElement.addEventListener("click", (event) => {
      if (event.target.matches(childSelector)) {
        callback(event); // Call the callback if the target matches
      }
    });
  }
};

// Example Usage:
// <div id="container"><button class="btn">Click me</button></div>
setupEventDelegation("#container", ".btn", (e) =>
  console.log("Button clicked!")
);

// Explanation:
// 1. Event delegation listens on a parent element for events on child elements.
// 2. matches() checks if the clicked element matches the selector.
```

---
