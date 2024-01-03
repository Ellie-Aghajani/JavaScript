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

//enumerating obj properties
const circle4 = {
    radius: 1,
    draw() {
    console. log ('draw');}
}

for (let key in circle4)
console.log(key, circle4[key]);


for (let key of Object.keys(circle4))
console.log(key);


for (let entry of Object.entries(circle4))
console.log(entry);

//cloning of an object

const circle5 = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

const another = {};
for (key in circle5)
    another[key] = circle5[key];
console.log(another);

//cleaner way
const another2 = Object.assign({}, circle5);
//the simplest way to clone an object
//spread operator

const copy = { ...circle5 };
//example 1
//create address object with these properties:
// street, city, zipCode
//then create showAddress function to display all address properties with value

const address = {
    street: 'Bonaccord Drive',
    city: 'Vancouver',
    zipCode: 'V5P 2N9'
};

function showAddress(address){
    for(let key in address){
        console.log(key, address[key]);
    }
}
showAddress(address);
//example 2
//initialize an address object using factory function

// Factory Function
function createAddress(street, city, zipCode){
    return{
        street,
        city,
        zipCode
    };
}
const address1 = createAddress('a', 'b', 'c');
console.log(address1);

//Constructor Function
function CreateAddress(street, city, zipCode){
    this.street = street,
    this.city = city,
    this.zipCode = zipCode
}
const address2 = new CreateAddress('a', 'b', 'c');
console.log(address2);
const address3 = new CreateAddress('a', 'b', 'c');
console.log(address2);

//example 3 
//are two addresses exactly the same? return true
function areSame(address2, address3){
    return address2 === address3;
}
function areEqual(address2, address3){
    return address2.city === address3.city && address2.street === address3.street && 
    address2.zipCode === address3.zipCode;
}

console.log(areEqual(address2, address3));
console.log(areSame(address2, address3));
