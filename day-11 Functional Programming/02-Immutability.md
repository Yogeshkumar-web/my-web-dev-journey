## 🔥 Functional Programming Intro: **Immutability**

---

### ✅ 1. Simple Analogy:

**“Doodh se dahi ban gaya, lekin dahi ko wapas doodh nahi bana sakte.”**
Ek baar kisi cheez ka state badal gaya, toh original state wapas nahi aata — yahi concept hai **immutability** ka.

Imagine tum ek **rubber stamp** se paper pe print kar rahe ho. Har baar stamp wahi shape deta hai, par paper badal jaata hai. Stamp kabhi change nahi hota.

> "Stamp" is immutable, "paper" is the changed output.

---

### ✅ 2. Formal Definition:

**Immutability** ka matlab hai **ek baar kisi variable/object ko assign kar diya gaya value ya state, usse directly modify nahi karna**.
Instead, agar kuch change karna ho, toh **naya copy banao** purane ka — aur nayi value return karo.

In Functional Programming, this is a core principle.
It leads to **predictable code, fewer bugs, and easier debugging**.

---

### ✅ 3. Core Concepts & Code Examples:

#### 📌 1. **Primitive values are immutable:**

```js
let a = 10;
let b = a;
b = b + 5;

console.log(a); // 🔹 10 (original doesn't change)
console.log(b); // 🔹 15
```

👉 `a` ka value change nahi hua. Primitive types (number, string, boolean) **copy by value** hote hain.

---

#### 📌 2. **Objects & Arrays are mutable by default (but we avoid mutation):**

```js
const user = {
  name: "Yogee",
  age: 22,
};

// ❌ Direct mutation
user.age = 23;
```

✅ **Immutably update karna ho toh:**

```js
const updatedUser = { ...user, age: 23 };
console.log(updatedUser); // 🔹 { name: "Yogee", age: 23 }
console.log(user); // 🔹 Original user still same
```

---

#### 📌 3. **Immutable Array Updates:**

```js
const numbers = [1, 2, 3];

// ✅ Add item immutably
const newNumbers = [...numbers, 4];
console.log(newNumbers); // [1,2,3,4]

// ✅ Remove item immutably
const filtered = numbers.filter((num) => num !== 2);
console.log(filtered); // [1,3]
```

---

#### 📌 4. **Immutability in Functions:**

Avoid functions that mutate input parameters.

```js
// ❌ BAD: Mutating input array
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
```

---

### ✅ 4. The "Why" – _Why Immutability Matters_

📌 **1. Predictable Code** – Jab data change nahi hota, toh bugs track karna easy hota hai.
📌 **2. Easier Debugging** – Old data remains safe, so you can compare before/after easily.
📌 **3. Undo/Redo Functionality** – History manage karne ke liye perfect hai (like in Notion, Google Docs).
📌 **4. React/Redux/Next.js** – State management me **immutability mandatory hai**.
📌 **5. Functional Purity** – Immutability ensures that functions don’t produce side-effects.

---

### ✅ 5. Practical Project Idea – _Mini Challenge_

🎯 **Mini Project: Todo List with Immutable Updates**
👉 Requirements:

- Show a list of tasks
- Add a new task (without mutating the array)
- Remove a task (immutably using `filter`)

> Use basic HTML + JavaScript (no frameworks). If you'd like, I can help you start this!

---

### ✅ 6. Test My Knowledge (Answer in Chat):

**Q1.** Immutability ka simple real-world example kya ho sakta hai?
**Q2.** Arrays ko immutably update karne ke 2 JS methods kaunse hain?
**Q3.** `const user = { name: "Yogee", age: 22 }` → `age` ko 23 karna hai immutably. Kaise karoge?
**Q4.** React me state ko mutate karna kyun risky hai?
**Q5.** Primitive vs Object values ke beech me immutability ka kya difference hota hai?
**Q6.** Kya `Array.prototype.push()` immutable method hai? Why or why not?
**Q7.** Immutability kis tarah "Undo feature" banana easy banaata hai?
**Q8.** Function me input mutate karne se kya dikkat hoti hai?
**Q9.** `filter()` method original array ko mutate karta hai kya?
**Q10.** Ek function likho jo kisi string array me ek naya string immutably add kare.
