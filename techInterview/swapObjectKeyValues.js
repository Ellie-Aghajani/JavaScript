// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object
// {a: 1 , b : 2, c: 3} returns: {1:"a", 2:"b", 3:"c"}

//obj -> key : obj[key]
//swapped -> key : swapped[key]

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
