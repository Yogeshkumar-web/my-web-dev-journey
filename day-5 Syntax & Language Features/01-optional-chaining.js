// Optional Chaining

// Optional Chaining (?.) ek JavaScript operator hai jo aapko nested object properties ya functions ko safely access karne deta hai bina runtime error diye, agar koi intermediate property null ya undefined ho.

// Core Concepts & Code

// 1.  Accessing Deep Properties Safely

const user = {
  name: "Yogesh",
  address: {
    city: "Delhi",
    zip: "244001",
  },
};

// Traditional (❌ May throw error)
console.log(user.address.city); // ✅
console.log(user.contact.email); // ❌ Error: Cannot read property 'email'

// Optional Chaining (✅ Safe)
console.log(user?.address?.city); // Delhi
console.log(user?.contact?.email); // undefined (no error)

// 2.  Optional Function Calls

const user1 = {
  sayHello: () => "Hello Yogesh!",
};

// Function exists
console.log(user1.sayHello?.()); // Hello Yogesh!

// Function missing
const user2 = {};
console.log(user2.sayHello?.()); // undefined (no error)

// 3. Optional Array Access

const users = [{ name: "Yogesh", age: 30 }, null, { name: "Ravi", age: 25 }];

// Access safely
console.log(users[1]?.name); // undefined (no error)
console.log(users[2]?.name); // Ravi

// 3.  Optional Chaining with Dynamic Keys

const config = {
  settings: {
    darkMode: true,
  },
};

const key = "darkMode";

console.log(config?.settings?.[key]); // true
console.log(config?.theme?.[key]); // undefined (no error)
