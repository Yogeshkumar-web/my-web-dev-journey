### **Manipulating Styles with the `style` Property and Changing CSS Dynamically**

The `style` property in JavaScript allows direct manipulation of an element's inline styles. This is useful for dynamically changing the appearance of elements on a webpage without needing to modify external stylesheets.

---

### **Key Points to Learn:**

1. **Accessing Styles:**

    - Use the `style` property to directly manipulate an element’s CSS properties.
    - Example:
        ```javascript
        const element = document.getElementById("box");
        element.style.backgroundColor = "blue";
        ```

2. **CSS Property Naming:**

    - JavaScript uses camelCase for CSS properties.
    - Example: `background-color` in CSS becomes `backgroundColor` in JavaScript.

3. **Dynamic Changes:**

    - You can modify multiple properties dynamically.
    - Example:
        ```javascript
        element.style.color = "white";
        element.style.fontSize = "20px";
        ```

4. **Resetting Styles:**

    - Setting a property to an empty string (`''`) removes the inline style.
    - Example:
        ```javascript
        element.style.color = ""; // Removes inline color style
        ```

5. **Accessing Computed Styles:**

    - Use `window.getComputedStyle()` for styles applied via external stylesheets or inherited styles.
    - Example:
        ```javascript
        const computedStyle = window.getComputedStyle(element);
        console.log(computedStyle.margin);
        ```

6. **Dynamic CSS Classes:**
    - While the `style` property changes inline styles, for reusable styles, dynamically adding/removing classes with `classList` is preferred.
    - Example:
        ```javascript
        element.classList.add("new-class");
        element.classList.remove("old-class");
        ```

---

### **Example Use Case: Toggling Visibility**

```javascript
const button = document.getElementById("toggle");
const box = document.getElementById("box");

button.addEventListener("click", () => {
    if (box.style.display === "none") {
        box.style.display = "block"; // Show the box
    } else {
        box.style.display = "none"; // Hide the box
    }
});
```

---

### **Top 10 Questions: Manipulating Styles with `style` Property and Changing CSS Dynamically**

1. **Basic Usage:**

    - How do you access and modify the inline style of an HTML element using JavaScript?

2. **CSS Property Syntax:**

    - Why is camelCase used for CSS properties in JavaScript? Provide examples.

3. **Multiple Properties:**

    - Write a script to change the `background-color`, `font-size`, and `color` of a `<div>` dynamically using JavaScript.

4. **Removing Inline Styles:**

    - How can you reset or remove a specific inline style property using the `style` property?

5. **Dynamic Classes vs Inline Styles:**

    - Why is it recommended to use `classList` for adding styles dynamically instead of the `style` property?

6. **Accessing Computed Styles:**

    - What is the difference between `element.style` and `window.getComputedStyle(element)`? When should you use each?

7. **Event-Driven Changes:**

    - Write a function that changes the border of an input field to red when it gains focus and resets it when it loses focus.

8. **Toggling Visibility:**

    - How can you dynamically toggle the visibility of an element using the `style` property?

9. **CSS Property Conversion:**

    - Convert the following CSS styles into their equivalent JavaScript `style` property format:
        - `margin-top`
        - `background-color`
        - `font-weight`

10. **Project Scenario:**
    - Write a JavaScript program to create a "Dark Mode" toggle button that dynamically changes the background and text color of the webpage using the `style` property.

---
