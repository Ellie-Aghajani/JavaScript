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
