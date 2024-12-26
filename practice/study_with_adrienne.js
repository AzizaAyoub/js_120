/*
Constructors: 

*/

// function Person(name) {
//   this.name = name;
// }

// let john = new Person('John'); // 
// console.log(john); // {name: John}
// console.log(john.name) // John

// Person.prototype
// /*
// new keyword :

//   - It creates an empty object 
//   - it sets the prototype of newly created object to the prototype of the Person constructor
//   - It bound the value of this to the new created object
//   - It invokes the constructor function and intialize the properties
//   - It returns the new created object (even if we don't return it explicitly)

// */

// function Cat(name) {
//   this.name = name;
// }

// let cat1 = new Cat('Leo'); 
// console.log(cat1.name); // Leo

// console.log(john instanceof Person); // true 
// console.log(john instanceof Cat); // false

// function createCar(make, model, year) {
//   return {
//     make, 
//     model, 
//     year, 

//     drive() {
//       console.log('Driving...'); 
//     },
//   }
// } 

// let corolla = createCar('Toyota', 'Corolla', 2016);
// let leaf = createCar('Nissan', 'LEAF', 2018);

// console.log(corolla); // 
// console.log(corolla instanceof createCar); // false 

// /*

// Who can be a constructor? 


// */


// let Car = (make, model, year) => {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }

// let car = new Car(); // TypeError: Car is not a constructor


// let foo = {
//   Car: function(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
// };

// /*
// When we invoke a constructor with the new keyword and the constructor function return a value explicitly if the value is a primitive so the function will return the new created object. 

// */

// let car1 = new foo.Car('Toyota', 'Camry', 2019);
// car1.make; //=> 'Toyota'

// function Cat(name, breed, weight) {
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;

//   return 'a cat';
// }

// let fluffy = new Cat('fluffy', 'Persian', 15); // 
// fluffy.weight; // 15

//////////////////////////////////////


// function Cat(name, breed, weight) {
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;

//   return { foo: 1 };
// }

// let fluffy = new Cat('fluffy', 'Persian', 15);
// console.log(fluffy);// { foo: 1 }
// console.log(fluffy.weight); // undefined
// console.log(fluffy.foo); // 1


// function Car(make, model, year, color, passengers, convertible, mileage) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.color = color;
//   this.passengers = passengers;
//   this.convertible = convertible;
//   this.mileage = mileage;
//   this.started = false;

//   this.drive = function() {
//     this.started = true;
//   };

//   // rest of the methods
// }

//////////////////////////////

function Car(args) {
  Object.assign(this, args);

  this.drive = function() {
    this.started = true;
  };

  // rest of methods
}

let civicArgs = {
  make: 'Honda',
  model: 'Civic',
  year: 2016,
  color: 'black',
  passengers: 5,
  convertible: false,
  mileage: 16000
}

let civic = new Car(civicArgs);
console.log(civic);
console.log(civic.color); // 'black'
console.log(civic.model); // Civic


/*

Determining the type of an object: 


*/


function Person(name) {  
  this.name = name;  
}  

const john = new Person('John');  

// Accessing the constructor property  
console.log(john.constructor); // Output: [Function: Person]  
console.log(john.constructor === Person); // Output: true


/*


*/

/*
Global object is an object that js engine will create this object when it runs the code. 

global 
window 

*/

function showMe() {
  console.log(this);
}

showMe(); // execution context is the global object 


//////////////////////////////////////
let obj = {
  name: 'Aziza', 

  talk() {
    console.log('Talking...');
  }
}

obj.talk(); // execution context is the obj object 

/*
for functions the execution is always global object since we are invoking them as a stand-alone function. 

for methods the execution context is the object which we used to invoke the method. 

*/ 


////////////////////////////////////////////////////////////////////////////////////////////////


/*
Prototypes :

How an object can iherite properties and methods from another existing object is prototype.

*/


function Person(name) {  
  this.name = name;  
}  

Person.prototype.sayHello = function() {  
  console.log(`Hello, my name is ${this.name}`);  
};  

// const alice = new Person('Alice');  
// alice.sayHello(); // Output: Hello, my name is Alice

// let john = new Person('John'); 

// john.sayHello(); 

// ////////////////////////////////////

// // Adding properties:

// Person.prototype.species = 'Homo sapiens';  

// console.log(alice.species); // Output: Homo sapiens

/*
Object.create()

Object.create it take an object as argument and returns an object which inherite properties from the given object. 

*/

// let obj = {
//   name: 'Aziza',
//   age: 21, 
// }

let obj1 = Object.create(obj); 
console.log(obj1); // {}


console.log(obj1.name); 

// obj is the prototype of obj1 
// obj1 is the inheriting object 

/*
Object.getPrototypeOf(obj)

It takes an object as argument and returns the prototype object of the given object. 


*/


console.log(Object.getPrototypeOf(obj1)); // {name: 'Aziza', age: 21}

/*
Object.setPrototypeOf(obj1, obj2) 

It takes two objects the first object is the object that we want to set the prototype of, and the second one is the object which we want to set it as the prototype.
*/

let obj2 = {
  name: 'Adrienne',
  age: 27,
}


console.log(Object.setPrototypeOf(obj1, obj2)); // {name: 'Adrienne', age: 27}

console.log(obj1.name); // 
console.log(Object.getPrototypeOf(obj1)); 

/*
hasOwnProperty 
Object.assign 
Object.keys 

*/

console.log(obj1.hasOwnProperty('name')); // false
console.log(obj.hasOwnProperty('name')); // true

console.log(Object.keys(obj));


// let a = { /// is the prototype of b 
//   foo: 1,
// };

// let b = { // b is the prototype of c // b is aslo the inheriting of a
//   bar: 2,
// };

// let c = { // c is the inheriting object of b 
//   baz: 3,
// };

// Object.setPrototypeOf(c, b);
// Object.setPrototypeOf(b, a);

// console.log(c.bar); // => 2
// console.log(c.foo); // => 1
// console.log(c.qux);

/*
c -> b.prototype -> a.protype -> object.prototype -> null 

*/

// Object.setPrototypeOf(a, null);
// console.log(a.hasOwnProperty('foo')); // 

// a.prototype.hasOwnProperty = function () {
//   return true; 
// }

// console.log(a.hasOwnProperty()); // true

let a = { /// is the prototype of b 
  foo: 1,
  talk() {
    return true;
  }
};

console.log(a.talk()); // true


/*
__proto__

[[prototype]]

*/

let xyz = Object.create(obj);

Object.prototype




// constructor functions VS class functions


/*
Factory functions:

Factory function is a simple funciton that creates and returns objects.

Advantages of Factory functions: 

  - Factory functions can return any type of objects based on the arguments which we pass to the function. 

  - We don't need to use the new keyword to invoke a factory function 

  - The syntax of the factory functions are so simple and straightforward for creating objects. 
/*
Disadvantages of Factory functions: 

  - Each object created by a factory function can have its own copy of the methods, which can lead to higher memory usage. 

  - Inheritance can be more complex or challenging with factory functions, we have to mangae manually the prototype chain but with classes there is a built in way to manage inheritance with the extends keyword. 

  - We can't use the instanceof operater to check for the type of an object 

*/

function createPerson(name, age) {  
  return {  
      name,  
      age,  
      greet() {  
          console.log(`Hello, my name is ${this.name}`);  
      }  
  };  
}  
const person1 = createPerson('Bob', 25);

const person2 = Object.create(person1);
console.log(Object.getPrototypeOf(person2)); // {name: 'Bob', age: 25 greet: [Function: greet]}


// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age; 
//   }
// }

class SuperClass {  
  constructor(name) {  
      this.name = name;  
  }  

  greet() {  
      console.log(`Hello, my name is ${this.name}`);  
  }  
}  

// console.log(typeof SuperClass);

class SubClass extends SuperClass {  
  constructor(name, age) {  
      super(name);   
      this.age = age;  
  }  

  displayAge() {  
      console.log(`I am ${this.age} years old.`);  
  }  
}  

const instance = new SubClass('Alice', 30);  
instance.greet();     // Hello, my name is Alice  
instance.displayAge(); // I am 30 years old.


/////////////////////////////////////////////////////////////////////////////


class Animal {  
  static info() {  
      console.log('Animals are living beings.');  
  }  
}  

class Cat extends Animal {  
  constructor(name) {  
      super();  
      this.name = name;  
  }  

  meow() {  
      console.log(`${this.name} says meow!`);  
  }  
}  

  
Animal.info(); // Animals are living beings.  

const kitty = new Cat('Whiskers');  
kitty.meow(); // Whiskers says meow!

////////////////////////////////////////////////////////////////////////////////////////////

/*  
One thing that I forgot to share about our topic today is that:  

When we define methods in a class, they are defined in the prototype property of the class.  
*/  

// An example with a class:  
class Cat {  
  constructor(name, age) {  
    this.name = name;   
    this.age = age;   
  }  

  eating() {   
    console.log(`${this.name} is eating...`);  
  }  
}  

/*  
In this example, the eating method is defined in the Cat.prototype property.  
*/  

let cat1 = new Cat('Leo', 2);  
console.log(cat1); // {name: 'Leo', age: 2}  
cat1.eating(); // Leo is eating...   

// An example with a factory function:  
function createCat(name, age) {  
  return {  
    name,   
    age,  

    eating() {  
      console.log(`${this.name} is eating...`);  
    }  
  };  
}  

let cat2 = createCat('Whiskers', 3);  
console.log(cat2); // {name: 'Whiskers', age: 3, eating: [Function: eating]}  

cat2.eating(); // Whiskers is eating...   

/*  
In a factory function, when we define methods, they appear directly in the instance object. This means that if we log the cat2 object, it will show an object that includes the eating method. However, with classes, methods do not appear in the instance objects; they are located in the prototype property. This does not mean that we can't use them on instance objects; we can access these methods on each instance created by the class.  
*/


/*
In js classes and constructors are two foundmental concepts for creating objects and defining thier behaviors. 

classes: 

Class is interduced in ES6 version of js. They provide more clear and structured way to create objects and handle inheritance. 

Class Advantages:

  - The first advantage of class is syntax, meaning that class syntax is so clear. 
  
  - Inheritance class make it easier to create subclasses by using the extends keyword 

  - Static methods: clases can have static methods that we can call them on the class itself rather than of a class instance 

  - Newer versions of js suports private fields which can improve data encapsulation



constructors: 

constructors are also a foundmental aspect of js for creating objects. They are reqular functions which intended to be called with the new keyword. 

constructors Advantages: 




*/