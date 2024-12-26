/*
Instance And Static properties and methods:

Instances are individual objects of a specific type. 

for example
*/

function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.bark = function () {
    console.log('barking...')
  }
}

let dog1 = new Dog('Buddy', 5);

/*
Here we can say dog1 is an instance object of the Dog type. 


Instances properties are also ordinary properties of an instance object. Like:



*/

console.log(dog1.name) // Buddy

/*
So here the name is the instance property of the dog1 instance object. so we can't reference it using the Dog constructor. Like :
*/

Dog.name // undefined

/*
Instance Methods :

Instance methods are ordinary methods of the instacne object. They are also properties of the instance object. They don't define on the instacne itself instead they are defined on the prototype of of the instance object. So we can invoke them on each instacne object so for that reason they are called instance methods. 


As with instacne properties we can't invoke the instacne methods on the constructor. Instead we should invoke them on the instance objects. Like: 
*/

Dog.bark(); // TypeError: Dog.bark is not a function
dog1.bark(); // barking...

/*
We can invoke the bark method on the prototype property of the constructor but it won't work well always. Like: 

*/

Dog.prototype.bark(); 

/*
Static properties :

Static properties are defined and accessed directly on the constructor not on an instance or prototype object. Static properties belongs to the type itself (Dog) 


Static methods :

Static methods are also properties the are defined and accessed directly on the constructor not on an instacne or prototype.

Like: 
*/

Dog.showSpecies = function() {
  console.log(`Dogs belong to the species ${Dog.species}`);
};

Dog.showSpecies();