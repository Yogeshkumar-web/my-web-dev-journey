## ✅ 1. **Simple Analogy (Real Life Example)**

**Socho ek grocery store ka basket (array)**:

- 🛒 Basket mein 5 items hain: apple, banana, mango, grapes, pineapple.
- Ab aapko:

  - **`map()`** se har fruit ka naam capital letters mein karna hai.
  - **`filter()`** se sirf wo fruits chahiye jinmein "a" hai.
  - **`reduce()`** se total characters count karna hai fruits ke naam ka.

Samjhe? Basket se values nikal ke transform, chhantna, aur summarise karna – यही करते हैं ये methods.

---

## ✅ 2. **Formal Definitions**

- **`map()`**: Returns a new array after applying a function to every element of the original array.
- **`filter()`**: Returns a new array containing only those elements that pass a condition (return `true` in callback).
- **`reduce()`**: Returns a single value by applying a function on each element of the array and accumulating the result.

---

## ✅ 3. **Core Concepts & Code Examples**

---

### 🔹 `map()` – Transform Each Element

```js
const numbers = [1, 2, 3, 4];

// Double every number
const doubled = numbers.map((num) => {
  return num * 2;
});

console.log(doubled); // [2, 4, 6, 8]
```

🧠 **Concept**: map ek _nayi array return karta hai_ after applying the function on each item.

---

### 🔹 `filter()` – Select Elements Based on Condition

```js
const numbers = [10, 25, 30, 45];

// Get numbers > 25
const filtered = numbers.filter((num) => {
  return num > 25;
});

console.log(filtered); // [30, 45]
```

🧠 **Concept**: filter bhi _nayi array return karta hai_ but sirf un elements ka jo condition ko pass karte hain.

---

### 🔹 `reduce()` – Combine Array into Single Value

```js
const numbers = [5, 10, 15];

// Add all numbers
const total = numbers.reduce((accumulator, current) => {
  return accumulator + current;
}, 0); // 0 is initial value of accumulator

console.log(total); // 30
```

🧠 **Concept**: reduce ek _single value return karta hai_. Har step mein accumulator update hota hai.

---

## ✅ 4. **The "Why" – Industry Relevance**

Yeh teen methods industry mein har React, Node, ya Next.js project mein heavily use hote hain:

- **`map()`**: UI rendering (React mein `.map()` se list banate ho)
- **`filter()`**: Search & filter features implement karne ke liye
- **`reduce()`**: Aggregations, like total cart price, votes count, etc.

**Code readability bhi improve hoti hai** inke use se, aur imperative loops (for/while) avoid ho jaate hain.

---

## ✅ 5. **Mini Project Idea (Basic Level)**

**🛍️ Project: Shopping Cart Total Price Calculator**

**Use:**

- HTML form se user items ka price daale.
- JS mein array mein prices store karo.
- Use `map()` to apply discount.
- Use `filter()` to remove items > ₹1000.
- Use `reduce()` to calculate total bill.

Yeh sab aap browser console par easily kar sakte ho bina kisi framework ke.

---

## ✅ 6. **Test Your Knowledge (Your Turn)**

Mujhe har ek ka answer do, fir mai correct answers dunga:

1. `map()` kis type ka value return karta hai?
2. Kya `filter()` original array ko modify karta hai?
3. `reduce()` ke callback function mein pehla parameter kya hota hai?
4. `filter()` kab true return karta hai?
5. Is line ka output kya hoga:

   ```js
   [1, 2, 3].map((n) => n * 3);
   ```

6. Shopping cart array `[100, 500, 1200, 200]` mein se sirf ₹1000 se kam items ko kaise nikaaloge?
7. Reduce use karke `[1, 2, 3, 4]` ka total kaise nikaaloge?
8. React mein `.map()` ka use kis common scenario mein hota hai?
9. Kya `reduce()` ek array return karta hai?
10. `map()` aur `forEach()` mein key difference kya hai?
