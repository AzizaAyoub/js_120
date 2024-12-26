//Q1: 
//  What will the following code log to the console? Explain why it logs that value. Try to answer without running the code.


let qux = { foo: 1 };
let baz = Object.create(qux);
console.log(baz.foo + qux.foo); // 2 

/*
The above code will log 2 

On line 1 we create an object named `qux` who has one property 
on line 2 we create a new object called `baz` whose prototype is `quz` object, meaning that `baz` will inherate properties from its prototype object `qux` 

when we want to access the foo property from baz it means baz can access the propties of its prototype object 
*/

/*
we are accessing the qux.foo which qux has this property and its value is 1. than we are accessing baz.foo since baz doesn't have this property javascript will search the prototype chain for this property and finally it will find the foo property within baz's prototype object (qux), we are getting the sum 1 + 1, therefore the output is 2 

*/

// ============================

// Q1: 

// What will the following code log to the console? Explain why it logs that value. Try to answer without running the code.



// let qux = { foo: 1 };
// let baz = Object.create(qux);
// baz.foo = 2;

// console.log(baz.foo + qux.foo); // 4 


/*
This code will log 4, since we are accessing the foo property from qux after reassign its value from 1 to 2. We are reassign the foo property from the prototpye object not the inherating object. If we reassing foo from the iherating object it will doesn't mutate the prototpye object. so the final result is 4. 

Objects hold a reference to their proptype object. when the prototpye is changed in some way the modification will affect the inheriting object too. 
*/

// ==========================================================

//Q3:
// As we saw in problem 2, the following code creates a new property in the baz object instead of assigning the property in the prototype object.

// let qux = { foo: 1 };
// let baz = Object.create(qux);
// baz.foo = 2;


// Write a function that searches the prototype chain of an object for a given property and assigns it a new value. If the property does not exist in any of the prototype objects, the function should do nothing. The following code should work as shown:

function assignProperty(obj, key, value) {
  while (obj !== null) {
    if (obj.hasOwnProperty(key)) {
      obj[key] = value;
      break;
    }
    obj = Object.getPrototypeOf(obj);
  }
  console.log(obj)
}

let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

assignProperty(fooC, "bar", 2);
console.log(fooA.bar); // 2
console.log(fooC.bar); // 2

assignProperty(fooC, "qux", 3);
console.log(fooA.qux); // undefined
console.log(fooC.qux); // undefined
console.log(fooA.hasOwnProperty("qux")); // false
console.log(fooC.hasOwnProperty("qux")); // false


// =====================================================

// Q4: 
// Consider the following two loops:


for (let property in foo) {
  console.log(`${property}: ${foo[property]}`);
}


Object.keys(foo).forEach(property => {
  console.log(`${property}: ${foo[property]}`);
});

// If foo is an arbitrary object, will these loops always log the same results to the console? Explain why they do or do not. If they don't always log the same information, show an example of when the results differ.

/*
They produce the same result, since for/in loop iterate through foo object and log each property, while forEach iterate through the array of keys and it first reference to the key and then it reference `${foo[property]}` to the value of of each key and log them to the console *

they are producing the same result since we're referencing the property by using the foo object within the forEach and for/in loop *

They don't produce the same result since the for/in loop iterate through the all enumberable properties of the object, while the second loop just iterate through the object's own properties including those inside prototype chain 


*/

// They don't always produce the same results since the second loop only iterates over foo's "own" properties, but the first loop iterates over all of the object's enumerable properties, including those inside its prototype chain. For instance, assume that the following code precedes the loops:


let bar = { a: 1, b: 2 };
let foo = Object.create(bar);
foo.a = 3;
foo.c = 4;
// With this code, the first loop outputs:

// a: 3        // from foo
// c: 4        // from foo
// b: 2        // from bar
// The second loop outputs:


// a: 3        // from foo
// c: 4        // from foo


// The two loops produce the same results only when the prototype chain doesn't contain enumerable properties.

// Q5: 
// How do you create an object that doesn't have a prototype? How can you determine whether an object has a prototype?

let obj = Object.create(null);
console.log(Object.getPrototypeOf(obj)); // null 
let object1 = {foo: 1, bar: 2};
let object2 = Object.create(object1);
console.log(Object.getPrototypeOf(object1));// [Object: null prototpye] {}
console.log(Object.getPrototypeOf(object2)); // {foo: 1, bar: 2}

/*
We can create object without having prototype by using the Object.create() method by passing `null` as argument which means that assign the prototype of the object to null 

To determine wheather an object has a prototype we can use Object.getPrototypeOf(obj) method by passing our object which we want to determine the prototype of. It will return the prototype of this object.
*/