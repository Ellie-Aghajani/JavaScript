// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object
// {a: 1 , b : 2, c: 3} returns: {1:"a", 2:"b", 3:"c"}

//obj -> obj[key]= key;
//swapped -> swapped[key] = obj[key];
const swap = (obj) => {
  const swapped = {};
  for (let key in obj) {
    swapped[key] = obj[key];
  }
  return swapped;
};
