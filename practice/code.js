let intro = {
  name: "Jhon",
  age: 21,

  studentName () {
    console.log(`${this.name} is a student.`);
  },

  studentAge () {
    console.log(`He is ${this.age} years old.`);
  }
}

intro.studentName();
intro.studentAge();

// =============================================


// Title  Author  Year Published
// Neuromancer  William Gibson  1984
// Doomsday Book  Connie Willis  1992

function Books(title, artist, releaseYear) {
  this.title = title;
  this.artist = artist;
  this.releaseYear = releaseYear;
  
}

let thriller = new Books('Neuromancer', 'William Gibson', 1984);
let darkside = new Books('Doomsday Book', 'Connie Willis', 1992);

console.log(thriller);
console.log(darkside); 


// ==============================================

// Brand  Model  Release Year
// Apple  iPhone 12  2020
// Samsung  Galaxy S21  2021

function GetInfo(brand, model, releaseYear) {
  this.brand = brand; 
  this.model = model; 
  this.releaseYear = releaseYear;

  this.checkPhoneBetter = function () {
    return `${this.brand} ${this.model} has 96% bettery remaining.`;
  };

  this.displayInfo = function () {
    return `${this.brand} ${this.model} ${this.releaseYear}`;
  };

  this.displayPhone = function () {
    return `${this.model} ${this.releaseYear} has released`;
  };

  this.GetInfo = function () {
    return `${this.displayInfo()} is a test`;
  }; 

}

let iphone13 = new GetInfo('Apple', 'iPhone 13', 2021);
let galaxyS21 = new GetInfo('Samsung', 'Galaxy S21', 2021);
let iphone12 = new GetInfo('Apple', 'iPhone 12', 2020);

console.log(iphone13.checkPhoneBetter());
console.log(galaxyS21.displayInfo());
console.log(iphone12.displayPhone());
console.log(new GetInfo('Apple', 'iPhone', 1212).GetInfo());


// ===========================================================

function FruitNamesAndPrice(name, price) {
  this.name = name; 
  this.price = price 

  this.fruitName = function () {
    let arr = ['apple', 'banana', 'orange'];

    if (arr.includes('banana')) {
      console.log("it's true!");
    } else {
      console.log("it's false!");
    }
  };

  this.fruitPrice = function () {
    
  }
}


function Test() {
  this.value = 'value';
  this.value = function () {
    console.log(`${this.value}`);
  }
}

let value = new Test()


// =========================================================

// function Foo() {
//   this.foo = 42;
// }

// let obj = new Foo();
// console.log(obj instanceof Foo); // true
// console.log(obj.constructor);    // [Function: Foo]


function Cat(name) {
  this.name = name; 
}

let object = new Cat('cat');
console.log(object instanceof Foo);
console.log(object instanceof Cat);
console.log(object.constructor);


function Foo() {
  return {
    foo: 42,
  };
}

let obj = Foo();
console.log(obj instanceof Foo); // false
console.log(obj.constructor);    // [Function: Object]

// ===========================================================

function createFruit(name, color, isRipe, describe) {
  return {
    name, 
    color, 

    isRipe: function () {
      return `This ${this.name} is ripe.`;
    },

    describe: function () {
      return `This ${this.name} is ${this.color}.`;
    },
  }
}

let apple = createFruit('Apple', 'Red');
let banana = createFruit('Banana', 'Yellow');
let blackberry = createFruit('Blackberry', 'Black');

console.log(apple.isRipe()); // This Apple is ripe 
console.log(banana.describe()); // This Banana
console.log(blackberry.isRipe()); // This Blackberry is ripe

// let apple = {
//   name: 'Apple',
//   color: 'Red',

//   isRipe: function() {
//     return `This ${this.name} is ripe.`;
//   },

//   describe: function() {
//     return `This ${this.name} is ${this.color}.`;
//   },
// };

// let banana = {
//   name: 'Banana',
//   color: 'Yellow',

//   isRipe: function() {
//     return `This ${this.name} is ripe.`;
//   },

//   describe: function() {
//     return `This ${this.name} is ${this.color}.`;
//   },
// };

// let blackberry = {
//   name: 'Blackberry',
//   color: 'Black',

//   isRipe: function() {
//     return `This ${this.name} is ripe.`;
//   },

//   describe: function() {
//     return `This ${this.name} is ${this.color}.`;
//   },
// };


// ==============================================================================

// Brand  Model  Release Year
// Apple  iPhone 12  2020
// Samsung  Galaxy S21  2021

// factory function 
function factory(brand, model, releaseYear, checkBettery) {
  return {
    brand, 
    model, 
    releaseYear, 

    checkBettery () {
      return `${this.model} has 98% bettery`;
    },

    getInfo () {
      return `${this.brand} ${this.model} has released in ${this.releaseYear}`;
    },
  }
}

console.log(factory('Apple', 'iPhone 12', 2020));
console.log(factory('Samsung', 'Galaxy', 2021));

let obje = factory('Samsung', 'Galaxy J6', 2021);
let objee = factory('Apple', 'iPhone 13', 2022); 

console.log(obje.checkBettery());
console.log(objee.getInfo());


// =========================================================================

function createInstrument(name, type) {
  return {
    name, 
    type, 

    play() {
      return ` We are playing a tune on this ${this.name}`
    },

    showType() {
      return ` This ${this.name} is a ${type} instrument`
    }
  }
}

let violin = createInstrument('violin', 'string');
console.log(violin.play());     // We are playing a tune on this violin
console.log(violin.showType()); // This violin is a string instrument

let flute = createInstrument('flute', 'wind');
console.log(flute.play());      // We are playing a tune on this flute
console.log(flute.showType());  // This flute is a wind instrument

let drum = createInstrument('drum', 'percussion');
console.log(drum.play());       // We are playing a tune on this drum
console.log(drum.showType());   // This drum is a percussion instrument



// ===================================================================


class Vehicle {
  constructor (weight, color) {
    this.weight = weight, 
    this. color = color
  }

  accelerate() {
    console.log('Accelerate');
  }


  decelerate() {
    console.log('Decelerate');
  }
}



class Car extends Vehicle {
  constructor (color, weight, licenseNumber) {
    super(color, weight);
    this.licenseNumber
  }

  honk() {
    console.log('Honk');
  }
}


class Boat extends Vehicle {
  constructor (color, weight, homePort) {
    super(color, weight),
    this.homePort = homePort
  }

  dropAnchor() {
    console.log('Drop Anchor')
  }
}



class Plane extends Vehicle {
  constructor (color, weight, airline) {
    super(color, weight), 
    this.airline = airline;
  }

  takeOff () {
    console.log('Take off');
  }

  land () {
    console.log('Land');
  }
}



let car = new Car('red', 3300, 'BXY334');
car.accelerate();             // Accelerate
car.honk();                   // Honk
car.decelerate();             // Decelerate
console.log(car.color, car.weight, car.licenseNumber);
// red 3300 BXY334

let boat = new Boat('yellow', 12000, 'Bahamas');
boat.accelerate();            // Accelerate
boat.decelerate();            // Decelerate
boat.dropAnchor();            // Drop anchor
console.log(boat.color, boat.weight, boat.homePort);
// yellow 12000 Bahamas

let plane = new Plane('blue', 83000, 'Southwest');
plane.accelerate();           // Accelerate
plane.takeOff();              // Take off
plane.land();                 // Land
plane.decelerate();           // Decelerate
console.log(plane.color, plane.weight, plane.airline);
// blue 83000 Southwest

console.log(car instanceof Vehicle); // true
console.log(boat instanceof Vehicle); // true
console.log(car instanceof Car); // true
console.log(boat instanceof Car); // false 
