/*
what is prototype? 

when an object inhirate properties and methods from an existing object, the object that we inhirate properties from called prototype object 

how we can inhirate properties from an object? 

one way to do that is to use the object.create method to inhirate properties from an existing object 

what can we call the objects that inhirate properties and which inhirate properties from? 

the object that inhirating properties from another object is callled inhirating object 
the object that we inhirate properties from is called prototype object 

how does Object.create work? 

it takes an object called prototype object as argument and it retruns a new object that inherate properties and methods from the prototype object 

how will inhirating object look like? 

it will be empty object explicilty but when we want to access a property from the inhireting object we can access the property since the inhirating object inherates properties and methods from the prototype object 


how does internal [[prototype]] property work with object?  


in javascript each object has an internal [[prototype]] property. when we create an object using object.create the new object's internal property will gets assign to its prototype object 

how we can use internal property of the objects? 

it an internal property we can't access it directly in our code, but we can modify its value by using the Object functions like getProtoypeOf setPrototypeOf 

how does getProtoypeOf function work? 

it is a static method, and takes an object as argument and it returns the prototype of this object 

how does setPrototypeOf function work? 

it is a static method, and takes two objects as arguments, the first object is the object that we want to set its prototype and the second object is the object that we want to set as prototype 

what does default prototype mean? 

it means that in javascript there is a default prototype object which is a prototype object for all the objects which are created by using an object litterl, called Object.prototype 


what does prototype chain mean? 

prototype chain mean that c object can inherates properties from b and a objects 


when we reassign the value of a property will it affect the prototype object property 

no it doesn't affec the value of a prototype object property 
meaning that it doesn't mutate the prototype object 

what are some usefull object methods 

Object.prototype.toString()
Object.prototype.isPrototypeOf(obj)
Object.prototype.hasOwnProperty(prop)

what does Object.prototype.toString() do? 

it returns a string reperestan of the object 

what does Object.prototype.isPrototypeOf(obj) do? 

it determines wheather the object is part of another object's prototype chain 

what does Object.prototype.hasOwnProperty(prop) do? 

it determines wheather the object contains property



*/
let a = Object.create(null);
console.log(Object.getPrototypeOf(a)); // null