//Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples
//2 of 3 and 5

function fizzbuzz() {
  for (let i = 0; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log(i, "fizzbuzz");
    } else if (i % 5 === 0) {
      console.log(i, "buzz");
    } else if (i % 3 === 0) {
      console.log(i, "fizz");
    } else {
      console.log(i);
    }
  }
  return;
}
