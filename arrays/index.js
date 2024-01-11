//add elements to an array
let arr = [];
//start
arr.unshift(0);
//middle
arr.splice(1, 0, 1);
//end
arr.push(2);

console.log(arr);
//finding elements

const numbers = [1, 2, 3, 4];
console.log(numbers.index0f(1));
console.log(numbers.index0f('a'));
console.log(numbers.includes(1));


//find an object
const movies = [
    {id:1, name: 'a'},
    {id:1, name: 'b'},
    {id:1, name: 'c'}
]
let movie2 = movies.find(function(movie){
    return movie.name ==='b';
})
console.log(movie2);

//delete elements

const num = [1, 2, 3, 4];
4 // End
const last = num.pop() ;

// Beginning
const first = num.shift();

// Middle
num.splice (2, 2);
console. log (num);

//empty an array
let array = [1, 2, 3, 4];
let another = array;
// Solution 1
array = [];

// Solution 2
 array.length = 0;

// Solution 3
array.splice(0, array. length);

//concat and slice
const start = [1, 2, 31];
    const second = [4, 5, 61];
    
const combined = first. concat (second);

//[...first, ...second];   spread operator
  
const slice = combined.slice();
  
console. log (combined) ;
console. log (slice);

 //Iterating an Array
const numbers4 = [1, 2, 3];
    //a callback function that is passed in forEach method
numbers4.forEach(number => console.log(number));


//join

const joined = numbers.join(',');
console.log(joined);

//join and split
const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts);
const combine = parts.join('-');
console.log(combine);

//sort
const numbers5 = [2, 3, 11];
numbers.sort();
console.log(numbers);
numbers.reverse();
console.log(numbers) ;

//sorting objects in an array
const courses = [
    {id : 1, name: 'hi'},
    {id:2, name: 'hello'}
];
courses.sort(function(a, b){
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1 ;
    return 0;

});
console.log(courses);
//filter
const nums = [1, -1, -2, 2];
const filtered = nums.filter(n => n >= 0);
console.log(filtered);

// const items = filtered.map( n => '<li>'+ n + '</li>');
// const html = '<ul>' + items.join('') + '</ul>';
// console.log(html);
const items = filtered.map( n =>({ value: n}));
console.log(items);
//chaining
const numbers6 = [1, -1, 2, 3];
const item = numbers6
    .filter(n => n >= 0)
    . map(n => ({ value: n }));
console.log(items);

//
let sum = 0;
for (n in numbers6)
    sum += n;
console.log(sum);

//reduce method
const array = [1, 2, 3, 4, 5, 6];
const total =  array.reduce(
    (accumulator, currentValue) =>  accumulator+ currentValue
);
console.log(total);
//example:
const numbers = arrayFromRange (-10, -4) ;
console.log(numbers) ;
function arrayFromRange (min, max){
    let arr = [];
    for (let i = min; i <= max; i++)
        arr.push(i);
    return arr;
}
//example 2
console. log (includes(numbers, 1)) ;

function includes (array, searchElement) {
    for (let element of array)
        if (element === searchElement)
            return true;
    return false;
}
//example 3
function except (array, excluded) {
  const output = [];
    for (let element of array)
      if (!excluded.includes(element))
        output.push(element);
  return output;
};
//example 4
const array2 = [1, 1, 2, 3]

function countOccurrences (array, searchElement){
  let count = 0;
  for (let number of array2){
    if (number === searchElement)
    count += 1;
    
  }
  return count;

};

console.log(countOccurrences(array2, -1));
//example 5
let array = [1, 2, 3];

function getMax(array) {
  if( array.length === 0){
    return undefined;
  }
  let max = array[0];
  for (let i of array){
    if (array[i] > max){
      max = array[i];
    }
  }
  return max;
}
console.log(getMax(array));
//************************/
let array = [1, 2, 3];

function getMax(array) {
  let accumulator = array[0];
  array.reduce((accumulator, currentValue) => {
    // if (currentValue > accumulator) return currentValue;
    // return accumulator;
    return (currentValue > accumulator) ? currentValue : accumulator;
  })
}
console.log(getMax(array));
//*****************/
let array = [1, 2, 3, 4];

function getMax (array){
  if (array.length === 0) return undefined;
  array.reduce((a, b) => {return (a > b) ? a : b;})

}
console.log(getMax(array));

//example 6
// All the movies in 2018 with rating > 4
// Sort them by their rating
// Descending order
//return title

const movies =[
  { title: 'a', year: 2018, rating: 4.5 },
  { title: 'b', year: 2018, rating: 4.7 },
  { title: 'c', year: 2018, rating: 3 },
  { title: 'd', year: 2017, rating: 4.7 }
];

const titles = movies
  .filter(m => m.year === 2018 && m.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map(m => m.title);
console.log(titles);