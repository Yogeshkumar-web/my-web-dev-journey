// Destructuring

// "Destructuring ek tareeka hai values ko complex structures (jaise arrays/objects) se seedha nikaal kar easy variables me store karne ka."

// Definition :

// Destructuring is a JavaScript expression that allows you to unpack values from arrays or properties from objects into distinct variables in a single step.

// Concept 1: Array Destructuring

const fruits = ["apple", "banana", "mango"];

const [first, second, third] = fruits;

console.log(first); // apple
console.log(second); // banana
console.log(third); // mango

// 👉 Skip elements:

const [, , last] = fruits;
console.log(last);

// 👉 Default values:

const [a, b, c = "defaultFruit"] = ["apple", "banana"];
console.log(a);
console.log(b);
console.log(c); // defaultFruit

// Concept 2: Object Destructuring

const user = {
  name: "Yogesh",
  age: 30,
  city: "Delhi",
};

const { name, age } = user;

console.log(name); // Yogesh
console.log(age); // 30

// 👉 Rename variables:

const { name: fullName } = user;
console.log(fullName); // Yogesh

// Concept 3: Destructuring in Function Parameters

function greet({ name, city }) {
  console.log(`Hello ${name} from ${city}`);
}

greet({ name: "Yogesh", city: "Delhi" });

// Concept 4: Nested Destructuring

const person = {
  name: "Yogesh",
  address: {
    city: "Delhi",
    pincode: 244001,
  },
};

const {
  address: { city, pincode },
} = person;

console.log(city); // Delhi
console.log(pincode); // 244001

//*************************************** */

const company = {
  name: "Tech Solutions",
  location: {
    country: "India",
    state: "Uttar Pradesh",
    zip: 201301,
    coordinates: {
      lat: 28.5,
      long: 77.3,
    },
  },
  employees: [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ],
};

// Hum chahte hain: company ka naam, state, latitude, aur pehle employee ka naam
const {
  name: companyName, // 'name' ko 'companyName' variable mein store karna
  location: {
    state, // 'location' ke andar se 'state' nikalna
    coordinates: { lat }, // 'location' ke andar 'coordinates' se 'lat' nikalna
  },
  employees: [{ name: firstEmployeeName }], // 'employees' array ke pehle object se 'name' nikalna
} = company;

console.log(companyName); // Output: Tech Solutions
console.log(state); // Output: Uttar Pradesh
console.log(lat); // Output: 28.5
console.log(firstEmployeeName); // Output: Alice

// Concept 5: Using with Arrays in Loops

const entries = [
  ["name", "Yogesh"],
  ["city", "Delhi"],
];

for (const [key, value] of entries) {
  console.log(`${key}: ${value}`);
}
