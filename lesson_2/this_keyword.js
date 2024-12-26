/*
What does 'this' keyword do in js? 

The this keyword refers to the context in which the function is invoked, and its value can change depending on how the function is invoked.

How does it refer to the execution context? 

In global scope the this keyword refers to the global object which is window in browsers 


What does it refer to in the function scope? 

It refers to the global object in non-strict mode, and in the strict mode it will refert to undefined 

What does it refer to in an object? 

When a method is invoked on an object this refers to that object; 

What does it refer to in a constructor function? 

When we create a constructor function by using new keyword the this keyword refers to the newly created object 

Summary: 

The this keyword refers to the context in which a function or mehtod is invoked and changing its valu is depending on how we invoke the function or method. In the global scope this keyword always refers to the global object 
*/

function showGlobal() {
  console.log(this);
}

showGlobal(); // 

let obj = {
  name: 'Aziza',
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  }
}

obj.greet(); // Hello, Aziza

// this within a constructor 

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let person = new Person('Bob', 22); // 
console.log(person.name); // 22