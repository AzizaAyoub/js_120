/*
Object Factory: 

In javascript Object Factory lets us to create multiple instance of similar objects without defining a specific type

What is an objcet factory? 

An object factory is a function that creates a and retuns a new instance object. Each time a function factory is invoked it creates a new instance object with the new properties which are passed to the function as arguments. 


We can use the compact or concise method syntax in factory functions. 


What are the advantages and disadvanges of the function factory? 

advantages: 

Object Creation: function fcatories allows programmers to create custom objects with different properties and method by passing as arguments to the function 

Simplicity: They are useful for simplicity, when inhertince is not nesseccry factory functions offers a simple way to create object 

conffusion with this: function fcatories avoid confusion with this keyword. function factories eliminate the complications related to the this keyword and execution context 

disadvanges: 

memory usage: when many objects are created by a function factory so each object will have their own copy of methods and properties so this can lead to high memory usage.

inhertince challenge: using factory functions inhertince can be more complicated and less effecient than other methods. 

lack of object type: objects created by a function factory don't have a specific type. unlike the objects created by a constructor we cant use the instanceof operator or the constructor property to detremine the type of an object.



When should we use the factory functions? 

  - When we don't need inhertince 
  - When our application already use function factories 
  - When we need a small number of objects or when we don't concerned about the memory usage
  - When you only have a few simple types
  - When a specific type of an object is unimportant to your application 
  
  
When should we avoid using factory functions? 

  - When inhertince is required
  - When we need many objects with methods 
  - When the types of our objects are essentail to our application 

Summary:

Object factories offer a functional alternative to more complex object creation approaches such as constructor functions and classes. They promote flexibility and encapsulation while avoiding common JavaScript pitfalls, such as using the this keyword. However, there may be better choices for scenarios that require extensive object-oriented designs with inheritance chains or applications where memory usage is a critical concern. Object factories are an excellent tool in specific contexts. Still, they require careful consideration to balance their benefits with their drawbacks.
*/



////////////////////////////////////////////////////////////////////////////////////////

// EXERCISES:

// #1:
// Given the following three objects, create an object factory that can eliminate the code duplication:

// let apple = {
//   name: 'Apple',
//   color: 'Red',

//   isRipe: function() {
//     return `This ${this.name} is ripe.`;
//   },

//   describe: function() {
//     return `This ${this.name} is ${this.color}.`;
//   },
// };

// let banana = {
//   name: 'Banana',
//   color: 'Yellow',

//   isRipe: function() {
//     return `This ${this.name} is ripe.`;
//   },

//   describe: function() {
//     return `This ${this.name} is ${this.color}.`;
//   },
// };

// let blackberry = {
//   name: 'Blackberry',
//   color: 'Black',

//   isRipe: function() {
//     return `This ${this.name} is ripe.`;
//   },

//   describe: function() {
//     return `This ${this.name} is ${this.color}.`;
//   },
// };


function fruit(name, color) {
  return {
    name,
    color,
    
    isRipe() {
      return `This ${this.name} is ripe`;
    },

    describe() {
      return `This ${this.name} is ${this.color}`;
    }
    
  }
}

let apple = fruit('Apple', 'Red');
let banana = fruit('Banana', 'Yellow');
let blackberry = fruit('Blackberry', 'Black');

console.log(apple.isRipe());
console.log(banana.isRipe());
console.log(blackberry.isRipe());


console.log(apple.describe());
console.log(banana.describe());
console.log(blackberry.describe());

/////////////////////////////////////////////////////////////////////////

// #2

// Write a factory function that creates objects that represent smartphones. Each smartphone should have a brand, model, and release year. Add methods to check the battery level and to display the smartphones's information. Create objects that represent the following two smartphones:

// Brand  Model  Release Year
// Apple  iPhone 12  2020
// Samsung  Galaxy S21  2021

function smartphones(brand, model, releaseYear) {
  return {
    brand, 
    model, 
    releaseYear, 

    checkBettery() {
      return `${this.brand} ${this.model} has 75% battery remaining.`;
    }, 

    displayInfo() {
      return `${this.releaseYear} ${this.brand} ${this.model}`;
    }
  }
}

let appple = smartphones('Apple', 'iPhone 12', 2020);
let samsung = smartphones('Samsung', 'Galaxy S21', 2021);


console.log(appple.checkBettery());
console.log(samsung.checkBettery());
console.log(appple.displayInfo()); 
console.log(samsung.displayInfo());


/// ////////////////////////////////////////////////////////////////////////////


// #3

// Create an object factory that returns objects representing musical instruments. Each instrument should have a name and a type. Users of these objects should be able to play the instrument and show its type. Use the factory function to create three instruments:

// A cello is a string instrument.
// A flute is a wind instrument.
// A drum is a percussion instrument.
// ExampleCopy Code

function createInstrument(name, type) {
  return {
    name, 
    type, 

    play() {
      console.log(`We are playing a tune on this ${this.name}`);
    },

    showType() {
      console.log(`This ${this.name} is a ${this.type} instrument`);
    }
  }
}

let violin = createInstrument('violin', 'string');
violin.play();     // We are playing a tune on this violin
violin.showType(); // This violin is a string instrument

let flute = createInstrument('flute', 'wind');
flute.play();      // We are playing a tune on this flute
flute.showType();  // This flute is a wind instrument

let drum = createInstrument('drum', 'percussion');
drum.play();       // We are playing a tune on this drum
drum.showType();   // This drum is a percussion instrument
