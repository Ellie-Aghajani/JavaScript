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