// What do we mean when we say that classes are first-class values?

/*
It means that we can treat classes like any other js value, we can pass them around, we can assign them to variables and return them from functions. 

*/


// Consider the following class declaration:

class Television {
  static manufacturer() {
    console.log('It is a static method!')
  }

  model() {
    console.log('It is an instance method!')
  }
}

// What does the static modifier do? How would we call the method manufacturer?


/*
The static modifier define a static method which we should invoke it on the class itself rather of a class instance. To inovke a static method we need to use the class name and dot notation followed by the name of the static method. 

*/

let television = new Television('')
television.model(); // It is an istance method! 
Television.manufacturer(); // It is a static method!
