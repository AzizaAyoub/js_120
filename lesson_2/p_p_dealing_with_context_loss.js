// The code below should output "Christopher Turk is a Surgeon". Without running the code, what will it output? If there is a difference between the actual and desired output, explain the difference.

let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
      return this.firstName + ' ' + this.lastName + ' is a '
                                  + this.occupation + '.';
  }
};

function logReturnVal(func) {
  let returnVal = func();
  console.log(returnVal);
}

logReturnVal(turk.getDescription); // 'Christopher Turk is a Surgeon 

// This code doesn't work as intended. Since, we are using this keyword to access the firstName, lastName and occupation properties within the getDescription method in turk object, since we haven't provide the context for the getDescription method explicitly, so this will refer to the global object not the specified properties so global object doesn't have these properties. The value of this would be undefined. 


// Modify the program from the previous problem so that logReturnVal accepts an additional context argument. If you then run the program with turk as the context argument, it should produce the desired output.


// =============================================
function logReturnVal(func, context) {
  let returnVal = func.call(context);
  console.log(returnVal);
}

logReturnVal(turk.getDescription, turk); // 'Christopher Turk is a Surgeon 

/*

To solve this problem we need to pass the second argument to the logReturnVal function as its explicit context. So we should pass the turk object as the context to the logReturnVal function. 

*/

// =================================================================

// Suppose that we want to extract getDescription from turk, but we always want it to execute with turk as its execution context. How would you modify your code to do that?

// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//       return this.firstName + ' ' + this.lastName + ' is a '
//                                   + this.occupation + '.';
//   }
// };

function logReturnVal(func) {
  let returnVal = func();
  console.log(returnVal);
}

let getTurkDescription = turk.getDescription.bind(turk);
logReturnVal(getTurkDescription); // 
logReturnVal(getTurkDescription);

/*
To permanently bind a function to an object as its execution context we can use the bind() method. The advantage of bind method is that if we bind a function to an object than we can call this method more and more without specifying the context again and again we can just call the method specifying the execution context

The disadvantage of the bind method is that we can no longer determine the execution context for the final function invocation.
*/

// =======================================================

// Consider the following code:

const TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ': ' + title);
    });
  }
};

TESgames.listGames();
// Will this code produce the following output? Why or why not?

// The Elder Scrolls: Arena
// The Elder Scrolls: Daggerfall
// The Elder Scrolls: Morrowind
// The Elder Scrolls: Oblivion
// The Elder Scrolls: Skyrim


/*
No the above code won't produce the desired output. 

Within the listGames method we are using the this keyword to access the seriesTitle property, since we said that when we pass a function as argument to another function, they lose their exection context so for that reason the exection context for this keyword is the global object not the TESgames object 

*/

// Consider the following code:

// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     this.titles.forEach(function(title) {
//       console.log(this.seriesTitle + ': ' + title);
//     });
//   }
// };

// TESgames.listGames();
// Will this code produce the following output? Why or why not?

// The Elder Scrolls: Arena
// The Elder Scrolls: Daggerfall
// The Elder Scrolls: Morrowind
// The Elder Scrolls: Oblivion
// The Elder Scrolls: Skyrim


/*
No the above code won't produce the desired output. 

Within the listGames method we are using the this keyword to access the seriesTitle property, since we said that when we pass a function as argument to another function, they lose their exection context so for that reason the exection context for this keyword is the global object not the TESgames object 

*/

// Use let self = this; to ensure that TESgames.listGames uses TESGames as its context and logs the proper output.

// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     let self = this;
//     this.titles.forEach(function(title) {
//       console.log(self.seriesTitle + ': ' + title);
//     });
//   }
// };

// TESgames.listGames();

/*
To solve this problem we can define self variable outside the listGames method to capture the this keyword and then use self variable inside function to use the this keyword 
*/

// The forEach method provides an alternative way to supply the execution context for the callback function. Modify the program from the previous problem to use that technique to produce the proper output:



// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     // let self = this;
//     this.titles.forEach(function(title) {
//       console.log(this.seriesTitle + ': ' + title);
//     }, this);
//   }
// };

// TESgames.listGames();

/*
Another way to solve problem is to use the second argument for the higher-Order functions like forEach here, we passed the this keyword as the second argument to the forEach's callback function 

*/


// Use an arrow function to achieve the same result:


// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     this.titles.forEach((title) =>  {
//       console.log(this.seriesTitle + ': ' + title);
//     });
//   }
// };

// TESgames.listGames();

/*
For arrow functions the exection context is the function where it's defined so they don't lose their exection context.

*/

// ===========================================

// let foo = {
//   a: 0,
//   incrementA: function() {
//     let self = this;
//     function increment() {
//       self.a += 1;
//     }

//     increment();
//   }
// };

// console.log(foo.incrementA()); // undefined
// console.log(foo.incrementA()); // undefined
// console.log(foo.incrementA()); // undefined

/*
This code will log undefined. 

Since in foo object within the incrementA method inside the increment method we are accessing the a property by using this keyword. We invoked the increment function within the incrementA mehtod as a standalone funtion plus we didn't provide the exection context explicitly so the exection context would be the global object instead of foo object 

Therefor the value of this would be undefined instead of 0. 


What will the value of foo.a be after this code runs?

The value of foo.a would be 0, since we didn't change the value of a.
*/


// Use one of the methods we learned in this lesson to invoke increment with an explicit context such that foo.a gets incremented with each invocation of incrementA.

let foo = {
  a: 0,
  incrementA: function() {
    function increment() {
      this.a += 1;
    }

    increment.apply(this);
  }
};

console.log(foo.incrementA()); // undefined
console.log(foo.incrementA()); // undefined
console.log(foo.incrementA()); // undefined
console.log(foo.a); // 3

/*
To invoke the incrementA function with an explicit exection context we can use apply method with this keyword as the argument.
*/