---
### **Famous JavaScript Questions**
---

#### **1. FizzBuzz**

```javascript
// Question: Print numbers from 1 to 100. For multiples of 3, print "Fizz";
// for multiples of 5, print "Buzz"; for multiples of both, print "FizzBuzz".

// Solution 1: Using if-else
const fizzBuzz = () => {
  for (let number = 1; number <= 100; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log("FizzBuzz"); // Divisible by both 3 and 5
    } else if (number % 3 === 0) {
      console.log("Fizz"); // Divisible by 3
    } else if (number % 5 === 0) {
      console.log("Buzz"); // Divisible by 5
    } else {
      console.log(number); // Not divisible by 3 or 5
    }
  }
};

// Solution 2: Using a ternary operator
const fizzBuzzTernary = () => {
  for (let number = 1; number <= 100; number++) {
    const output =
      number % 3 === 0 && number % 5 === 0
        ? "FizzBuzz"
        : number % 3 === 0
        ? "Fizz"
        : number % 5 === 0
        ? "Buzz"
        : number;
    console.log(output);
  }
};

// Example Usage:
fizzBuzz(); // First solution
fizzBuzzTernary(); // Second solution
```

---

#### **2. Find Factorial of a Number**

```javascript
// Question: Write a function to find the factorial of a number.

// Solution 1: Using recursion
const factorialRecursive = (number) => {
  // Base case: Factorial of 0 or 1 is 1
  if (number === 0 || number === 1) return 1;
  return number * factorialRecursive(number - 1); // Recursive call
};

// Solution 2: Using a loop
const factorialIterative = (number) => {
  let result = 1; // Initialize result
  for (let i = 2; i <= number; i++) {
    result *= i; // Multiply result by current number
  }
  return result;
};

// Example Usage:
console.log(factorialRecursive(5)); // Output: 120
console.log(factorialIterative(5)); // Output: 120
```

---

#### **3. Check if a Number is Prime**

```javascript
// Question: Write a function to check if a number is prime.

// Solution 1: Using a loop
const isPrimeLoop = (number) => {
  if (number <= 1) return false; // Numbers <= 1 are not prime
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false; // If divisible, not prime
  }
  return true; // If no divisors found, it's prime
};

// Solution 2: Optimized loop
const isPrimeOptimized = (number) => {
  if (number <= 1) return false; // Numbers <= 1 are not prime
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false; // Check divisors up to sqrt(number)
  }
  return true;
};

// Example Usage:
console.log(isPrimeLoop(7)); // Output: true
console.log(isPrimeOptimized(7)); // Output: true
```

---

#### **4. Find Fibonacci Sequence**

```javascript
// Question: Write a function to generate the Fibonacci sequence up to n terms.

// Solution 1: Using a loop
const fibonacciLoop = (n) => {
  const sequence = [0, 1]; // Initialize with first two terms
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]); // Add the sum of previous two terms
  }
  return sequence.slice(0, n); // Return the sequence up to n terms
};

// Solution 2: Using recursion
const fibonacciRecursive = (n) => {
  if (n === 1) return [0]; // Base case: n = 1
  if (n === 2) return [0, 1]; // Base case: n = 2
  const sequence = fibonacciRecursive(n - 1); // Get sequence up to n-1
  sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]); // Add next term
  return sequence;
};

// Example Usage:
console.log(fibonacciLoop(5)); // Output: [0, 1, 1, 2, 3]
console.log(fibonacciRecursive(5)); // Output: [0, 1, 1, 2, 3]
```

---

#### **5. Reverse Words in a Sentence**

```javascript
// Question: Write a function to reverse the words in a sentence.

// Solution 1: Using built-in methods
const reverseWordsBuiltIn = (sentence) => {
  return sentence.split(" ").reverse().join(" "); // Split into words, reverse, and join
};

// Solution 2: Using a loop
const reverseWordsLoop = (sentence) => {
  const words = sentence.split(" "); // Split into words
  const reversedWords = []; // Initialize an empty array for reversed words
  for (let i = words.length - 1; i >= 0; i--) {
    reversedWords.push(words[i]); // Push words in reverse order
  }
  return reversedWords.join(" "); // Join the reversed words into a sentence
};

// Example Usage:
console.log(reverseWordsBuiltIn("I love coding")); // Output: "coding love I"
console.log(reverseWordsLoop("I love coding")); // Output: "coding love I"
```

---

#### **6. Check if Two Strings are Anagrams**

```javascript
// Question: Write a function to check if two strings are anagrams.

// Solution 1: Using sorting
const areAnagramsSort = (str1, str2) => {
  const sortedStr1 = str1.split("").sort().join(""); // Sort the first string
  const sortedStr2 = str2.split("").sort().join(""); // Sort the second string
  return sortedStr1 === sortedStr2; // Compare the sorted strings
};

// Solution 2: Using a frequency counter
const areAnagramsFrequency = (str1, str2) => {
  if (str1.length !== str2.length) return false; // Strings of different lengths can't be anagrams
  const frequency = {}; // Initialize a frequency counter
  for (const char of str1) {
    frequency[char] = (frequency[char] || 0) + 1; // Count characters in str1
  }
  for (const char of str2) {
    if (!frequency[char]) return false; // If a character in str2 isn't in str1, not an anagram
    frequency[char]--; // Decrease the frequency for matching characters
  }
  return true; // All characters matched
};

// Example Usage:
console.log(areAnagramsSort("listen", "silent")); // Output: true
console.log(areAnagramsFrequency("listen", "silent")); // Output: true
```

---

#### **7. Find the First Non-Repeating Character in a String**

```javascript
// Question: Write a function to find the first non-repeating character in a string.

// Solution 1: Using nested loops
const firstUniqueCharNested = (inputString) => {
  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    if (inputString.indexOf(char) === inputString.lastIndexOf(char)) {
      return char; // Return the first character that doesn't repeat
    }
  }
  return null; // Return null if no unique character is found
};

// Solution 2: Using a frequency counter
const firstUniqueCharFrequency = (inputString) => {
  const charFrequency = {}; // Create a frequency counter object

  // Count the occurrences of each character
  for (const char of inputString) {
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }

  // Find the first character with a frequency of 1
  for (const char of inputString) {
    if (charFrequency[char] === 1) return char;
  }
  return null; // Return null if no unique character is found
};

// Example Usage:
console.log(firstUniqueCharNested("swiss")); // Output: "w"
console.log(firstUniqueCharFrequency("swiss")); // Output: "w"
```

---

#### **8. Find the Longest Palindromic Substring**

```javascript
// Question: Write a function to find the longest palindromic substring in a string.

// Solution: Expand Around Center
const longestPalindrome = (inputString) => {
  let start = 0,
    maxLength = 0;

  const expandFromCenter = (left, right) => {
    while (
      left >= 0 &&
      right < inputString.length &&
      inputString[left] === inputString[right]
    ) {
      const currentLength = right - left + 1;
      if (currentLength > maxLength) {
        start = left; // Update the start index
        maxLength = currentLength; // Update the maximum length
      }
      left--; // Expand left
      right++; // Expand right
    }
  };

  for (let i = 0; i < inputString.length; i++) {
    expandFromCenter(i, i); // Odd-length palindromes
    expandFromCenter(i, i + 1); // Even-length palindromes
  }

  return inputString.substring(start, start + maxLength); // Return the longest palindrome
};

// Example Usage:
console.log(longestPalindrome("babad")); // Output: "bab" or "aba"
```

---

#### **9. Find Missing Numbers in a Range**

```javascript
// Question: Write a function to find the missing numbers in an array from 1 to N.

// Solution 1: Using a loop
const findMissingNumbersLoop = (numbersArray, n) => {
  const missingNumbers = [];
  for (let i = 1; i <= n; i++) {
    if (!numbersArray.includes(i)) {
      missingNumbers.push(i); // Add missing numbers to the result
    }
  }
  return missingNumbers;
};

// Solution 2: Using arithmetic sum formula
const findMissingNumbersFormula = (numbersArray, n) => {
  const expectedSum = (n * (n + 1)) / 2; // Sum of 1 to N
  const actualSum = numbersArray.reduce((sum, number) => sum + number, 0); // Sum of array elements
  return expectedSum - actualSum; // The missing number
};

// Example Usage:
console.log(findMissingNumbersLoop([1, 3, 4], 4)); // Output: [2]
console.log(findMissingNumbersFormula([1, 2, 3], 4)); // Output: 4
```

---

#### **10. Find the Greatest Common Divisor (GCD)**

```javascript
// Question: Write a function to find the GCD of two numbers.

// Solution: Using the Euclidean Algorithm
const findGCD = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b; // Remainder becomes the new divisor
    a = temp; // Divisor becomes the new dividend
  }
  return a; // When remainder is 0, the divisor is the GCD
};

// Example Usage:
console.log(findGCD(48, 18)); // Output: 6
```

---

#### **11. Find the Power of a Number**

```javascript
// Question: Write a function to calculate the power of a number.

// Solution 1: Using recursion
const powerRecursive = (base, exponent) => {
  if (exponent === 0) return 1; // Base case: Any number to the power of 0 is 1
  return base * powerRecursive(base, exponent - 1); // Multiply base by itself
};

// Solution 2: Using a loop
const powerIterative = (base, exponent) => {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base; // Multiply base exponent times
  }
  return result;
};

// Example Usage:
console.log(powerRecursive(2, 3)); // Output: 8
console.log(powerIterative(2, 3)); // Output: 8
```

---

#### **12. Generate All Permutations of a String**

```javascript
// Question: Write a function to generate all permutations of a string.

// Solution: Using recursion
const generatePermutations = (inputString) => {
  if (inputString.length <= 1) return [inputString]; // Base case: Single character string
  const permutations = [];

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i]; // Current character
    const remaining = inputString.slice(0, i) + inputString.slice(i + 1); // Remaining characters
    for (const perm of generatePermutations(remaining)) {
      permutations.push(char + perm); // Add current character to each permutation
    }
  }
  return permutations;
};

// Example Usage:
console.log(generatePermutations("abc"));
// Output: ["abc", "acb", "bac", "bca", "cab", "cba"]
```

---
