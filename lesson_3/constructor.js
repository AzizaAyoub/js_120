/*
Constructors :

Constructors are another way of creating objects in js. There are some differenes between constructors and factory functions but the basic idea is the same they both creat objects. For naming construtors we PascalCase. When we invoke a constructor we use the new keyword. The new keyword performes 5 imprtatnt actions whe it calls the constructor: 

  - It creates a new empty object 
  - It sets the prototype propterty of the newly created object to the prototype property of the constructor function 
  - It sets or bound the value of this to the newly created object 
  - It invokes the constructor and intailize the properties
  - It returns the new created object (even if we don't explicitly return it)
*/

function Dog(name, age, color) {
  this.name = name; 
  this.age = age; 
  this.color = color; 

  this.bark = function () {
    console.log('Barking...');
  }
}


let dog = new Dog('Buddy', 4, 'White'); 
console.log(dog.bark()); // Barking... 


/*
Calling a constructor with the new keyword treats the function as constructor. 

Since fuctions that don't reutrn an explicit value it returns undefined, so constructor invoked without new keyword also return undefined. 
*/

// let dog2 = Dog('Leo', 5, '/Black'); 
// console.log(dog2); // undefined 


/*
Who Can be a Constructor:

We can invoke any js function with the new keyword except arrow functions, since arrwo functions doesn't have prototype property we can't invoke them as a constructor. 
*/


function sayHi(say) {
  console.log(say + `!`); 
}

let say = new sayHi('Hi'); 
console.log(say); // Hi! 

/*
In the above example say points to sayHi function which is an object, since we invoke the sayHi function with new keyword it return an object here. 

*/

/*
We can also invke a method with new keyword, which is  defined in an object but not using compact or concise method syntax. 
*/

let foo = {
  Car: function (make, model, year) {
    this.make = make; 
    this.model = model;
    this.year = year;
  }
}

let car1 = new foo.Car('Toyota', 'Camry', 2019);
console.log(car1.name); // Toyota 

// -======= 

// let foo = {
//   Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
// };

// new foo.Car(); //=> Uncaught TypeError: foo.Car is not a constructor



/*
Constructors With Explicit Return Values :


If we invoke the constructors with the explicit return value if function returns a primitive value, then the function will return the object that the new keyword is created. 


But other than of a primitive value if we return an object explicitly that the function will return this explicit object instead of the object that is newly creatd by new keyword. 

Supplying Constructor Arguments with Plain Objects :


We a constructor function need more arguments then it would hard to use the function instead we can pass an object as the argument to the function for simplicity. 

Determining an Object's Type :


We can determine the type of an object by using the instanceof operator and constructor property. 

And we can't determine the type of an arbitrary object they have the object type. 

Instead we can dertemine the type of an object which is created by a constructor function. 

Like: 
*/

console.log(dog instanceof Dog); // true


/*
The new keyword and implicit execution context :

function and method call proivde an implicit execution context. for function call the execution context is the global object, but for method the execution context is the object that is used to the method. 


We can add a constructor call with the new keyword as a third way to proivde the implicit execution context. When you invoke the constructor function with the new keyword the implicit execution context is the new object

*/