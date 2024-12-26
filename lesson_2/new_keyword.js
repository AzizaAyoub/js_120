/*
The new keyword: 

What does the new keyword do? 

The new keyword is used to create the instance of the objects that are constructed by using the constructor function 

When we use the new keyword several important things happens: 

  - The new keyword creates a new empty object
  - The prototype of the new object is set to the prototype of the constructor function 
  - The value of this is bound to the new instance object 
  - the new object is returned
    - when the constructor function doesn't return the new instance object explicitly the new keyword will by default return this object 

How does the new keyword work with classes? 

The new keyword works similar with class 
*/

function Cat(name, age, color) {
  this.name = name;
  this.age = age; 
  this.color = color; 
}

let cat1 = new Cat('Leo', 2, 'White'); 

// Cat.prototype 