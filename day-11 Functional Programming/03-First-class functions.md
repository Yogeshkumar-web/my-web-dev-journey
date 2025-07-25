## 🔹 1. Simple Analogy: "Pizza as a Function 🍕"

Soch lo tum ek Pizza restaurant ke owner ho. Tum pizza **khud kha sakte ho**, **dusre ko de sakte ho**, ya **kisi friend ko gift bhi kar sakte ho**.

👉 Yahaan pizza = function hai.

Jaise pizza ek **item** hai jise tum **store**, **pass**, ya **return** kar sakte ho...
**JavaScript me function bhi aise hi ek value hota hai** jise:

- Variable me store kiya ja sakta hai ✅
- Dusre function ko as an argument diya ja sakta hai ✅
- Function se return bhi kiya ja sakta hai ✅

---

## 🔹 2. Formal Definition

> **First-Class Functions** in JavaScript means:
>
> **Functions are treated as values**.
> They can be **stored in variables**, **passed as arguments**, and **returned from other functions** — **just like any other data type (string, number, object, etc.)**

---

## 🔹 3. Core Concepts & Code

### ✅ A. Functions can be stored in variables

```js
// Store a function in a variable
const greet = function () {
  console.log("Hello, Yogee!");
};

greet(); // ✅ Output: Hello, Yogee!
```

---

### ✅ B. Functions can be passed as arguments

```js
function sayHi() {
  console.log("Hi there!");
}

function executeFunction(fn) {
  // fn is a function passed as an argument
  fn();
}

executeFunction(sayHi); // ✅ Output: Hi there!
```

---

### ✅ C. Functions can be returned from other functions

```js
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2); // double is a function now
console.log(double(5)); // ✅ Output: 10
```

---

### ✅ D. Functions can be assigned to object properties or array elements

```js
const utils = {
  sayHello: function () {
    console.log("Namaste!");
  },
};

utils.sayHello(); // ✅ Output: Namaste!

const arr = [
  function () {
    return "I am inside array!";
  },
];
console.log(arr[0]()); // ✅ Output: I am inside array!
```

---

## 🔹 4. The "Why" — Importance of First-Class Functions

### ✅ Real-world Use Cases:

- **Callbacks**: Like in `setTimeout()`, `addEventListener()`, etc.
- **Higher-order functions** like `.map()`, `.filter()`, `.reduce()`
- **Functional Libraries** like `Lodash`, `RxJS`
- **Clean, reusable logic** (DRY principle)
- **Event handling**, **API processing**, and even **React components** are built using this principle.

💼 **In Industry Projects**, you'll:

- Pass logic as a parameter (callback hell, Promises, etc.)
- Return functions for configuration (like middleware in Express.js)
- Compose small functions together to build big features (functional composition)

---

## 🔹 5. Practical Project Idea 💡

### 🔧 Mini Project: **Function Toolkit**

**Goal:** Build a small utility page with buttons that trigger different messages using first-class functions.

**Features:**

- 3 buttons: "Greet", "Motivate", "Thank"
- Each button runs a function stored in an object or array.
- One common handler (`runAction(actionFn)`) that takes a function and runs it.

**HTML Example:**

```html
<button onclick="runAction(actions.greet)">Greet</button>
<button onclick="runAction(actions.motivate)">Motivate</button>
<button onclick="runAction(actions.thank)">Thank</button>

<script>
  const actions = {
    greet: () => alert("Hello, friend!"),
    motivate: () => alert("Keep learning, you're doing great!"),
    thank: () => alert("Thank you for trying this out!"),
  };

  function runAction(actionFn) {
    actionFn(); // Execute the function
  }
</script>
```

---

## 🔹 6. Test My Knowledge (Your Turn 🎯)

Answer the following questions based on what you just learned:

1. First-class functions ka kya matlab hai simple shabdon mein?

2. Kya function ko variable me store kiya ja sakta hai? Ek chhoti si example likho.

3. Function ko argument ke रूप में pass karne ka ek real-world use-case kya hai?

4. Niche diye gaye code ka output kya hoga?

   ```js
   function outer() {
     return function inner() {
       return "I came from outer!";
     };
   }

   const result = outer();
   console.log(result());
   ```

5. `.map()` function kis concept par based hota hai — object-oriented programming ya functional programming?

6. Agar ek function ko return karte ho kisi aur function se, usse kya kehte hain?

7. Kya tum function ko array ke andar rakh sakte ho? Ek example do.

8. JavaScript me functions kis type ki value hote hain? (Primitive ya non-primitive?)
