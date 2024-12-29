
// Summary
// The combination of constructors and prototypes provides a way of mimicking classical 
// inheritance with JavaScript. This lets us create sub-type objects, which can 'inherit' 
// methods from a super-type object. This is one way of facilitating code re-use.

// There's a limitation with the inheritance pattern, which is that objects can only directly 
// 'inherit' from one super-type object. In other words, an object can have only one prototype
//  object. Mixins provide a way of addressing this limitation. The mix-in pattern involves 
// creating a mix-in object containing certain methods, and using Object.assign() to mix that
//  object into another object.

// Polymorphism refers to the ability of objects with different types to respond to the same 
// method invocation. It can be implemented through inheritance of objects that all respond to 
// the same method call. It can also be implemented through duck typing; by ensuring that 
// objects of different types use the same method name to perform different but related 
// functions, those objects can be interacted with in a uniform way.
