// What are two disadvantages of working with factory functions?

/*
1- The objects that are created by a factory function have a copy of all the methods, so it takes more memory 
2- We can't determine the specific type of the objects by looking at them which are created by a factory function 
*/

///////////////////////////////////////////

// Rewrite the following code to use object-literal syntax to generate the returned object:

// function makeObj() {
//   let obj = {};
//   obj.propA = 10;
//   obj.propB = 20;
//   return obj;
// }

// let obj = {
//   propA: 10, 
//   propB: 20,
// }

// ///////////////////////////////////////////////////////// 

// // In this problem and the remaining problems, we'll build a simple invoice processing program. To get you started, here's the code to process a single invoice:

// let invoice = {
//   phone: 3000,
//   internet: 6500
// };

// let payment = {
//   phone: 1300,
//   internet: 5500
// };

// let invoiceTotal = invoice.phone + invoice.internet;
// let paymentTotal = payment.phone + payment.internet;
// let remainingDue = invoiceTotal - paymentTotal;

// console.log(paymentTotal);         // => 6800
// console.log(remainingDue);         // => 2700


// function invoice(phone, internet) {
//   return {
//     phone, 
//     internet, 

//     payment
//   }
// }


function createInvoice(services = {}) {
  let phoneCharge = services.phone;
  if (phoneCharge === undefined) {
    phoneCharge = 3000;
  }

  let internetCharge = services.internet;
  if (internetCharge === undefined) {
    internetCharge = 5500;
  }

  return {
    phone: phoneCharge,
    internet: internetCharge,
    payments: [],

    total: function() {
      return this.phone + this.internet;
    },

    addPayment: function(payment) {
      this.payments.push(payment);
    },

    addPayments: function(payments) {
      payments.forEach(this.addPayment, this);
    },

    paymentTotal: function() {
      return this.payments.reduce((sum, payment) => sum + payment.total(), 0);
    },

    amountDue: function() {
      return this.total() - this.paymentTotal();
    },
  };
} 


function Cat(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color
}

function createCat(name, age) {
  return {
    name,
    age,
  }
}

let cat2 = createCat('bob', 2);
let cat = new Cat('Leon', 2, 'White');
console.log(cat);
console.log(cat instanceof Object);  // false
console.log(cat instanceof Cat); // true
console.log(cat2 instanceof createCat); // false
