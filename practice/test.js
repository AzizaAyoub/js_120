// Object in OOP js
// properties/methods
// Property access/modification
// comact method syntax
// this keyword
// summary

let person = {
  name: "Ahmad",
  lastName: "Shinwari",
  walk () {
    return "Walking"
  },
  talk () {
    return "Speaking.."
  },
  sayHello() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

person.name; // "Ahmad"
console.log(person.walk()); // "Walking"
console.log(person.sayHello()); // 

// ====================================================================================
//----------------
// collaborator objects
// benefits
// why collaborators
// ------------------


let persons = {
  name: "Ahmad",
  lastName: "Shinwari",
  vehicles: [],

  // walk () {
  //   return "Walking"
  // },
  // talk () {
  //   return "Speaking.."
  // },
  // sayHello() {
  //   console.log(`Hello, my name is ${this.name}.`);
  // },
  // fullName() {
  //   return this.name + ' ' + this.lastName;
  // }
}

let car = {
  make: "Toyota",
  model: 2003,
  drive() {
    return `${this.make} is driving.`
  }
}

let motorsycle = {
  make: "sycle",
}

persons.vehicles.push(car, motorsycle)
persons.name; // "Ahmad"
console.log(persons.walk()); // "Walking"
console.log(persons.sayHello()); //

// =========================================================================

// Object in OOP js
// properties/methods
// Property access/modification
// comact method syntax
// this keyword
// summary
//----------------
// collaborator objects
// benefits
// why collaborators
// ------------------
// Object facotry

function createHuman(name, lastName, age) {
  return {
    name,
    lastName,
    age,
    walk () {
      return "Walking"
    },
    talk () {
      return "Speaking.."
    },
    sayHello() {
      console.log(`Hello, my name is ${this.name}.`);
    },
    fullName() {
      return this.name + ' ' + this.lastName;
    }
  };
}

let ahmad = createHuman("Ahmad", "Pashtoon", 13);
let mahmood = createHuman("Mahmood", "Shinwar", 15);
console.log(ahmad.walk());
console.log(ahmad.sayHello()); //
console.log(mahmood.sayHello()); //
console.log(ahmad.hasOwnProperty("sayHello"));  // true
console.log(mahmood.hasOwnProperty("sayHello"));  // true

// =============================================================


let obj = {}

let obj2 = Object.create(obj);

console.log(obj2.hasOwnProperty("a"));  // false
console.log(obj2.hasOwnProperty("b"));  // false
console.log(obj2.hasOwnProperty("c"));  // false
console.log("a" in obj2); // false
console.log("b" in obj2); // false



// hasOwnPropery -> checks object's own properties
// in operator -> also checks the inherited properties



console.log(Object.keys([1, 2, 3, 4])); // own enumerable keys as an array
console.log(Object.getOwnPropertyNames([1, 2, 3, 4])); // ['0', '1', '2', '3', 'length']

// ==========================================================================

// Inheritance
// - Prototypal inheritance
// - Psuedo-classical Inheritance

let parent = {
  color: "White",
  walk() {
    return 'Walking';
  },
  talk() {
    return "talking";
  },
}

let child = Object.create(parent); // {}
// child => inheriting
// parent => prototype object

// child -> parent
console.log(child.walk());
console.log(child.talk());
console.log(child.color);

// child => inheriting
// parent => prototype object

// child -> [[Prototype]]:  parent -> 

console.log(Object.setPrototypeOf(child, {a: 1})); // parent
console.log(Object.getPrototypeOf(child)); // {}

console.log(child.walk());
console.log(child.talk());
console.log(child.color);

// child => inheriting
// parent => prototype object

// child -> [[Prototype]]: parent 
// parent -> [[Prototype]]: Object.prototype
// prototypal chain: child -> parent -> Object.prototype -> null

console.log(child.hasOwnProperty("walk")); // false
console.log(parent.hasOwnProperty("walk")); // true

console.log(Object.getPrototypeOf(parent) === Object.prototype); // true


function createCat(name, color, age) {
  return {
    name,
    color,
    age,
    eat() {
      console.log(`${this.name} is eating.`);
    }
  }
}

let cat1 = createCat("flowfy", 'brown', 2);
console.log(Object.getPrototypeOf(cat1) === Object.prototype);


class Person {
  constructor(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
  }

  walk() {
    return "walking"
  }
}

// let child = new Person("ahmad", "white", 3) // {}
console.log(Object.getPrototypeOf(child) === Person.prototype);
console.log(child.constructor.name); // person

// each object has this property: [[Prototype]] => hidden
// each function has this property: prototype => unhidden

// =========================================================================


function Book(title, author, releaseYear) {
  return {
    title, 
    author, 
    releaseYear,
  }
}

console.log(Book('Neuromancer', 'William Gibson', 1984));
console.log(Book('Doomsday Book', 'Connie, Willis', 1992));


// =================================

// Iterating Over Objects with Prototypes
// The Prototype Chain
// Property Look-Up in the Prototype Chain
// Methods on Object.prototype
// Objects Without Prototypes
// Summary

// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// }

// let obj2 = Object.create(obj);
let obj3 = Object.create(obj2);
let obj4 = Object.create({});
// obj4 ---> Object.prototype ---> null

console.log(Object.getPrototypeOf(obj4)); // true

// obj ---> Object.prototype --> null

// obj2 -----> obj.prototype ---> Object.prototype --> null
// obj3 -------> obj2.prototype -----> obj.prototype ---> Object.prototype --> null


// human 
// student , teacher 
/// fifthgrade teacher

//  --> teacher --> human --- Object.prototype