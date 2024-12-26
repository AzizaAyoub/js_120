/*
Functions in JS


What does firs-class-functions mean? 

first class functions means that we can treat functions as any other javascript value, meaning that we can pass them as argument to other functions, return them from other functions, assign them to varialbles 

What is function declaration in js? 

function declaration is a kind of functions which uses the function keyword, when we declare function we use function keyword followed by a pair of paranthesis and curly braces

what is the advantage of function-declaration 

the advantage of the function-declaration is that we can invoke them before declaration, since javascript engine effectivly moves the function declaration to the top of the program or to the top of the function in which they'rs nested

for example:
*/
console.log(sayHi('Hi!'));

function sayHi(str) {
  return `${str}`;
}


/*
What is function expression in js? 

function expression is another kind of functions defination, which we assign them variables and after = sign we use the function keyword, and also we can define function expression without giving them a name, such functions are called anonymous functions 


for example
*/

// let sayHello = function(arg) {
//   return `${arg}`;
// }

// console.log(sayHello('Hello!'));

/*
what is arrow function in js? 

arrow function is another kind of function defination, it uses arrow notation to define functions, in arrow also we don't name function they are anonymous functions and we assign them to variables 

what are the advantages of arrow function? 

- the advantage of arrow function is that if we have one line expression we can do it in one line without using curly braces, meaning that the expression will return implicity, but if we have multiple expressions we need to use explicit return statement.

- if we have one param we can use it without paranthesis 
- if our function needs more then one param we should use paranthesis 
- if the function doesn't have param we should also use paranthesis

for example:
*/

let greeting = arg => arg;
console.log(greeting('H! there!'));

let greeter = (str1, str2) => {
  let string = str1 + str2;
  return string;
}

console.log(greeter('Hello', ' World'));

/*
How can we determine the type of a function? 

To determine the type of a function we can use the handy typeof operator
*/


/////////////////////////////////////////////////////////////////////////////////////////////
