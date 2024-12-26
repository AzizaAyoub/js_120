
/*
Higher Order Functions:

What a higher order function is? 

A higher order function is a function that have at least one of the following properties:

  - it takes a function as an argument 
  - it returns a function 


Explain the function that takes other function as argument and provide an example? 

It is a function that takes another function as argument like the array built-in methods, map, forEach, reduce and so on... 
They take other functions as argument called callback function, and performs an operation based on the callback. 

*/

let array = [1, 2, 3, 4, 5];

let sumArr = array.map(num => num + num);
console.log(sumArr); // [2, 4, 6, 8, 10]

/*
Explain the function that returns other functions, and provide an example? 

It is a function that returns another function and we can call it function factory, it creates a new function based on the values that we are passing to the function as arguments and then return the new function. 
*/

function greeting(hey) {
  if (hey === 'Hello') {
    return function sayHello() {
      console.log(hey)
    };
  } else if (hey === 'Hi') {
    return function sayHi() {
      console.log(hey);
    };
  } else {
    return function sayGreeting() {
      console.log(hey);
    }
  }
}

let sayHi = greeting('Hi');
sayHi(); // Hi
sayHi(); // Hi

let sayHello = greeting('Hello'); 
sayHello(); // Hello
sayHello(); // Hello

/*
What is the befintes of the higher order functions? 

The befintes of the higher function is that it lets programmer use powerfull and flexible abstractions 
*/