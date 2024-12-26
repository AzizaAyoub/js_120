// Attributes
//   Title: Mythos
//   Author: Stephen Fry

// Behavior:
//   Get Description

// -----------------------------
// Attributes
//   Title: Me Talk Pretty One Day
//   Author: David Sedaris

// Behavior:
//   Get Description

// -----------------------------
// Attributes
//  Title: Aunts aren't Gentlemen
//  Author: PG Wodehouse

//  Behavior:
//    Get Description

function attributes(title, author) {
  return {
    title: title,
    author: author,

    behavior() {
      return `${this.title} is written by ${this.author}`;
    }
  }
}

let a = attributes('Mythos', 'Stephen');
let b = attributes('Me Talk Pretty One Day', 'David Sedaris');
let c = attributes("Aunts aren't Gentlemen", 'PG Wodehouse')

console.log(a.behavior());
console.log(b.behavior()); 
console.log(c.behavior())