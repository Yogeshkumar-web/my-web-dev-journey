### **Event Listeners and `addEventListener()`**

Event listeners allow JavaScript to monitor and respond to events that occur on elements, such as clicks, keyboard inputs, mouse movements, and more. The `addEventListener()` method is a modern and flexible way to attach event handlers to elements.

---

### **What is `addEventListener()`?**

The `addEventListener()` method attaches an event listener to an element without overwriting any existing listeners. It listens for a specific event and executes a provided callback function when that event occurs.

#### **Syntax:**

```javascript
element.addEventListener(eventType, callback, useCapture);
```

1. **eventType**: The type of event to listen for (e.g., `"click"`, `"keydown"`, `"mouseover"`).
2. **callback**: The function to execute when the event occurs.
3. **useCapture** (optional): A boolean that specifies the event's phase (`true` for capturing phase, `false` for bubbling phase; default is `false`).

---

### **Advantages of `addEventListener()`**

-   Allows multiple event listeners on the same element.
-   Maintains separation of HTML and JavaScript (unlike inline handlers).
-   Provides more control, such as options for the event's phase.

---

### **Examples**

#### **Attaching a Click Event**

```javascript
const button = document.querySelector("button");
button.addEventListener("click", () => {
    console.log("Button clicked!");
});
```

#### **Listening for Key Presses**

```javascript
document.addEventListener("keydown", (event) => {
    console.log(`Key pressed: ${event.key}`);
});
```

#### **Removing an Event Listener**

You can remove an event listener using `removeEventListener()`. The callback function must be named to do this.

```javascript
function logClick() {
    console.log("Button clicked!");
}

button.addEventListener("click", logClick);
button.removeEventListener("click", logClick); // Listener removed
```

#### **Handling Events on Multiple Elements**

Using loops or array methods, you can attach listeners to multiple elements.

```javascript
const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("A button was clicked!");
    });
});
```

#### **Using Event Options**

Options like `once` and `passive` can be passed as the third parameter.

```javascript
button.addEventListener(
    "click",
    () => {
        console.log("This will only log once!");
    },
    { once: true }
);
```

---

### **Key Concepts**

1. **Bubbling vs Capturing**  
   By default, events bubble up from the target element to its ancestors. You can change this behavior by setting the `useCapture` parameter.

2. **Event Delegation**  
   Attach a single listener to a parent element to handle events on its children. This is efficient for dynamically added elements.
    ```javascript
    document.querySelector("#parent").addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            console.log("A button was clicked!");
        }
    });
    ```

---

### **Top 10 Questions to Master This Topic**

1. **What is the `addEventListener()` method, and how does it differ from inline event handlers?**
2. **How can you attach multiple event listeners to a single element without overwriting them?**
3. **Explain the difference between the event's capturing and bubbling phases.**
4. **How can you use the `removeEventListener()` method? Provide an example.**
5. **What are the benefits of using `addEventListener()` over inline event handlers?**
6. **Write a script to log a message when any button inside a container is clicked.**
7. **What are the optional parameters of `addEventListener()`, and how do they work?**
8. **How can you handle dynamically added elements using event delegation?**
9. **Demonstrate how to attach a `click` event that automatically removes itself after execution.**
10. **How does the `passive` option in `addEventListener()` improve performance for scroll events?**
