// Object in JS

// JavaScript Object ek collection hota hai key-value pairs ka, jisme keys string (ya symbols) hoti hai, aur unki corresponding values kuchh bhi ho sakti hai -- string, number, array, ya function bhi

//// => Looping over object ka matlab hai: sabhi keys ya values ko ek ek karke access karna.

//// => Dynamic key ka matlab hai: runtime pe naye keys banana ya access karna.

// Core Concepts & Code Examples

// 1. Creating an Object

const inventory = {
  cheeni: 10,
  chawal: 25,
  aata: 50,
  apples: 10,
  bananas: 15,
  oranges: 8,
  milk: 2,
  bread: 1,
};

// 2. Looping Over Object: for...in Loop

for (let item in inventory) {
  console.log(`Item: ${item}, Quantity: ${inventory[item]}`);
}

//   // 'inventory[item]' us key ki value hai (e.g., inventory["apples"] = 10)

//  Looping with Object.keys() or Object.entries()

// Using Object.keys
Object.keys(inventory).forEach((item) => {
  console.log(`Item: ${item}, Quantity: ${inventory[item]}`);
});

// Using Object.entries
Object.entries(inventory).forEach(([item, quantity]) => {
  console.log(`Item: ${item}, Quantity: ${quantity}`);
});

// Adding Dynamic Key

let newItem = "namak";
let quantity = 20;

inventory[newItem] = quantity; // runtime pe key bana di
console.log(inventory);

// Note: Square bracket notation [key] ka use dynamic key ke liye hota hai. Dot (.) notation se aap "namak" jaisi string ko directly nahi access kar sakte.
