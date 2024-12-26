/*
Encapsulation. 
Refers to the concept of bundling variables and methods into a single unit. 
Pro: all datas are inside one unit that easier to access and maintain. 


*/

class Person {
  #name; //private from outside access
  
  constructor(name){
    this.#name = name
  }
  
  get Name(){
    return this.#name;
  }
  
  set Name(newName){
    
  }
  
  
  }