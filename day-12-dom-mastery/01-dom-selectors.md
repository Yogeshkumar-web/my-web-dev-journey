## 🔧 Topic: DOM Selectors

### 1️⃣ **Simple Analogy**

Soch lo ek _shopping mall_ hai. Is mall mein kai saari _shops_ hain (like divs, buttons, paragraphs). Agar tumhe ek specific shop dhoondhni ho — for example, jiska naam “Pizza Shop” hai ya jiska ek special ID number hai — toh tum ya toh uska naam loge, ID loge, ya uska type (like “food shops”) identify karoge.

👉 JavaScript ke world mein, ye mall = **DOM**, aur shops = **HTML elements**. Aur unhe dhoondhne ka process = **DOM Selectors**.

---

### 2️⃣ **Formal Definition**

> DOM Selectors are JavaScript methods that allow you to access and manipulate HTML elements in the Document Object Model (DOM).

DOM = Document Object Model → Webpage ka structure jo browser ke memory mein hota hai.

Selectors = Tarike jinse hum DOM ke elements ko "select" karte hain, so we can **read**, **change**, or **delete** them.

---

### 3️⃣ **Core Concepts & Code Examples**

Let’s explore the **most common selectors**:

---

#### ✅ 1. `getElementById()`

🧠 Selects a single element by its ID.

```html
<p id="myPara">Hello Yogee!</p>
```

```js
const para = document.getElementById("myPara");
console.log(para.textContent); // Hello Yogee!
```

---

#### ✅ 2. `getElementsByClassName()`

🧠 Selects **multiple** elements that share the same class. Returns an _HTMLCollection_ (array-like).

```html
<p class="info">This is line 1</p>
<p class="info">This is line 2</p>
```

```js
const infoItems = document.getElementsByClassName("info");
console.log(infoItems.length); // 2
```

---

#### ✅ 3. `getElementsByTagName()`

🧠 Selects elements based on their HTML tag name like `div`, `p`, `li`.

```html
<ul>
  <li>Item A</li>
  <li>Item B</li>
</ul>
```

```js
const listItems = document.getElementsByTagName("li");
console.log(listItems[0].textContent); // Item A
```

---

#### ✅ 4. `querySelector()`

🧠 Selects the **first matching** element using CSS selector syntax.

```html
<p class="highlight">First</p>
<p class="highlight">Second</p>
```

```js
const firstHighlight = document.querySelector(".highlight");
console.log(firstHighlight.textContent); // First
```

---

#### ✅ 5. `querySelectorAll()`

🧠 Selects **all matching** elements using CSS selector syntax. Returns a _NodeList_ (array-like).

```js
const allHighlights = document.querySelectorAll(".highlight");
allHighlights.forEach((el) => console.log(el.textContent));
// First
// Second
```

---

📌 **Bonus**: Convert `NodeList` or `HTMLCollection` to Array using:

```js
const items = Array.from(document.getElementsByClassName("info"));
```

---

### 4️⃣ **The "Why"**

✅ **Why DOM Selectors matter:**

- DOM selectors are the **first step** before doing anything with HTML using JavaScript.
- Without selecting the element, you can’t change it, read it, delete it, or attach events to it.
- Every button click, animation, form submission — starts by selecting an element.

✅ **Where you'll use them:**

- In any web application, even with React (initial understanding).
- Manipulating UI dynamically.
- Creating interactive features like dropdowns, modals, form validation, etc.

---

### 5️⃣ **Practical Project Idea**

👨‍💻 **Mini Project: "Color Changer"**

**Goal**: Create a simple page with 3 buttons: Red, Green, Blue. When you click a button, the background color of a box changes accordingly.

```html
<h2>Color Changer</h2>
<div id="colorBox" style="width: 200px; height: 100px; background: grey;"></div>
<button class="color-btn" id="red">Red</button>
<button class="color-btn" id="green">Green</button>
<button class="color-btn" id="blue">Blue</button>
```

```js
const box = document.getElementById("colorBox");
document.getElementById("red").onclick = () =>
  (box.style.backgroundColor = "red");
document.getElementById("green").onclick = () =>
  (box.style.backgroundColor = "green");
document.getElementById("blue").onclick = () =>
  (box.style.backgroundColor = "blue");
```

✅ Use: `getElementById()`

---

### 6️⃣ **Test Your Knowledge**

Answer the following before I share correct answers:

1. `getElementsByClassName()` kya return karta hai?
2. `querySelectorAll()` aur `getElementsByTagName()` mein kya farq hai?
3. Ek example HTML do jisme tum `getElementById()` ka use karoge.
4. `querySelector('.info')` kis element ko return karega agar DOM mein 3 `.info` class ke elements ho?
5. NodeList aur HTMLCollection mein ek key difference kya hai?
6. Kya `querySelectorAll()` se mile elements pe `.forEach()` use kar sakte hain?
7. Tumhe kisi element ka text change karna ho, kaunsa method use karoge?
8. CSS selector ke syntax mein `#id-name` aur `.class-name` ka kya matlab hota hai?
9. Kya `document.querySelector("div")` multiple divs return karega?
10. Agar tumhe HTML ka 4th paragraph select karna ho, toh kaunsa selector best hoga?

---

---

## NodeList Kya Hai?

JavaScript mein, jab aap DOM se elements ko query karte hain (yaani HTML document mein se elements dhundte hain), toh aksar aapko ek **NodeList** milta hai.

- **Definition:** NodeList ek **collection** (ya list) hai **DOM nodes** ki. Ismein elements (jaise `div`, `p`, `span`), text nodes, comment nodes, etc., shamil ho sakte hain.
- **Array-like Object:** NodeList ek **array nahin** hai, lekin yeh array jaisa dikhta aur behave karta hai. Iska matlab hai ki ismein `length` property hoti hai aur aap elements ko index (`[0]`, `[1]`) ke zariye access kar sakte hain, bilkul array ki tarah. Lekin ismein array ke saare methods (jaise `forEach`, `map`, `filter`, `pop`, `push`) **by default** nahin hote.

---

## NodeList Kab Banta Hai?

NodeList banne ke do mukhya tareeke hain:

1.  **`querySelectorAll()` Method:** Jab aap `document.querySelectorAll()` ka use karte hain, toh yeh hamesha ek **static NodeList** return karta hai.

    ```html
    <div id="container">
      <p class="item">Item 1</p>
      <p class="item">Item 2</p>
    </div>
    <p class="item">Item 3</p>
    ```

    ```javascript
    // JavaScript
    const items = document.querySelectorAll(".item");
    console.log(items); // Output: NodeList(3) [p.item, p.item, p.item]
    console.log(items.length); // Output: 3

    // Dynamically ek naya element add karte hain
    const newP = document.createElement("p");
    newP.classList.add("item");
    newP.textContent = "Item 4";
    document.getElementById("container").appendChild(newP);

    console.log(items.length); // Output: 3 (Ye static hai, naya element isme include nahi hoga)
    ```

2.  **Child Nodes Property:** Jab aap `parentNode.childNodes` property ko access karte hain, toh yeh ek **live NodeList** return karta hai.

    ```html
    <ul id="myList">
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
    </ul>
    ```

    ```javascript
    // JavaScript
    const list = document.getElementById("myList");
    const childNodes = list.childNodes; // Live NodeList

    console.log(childNodes); // Output: NodeList(7) [text, li, text, li, text, li, text]
    // Dhyan dein: Text nodes (whitespace, newlines) bhi count hote hain yahan!
    // isiliye length 3 li elements se zyada hai.

    // Ek naya list item add karte hain
    const newLi = document.createElement("li");
    newLi.textContent = "Four";
    list.appendChild(newLi);

    console.log(childNodes.length); // Output: 9 (Naya element isme include ho gaya!)
    ```

    **Note:** `parentNode.children` property ek **HTMLCollection** return karti hai, jo sirf element nodes ko contain karti hai (text ya comment nodes ko nahi). Yeh bhi live hota hai.

---

## Static NodeList vs. Live NodeList (Yeh Antar Bahut Zaroori Hai\!)

Yeh NodeList ka sabse important pehlu hai.

1.  **Static NodeList:**

    - **Definition:** Ek snapshot (tasveer) hai DOM ki us samay ki jab NodeList banayi gayi thi.
    - **Behaviour:** Agar aap NodeList banane ke baad DOM mein koi change karte hain (elements add/remove karte hain), toh **static NodeList update nahin hoga**. Woh apni purani state hi retain karega.
    - **Examples:** `document.querySelectorAll()`, `document.forms`, `document.images`.

2.  **Live NodeList:**

    - **Definition:** Ek live connection hai DOM se.
    - **Behaviour:** Agar aap NodeList banane ke baad DOM mein koi change karte hain (elements add/remove karte hain), toh **live NodeList automatically update ho jaata hai** us change ko reflect karne ke liye.
    - **Examples:** `parentNode.childNodes`.

---

## NodeList Par Iterate Kaise Karein?

Kyunki NodeList "array-like" hai lekin "array" nahin, aap ispar array methods seedhe apply nahin kar sakte (purane browsers mein). Lekin modern JavaScript mein yeh kaafi aasaan ho gaya hai:

1.  **`for...of` Loop (Recommended):**
    Yeh modern aur sabse readable tareeka hai iterate karne ka. Yeh `NodeList` (aur `HTMLCollection`) dono par kaam karta hai.

    ```javascript
    const items = document.querySelectorAll(".item");
    for (const item of items) {
      console.log(item.textContent);
    }
    ```

2.  **`forEach()` Method:**
    Modern browsers mein, `NodeList.prototype` mein `forEach` method bhi hota hai.

    ```javascript
    const items = document.querySelectorAll(".item");
    items.forEach((item) => {
      console.log(item.textContent);
    });
    ```

    **Important:** `HTMLCollection` mein `forEach` method **nahin** hota. Isliye `for...of` zyada universal hai jab DOM collections par iterate kar rahe hon.

3.  **Array mein Convert Karke (Legacy/Universal):**
    Agar aapko NodeList par array ke saare methods (`map`, `filter`, `reduce`, `pop`, `push` etc.) use karne hain, toh aap use pehle ek real array mein convert kar sakte hain.

    ```javascript
    const items = document.querySelectorAll(".item");

    // Method 1: Spread Operator (Modern, Preferred)
    const itemsArray1 = [...items];
    itemsArray1.map((item) => item.textContent.toUpperCase());

    // Method 2: Array.from() (Modern)
    const itemsArray2 = Array.from(items);
    itemsArray2.filter((item) => item.textContent.includes("1"));

    // Method 3: Array.prototype.slice.call() (Older but works universally)
    const itemsArray3 = Array.prototype.slice.call(items);
    ```
