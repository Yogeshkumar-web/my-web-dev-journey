### **Key Concepts: Event Handling, Event Listeners, Event Propagation**

#### **1. Event Handling**

Event handling refers to the process of responding to user actions like clicks, key presses, form submissions, or mouse movements on a webpage. This is achieved through JavaScript by defining functions (event handlers) that execute when specific events occur.

#### **2. Event Listeners**

Event listeners are methods in JavaScript used to attach event handlers to elements. The most common way is through the `addEventListener()` method.

**Syntax:**

```javascript
element.addEventListener(event, handler, useCapture);
```

-   `event`: The type of event (e.g., "click", "submit").
-   `handler`: The function to execute when the event occurs.
-   `useCapture` (optional): A boolean indicating if the event should be captured in the capturing phase.

**Example:**

```javascript
document.getElementById("button").addEventListener("click", () => {
    console.log("Button clicked!");
});
```

#### **3. Event Propagation**

Event propagation describes how events flow through the DOM in two phases:

1. **Capturing Phase**: The event starts from the root element and moves down to the target.
2. **Bubbling Phase**: The event starts from the target and propagates back up to the root.

By default, most events use the bubbling phase. However, you can specify capturing by setting the `useCapture` parameter in `addEventListener()` to `true`.

**Example: Bubbling vs Capturing**

```html
<div id="parent">
    <button id="child">Click Me</button>
</div>

<script>
    document.getElementById("parent").addEventListener(
        "click",
        () => console.log("Parent clicked!"),
        false // Bubbling (default)
    );

    document.getElementById("child").addEventListener(
        "click",
        () => console.log("Child clicked!"),
        true // Capturing
    );
</script>
```

---

### **Important Methods for Event Handling**

1. **`addEventListener()`**: Attaches an event listener.
2. **`removeEventListener()`**: Removes an event listener.
3. **`event.preventDefault()`**: Prevents the default browser action.
4. **`event.stopPropagation()`**: Stops the event from propagating further.
5. **`stopImmediatePropagation()`**: Prevents further propagation and disables other event listeners on the same element.

---

### **Examples of Event Propagation**

#### Example 1: Bubbling

```html
<div id="outer">
    <div id="inner">Click Me</div>
</div>

<script>
    document.getElementById("outer").addEventListener("click", () => {
        console.log("Outer div clicked!");
    });

    document.getElementById("inner").addEventListener("click", () => {
        console.log("Inner div clicked!");
    });
</script>
```

**Output (when clicking "Click Me"):**

```
Inner div clicked!
Outer div clicked!
```

#### Example 2: Preventing Propagation

```javascript
document.getElementById("inner").addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("Inner div clicked!");
});
```

**Output (when clicking "Click Me"):**

```
Inner div clicked!
```

---

### **Key Questions**

1. **What is the purpose of `addEventListener()` in JavaScript?**
2. **Explain the difference between the capturing and bubbling phases of event propagation.**
3. **How can you prevent a form submission using `event.preventDefault()`?**
4. **What does the `useCapture` parameter do in `addEventListener()`?**
5. **Describe a real-world scenario where `stopPropagation()` would be necessary.**
6. **What is the difference between `stopPropagation()` and `stopImmediatePropagation()`?**
7. **How would you attach multiple event listeners to the same element?**
8. **Write a script that handles a click event on a button and stops it from propagating to its parent.**
9. **What is the default behavior of events in JavaScript: bubbling or capturing?**
10. **Can you use `removeEventListener()` without defining a named function for the handler? Why or why not?**

### **Key Concepts: Event Handling, Event Listeners, Event Propagation**

#### **1. Event Handling**

Event handling refers to the process of responding to user actions like clicks, key presses, form submissions, or mouse movements on a webpage. This is achieved through JavaScript by defining functions (event handlers) that execute when specific events occur.

#### **2. Event Listeners**

Event listeners are methods in JavaScript used to attach event handlers to elements. The most common way is through the `addEventListener()` method.

**Syntax:**

```javascript
element.addEventListener(event, handler, useCapture);
```

-   `event`: The type of event (e.g., "click", "submit").
-   `handler`: The function to execute when the event occurs.
-   `useCapture` (optional): A boolean indicating if the event should be captured in the capturing phase.

**Example:**

```javascript
document.getElementById("button").addEventListener("click", () => {
    console.log("Button clicked!");
});
```

#### **3. Event Propagation**

Event propagation describes how events flow through the DOM in two phases:

1. **Capturing Phase**: The event starts from the root element and moves down to the target.
2. **Bubbling Phase**: The event starts from the target and propagates back up to the root.

By default, most events use the bubbling phase. However, you can specify capturing by setting the `useCapture` parameter in `addEventListener()` to `true`.

**Example: Bubbling vs Capturing**

```html
<div id="parent">
    <button id="child">Click Me</button>
</div>

<script>
    document.getElementById("parent").addEventListener(
        "click",
        () => console.log("Parent clicked!"),
        false // Bubbling (default)
    );

    document.getElementById("child").addEventListener(
        "click",
        () => console.log("Child clicked!"),
        true // Capturing
    );
</script>
```

---

### **Important Methods for Event Handling**

1. **`addEventListener()`**: Attaches an event listener.
2. **`removeEventListener()`**: Removes an event listener.
3. **`event.preventDefault()`**: Prevents the default browser action.
4. **`event.stopPropagation()`**: Stops the event from propagating further.
5. **`stopImmediatePropagation()`**: Prevents further propagation and disables other event listeners on the same element.

---

### **Examples of Event Propagation**

#### Example 1: Bubbling

```html
<div id="outer">
    <div id="inner">Click Me</div>
</div>

<script>
    document.getElementById("outer").addEventListener("click", () => {
        console.log("Outer div clicked!");
    });

    document.getElementById("inner").addEventListener("click", () => {
        console.log("Inner div clicked!");
    });
</script>
```

**Output (when clicking "Click Me"):**

```
Inner div clicked!
Outer div clicked!
```

#### Example 2: Preventing Propagation

```javascript
document.getElementById("inner").addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("Inner div clicked!");
});
```

**Output (when clicking "Click Me"):**

```
Inner div clicked!
```

---

### **Key Questions**

1. **What is the purpose of `addEventListener()` in JavaScript?**
2. **Explain the difference between the capturing and bubbling phases of event propagation.**
3. **How can you prevent a form submission using `event.preventDefault()`?**
4. **What does the `useCapture` parameter do in `addEventListener()`?**
5. **Describe a real-world scenario where `stopPropagation()` would be necessary.**
6. **What is the difference between `stopPropagation()` and `stopImmediatePropagation()`?**
7. **How would you attach multiple event listeners to the same element?**
8. **Write a script that handles a click event on a button and stops it from propagating to its parent.**
9. **What is the default behavior of events in JavaScript: bubbling or capturing?**
10. **Can you use `removeEventListener()` without defining a named function for the handler? Why or why not?**
