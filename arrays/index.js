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