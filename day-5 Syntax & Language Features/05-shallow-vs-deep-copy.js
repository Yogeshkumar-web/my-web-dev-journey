// Shallow vs deep copy

// Shallow Copy creates a new object/array with the same top-level properties, but if those properties are objects or arrays, they are still linked (reference copied).

// Deep Copy creates a fully independent copy, including nested objects and arrays — no shared references.

// Concept 1: Shallow Copy Basics

const original = { name: "Yogesh", skills: ["JS", "React"] };

// Create shallow copy using spread
const copy = { ...original };
copy.name = "saurav";

// Modify nested array
copy.skills.push("Node.js");
copy.skills.push("Next Js");

// console.log(original.skills);
// console.log(original.name);
// console.log(copy.name);

// console.log(original === copy); // false

//// => Concept 2: Deep Copy Basics (Manual & JSON)

const original1 = { name: "Yogesh", skills: ["JS", "React"] };

// Deep copy using JSON method
const deepCopy = JSON.parse(JSON.stringify(original1));

deepCopy.skills.push("Node.js");

console.log(original1.skills); // ["JS", "React"]
console.log(deepCopy.skills); // ["JS", "React", "Node.js"]

//// Concept 4: Array Copying

const arr = [1, 2, [3, 4]];

const shallowArr = [...arr];
shallowArr[2].push(5);

console.log(arr[2]); // [3, 4, 5]

const deepArr = JSON.parse(JSON.stringify(arr));
deepArr[2].push(6);

console.log(arr[2]); // [3, 4, 5]
console.log(deepArr[2]); // [3, 4, 5, 6]

///////////******************************** *////////////

// 1. Shallow Copy

/*
Shallow copy ka matlab hai ki aap ek naya object/array banate hain, lekin us naye object/array ke andar ki nested properties (agar woh bhi objects/arrays hain) original object ke references ko hi share karti hain.

Socho ek file cabinet hai (original object). Shallow copy ek naya file cabinet banati hai. Agar pehle cabinet mein documents hain (primitive values), toh unki copies ban jayengi. Lekin agar pehle cabinet mein koi file box hai (nested object), toh naye cabinet mein usi file box ka reference hoga, na ki us file box ki copy. Toh agar aap naye cabinet se us file box mein changes karte hain, toh woh original cabinet ke file box mein bhi dikhenge.

*/

// 1. Spread Operator (...): Objects aur Arrays dono ke liye.

// --- Array Example ---
const originalArray = [1, 2, { a: 3, b: 4 }];
const shallowCopyArray = [...originalArray];

shallowCopyArray[0] = 100; // Primitive value change
shallowCopyArray[2].a = 500; // Nested object change

console.log(originalArray); // Output: [1, 2, { a: 500, b: 4 }]
console.log(shallowCopyArray); // Output: [100, 2, { a: 500, b: 4 }]
// Dekho, 1 badal gaya, lekin nested object bhi badal gaya original mein!

// --- Object Example ---
const originalObject = {
  name: "Laptop",
  price: 1200,
  specs: { cpu: "i7", ram: "16GB" },
};
const shallowCopyObject = { ...originalObject };

shallowCopyObject.price = 1500; // Primitive value change
shallowCopyObject.specs.cpu = "i9"; // Nested object change

console.log(originalObject); // Output: { name: "Laptop", price: 1200, specs: { cpu: "i9", ram: "16GB" } }
console.log(shallowCopyObject); // Output: { name: "Laptop", price: 1500, specs: { cpu: "i9", ram: "16GB" } }
// Yahan bhi 'price' change nahi hua, lekin 'specs.cpu' badal gaya original mein!

// 2. Object.assign({}, originalObject): Objects ke liye.

const obj = { a: 1, b: { c: 2 } };
const copy = Object.assign({}, obj);

copy.a = 10;
copy.b.c = 20;

console.log(obj); // Output: { a: 1, b: { c: 20 } }
console.log(copy); // Output: { a: 10, b: { c: 20 } }

// 3. Array.prototype.slice() / Array.from(): Arrays ke liye.

// const arr = [1, { x: 10 }];
// const copy1 = arr.slice();
// const copy2 = Array.from(arr);

// copy1[1].x = 99;

// console.log(arr);   // Output: [1, { x: 99 }]
// console.log(copy1); // Output: [1, { x: 99 }]
// console.log(copy2); // Output: [1, { x: 99 }] (kyunki ye bhi shallow copy hai)

//---------- Shallow Copy Kab Use Karen?-----------------

/*
1. Jab aapke object/array mein sirf primitive values hon.
2. Jab aapko pata ho ki aap nested objects/arrays ko modify nahi karenge, ya unko modify karne se original object par farak padne se koi issue nahi hai.
3. Performance ki zaroorat ho, kyunki shallow copy deep copy se faster hoti hai.
*/

// 2. Deep Copy

/*
Deep copy ka matlab hai ki aap ek naya object/array banate hain jismein original object/array ki saari values copy hoti hain, including all nested objects and arrays. Naya object original se poori tarah independent hota hai. Koi bhi change jo aap copy mein karte hain, woh original ko affect nahi karta.

Socho, wahi file cabinet. Deep copy ek naya file cabinet banati hai, aur uske andar ke har document aur har file box ki bhi alag se copy banati hai. Ab dono cabinets poori tarah independent hain.

Deep Copy Banane ke Tarike:
Deep copy banana shallow copy se thoda zyada complex hota hai, kyunki aapko har level par nested objects/arrays ko recursively copy karna padta hai.
*/
// 1.  JSON.parse(JSON.stringify(originalObject)):

// Yeh sabse common aur aasan tareeka hai deep copy banane ka, lekin iski kuch limitations hain:
// => 1. Functions ko copy nahi karta.
// => 2. undefined values ko copy nahi karta.
// => 3. Map, Set, Date, RegExp objects ko sahi se copy nahi karta.
// => 4. Cyclic references (jahaan object khud ko hi refer karta hai) hone par error de sakta hai.

const originalObject1 = {
  name: "Product",
  details: {
    id: 123,
    features: ["A", "B"],
  },
  // myMethod: function() { console.log("Method"); }, // Will be lost
  // status: undefined // Will be lost
};

const deepCopyObject = JSON.parse(JSON.stringify(originalObject1));

deepCopyObject.details.features[0] = "Z"; // Nested array mein change
deepCopyObject.name = "New Product"; // Primitive value change

console.log(originalObject1); // Output: { name: "Product", details: { id: 123, features: ["A", "B"] } }
console.log(deepCopyObject); // Output: { name: "New Product", details: { id: 123, features: ["Z", "B"] } }
// Dekho, original object mein koi badlav nahi aaya!

// Note: Kab use karen? Simple JSON-serializable objects (no functions, undefined, Dates, etc.) ke liye quick deep copy banane ke liye.

// 2. Structured Clone Algorithm (structuredClone()) - Modern Approach: ES2022 (modern browsers aur Node.js v17+) mein structuredClone() naam ka ek naya global function introduce kiya gaya hai. Yeh deep copy banane ka recommended aur robust tareeka hai.

// => 1. Ye JSON.parse(JSON.stringify()) ki limitations ko solve karta hai.
// => 2. Supports Date, RegExp, Map, Set, ArrayBuffer, Blob, File, ImageData, Error objects, aur Cyclic References.
// => 3. Functions copy nahi karta.

const original2 = {
  name: "Complex Object",
  date: new Date(),
  data: new Map([
    [1, "one"],
    [2, "two"],
  ]),
  nested: { value: 42, arr: [7, 8] },
  // func: () => console.log('hello') // This will NOT be copied
};

const deepCopy2 = structuredClone(original2);

deepCopy2.nested.value = 100;
deepCopy2.data.set(3, "three");
deepCopy2.date.setFullYear(2000);

console.log(original2.nested.value); // Output: 42
console.log(deepCopy2.nested.value); // Output: 100

console.log(original2.data.get(3)); // Output: undefined
console.log(deepCopy2.data.get(3)); // Output: three

console.log(original2.date.getFullYear()); // Original year
console.log(deepCopy2.date.getFullYear()); // 2000

// Note: Kab use karen? Jab aapko complex objects ki robust deep copy chahiye ho aur aap modern environment mein hon.

// 3. Custom Recursive Function / Libraries (Lodash's _.cloneDeep):

// Agar aapko purane environments mein deep copy chahiye ya aapko functions/specific types ko copy karne ki custom logic chahiye, toh aapko khud recursive function likhna padega ya Lodash jaisi library use karni padegi.

// Bahut simplified recursive example (real-world function zyada robust hoga)
function customDeepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj; // Primitive values ya null return kar do
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }

  const copy = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      copy[key] = customDeepClone(obj[key]); // Recursively copy nested properties
    }
  }
  return copy;
}

const originalObj = { a: 1, b: { c: 2 }, d: [3, { e: 4 }] };
const deepCopyObj = customDeepClone(originalObj);

deepCopyObj.b.c = 99;
deepCopyObj.d[1].e = 88;

console.log(originalObj.b.c); // Output: 2
console.log(deepCopyObj.b.c); // Output: 99

// Note : Kab use karen? Complex scenarios, legacy browser support, ya specific types ko handle karne ke liye jo structuredClone support nahi karta.
