### **Styling Text, Colors, and Fonts with CSS**

Text styling is a fundamental aspect of web design. CSS provides properties to control the appearance of text, including color, font family, size, and spacing.

---

### **1. Text Colors: `color`**

The `color` property sets the text color of an element.

#### **Usage**

```css
p {
    color: blue; /* Named color */
}

h1 {
    color: #ff5733; /* Hexadecimal color */
}

h2 {
    color: rgb(255, 87, 51); /* RGB color */
}

h3 {
    color: hsl(9, 100%, 60%); /* HSL color */
}
```

---

### **2. Font Family: `font-family`**

The `font-family` property specifies the typeface for text. You can provide multiple font options as a fallback.

#### **Usage**

```css
body {
    font-family: Arial, sans-serif; /* Primary font and a fallback */
}

h1 {
    font-family: "Courier New", monospace; /* Monospace fonts */
}
```

#### **Best Practice**

-   Use **web-safe fonts** to ensure compatibility across devices (e.g., Arial, Verdana, Times New Roman).
-   For custom fonts, use Google Fonts or import your own fonts.

```html
<link
    href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
    rel="stylesheet"
/>

<style>
    h1 {
        font-family: "Roboto", sans-serif;
    }
</style>
```

---

### **3. Font Size: `font-size`**

The `font-size` property controls the size of the text.

#### **Usage**

```css
p {
    font-size: 16px; /* Pixels */
}

h1 {
    font-size: 2em; /* Relative to parent element */
}

small {
    font-size: 80%; /* Percentage of parent text size */
}
```

#### **Responsive Sizing**

Use `rem` (relative to the root element) or `em` (relative to the parent element) for responsive designs.

```css
html {
    font-size: 16px; /* 1rem = 16px */
}

p {
    font-size: 1rem; /* Equals 16px */
}
```

---

### **4. Line Height: `line-height`**

The `line-height` property controls the vertical spacing between lines of text. It improves readability.

#### **Usage**

```css
p {
    line-height: 1.5; /* 1.5 times the font size */
}

h1 {
    line-height: 2em; /* 2 times the font size */
}
```

#### **Tips for Line Spacing**

-   For body text, use a line-height of 1.5–1.8.
-   For headings, a line-height close to the font size (1–1.2) works well.

---

### **5. Example: Styling a Paragraph**

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Text Styling Example</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f9;
                color: #333;
            }

            h1 {
                font-size: 2.5rem;
                color: #005f73;
                line-height: 1.2;
            }

            p {
                font-size: 1rem;
                line-height: 1.6;
                color: #6a0572;
            }
        </style>
    </head>
    <body>
        <h1>Welcome to CSS Styling</h1>
        <p>
            This is a paragraph styled with custom font, color, and spacing to
            demonstrate CSS properties.
        </p>
    </body>
</html>
```

---

### **6. Combining Properties**

You can combine multiple text-related properties for concise and impactful designs.

```css
h1 {
    font-family: "Roboto", sans-serif;
    font-size: 3rem;
    color: #222;
    line-height: 1.4;
}
```

---

### **7. Key Concepts**

-   **Colors**: Enhance readability and aesthetics.
-   **Font Family**: Choose typefaces suitable for the content.
-   **Font Size**: Use relative units like `em` or `rem` for responsiveness.
-   **Line Height**: Adjust vertical spacing for better readability.
