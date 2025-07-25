## 1. 🧠 Simple Analogy (Real-World Example)

**🎉 Imagine ek shaadi ka function hai**. Usme 100 log aaye hain. Har kisi ko ek plate deni hai.

**Option 1:** Har guest ko individually jakar waiter plate de (100 logon ke liye 100 baar mehnat)

**Option 2:** Waiter sirf main gate par khada ho jaye, aur jo bhi guest aaye, usko wahi plate de de. Efficient, right?

🔁 Isi concept ko hum JavaScript mein **Event Delegation** kehte hain.

---

## 2. 📘 Formal Definition

### Event Bubbling:

> Jab ek event kisi child element par trigger hota hai, toh wo event automatically apne parent elements tak "bubble" karta hai — jaise ek paani ka bulb bubble karta hai upar ki taraf.

### Event Delegation:

> Event delegation ek technique hai jisme hum kisi parent element par event listener lagate hain, aur fir event bubbling ka use karke child elements ke events ko handle karte hain — bina har child ke upar individual listener lagaye.

---

## 3. ⚙️ Core Concepts & Code Examples

### ✅ Event Bubbling Explained

```html
<div id="parent">
  <button id="child">Click Me</button>
</div>
```

```javascript
document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});
```

**🧠 Output when you click the button:**

```
Child clicked
Parent clicked
```

👉 Kyun? Kyunki event bubble hota hai from child to parent.

---

### ✅ Event Delegation in Action

```html
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

```javascript
document.getElementById("list").addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log("Clicked on:", event.target.textContent);
  }
});
```

### 🔍 Explanation:

- Humne `<ul>` (parent) par event listener lagaya.
- Jab bhi koi `<li>` click hota hai, event bubble hota hai `<ul>` tak.
- `event.target` check karta hai kis element ko click kiya gaya tha.

💡 **No need to add listener on every `<li>`**, even if more `<li>`s are added dynamically.

---

## 4. 🎯 The "Why" — Importance in Real-World Development

### ✅ Why it's important:

- Performance-friendly: Fewer event listeners.
- Works even for dynamically added elements.
- Makes your code cleaner and more maintainable.

### ✅ Use Cases:

- Dropdowns
- Dynamic form fields
- Click handling in to-do lists
- Event handling in tables, modals, etc.

---

## 5. 🛠️ Mini Project: "Dynamic To-Do List with Event Delegation"

### ✨ Objective:

Create a `<ul>` list where user can:

- Add a new `<li>` by typing a task and clicking "Add"
- Delete a task by clicking on the task text (using delegation)

**Bonus:** You’ll not add listeners to each `<li>`, only one on `<ul>`

```html
<input type="text" id="taskInput" placeholder="Enter task" />
<button id="addBtn">Add</button>
<ul id="taskList"></ul>
```

```javascript
document.getElementById("addBtn").addEventListener("click", () => {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();

  if (task !== "") {
    const li = document.createElement("li");
    li.textContent = task;
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
  }
});

document.getElementById("taskList").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.remove(); // delete clicked task
  }
});
```

🧠 Apply kiya Event Delegation! Efficient and clean.

---

## 6. ✅ Test Your Knowledge

Answer these one by one before I give you the correct answers:

1. Event bubbling kya hota hai, simple terms mein?
2. Event.target ka kya role hota hai event delegation mein?
3. Agar mere paas 50 buttons hain ek div ke andar, toh har button pe alag listener lagana better hai ya div pe ek? Kyun?
4. Event capturing aur bubbling mein kya farak hai?
5. Event delegation ke 2 real-world use cases batao.
6. Event bubbling kis order mein kaam karta hai: top-to-bottom ya bottom-to-top?
7. Event delegation tab kaam karega jab event \_\_\_\_ karega (fill in the blank).
8. Kya event delegation React mein bhi kaam karta hai? Agar haan, kaise?
9. `e.stopPropagation()` ka kya kaam hota hai?
10. List item delete karne ke liye humne kis condition ko check kiya tha click event mein?
