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
  
    const slice = combined.slice();
  
    console. log (combined) ;
    console. log (slice);