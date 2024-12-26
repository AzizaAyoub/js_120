/*
Each object has an internal [[prototype]] property, which points to an object 

Object.create is used to create new instance objects from an existing object the new created object is called inheriting object and the object that inheriting object inherates properties from is called prototype object 

Object.getPrototypeOf and isPrototypeOf are used to check the prototype of an object 

Object.setPrototypeOf is used to set the prototype of an object and it takes two arguments the first object is the the object that we want to set its prototype, and the second object is the object that we want to set as prototype.
 
The value of this is the current excetion context of a method or function 

The value of this chagne based on how we invoke a function not how we define. 

JavaScript has first class function that have these characties 

  - We can add them to objects and executes them in the object's context 
  - We can pass them to other object's remove them from objects and pass them around, execute them in an entirly different context 
  - They're intially unbound but dynamically bound to a context object at the excetion time 


We can use call and apply methods to provide the explicit excetion context for a function or method call 

In other words we can use call and apply to invoke a function or method with an explicit excetion context 

The bind is used to bind a function to an explicit exection context 
In other words the bind method returns a new function that permanently binds a function to a context


Arrow functions are bound to the excetion context of the enclosing function. When defined at the top-of the program their excetion context is the global object. 
*/