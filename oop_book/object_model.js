/*
Encapsulation: 

Encapsulation is the ability of boundling or combining the data and it behavoir into a single entity, for example an object. 



*/

let person = {
  name: 'Jhon', 
  age: 21, 

  walk: function () {
    console.log(`${this.name} is walking...`);
  }
}

person.walk();

/*
In this example the person object encapsulates the data (name and age) properties and behavoir (walk) method. 



In ES13 a concep is interduced called private fields it is about protecting access of methods and properties from outside use. 

With private fields we can define private instance variables and private instance methods. 
*/

/*
Polymorphism:

Polymorphism is the ability of using a single interface or a method in different ways

*/


let plante = {
  move () {
    console.log(`Moving...`);
  }
}

let car = {
  move () {
    console.log(`Moving...`);
  }
}

for (let element of [plante, car]) {
  console.log(element.move());
}


/*
Inheritance:

Inheritance lets an object to inherit properties (data, behavoirs) from aonther object 

Inheritance lets programmers to define small, reusable classes or objects. 


*/

class Cat{
  constructor(name, age, color) {
    this.name = name, 
    this.age = age, 
    this.color = color
  }
}

class cat1 extends Cat{

}

let cat = new cat1('leo', 2, 'black');
console.log(cat); 
console.log(cat.name); 

let cat2 = new Cat('Grass', 4, 'white'); 
console.log(cat2); // {name: Grass, age: 4, color: white}
console.log(cat2.name); // Grass

/*

To inherit a class from an existing class we can use the class keyword followed by the name of the iheriting class and the extends keyword followed by the name of existing class or super class. 

In this example Cat is a class from which the cat1 inherits properties. Cat is the super class of cat1 which is a sub class 

*/