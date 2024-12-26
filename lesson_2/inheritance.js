/*
Inheritance.
let one object or class inherit properties and methods of another object or class. 
-prototypal Inheritance
  - an object can inherit directly from other object.

-class based inheritance 
 

*/

//prototypal inheritance
let animal = {
  eat(){
   console.log("Food")
  }
 };
 
 let cat = Object.create(animal)
 cat.eat()
 console.log(animal === Object.getPrototypeOf(cat)) 
 
 //class based inheritance
 class student {
   talk(){
     console.log("hello")
   }
 }
 
 class teacher extends student {
   speak(){
     console.log("Welcome")
   }
 }
 
let Vy = new teacher();
Vy.talk()
Vy.speak()
 