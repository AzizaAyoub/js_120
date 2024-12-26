// // // Rewrite the following Person class to use private fields for the name and age properties and provide a setter for setting the age property. Ensure that the setter raises a RangeError unless the age is a positive number.

// // class Person {
// //   #name;
// //   #age;
// //   constructor(name, age) {
// //     this.#name = name;
// //     this.#age = age;
// //   }

// //   set age(newAge) {
// //     if (Number.isInteger(newAge) && newAge > 0) {
// //       this.#age = newAge;
// //     } else {
// //       throw new RangeError('Age must be positive');
// //     }
// //   }

// //   get showAge() {
// //     return this.#age;
// //   }

// // }

// // let person = new Person('John', 30);
// // console.log(person.showAge); // 30
// // person.age = 31;
// // console.log(person.showAge); // 31

// // try {
// //   // This line should raise a RangeError,
// //   // but does not.
// //   person.age = -5;
// //   person.showAge; // -5
// // } catch (e) {
// //   // The following line should run, but won't
// //   console.log('RangeError: Age must be positive');
// // }


// // // ====================================================== Exercise #2

// // // Create a Book class with private fields title, author, and year. Provide getters for each field and a setter for the year field that raises a RangeError if year is before 1900.

// // class Book {
// //   #title; 
// //   #author; 
// //   #year;

// //   constructor (title, author, year) {
// //     this.#title = title; 
// //     this.#author = author; 
// //     this.year = year;
// //   }

// //   get title() {
// //     return this.#title;
// //   }

// //   get author() {
// //     return this.#author;
// //   }

// //   get year() {
// //     return this.#year; 
// //   }

// //   set year(newYear) {
// //     if (newYear < 1900) {
// //       throw new RangeError('Invalid year');
// //     } else {
// //       this.#year = newYear;
// //     }
// //   } 
// // }

// // let book = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
// // console.log(book.title);  // The Great Gatsby
// // console.log(book.author); // F. Scott Fitzgerald
// // console.log(book.year);   // 1925

// // book.year = 1932;         // Changing year
// // console.log(book.year);   // 1932

// // try {
// //   book.year = 1825;
// // } catch (e) {
// //   console.log(e);   // RangeError: Invalid year
// // }

// // try {
// //   let book2 = new Book('A Tale of Two Cities', 'Charles Dickents', 1859);
// // } catch (e) {
// //   console.log(e);   // RangeError: Invalid year
// // }


// // // ============================================================= Exercise #3

// // // Create a BankAccount class with a private field balance. Add a private method, #checkBalance, that logs the current balance. Provide a public method, deposit, to add money to the account and withdraw to take money out. Raise a RangeError if there are insufficient funds for the withdrawal.


// class BankAccount {
//   #balance;

//   constructor (balance) {
//     this.balance = balance;
//   }

//   #checkBalance() {
//     console.log(`Current balance is $${this.#balance}`);
//   }

//   deposit(money) {
//     this.#balance += money;
//     this.#checkBalance();
//   }
  
//   withdraw(amount) {
//     if (amount > this.#balance) {
//       throw new RangeError('Insufficient funds');
//     } else {
//       this.#balance -= amount;
//     }
//   }
// }

// let account = new BankAccount();
// console.log(account.deposit(100));
// console.log(account.withdraw(50));
// account.withdraw(100); // RangeError: Insufficient funds

// // ========================================================= Exercise #4 

// // Create a Rectangle class with private fields width and height. Provide getters and setters for both fields. The setters should raise a RangeError if the width or height is not a positive number. Add a getter for area to compute the area of the rectangle (width * height).


// class Rectangle {
//   #width; 
//   #height; 

//   constructor (width, height) {
//     this.#width = width;
//     this.#height = height; 
//   }

//   get width() {
//     return this.#width;
//   }

//   get height() {
//     return this.#height;
//   }

//   set width(newWidth) {
//     if (newWidth > 0) {
//       this.#width = newWidth;
//     } else {
//       throw new RangeError('RangeError: width must be positive');
//     }
//   }


//   set height(newHeight) {
//     if (newHeight > 0) {
//       this.#height = newHeight;  
//     } else {
//       throw new RangeError('RangeError: height must be positive');
//     }
//   }

//   get area() {
//     return this.#height * this.#width;
//   }

// }

// let rect = new Rectangle(10, 5);
// console.log(rect.area); // 50

// rect.width = 20;
// console.log(rect.area); // 100

// rect.height = 12;
// console.log(rect.area); // 240

// try {
//   rect.width = 0;
// } catch (e) {
//   console.log(e); // RangeError: width must be positive
// }

// try {
//   rect.height = -10;
// } catch (e) {
//   console.log(e); // RangeError: height must be positive
// }


// // =================================================== Exercise #5

// // Create a MathUtils class with static methods add, subtract, multiply, and divide. These methods should perform basic arithmetic operations.

// class MathUtils {

//   static add(num1, num2) {
//     return num1 + num2; 
//   }

//   static subtract(num1, num2) {
//     return num1 - num2;
//   }

//   static multiply(num1, num2) {
//     return num1 * num2;
//   }

//   static divide(num1, num2) {
//     if (num2 === 0) {
//       throw new RangeError('RangeError: Division by zero');
//     } else {
//       return num1 / num2;
//     }
//   }
// }

// console.log(MathUtils.add(5, 3));       // 8
// console.log(MathUtils.subtract(10, 4)); // 6
// console.log(MathUtils.multiply(6, 7));  // 42
// console.log(MathUtils.divide(20, 5));   // 4
// console.log(MathUtils.divide(10, 0));   // RangeError: Division by zero

// Create a Book class with private fields title, author, and year. Provide getters for each field and a setter for the year field that raises a RangeError if year is before 1900.

class Book {
  #title; 
  #author; 
  #year; 

  constructor(title, author, year) {
    this.#title = title; 
    this.#author = author; 
    this.year = year;
  }

  get title() {
    return this.#title;
  }

  get author() {
    return this.#author;
  }

  get year() {
    return this.#year;
  }

  set year(newYear) {
    if (newYear < 1900) {
      throw new RangeError('RangeError: Invalid year');
    } else {
      this.#year = newYear;
    }
  }
}

let book = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
console.log(book.title);  // The Great Gatsby
console.log(book.author); // F. Scott Fitzgerald
console.log(book.year);   // 1925

book.year = 1932;         // Changing year
console.log(book.year);   // 1932

try {
  book.year = 1825;
} catch (e) {
  console.log(e);   // RangeError: Invalid year
}

try {
  let book2 = new Book('A Tale of Two Cities', 'Charles Dickents', 1859);
} catch (e) {
  console.log(e);   // RangeError: Invalid year
}

