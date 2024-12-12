//write a function to return Even nums
function evenNums (array){
    return array.filter(number => (number % 2 === 0));
};
const array = [1, 2, 3, 4, 5, 6];
const result = evenNums(array);
console.log(result);