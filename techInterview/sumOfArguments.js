//return sum of the arguments

// const sum = (...arguments) => {
//   return arguments.reduce((a, b) => {
//     a + b;
//   });
// };

// return the sum of items in an array

function sum(...items) {
  if (items.length === 1 && Array.isArray.items[0]) items = [...items[0]];
  return items.reduce((a, b) => {
    a + b;
  });
}
