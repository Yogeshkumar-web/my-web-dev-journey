### **Applying Styles to HTML Elements Using Selectors, Classes, and IDs**

CSS selectors are the foundation of styling in web development. They allow you to target HTML elements and apply styles. You can use **selectors**, **classes**, and **IDs** depending on how specific or reusable your styling needs to be.

---

### **1. Styling with Type Selectors (Tag Selectors)**

Type selectors apply styles to all elements of a specific HTML tag.

#### **Example**

```html
<style>
    p {
        color: blue;
        font-size: 16px;
    }
</style>
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```

-   Here, all `<p>` elements are styled with blue text and a font size of 16px.

---

### **2. Styling with Classes**

Classes are reusable and can be applied to multiple elements. Use a `.` before the class name in CSS.

#### **Example**

```html
<style>
    .highlight {
        background-color: yellow;
        font-weight: bold;
    }
</style>
<p class="highlight">This paragraph is highlighted.</p>
<p>This paragraph is not highlighted.</p>
```

-   The class `highlight` applies yellow background and bold text to the first `<p>`.

---

### **3. Styling with IDs**

IDs are unique and should only be applied to one element per page. Use a `#` before the ID name in CSS.

#### **Example**

```html
<style>
    #special {
        color: red;
        text-transform: uppercase;
    }
</style>
<p id="special">This is a special paragraph.</p>
<p>This is a normal paragraph.</p>
```

-   The `#special` ID styles only the element with the `id="special"` attribute.

---

### **4. Combining Selectors**

You can combine selectors for precise targeting.

#### **Type and Class Combination**

```html
<style>
    p.highlight {
        color: green;
    }
</style>
<p class="highlight">
    This is green because it's a paragraph with the "highlight" class.
</p>
<div class="highlight">This won't be green because it's not a paragraph.</div>
```

#### **Class and ID Combination**

```html
<style>
    #special.highlight {
        font-size: 20px;
    }
</style>
<p id="special" class="highlight">This combines ID and class styles.</p>
```

---

### **5. Applying Styles to Multiple Elements**

You can target multiple selectors at once by separating them with commas.

#### **Example**

```html
<style>
    h1,
    h2,
    p {
        font-family: Arial, sans-serif;
    }
</style>
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<p>Paragraph</p>
```

-   This rule applies the same font to all `<h1>`, `<h2>`, and `<p>` elements.

---

### **6. Inline Styling (Not Recommended)**

Styles can also be applied directly within an HTML element using the `style` attribute. However, this is not maintainable for larger projects.

#### **Example**

```html
<p style="color: blue; font-weight: bold;">This is inline styled text.</p>
```

---

### **7. Specificity of Selectors**

If multiple styles target the same element, specificity determines which rule applies. Here’s the priority:

1. Inline styles.
2. ID selectors.
3. Class, attribute, and pseudo-class selectors.
4. Type selectors.

#### **Example**

```html
<style>
    p {
        color: black;
    }
    .highlight {
        color: green;
    }
    #special {
        color: red;
    }
</style>
<p id="special" class="highlight">What color am I?</p>
```

-   The text will be red because `#special` (ID selector) has higher specificity.

---

### **8. Example: Applying Styles**

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CSS Selectors Example</title>
        <style>
            /* Type Selector */
            h1 {
                color: blue;
            }

            /* Class Selector */
            .highlight {
                background-color: yellow;
            }

            /* ID Selector */
            #special {
                font-size: 20px;
                font-weight: bold;
            }

            /* Combined Selector */
            p.highlight {
                text-decoration: underline;
            }
        </style>
    </head>
    <body>
        <h1>Welcome to CSS Styling</h1>
        <p>This is a normal paragraph.</p>
        <p class="highlight">This paragraph is highlighted.</p>
        <p id="special" class="highlight">
            This is a special highlighted paragraph.
        </p>
    </body>
</html>
```

---

### **9. Key Points**

-   Use **classes** for reusable styles across multiple elements.
-   Use **IDs** for unique elements that require specific styling.
-   Avoid inline styles; they make the code harder to maintain.
-   Combine selectors for fine-grained control.
-   Understand specificity to resolve conflicts effectively.
