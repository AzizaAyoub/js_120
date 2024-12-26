/*
Constructors with Prototypes :

We can create new objects with the Constructors functions as with the factor functions, so when we create new instance objects each object will have its own methods and properties. 

We can check it with the object's handufl hasOwnProperty method. 
*/
 
function Cat(name, age, color) {
  this.name = name; 
  this.age = age; 
  this.color = color;  

  this.mewo = function () {
    console.log('Meow!'); 
  }
}

let cat = new Cat('Leo', 4, 'Black'); 
let cat2 = new Cat ('fufully', 5, 'White');

console.log(cat.hasOwnProperty('mewo')); // true 
console.log(cat2.hasOwnProperty('mewo')); // true 

/*
So this is wasteful since if we have hundrens and thousand of objects which have the same methods it will take more memory and it would unhelpful with the devices with little memory. 


Method delegation to Prototypes :

Prototypes are useful to share the same methds in all of the intances objects of the same type. if an object doesn't include a method then js searches the prototype chain to find the method. 


So we can define a method in the prototype object than the inheriting object can delegate the method call to the prototype object. Meaning that we can define a method once in the prototype object then each instance object of the same type can inherite that method from the prtotype object. 

*/

let DogPrototype = {
  bark() {
    console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
  }
};

function Dog(name, breed, weight) {
  Object.setPrototypeOf(this, DogPrototype);
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  // this.bark method removed.
}


/*
In the above example we set the DogPrototype object as the prototype of the newly created object. DogPrototype object has a method called bark(), so now each instance object which is created by the Dog Constructor can inherite the bark method from its prototype object which is DogPrototype. 




The Constructor prototype Property :

The constructor functions have a prototype property that we call the function prototype which distinguish them from other prototypes used creating ordinary objects. 

When we invoke a function with new keyword js sets the prototype property of the new object to the proetotype of the constructor. 

since inheritance in js uses prototypes, so for that reason we can say the prototype of the object that is created with a constructor referecne to the prtotype property of that constructor. 


Terminalogy: 

  - If bar is an object than the object which bar inherite properties from is called "object prototype", and bar is called inheriting object 

  - The constructor prototype object is called function prototype, is the object that constructor use as the object prototype for the object it creates 
  - Or we can say each object that a constructor creates inherites from the object prototype of the constructor

  - Constructor sotres its object prototype in the prototype property, if the constructor name is Dog then Dog.proetotype reference to the constructor's prototype object
  


constructor property :

An intersting property in the prototpye object is the constructor property. 

As with the instanceof operator constructor property let us to determine the type of an object. Like: 

We can also reassign the constructor property to anything else. 

*/

Dog.prototype.constructor; // [Function: Dog]

Dog.prototype.constructor = function() {};

maxi.constructor === Dog; // false
maxi instanceof Dog;      // true


/*
Note that if we change the constructor's property value to anything else, the instanof operator still work, meaning that it will return true if the instane is a Dog type. 



Overriding the Prototype :

*/