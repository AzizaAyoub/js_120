/*

How we can determine the explicit execution context for a function or method call? 

We can determine the explicit execution context for a method or function call by using teh call and apply methods


How does call method work in js? 

Each function has a call method which provides the explicit execution context for the method call. 

How can we invoke the call method? 

It invokes on the object and pass as many arguments as we want


How does apply method work in js? 

The apply method works similar to the call method with one deffirence, that it takes an array to pass the arguments to the function. 

How can we invoke the apply method on the object and pass the an array as argument 

We can also do the same this with call method by using the spread syntax

Regular function calls use the global object as their execution context and methods use the calling object as their execution context. 


*/