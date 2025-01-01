### **Preventing Default Behavior and Stopping Propagation**

In JavaScript, events triggered by user actions like clicks, form submissions, or key presses can have default behaviors defined by the browser. For example:

-   Clicking a link (`<a>`): Navigates to the specified `href`.
-   Submitting a form: Sends form data to the specified `action` URL.
-   Right-clicking: Opens the context menu.

JavaScript provides methods to **prevent default behaviors** and control how events propagate through the DOM.

---

### **1. `event.preventDefault()`**

The `event.preventDefault()` method **prevents the browser's default action** for a given event.

-   Example: Preventing a link from navigating or a form from submitting.

#### Example: Preventing Link Navigation

```html
<a href="https://example.com" id="link">Click Me</a>

<script>
    document.getElementById("link").addEventListener("click", (event) => {
        event.preventDefault(); // Prevents navigation
        console.log("Link clicked, but navigation prevented.");
    });
</script>
```

#### Example: Preventing Form Submission

```html
<form id="form">
    <input type="text" placeholder="Enter text" required />
    <button type="submit">Submit</button>
</form>

<script>
    document.getElementById("form").addEventListener("submit", (event) => {
        event.preventDefault(); // Prevents form submission
        console.log("Form submission prevented.");
    });
</script>
```

---

### **2. `event.stopPropagation()`**

The `event.stopPropagation()` method **stops the event from propagating further** during both the bubbling and capturing phases.

-   Use it when you want an event to be handled only by the target element.

#### Example: Stopping Propagation

```html
<div id="parent">
    <button id="child">Click Me</button>
</div>

<script>
    document.getElementById("parent").addEventListener("click", () => {
        console.log("Parent clicked!");
    });

    document.getElementById("child").addEventListener("click", (event) => {
        event.stopPropagation(); // Stops the event from reaching the parent
        console.log("Child clicked!");
    });
</script>
```

**Output (when clicking the button):**

```
Child clicked!
```

---

### **3. Combining `preventDefault()` and `stopPropagation()`**

Sometimes, you may want to both prevent a default action and stop propagation.

#### Example: Preventing Form Submission and Stopping Propagation

```html
<div id="container">
    <form id="form">
        <input type="text" placeholder="Enter text" required />
        <button type="submit">Submit</button>
    </form>
</div>

<script>
    document.getElementById("form").addEventListener("submit", (event) => {
        event.preventDefault(); // Prevents submission
        event.stopPropagation(); // Stops the event from bubbling
        console.log("Form submission prevented and propagation stopped.");
    });

    document.getElementById("container").addEventListener("click", () => {
        console.log("Container clicked!");
    });
</script>
```

**Output (when clicking the "Submit" button):**

```
Form submission prevented and propagation stopped.
```

---

### **Use Cases**

1. **`preventDefault()`**:

    - Stop a link from navigating to another page.
    - Prevent form submission to allow custom validation.
    - Suppress the default right-click menu.

2. **`stopPropagation()`**:

    - Ensure only the intended element's event handler executes.
    - Prevent ancestor elements from handling an event unintentionally.

3. **Combining Both**:
    - Prevent a form from submitting while also ensuring no other event handlers execute for the ancestors.

---

### **Key Points to Remember**

1. `event.preventDefault()` only prevents the browser's default action; it doesn’t affect event propagation.
2. `event.stopPropagation()` halts propagation during both capturing and bubbling phases.
3. To fully control an event, use both methods together when necessary.

---

### **Top 10 Questions to Master This Topic**

1. **What is `event.preventDefault()` used for in JavaScript? Provide an example.**
2. **Explain how `event.stopPropagation()` works and when you should use it.**
3. **What is the difference between `preventDefault()` and `stopPropagation()`?**
4. **How would you prevent a link from navigating to its `href` using JavaScript?**
5. **Write a script to prevent form submission and log a message to the console.**
6. **In which situations would you combine `preventDefault()` and `stopPropagation()`?**
7. **What happens if you use `stopPropagation()` on a child element’s event but do not use it on the parent?**
8. **Demonstrate the difference between using `stopPropagation()` and `stopImmediatePropagation()`.**
9. **What are the limitations of `preventDefault()` when dealing with custom events?**
10. **How can you use `preventDefault()` to suppress the default right-click context menu on a webpage?**
