/*
More about Classes:

Private feilds : 

Private feilds or private instance properties are the object's properties which are private to an object. 

We can't access them outside the object. if we want to access them outside of an object we can use methods to retrive the value of these private properties and then we can use these methods outside the object. 


Private Methods : 

Private methods or private instance methods are methods which are private to an object. We can define them in objects and can't access them outside the object. 

Getters and Setters : 

Getters and Setters are methods that work like ordinary properties. We can access them without parenthises and can assign them values. 

Getters are special kind of methods, we can define them in any object. To create a Getter we need to use the get keyword with the concise method syntax. when we want to access them we don't have to nor can we use parenthises of a method call. They work like ordinary properties. 


Setters are also a special kind of methods, we can define them in any object. We can define them we the set keyword setters also use the concise method syntax. when we want to access them we don't have to nor we can use parenthesis of a method call. Setters take a single argument the value we want to assign to the property. 

We can define setters and getters in any object we shouldn't use a class. 


Static Feilds and Static Methods :

Static feilds are properties that blong to the class iteself rather than of a class instance. They can be accessed directly on class without needing an object of that class. Developers use static feilds to sotre constants.


Static methods or class methods are defined on a class, rather than on instance object. They are not available from the class instance. 



Summary
In addition to the usual object properties and object methods, JavaScript classes support several additional flavors of properties and methods. All of the different types of properties and methods are known by several names:

Ordinary object properties are known by several synonymous terms: instance properties, public fields, and public class fields. Instance properties belong to a class's instance objects. By default, they are public. Any user of an object can access or update the values of those properties.

Likewise, ordinary object methods are variously known as instance methods, public methods, and public class methods. Instance methods belong to instance objects and are, by default, public. Any user of an object can call those methods.

Private fields are known by several synonymous terms: private properties, private instance properties, and private class fields. Private fields belong to a class's instance objects but are private: only the methods inside the class can access them. Private fields are named with a leading # and must be declared before they can be used.

Likewise, private methods are variously known as private instance methods and private class methods. Private methods belong to a class's instance objects but are private: they can only be called by the instance methods defined by the class. Private methods are named with a leading #.

Static fields are variously known as static properties or class properties. They are, by default, public and belong to the class, not instances of the class. You must use the class name or a reference to the class to access static fields; you can't use an instance object.

Static methods are sometimes called class methods. They are, by default, public and belong to the class, not instances of the class. You must use the class name or a reference to the class to call the method; you can't use an instance object.


*/