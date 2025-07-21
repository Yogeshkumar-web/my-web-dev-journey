## 🧠 1. Simple Analogy: “Drama Stage and Actors”

Soch ke dekho — ek **stage** hai jahan drama ho raha hai (yeh tumhara **JavaScript Engine** hai). Pehla scene start hota hai — sab actors (variables, functions) stage pe introduce kiye jaate hain. Director (engine) decide karta hai ki kaunsa actor kab enter karega aur kya bolega.

- Stage = **Global Execution Context**
- Actors = **Variables, Functions**
- Director = **JavaScript Engine**
- Script = **Your Code**
- Entry Time = **Memory Phase (Creation Phase)**
- Acting Time = **Execution Phase**

Pehle sab actors ko stage pe khada kar diya jaata hai bina unka dialogue bole (undefined), fir second phase mein unka role play hota hai.

---

## 📘 2. Formal Definition

> **Global Execution Context (GEC)** is the default environment in which JavaScript code starts executing. It consists of two main phases: the memory creation phase (where variables and functions are allocated in memory) and the execution phase (where code is run line by line).

---

## 🧩 3. Core Concepts & Code

### 📍 Concept 1: Code Execution in 2 Phases

#### 🔹 Phase 1: Memory Creation Phase (a.k.a. Creation Phase)

- JS engine scans the code.
- Allocates memory for:

  - Variables → initially set to `undefined`
  - Functions → actual function code is stored

#### 🔹 Phase 2: Code Execution Phase

- Code is executed line by line
- Variables get assigned real values
- Function calls are made

```js
// Global Execution Context created here

console.log(a); // Output: undefined
var a = 10;

console.log(b()); // Output: "Function Called"
function b() {
  return "Function Called";
}
```

#### 🧠 Explanation:

- `a` is hoisted → memory reserved with `undefined`
- `b` is hoisted → function definition is stored
- Later, `a` is assigned `10` in execution phase
- `b()` executes and returns the string

---

### 📍 Concept 2: Hoisting

**Hoisting** means variables and functions are moved to the top of their scope during the memory phase.

```js
console.log(x); // undefined
var x = 5;

sayHi(); // Hello
function sayHi() {
  console.log("Hello");
}
```

---

### 📍 Concept 3: Global Object & `this`

In the global context:

- `this` refers to **window** object (in browsers)
- All global variables become properties of the global object

```js
var name = "Yogesh";
console.log(window.name); // Yogesh
console.log(this.name); // Yogesh
```

---

## ❓ 4. The “Why” — Importance in Real-World Projects

- Yeh concept help karta hai debugging mein (especially `undefined`, hoisting, `ReferenceError`)
- `this` ka behavior samajhna zaroori hai React & Node projects ke liye
- Agar tum execution flow nahi samjhoge to bugs ka reason samajhna mushkil ho jaayega

🧠 _Example in real life:_

```js
console.log(user); // undefined instead of crashing
var user = getUserFromStorage();
```

Browser crash nahi karega because hoisting ne variable ko upar le jaa diya.

---

## 💡 5. Mini Project Idea: "Variable Inspector"

Banayo ek chhota sa JS app jo console pe dikhata hai:

- 3 variables (var, let, const)
- Unka hoisting behavior (console.log se pehle & baad)
- Ek simple function call

📁 Files: `index.html` + `script.js`

---

## 🧪 6. Test My Knowledge: (Answer these)

1. JavaScript code kitne phases mein execute hota hai?
2. Memory Creation Phase mein variables ka kya value hota hai?
3. Function expressions kya hoist hoti hain?
4. `this` keyword global context mein kiski taraf point karta hai?
5. `console.log(x); var x = 5;` — iska output kya hoga?
6. `let` aur `const` bhi hoist hote hain kya?
7. Function declarations aur function expressions mein kya fark hai hoisting ke maamle mein?
8. Agar tum function ko uske pehle call karte ho to kya hoga? (Assume it's declared using `function` keyword.)
9. JavaScript mein Global Execution Context kab banata hai?
10. Global object browser mein kya hota hai?
