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

const swappedObj = (obj) => {
  const swapped = {};
  //loop to swap
  for (let key in obj) {
    swapped[Number(obj[key])] = key;
  }
  return swapped;
};

const obj = { a: 1, b: 2, c: 3 };
console.log(swappedObj(obj));
