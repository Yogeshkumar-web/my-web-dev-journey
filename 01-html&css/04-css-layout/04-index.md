### **Chapter 4: Media Queries – Making Websites Responsive to Different Screen Sizes**

Media queries are a core feature of CSS used to make websites responsive. They allow you to apply different styles depending on the size, resolution, or orientation of the user's device screen.

---

### **1. What Are Media Queries?**

Media queries are conditional rules in CSS that check for specific characteristics of the device or viewport (e.g., screen width, height, resolution) and apply styles accordingly. They are essential for creating responsive designs that adapt to various screen sizes, from desktops to mobile devices.

---

### **2. Syntax of Media Queries**

Media queries are written using the `@media` rule in CSS.

```css
@media (condition) {
    /* CSS styles for the condition */
}
```

---

### **3. Common Media Query Conditions**

Here are some commonly used conditions:

| Condition      | Description                                                 | Example                          |
| -------------- | ----------------------------------------------------------- | -------------------------------- |
| `min-width`    | Applies styles when the viewport width is at least a value  | `@media (min-width: 600px)`      |
| `max-width`    | Applies styles when the viewport width is at most a value   | `@media (max-width: 600px)`      |
| `min-height`   | Applies styles when the viewport height is at least a value | `@media (min-height: 500px)`     |
| `orientation`  | Checks if the device is in portrait or landscape mode       | `@media (orientation: portrait)` |
| `aspect-ratio` | Applies styles based on the width-to-height ratio           | `@media (aspect-ratio: 16/9)`    |

---

### **4. Example: Responsive Design with Media Queries**

#### **Default Styles**

Start with styles for small screens (mobile-first approach).

```css
body {
    font-family: Arial, sans-serif;
    font-size: 16px;
    margin: 0;
}

.container {
    padding: 10px;
}
```

#### **Apply Styles for Larger Screens**

Use `min-width` for progressively larger screens.

```css
@media (min-width: 600px) {
    body {
        font-size: 18px;
    }
    .container {
        padding: 20px;
    }
}

@media (min-width: 900px) {
    body {
        font-size: 20px;
    }
    .container {
        padding: 30px;
        max-width: 800px;
        margin: auto;
    }
}
```

---

### **5. Responsive Layouts with Flexbox and Media Queries**

Combine media queries with Flexbox to create adaptive layouts.

```css
.container {
    display: flex;
    flex-direction: column; /* Stack items vertically by default */
}

@media (min-width: 600px) {
    .container {
        flex-direction: row; /* Align items horizontally on larger screens */
        justify-content: space-between;
    }
}
```

---

### **6. Responsive Images**

Ensure images adapt to the screen size.

```css
img {
    max-width: 100%;
    height: auto;
}

@media (min-width: 600px) {
    img {
        max-width: 80%;
    }
}
```

---

### **7. Key Breakpoints**

Breakpoints are specific screen widths where your design adapts to provide the best user experience. Common breakpoints are:

-   **Small devices (phones)**: `max-width: 600px`
-   **Medium devices (tablets)**: `min-width: 601px and max-width: 900px`
-   **Large devices (desktops)**: `min-width: 901px`

---

### **8. Example: Full Responsive Page**

```html
<style>
    body {
        margin: 0;
        font-family: Arial, sans-serif;
    }

    .header {
        background: lightblue;
        text-align: center;
        padding: 10px;
    }

    .content {
        padding: 20px;
    }

    .footer {
        background: lightgray;
        text-align: center;
        padding: 10px;
    }

    @media (min-width: 600px) {
        .content {
            display: flex;
            justify-content: space-around;
        }

        .content div {
            width: 30%;
            background: lightcoral;
            padding: 10px;
        }
    }
</style>

<div class="header">Responsive Design Example</div>
<div class="content">
    <div>Column 1</div>
    <div>Column 2</div>
    <div>Column 3</div>
</div>
<div class="footer">Footer</div>
```

---

### **9. Best Practices for Media Queries**

-   **Mobile-First Approach**: Write styles for smaller screens first, then add media queries for larger screens.
-   **Avoid Too Many Breakpoints**: Use only necessary breakpoints to keep CSS manageable.
-   **Test Responsiveness**: Check designs on various devices using browser developer tools.
