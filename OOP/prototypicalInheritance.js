
function Shape() {}
function Circle() {}

// Prototypical inheritance 
Circle.prototype = Object.create(Shape.prototype);//this is to inherit the shape properties
Circle.prototype.constructor = Circle; //this is to reset constructor, not to create shape instead of a circle

function Rectangle(color) {
    // To call the super constructor 
    Shape.call(this, color);
}

// Method overriding 
Shape.prototype.draw = function() {}
Circle.prototype.draw = function() {
    // Call the base implementation 
    Shape.prototype.draw.call(this);

    // Do additional stuff here 
}

// Don't create large inheritance hierarchies. 
// One level of inheritance is fine. 

// Use mixins to combine multiple objects 
// and implement composition in JavaScript. 
const canEat = { 
    eat: function() {}
};

const canWalk = {
    walk: function() {}
};

function mixin(target, ...sources) {
    // Copies all the properties from all the source objects 
    // to the target object. 
    Object.assign(target, ...sources);
}

function Person() {}

mixin(Person.prototype, canEat, canWalk);