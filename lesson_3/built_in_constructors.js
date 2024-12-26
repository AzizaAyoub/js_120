/*
Built-in constructors:

JS has some built-in constructors and prototypes, that let us to instantiat new objects. These constructors work like other constructors they invoke with the new keyword to create objects. 



The Array constructor :

The array constructor let us to create new arrays in js. If we don't pass any argument to the Array constructor it will return an empty array, but if we pass argument(s) to the constructor it will append it to the array one by one, and return an array of elements. 

If we pass a single argument to the Array constructor it will create an array of empty slot as the argument. We can't pass non-integer and negative number as the single argument to the constructor. 



*/
let numbers = new Array(1, 2, 3, 4)
console.log(numbers);
// [ 1, 2, 3, 4 ]

let colors = new Array('green', 'blue', 'yellow')
console.log(colors);
// [ 'green', 'blue', 'yellow' ]
//////////////////////////////

new Array(3)
// [ <3 empty items> ]

//////////////////////////////////


new Array(3.1415)
// RangeError: Invalid array length

new Array(-5)
// RangeError: Invalid array length

/*
We can invoke the array fill method on the array returned by Array constructor. it takes any value as an argument and fills the array from that value. and returns the new array. 
*/

(new Array(3)).fill('*')
// [ '*', '*', '*' ]


/*
With Array constructor we can omit the new keyword when invoking the constructor. 

*/

Array(1, 2, 3)
// [1, 2, 3]


/*
Array.prototype :

As with most js functions Array constructor also has a prototype property. All arrays inherite from that object refrenced by that property. Meaning that every array can inherite methods and properties from the array prototype property, each array can use the methods which are defined in the Array.prototype property, like forEach, map, includes.... so on.

*/

let number = [1, 2, 3]
Object.getPrototypeOf(number) === Array.prototype
// true

///////////////////////////////////> 

number.map(number => number * number);
// [ 1, 4, 9 ]

number.includes(3)
// true


/*
Static array Methods :

As with instance methods js has some static methods that we can invoke them on the Array constructor not on the array instances which are created with this constructor 

Array.isArray() :

The array static method Array.isArray() takes an one argument and return true if the argument an array object, otherwise false.


The typeof operator returns unexpected and somewhat useless value when used with array. It returns 'object' when we determine the type of an array, so for that reason we need Array.isArray method to distinguish between arrays and other objects.
*/

Array.isArray([])
// true

Array.isArray({})
// false

Array.isArray(5)
// false


/*
Array.from() :

Array.from is used to convert an object to an array. it takes an object as the argument and return an array of the properties of the given object. 

*/

Array.from({0: 'a', 1: 'b', 2: 'c', length: 3})
// ['a', 'b', 'c']


let arrayFrom = obj => {
  let len = obj.length;
  let returnArr = [];

  for (let idx = 0; idx < len; idx += 1) {
    returnArr.push(obj[idx]);
  }

  return returnArr;
};

arrayFrom({0: 'a', 1: 'b', 2: 'c', length: 3});
// => [ 'a', 'b', 'c' ]


/*
Object constructor :

As with array constructor creates new array the Object constructor aslo create new objects or instance objects. 

We can invoke the Object constructor with new keyword as with Array constructor we can omit the new keyword when invoking the Object constructor, but this is not a good practice to omit the new keyword. 


As with Array constructor Object constructor also has some useful instance metnhods like hasOwnProperty(prop), Object.assign(obj), getPrototypeOf(obj), setPrototypeOf(obj1, obj2).... and so on. 


Since array are sub-type of objects we can use the Object.prototype instance methods on arrays. Like includes(). Array.prototype inherites from the Object.prototype. 

*/

Object.getPrototypeOf(Array.prototype) === Object.prototype
// true


/*
Almost all objects (custom objects and built-in objects) inherite from the Object.prototype. The Array.prototype also inherite from the Object.prototype. So for that reason we can use the object built-in methods on arrays. 

['a', 'b', 'c'].hasOwnProperty(1)
true



It is also possible to create objects that don't inherite from the Object.prototype, by setting null as the prototype of an object we can say that object don't have the Object.prototype as its prototype object instead null is its prototype. 



Another useful method of Object.prototype is the Object.toString() which returns a string representation of the object on which the method is invoked. 

Since it is defined on Object.prototype all object instances array instance and date objects can inherite this method.



Static Object methods :

Object constructor has some static methods that we used them already in our code. Like: 

Object.assing 
Object.create 
Object.keys 
Object.values 
Object.entries 
Object.freez 
Object.isFrozen 
Object.getPrototypeOf
Object.setPrototypeOf
*/


/*
The Date constructor :

The Date object returns an object which is date object. that represent a specific date and time. When we invoke the Date constructor without any argument it will return the current date and time as an object. 

We can also create date object that represents the given date. Like: 
*/

// Invoking Date without argument: 
let date = new Date()
console.log(date); // 
// 2019-06-07T05:03:26.813Z


// Invoking Date with argument: 
let birthday = new Date("May 1, 1983"); 
console.log(birthday); 
// 1983-05-01T07:00:00.000Z

// We can also pass the time to the Date constructor: 

birthday = new Date("May 1, 1983 05:03 am")
console.log(birthday); 
// 1983-05-01T12:03.00.000Z


/*
Date.prototype :


The Date.prototype has some methods to work with date. 

Date.prototype.toString
Date.prototype.getFullYear 
Date.prototype.getDay


Date.prototype.toString returns a string that represents a date. 

Date.prototype.getFullYear returns an year from the date as a number.  

Date.prototype.getDay returns a number that represents the day of the week and starts from 0 for Sunday 1 for Monday and so on... 
*/


// An example of toString:
let now = new Date()
console.log(now.toString())
// 'Sat Jun 01 2019 01:15:06 GMT+0500 (Pakistan Standard Time)'

// An example of getFullYear:
console.log(now.getFullYear());
// 2019

// An example of getDay: 
console.log(now.getDay())
// 4 (represents Thursday)


/*
The String constructor :

Why do we need the string constructor? 
Isn't string a primitive? 

Yes, it is! But the comparison between two strings are by values not by identity. Equality for object are by identity but for strings it is by values not by identity. 
*/


let arr1 = [1, 2, 3];
let arr2 = arr1    // arr1 and arr2 both reference the same object
// console.log(arr1 === [1, 2, 3]) // false
console.log(arr1 === arr2)      // true


/*
In js we have two kinds of strings: primitive strings which we can create them by using quotes (single or double). And another kind of strings is the String objects, which we create them by using the String constructor. The type of the strings which are created by quotes is "string" , the type of strings which are created by String constructor is "object". 


And we invoke the String constructor with the new keyword as with did with the Array and Object constructors. If we omit the new keyword with String constructor it doesn't work as intended meaning that it doesn't return an object instead returns a string. 
*/

// This is an example of primitive string 
let strPrimitive = 'abc'
console.log(typeof strPrimitive); 
// 'string'

// This is an example of String object 
let strObject = new String('xyz')
console.log(typeof strObject); 
// 'object'



// Two strings primitive that have the same values are equal 
console.log('abc' === 'abc'); 
// true

// But two object strings that have the same values are not equal
console.log(new String('abc') === new String('abc')); 
// false

// console.log(new String('abc') === 'abc');

/*
The String constructor takes non-string values as arguments and return them as strings. like: 

*/

console.log(String(undefined));
// 'undefined'

console.log(String(3.14))
// '3.14'

console.log(String([1, 2, 3]))
// '1,2,3'

console.log(String(a => a * a))
// 'a => a * a'

/*
The Number and Boolean constructors :

The Number and Boolean constructors work the same as the String constructor. We inovke them with the new keyword and they create Number and Boolean objects, but if we invoke them without new keyword the Number constructor converts its argument to a number and Boolean constructor converts its argument to a boolean value. 

*/

console.log(Number('123'));
// 123

console.log(Boolean(0));
// false

console.log(Boolean('abc'));
// true


/*
As with strings numbers and booleans also have the primitive and object forms. js invisible wraps primitive in objects to access the methods and properties on that strings. We should create Number and Boolean objcts explicitly. 
*/