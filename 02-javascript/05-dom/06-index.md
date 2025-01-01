### **Key Concepts: DOM Manipulation, Querying Elements, Modifying Styles and Content**

Here’s an overview of the key concepts for this topic:

#### 1. **DOM Manipulation**

-   The DOM (Document Object Model) is a tree-like structure representing HTML elements.
-   JavaScript provides methods to interact with and modify the DOM dynamically.
-   **Common DOM Manipulation Methods:**
    -   `appendChild()`
    -   `removeChild()`
    -   `insertBefore()`
    -   `replaceChild()`

#### 2. **Querying Elements**

-   **Methods to Access Elements:**

    -   `document.getElementById(id)` - Retrieves an element by its `id`.
    -   `document.querySelector(selector)` - Selects the first matching element based on a CSS selector.
    -   `document.querySelectorAll(selector)` - Returns a NodeList of all matching elements for a CSS selector.

-   **Choosing Methods:**
    -   Use `getElementById` for precise `id` targeting (fastest).
    -   Use `querySelector` and `querySelectorAll` for flexible CSS-style selectors.

#### 3. **Modifying Styles and Content**

-   **Modifying Content:**

    -   `innerHTML` - Updates HTML content of an element (can introduce security risks if not sanitized).
    -   `textContent` - Updates text content (safer for plain text).
    -   `value` - Updates or retrieves input field values.

-   **Modifying Styles:**
    -   Use the `style` property to directly manipulate an element’s CSS properties:
        ```javascript
        element.style.color = "blue";
        element.style.backgroundColor = "lightgray";
        ```

#### 4. **Event-driven Manipulation**

-   DOM changes are often triggered by events (e.g., clicks, form submissions).
-   Example:
    ```javascript
    document.querySelector("button").addEventListener("click", () => {
        document.querySelector("p").textContent = "Text updated!";
    });
    ```

---

### **Top 10 Questions for This Topic**

1. **What is the DOM, and why is it important in web development?**
2. **How does the `querySelector()` method differ from `getElementById()`? Provide examples.**
3. **What are the differences between `innerHTML` and `textContent` when modifying element content?**
4. **How can you dynamically add CSS styles to an element using JavaScript? Provide a code example.**
5. **What are the risks of using `innerHTML` for updating content, and how can they be mitigated?**
6. **Write a script to select all `li` elements within a `ul` and change their background color to yellow.**
7. **How can you retrieve the value entered in a text input field? Provide a code example.**
8. **Explain how `querySelectorAll()` works and when you would use it over `querySelector()`.**
9. **How can you remove the styling of an element dynamically? Provide an example.**
10. **Write a script to add a new paragraph element with custom text and styles to a `div`.**
