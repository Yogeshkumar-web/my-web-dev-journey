// Immutability

// Immutability ka matlab hai ek baar kisi variable/object ko assign kar diya gaya value ya state, usse directly modify nahi karna. Instead, agar kuch change karna ho, toh naya copy banao purane ka — aur nayi value return karo. In Functional Programming, this is a core principle. It leads to predictable code, fewer bugs, and easier debugging.

// Primitive values are immutable:
let a = 10;
let b = a;
b = b + 5;

console.log(a); // 🔹 10
console.log(b); // 🔹 15

// Objects & Arrays are mutable by default (but we avoid mutation):

const user = {
  name: "Yogee",
  age: 22,
};

//  Direct mutation
// user.age = 23;
// Immutably update karna ho toh:

const updatedUser = { ...user, age: 23 };
console.log(updatedUser); // 🔹 { name: "Yogee", age: 23 }
console.log(user); // { name: 'Yogee', age: 22 }

// Immutable Array Updates:
const numbers = [1, 2, 3];

// ✅ Add item immutably
const newNumbers = [...numbers, 4];
console.log(newNumbers); // [1,2,3,4]

// ✅ Remove item immutably
const filtered = numbers.filter((num) => num !== 2);
console.log(filtered); // [1,3]

//  Immutability in Functions:
// Avoid functions that mutate input parameters.

//  BAD: Mutating input array
function badPush(arr) {
  arr.push(4);
  return arr;
}

// ✅ GOOD: Return a new array
function addItemImmutable(arr) {
  return [...arr, 4];
}

const original = [1, 2, 3];
const result = addItemImmutable(original);

console.log(original); // [1,2,3]
console.log(result); // [1,2,3,4]
