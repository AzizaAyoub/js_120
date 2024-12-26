// Suppose we have the following classes:

class Game {
  play() {
    return 'Start the game!';
  }
}

class Bingo extends Game {
  rulesOfPlay() {
    // rules of play
  }
}


// What would happen if we added a play method to the Bingo class, keeping in mind that there is already a method of this name in the Game class from which the Bingo class inherits? Explain your answer. What do we call it when we define a method like this?

/*
If we define the same play method in the Bingo class, it will define on the protptype property of Bingo class and it doesn't affect on the play method in Game class. Since paly method is defined in the protptype property of Game class and now we define another play method on the protptype property of Bingo class. So we call it "method overriding".

*/


// Let's practice creating a class hierarchy.

// Create a class named Greeting that has a single method named greet. The method should take a string argument, and it should print that argument to the console.

class Greeting {
  greet(message) {
    console.log(`${message}`);
  }
}


class Hello extends Greeting {
  hi() {
    this.greet('Hello');
  } 
}

class Goodbye extends Greeting {
  goodbye() {
    this.greet('Goodbye'); 
  }
}

let greet = new Greeting();
console.log(greet.greet('Hey')); // 'Hey'

let hello = new Hello();
console.log(hello.hi()); // 'Hello' 

let goodbye = new Goodbye();
console.log(goodbye.goodbye()); // 'Goodbye'




