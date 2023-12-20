//Basic if...else structure:
if (condition) {
    statement
}
else if (anotherCondition) {
    statement
}
else if (yetAnotherCondition){
    statement
}
else statement




//Hour
// If hour is between 9am and 5pm: Time to work!
// If it is between 5pm and 10pm: Have fun!
// Otherwise: Good night!

function hour(time){
    if (9< time <17){
        return "Time to work!";
    } else if (17< time< 22){
        return "Have fun!";
    }
    return "Good night!"
}
let whatToDo = hour(20);
console.log(whatToDo);