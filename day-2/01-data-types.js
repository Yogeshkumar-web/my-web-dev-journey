// primitive types

let a = 5;
let b = a;

b = 10;

console.log(b);
console.log(a);

// Understand that primitives are independent copies
const price = 99.95;
let discountedPrice = price * 0.9; // new primitive created.

//-----------------------------------------

// Reference Types

const person1 = { name: "Yogesh" };
const person2 = person1;
person2.name = "Saurav";

console.log(person1.name); // original changed

// create new object when needed.

const originalPerson = { name: "kumar" };
const newPerson = { ...originalPerson }; // spread operator creates copy

newPerson.name = "Gaurav";
console.log(originalPerson.name); // unchanged

//-----------------------------------

// Values vs Reference

// primitive comparison (by value)

const num1 = 5;
const num2 = 5;

console.log(num1 === num2); // true

// reference comparison

const obj1 = { id: 1 };
const obj2 = { id: 1 };

console.log(obj1 === obj2);
