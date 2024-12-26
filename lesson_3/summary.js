/*
Summary :

Factory functions create and return new objects. Factory functions have two significant downside: 

  - When objects are created by a factory function there is no way to check for the type of that objects. 

  - When objects are created by a factory function, each object has its own copy of methods and properties it will take more memory or space in devices. 


Constructor functions: 

Constructor functions are also used to create new objects, when we invoke a Constructor we use the new keyword 

  - create new object 
  - set the prototype property of the new object to the Constructor prototype property
  - sets this keyword to the new object
  - invoke the Constructor and initialize properties 
  - returns the new object unless we return an explicit object 
  
  

Every function that is not an arrow function has a prototype property which points to an object that contains the constructor property, the constructor property points back to the function itself.


If a function is used as a constructor the returned object's [[prototype]] property will reference to the constructor prototype property. That help us to create properties on the prototype property and each object which is created by that constructor can share them. 


Pseudo-classical Object Creation Pattern:

is a way to create new objects using the a constructor function and to set the prototype properties. In this pattern we have different type of objects like classes and a class can inherite properties and methods from another class. 
*/