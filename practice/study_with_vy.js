function Computer(company, color) {
  this.company = company;
  this.color = color;
}

Computer.prototype.turnOn = function () {
  return "Turning on...";
};

let name = new Computer("Dell", "White");
let mac = new Computer("Mac", "Black");


let obj = {say() {console.log("Hii")}};
let obj5 = Object.create(obj);

console.log(obj5);
/*
1. Creates a new empty object
2. Sets the prototype property of the new object to the construct's prototype property
3. Sets the value of this to the new object
4. It invokes the constructor and sets the properties
5. It returns the new object


*/

// console.log(name instanceof Object);

// ===========================================================================


/*
            Prototype

Every object has its prototype. 

let obj = {}

access an object prototype by `_proto_ `

an object created by a function (instance of the function) will have its internal property set to the prototype of the constructior function 

*/
function Person (name){
  this.name = name; 
}

Person.prototype.speak = function(){
  console.log("Hello")
}

const vy = new Person("Vy")

console.log(vy.__proto__)

/// [[prototype]]

Object.speak(); 

//it will look through the prototype chain until it finds the method.
 /*
Hoisting
- A variable can be declared after it been used
- function declaration will always move up to the top of the program

*/


// Prototypal inheritance
// Pseudo-classical inheritance



let teacher = {
  name: "Antonina",
  teach() {
    return "Teaching";
  }
}


let student = Object.create(teacher); // [[Prototype]] -> teacher


console.log(student.teach());

// Prototypal inheritance
// Pseudo-classical inheritance

// class Teacher {
//   teach() {
//     return "Teaching";
//   }
// }

// class Student extends Teacher {}

// let student = new Student();
// console.log(student.teach());

// =========================================================

// Polymorphism through inheritance
// Polymorphism through duck-typing

class Human {
  speak() {
    console.log("Hii");
  }
}

class Computer {
  speak() {
    console.log("Hii! I am computer!");
  }
}

// ===================================================
class Animal {
  speak() {
    console.log("RAHHHHH");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow meow");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Woff Wooff");
  }
}

class Cow extends Animal {
}

let cat = new Cat();
let dog = new Dog();
let cow = new Cow();
let aman = new Human();
let dell = new Computer();

[cat, dog, cow, aman, dell].forEach(obj => obj.speak());
//================================================================================

class Game {
  play() {
    return 'Start the game!';
  }
}

class Bingo extends Game {
  rulesOfPlay() {
    // rules of play
  }

  play() {
    return "End the game";
  }
}


let bing = new Game();
console.log(bing.play());


//////////////////////////////////////////////////////

let prototype = {
  init(name, age) {
    this.name = name;
    this.age = age;
    return this;
  },
  speak() {
    console.log("Speaing");
  },

  read() {
    console.log("Reading");
  }
}


let student1 = Object.create(prototype).init("Aman", 14);
let student2 = Object.create(prototype).init("Huh", 28);


console.log(student2.name);