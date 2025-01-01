### **Understanding Event Bubbling and Capturing in JavaScript**

When an event occurs on a DOM element, it doesn't just trigger that element—it can also trigger events on its ancestors. This behavior is explained by **event propagation**, which occurs in two main phases: **bubbling** and **capturing**.

---

### **Event Propagation Phases**

1. **Capturing Phase (Event Capturing)**  
   The event starts from the window object and travels down the DOM tree to the target element. This is called the **capturing phase** or **trickling phase**.

    - Capturing phase happens first.
    - Least commonly used in practice.

2. **Target Phase**  
   When the event reaches the actual element that triggered it, this is the **target phase**.

    - Event listeners registered specifically for the target element execute here.

3. **Bubbling Phase (Event Bubbling)**  
   After the event is handled at the target element, it propagates back up the DOM tree to the window. This is called the **bubbling phase**.
    - This phase is more commonly used in JavaScript for event handling.

---

### **Default Behavior: Bubbling**

By default, events bubble. For example, if you click on a child element, the click event is triggered first on the child and then propagates upward to its parent, grandparent, and so on.

#### Example of Event Bubbling

```html
<div id="parent">
    <button id="child">Click Me</button>
</div>

<script>
    document.getElementById("parent").addEventListener("click", () => {
        console.log("Parent clicked!");
    });

    document.getElementById("child").addEventListener("click", () => {
        console.log("Child clicked!");
    });
</script>
```

**Output (when clicking the button):**

```
Child clicked!
Parent clicked!
```

---

### **Using the Capturing Phase**

To use the capturing phase, you need to pass a third parameter (`useCapture`) as `true` in `addEventListener()`.

#### Example of Capturing Phase

```html
<div id="parent">
    <button id="child">Click Me</button>
</div>

<script>
    document.getElementById("parent").addEventListener(
        "click",
        () => {
            console.log("Parent clicked during capturing phase!");
        },
        true // Enables capturing
    );

    document.getElementById("child").addEventListener("click", () => {
        console.log("Child clicked!");
    });
</script>
```

**Output (when clicking the button):**

```
Parent clicked during capturing phase!
Child clicked!
```

---

### **Stopping Event Propagation**

1. **`stopPropagation()`**  
   Stops the event from propagating further in either direction (bubbling or capturing).

    ```javascript
    document.getElementById("child").addEventListener("click", (event) => {
        console.log("Child clicked!");
        event.stopPropagation();
    });
    ```

2. **`stopImmediatePropagation()`**  
   Stops the event from triggering other listeners on the same element in addition to stopping propagation.
    ```javascript
    document.getElementById("child").addEventListener("click", (event) => {
        console.log("Child clicked!");
        event.stopImmediatePropagation();
    });
    ```

---

### **Practical Use Cases**

-   **Capturing Phase**: Useful for intercepting events before they reach the target (e.g., logging all clicks across a site).
-   **Bubbling Phase**: Commonly used for event delegation.

#### Event Delegation Example

Using bubbling to handle clicks on multiple dynamically generated child elements:

```javascript
document.getElementById("parent").addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        console.log("Button clicked:", event.target.textContent);
    }
});
```

---

### **Key Points to Remember**

1. Events propagate through both the capturing and bubbling phases by default.
2. The `addEventListener()` method defaults to the bubbling phase unless explicitly set to capturing.
3. Use `stopPropagation()` to prevent propagation of events.

---

### **Top 10 Questions to Master This Topic**

1. **What are the three phases of event propagation?**
2. **What is the difference between the capturing and bubbling phases?**
3. **What is the default phase used by `addEventListener()` in JavaScript?**
4. **How do you enable capturing in the `addEventListener()` method?**
5. **Write a script to demonstrate event bubbling with nested elements.**
6. **What is `stopPropagation()`, and how does it affect event propagation?**
7. **How does `stopImmediatePropagation()` differ from `stopPropagation()`?**
8. **Explain the practical use cases for capturing and bubbling.**
9. **How can you use event delegation to manage events for dynamically created elements?**
10. **What is the significance of the `event.target` property during event propagation?**
