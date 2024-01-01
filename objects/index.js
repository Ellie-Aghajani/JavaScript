//access properties and functions of an object

const circle = {
    radius: 1,
    location: {
        X: 1,
        y: 1
    },
    isVisible: true,
    draw: function () {
    console. log ('draw');
    }
}

circle.draw(); //method

//factory function: produces objects
function createCircle (radius) {
    return {
        //radius = radius
        radius,
        //function draw (){}
        draw() {
            console. log ('draw');
        }
    };
}
   
    const circle1 = createCircle (1) ;
    console.log(circle1);
    
    const circle2 = createCircle(2);
    console.log(circle2);

//constructor function

function CreateCircle  (radius){
    this.radius = radius,
    this.draw = function (){
        console.log('draw');
    }
}
const circle3 = new CreateCircle(1);
console.log(circle);

//factory functions: we call a function 
//which returns a new object, 
//constructor functions: instead of returning object
//use 'this' keyword

//adding or deleting object properties
const square = {
    side: 1
};

square.color = 'red';
square.draw = function(){
    console.log('draw');
};

delete square.color;
delete square.draw;

console.log(square);
//can not re-assign an obj, but can add or remove properties
