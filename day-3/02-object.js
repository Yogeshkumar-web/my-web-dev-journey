// object in js

/*
An object in JavaScript is a non-primitive data type that stores collections of key-value pairs. Keys are always strings(or symbols), and values can be any data type including other objects or functions.


Real-World Use: 
=> Objects help you organize related data together on one unit.

=> API se data aata hai usually object ya array-of-object ke form mein

=> User ke form inputs ko object mein save karte hai

=> MongoDB documents -> basically objects hote hai

=> Redux store -> objects ka forest hota hai

=> Frontend me UI states -> mostly object form mai manage hote hai.


*/

// Creating Objects

const person = {
  name: "Yogesh",
  age: 30,
  isDeveloper: true,
};

console.log(person);

// Accessing Object Properties
console.log(person.age);

// Adding / Updating Properties
person.city = "Moradabad";

// Deleting Properties
delete person.age; // age deleted

console.log(person);

// Nested Objects

const user = {
  name: "Saurav",
  age: 16,
  contact: {
    email: "email@gmail.com",
    phone: "4545454545",
  },
};

console.log(user.contact.phone);

// Object.keys(), Object.values(), Object.entries()

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
