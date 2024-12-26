/*
Class in js:

Classes is a special kind of functins which is interduced in ES6 that is a straitforward and syntactic way to create and manage objects 

How is the syntax for class? 

To define a class we use the class keyword followed by the name of the class in the PassCallCase, and within the body of the class we define a constructor function. 


What is the constructor function? 

The constructor is a splicial kind of methods that gets called when we create a new instance of the class. It initailizes the properties of the new object. 

Can we define methods in class? 

Yes you can define methods in a class that will be available to all the instance of the class. 

Can we inheritance class? 

Yes we can inherite a new classes from an existing class by using the extends keyword. 

How we can invoke the parent class's constructor? 

We can use the super() method to invoke the parent class's constructor. 

Can a class has static methods? 

Yes, a class can contain static methods but we can just invoke them on the class itself instead of the instances. 


What is inheritance in classes? 

inheritance means that we can form new class from the existing class. The new class is called subclass which can inherite properties and methods from the old class called supperclass.  


When should we use the ES6 classes? 

  - When we need inheritance 
  - When our inheritance needs are complex 
  - When we want to write readable oo code 
  - When our team prefer to use classes 
  - When we need many objects with methods 
  - When the types of our objects are essential to our application 
  - When our application already use classes 
  - When writing code meant for use with TypeScript
*/

// Write a class that can be used to instantiate objects that represent smartphones. Each smartphone should have a brand, model, and release year. Add methods to check the battery level and to display the smartphone's information. Create objects that represent the following 2 smartphones:

// Brand  Model  Release Year
// Apple  iPhone 12  2020
// Samsung  Galaxy S21  2021

class Smartphone {
  constructor(brand, model, releasYear) {
    this.brand = brand;
    this.model = model;
    this.releasYear = releasYear;
  }

  checkBatteryLevel() {
    return `${this.brand} ${this.model} has 75% battery remaining.`;
  };

  displayInfo() {
    return `${this.releasYear} ${this.brand} ${this.model}`;
  }
}


let iphone12 = new Smartphone('Apple', 'iPhone 12', 2020);
let galaxyS21 = new Smartphone('Samsung', 'Galaxy S21', 2021);

console.log(iphone12.checkBatteryLevel());
// Apple iPhone 12 has 75% battery remaining.

console.log(iphone12.displayInfo());
// 2020 Apple iPhone 12

console.log(galaxyS21.checkBatteryLevel());
// Samsung Galaxy S21 has 75% battery remaining.

console.log(galaxyS21.displayInfo());
// 2021 Samsung Galaxy S21

////////////////////////////////////////////////////////////

// If you have a Dog class and an object assigned to a variable named boo, how can you tell whether the object is an instance of the Dog class?

class Dog {
  constructor(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age; 
  }
}

let boo = new Dog('Boo', 'chocolate', 3);
console.log(boo instanceof Dog); // true 
// true if `boo` is a Dog, false if it is not

console.log(boo);
// Dog { name: 'Boo', color: 'chocolate', age: 3 }

///////////////////////////////////////////////////////////


// Create a class hierarchy consisting of vehicles, including cars, boats, and planes, as specific kinds of vehicles. All vehicles should be able to accelerate and decelerate. Cars should be able to honk, boats should be able to drop anchor, and planes should be able to take off and land. Test your code.

// All vehicles should have a color and weight. Cars have a license number, boats have a home port, and planes have an airline name.


class Vehicle {
  constructor(color, weight) {
    this.color = color;
    this.weight = weight;
  }

  accelerate() {
    console.log("Accelerate");
  }

  decelerate() {
    console.log("Decelerate");
  }
}

class Car extends Vehicle {
  constructor(color, weight, licenseNumber) {
    super(color, weight);
    this.licenseNumber = licenseNumber;
  }

  honk() {
    console.log("Honk");
  }
}

class Boat extends Vehicle {
  constructor(color, weight, homePort) {
    super(color, weight);
    this.homePort = homePort;
  }

  dropAnchor() {
    console.log("Drop anchor");
  }
}

class Plane extends Vehicle {
  constructor(color, weight, airline) {
    super(color, weight);
    this.airline = airline;
  }

  takeOff() {
    console.log("Take off");
  }

  land() {
    console.log("Land");
  }
}

let car = new Car('red', 3300, 'BXY334');
car.accelerate();             // Accelerate
car.honk();                   // Honk
car.decelerate();             // Decelerate
console.log(car.color, car.weight, car.licenseNumber);
// red 3300 BXY334

let boat = new Boat('yellow', 12000, 'Bahamas');
boat.accelerate();            // Accelerate
boat.decelerate();            // Decelerate
boat.dropAnchor();            // Drop anchor
console.log(boat.color, boat.weight, boat.homePort);
// yellow 12000 Bahamas

let plane = new Plane('blue', 83000, 'Southwest');
plane.accelerate();           // Accelerate
plane.takeOff();              // Take off
plane.land();                 // Land
plane.decelerate();           // Decelerate
console.log(plane.color, plane.weight, plane.airline);
// blue 83000 Southwest

////////////////////////////////////////////////////////////

// Using the solution to the previous exercise, demonstrate that cars and boats are both instance objects of the Vehicle class, that cars are instance objects of the Car class, but boats are not instance objects of the Car class.

console.log(car instanceof Vehicle); // true
console.log(boat instanceof Vehicle); // true
console.log(car instanceof Car); // true
console.log(boat instanceof Car); // false