### **Introduction to CSS Grid: Creating Complex Grid-Based Layouts**

CSS Grid is a powerful layout system designed for creating two-dimensional layouts on the web. It allows you to define rows and columns, making it perfect for complex, responsive designs.

---

### **1. What is CSS Grid?**

CSS Grid is a layout model that divides a container into rows and columns, allowing precise placement of items. It is especially useful when working with complex, structured layouts.

---

### **2. Setting Up a CSS Grid**

To use the CSS Grid, set the container’s `display` property to `grid`.

```html
<style>
    .grid-container {
        display: grid;
        border: 2px solid black;
        gap: 10px; /* Space between grid items */
    }
    .grid-item {
        background-color: lightblue;
        text-align: center;
        padding: 20px;
        border: 1px solid gray;
    }
</style>
<div class="grid-container">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
</div>
```

---

### **3. Defining Rows and Columns**

Use the `grid-template-columns` and `grid-template-rows` properties to define the size of rows and columns.

#### **Example: Defining a 2x2 Grid**

```css
.grid-container {
    grid-template-columns: 100px 100px; /* Two columns, each 100px wide */
    grid-template-rows: 100px 100px; /* Two rows, each 100px high */
}
```

---

### **4. Responsive Grid Layout with `fr`**

The `fr` unit represents a fraction of the available space.

#### **Example: Creating Equal Columns**

```css
.grid-container {
    grid-template-columns: 1fr 1fr 1fr; /* Three equal-width columns */
}
```

---

### **5. Placing Items in the Grid**

CSS Grid provides multiple ways to place items, either automatically or manually.

#### **Automatic Placement**

Items are placed in the grid in the order they appear in the HTML.

#### **Manual Placement**

You can specify the position of an item using `grid-column` and `grid-row`.

```css
.grid-item:nth-child(1) {
    grid-column: 1 / 3; /* Span from column 1 to 3 */
    grid-row: 1 / 2; /* Span from row 1 to 2 */
}
```

---

### **6. Grid Template Areas**

Define named areas for easier placement of items.

```css
.grid-container {
    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
}

.grid-item:nth-child(1) {
    grid-area: header;
}
.grid-item:nth-child(2) {
    grid-area: sidebar;
}
.grid-item:nth-child(3) {
    grid-area: main;
}
.grid-item:nth-child(4) {
    grid-area: footer;
}
```

---

### **7. Example: Complex Layout with CSS Grid**

```html
<style>
    .grid-container {
        display: grid;
        grid-template-columns: 1fr 2fr; /* Two columns: 1/3 and 2/3 of the width */
        grid-template-rows: auto auto; /* Two rows */
        gap: 10px;
    }
    .header {
        grid-column: 1 / 3; /* Span two columns */
    }
    .sidebar {
        grid-row: 2;
    }
    .main {
        grid-column: 2 / 3; /* Start at column 2 */
        grid-row: 2;
    }
</style>

<div class="grid-container">
    <div class="header">Header</div>
    <div class="sidebar">Sidebar</div>
    <div class="main">Main Content</div>
</div>
```

---

### **8. Key Properties of CSS Grid**

| Property                | Description                                      |
| ----------------------- | ------------------------------------------------ |
| `grid-template-columns` | Defines the column structure.                    |
| `grid-template-rows`    | Defines the row structure.                       |
| `gap`                   | Defines spacing between grid items.              |
| `grid-column`           | Specifies the start and end columns for an item. |
| `grid-row`              | Specifies the start and end rows for an item.    |
| `grid-template-areas`   | Defines named areas for grid layout.             |

---

### **9. CSS Grid vs. Flexbox**

-   **CSS Grid**: Best for two-dimensional layouts (rows and columns).
-   **Flexbox**: Best for one-dimensional layouts (either row or column).
