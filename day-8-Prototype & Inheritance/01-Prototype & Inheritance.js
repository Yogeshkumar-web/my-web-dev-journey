// Prototype & Inheritance

// Prototype: JavaScript me har object ke paas ek hidden property hota hai ([[Prototype]]) jo ek aur object ko reference karta hai. Ye prototype object us object ke inherited properties/methods ka source hota hai.

// Inheritance: Jab ek object kisi doosre object ke properties aur methods use karta hai bina direct copy kiye, use inheritance kehte hain. JavaScript me ye prototype chain ke through hota hai.

//  Object Literals & Inheritance (via __proto__)

// const human = {
//   canTalk: true,
//   greet() {
//     console.log("Hello!");
//   },
// };

// const yogesh = {
//   name: "Yogesh",
//   age: 25,
//   __proto__: human, // inheritance
// };

// console.log(yogesh.canTalk); // true (inherited from human)
// yogesh.greet(); // "Hello!"

// Constructor Function + Prototype

function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const yogesh = new Person("Yogesh");
yogesh.sayHello(); // Hello, my name is Yogesh
// Person ek constructor function hai.
// Uske prototype me ek method sayHello add ki gayi hai.
// yogesh instance ne sayHello method ko inherit kiya via prototype.

// Object.create() – Pure Inheritance
const parent = {
  canCode: true,
};

const child = Object.create(parent);
child.name = "Yogee";

console.log(child.canCode); // true (inherited)
