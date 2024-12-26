// What will the following code output? Try to determine the results without running the code.

function func() {
  return this;
}

let context = func();

console.log(context); // global object

/*
It will output undefined, since when the execution context for a function is not set explicitly then js sets the implicit execution context for the function or method call so this will set to global object 
*/

// ============================================================


// What will the following code output? Explain the difference, if any, between this output and that of problem 1.

let obj = {
  func: function() {
    return this;
  },
};

// let context = obj.func(); 

console.log(context); // { foo: Function [func]} 

/*
This code will output the obj object { foo: Function [func]} 

Sincd func is a method in obj object. We are invoking the func method on obj object. 

The difference between the problem 1 and this is that in the first problem we were invoking a function, while in this example we are invoking a method of obj object called func. 

*/

//////////////////////////////////////////////////////////////////////////////////////////


// What will the following code output?

message = 'Hello from the global scope!';

function deliverMessage() {
  console.log(this.message);
}

deliverMessage(); // Hello from the global scope 

let foo = {
  message: 'Hello from the function scope!',
};

foo.deliverMessage = deliverMessage;

foo.deliverMessage(); // Hello from the function scope! 

/*
The first function invokation will log:
Hello from the global scope! 

The second function invokation will log: 
Hello from the function scope! 


For deliverMessage function the execution context is the global object implicitly 
The execution context for deliverMessage method is set implicitly by using the foo object
*/

// ========================================================================


// Take a look at the following code snippet. Use call to invoke the add method but with foo as execution context. What will this return?

let foo = {
  a: 1,
  b: 2,
};

let bar = {
   a: 'abc',
   b: 'def',
   add: function() {
     return this.a + this.b;
   },
};


bar.add.call(foo); // 3

/*
This code will output 3 

Since we are calling the add method with the call method by using the foo object as the execution context, meaning that withtin add method we are accessing the foo's a and b properties not the bar's a and b. 
Therfore the output is 3. 

In this example call method will set the foo object as the explicity execution context for the add method. 
*/