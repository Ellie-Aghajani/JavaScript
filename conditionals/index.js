//Basic if...else structure:
// if (condition) {
//     statement
// }
// else if (anotherCondition) {
//     statement
// }
// else if (yetAnotherCondition){
//     statement
// }
// else statement




//Hour
// If hour is between 9am and 5pm: Time to work!
// If it is between 5pm and 10pm: Have fun!
// Otherwise: Good night!

function hour(time){
    if (9 <= time &&  time <= 17){
        return "Time to work!";
    } else if (17 < time && time <= 22){
        return "Have fun!";
    }
    return "Good night!";
}
let whatToDo = hour(17);
console.log(whatToDo);

//switch..case
//switch(variable){
    //case 'something to compare value of variable':
    //statement
    //break;
//}

let trafficLights = 'red' ;
switch (trafficLights){
    case 'red':
        console.log( "stop!");
        break;
    case 'yellow':
        console.log( "Slow down");
        break;
    case 'green':
        console.log( "Pass!")
        break;
    default:
        "invalid input";
}

if (trafficLights === 'red') {
    return 'stop';
}else if (trafficLights === 'yellow'){
    return 'Slow down';
}
return 'pass';

//loops
//for 
// for(initialExpression; condition; incrementExpression) {
//     statment
// }
//example:

for (let i = 0; i < 6; i++ ){
    if( i % 2 !== 0) console.log('Hello');
}
//reverse order
for (let i = 5; i >= 1; i-- ){
    if (i % 2 !== 0) console.log(i);
}
//while

let i = 0;
while( i <= 5) {
    if (i % 2 !== 0) console.log(i);
    i++;
}

//do-while
let i = 0;
do {
    if (1 % 2 !== 0) console.log(i) ;
    i++;
} while (i <= 5);
//infinite loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
while (true) {

}

let x = 0;
do {
 // x++;
} while (x < 5);
for (let i = 0; i > 5 ;);


//for...in 
//best loop for objects
const person = {
    name: 'Ellie',
    age: 33
};

for (let key in person){
    console.log(key, person[key]);
}
const colors = ['red', 'green', 'blue'];
for (let index in colors){
    console.log(index, colors[index]);
}

//for ... of
let animals = ['cat', 'dog', 'mouse'];
for(let animal in animals){
    console.log(animal);
};
//jump out of loop with break key word

//Write a function that takes two numbers and returns the maximum of the two.
function maximum(num1, num2){
    if (num1 > num2) return num1;
    return num2;
}
maximum(6,7);