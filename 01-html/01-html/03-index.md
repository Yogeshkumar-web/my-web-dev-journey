### **Building a Simple Webpage Using HTML**

---

#### **Goal**:

We will build a basic webpage structure using the following tags:

1. `<html>`: The root element of an HTML document.
2. `<head>`: Contains metadata about the webpage.
3. `<body>`: Contains the main content visible on the webpage.
4. `<header>`: Represents the introductory section (e.g., logo, navigation bar).
5. `<footer>`: Represents the closing section (e.g., copyright, links).

---

#### **Basic Structure of a Webpage**

A typical webpage is structured as follows:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Webpage Title</title>
    </head>
    <body>
        <header>
            <!-- Introductory content like a logo or navigation -->
        </header>
        <main>
            <!-- Main content of the webpage -->
        </main>
        <footer>
            <!-- Closing content like copyright or links -->
        </footer>
    </body>
</html>
```

---

### **Step-by-Step: Building a Simple Webpage**

#### **Code Example**:

Here’s how to create a webpage with a header, main content, and footer:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>My First Webpage</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body>
        <!-- Header Section -->
        <header>
            <h1>Welcome to My Website</h1>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>

        <!-- Main Content -->
        <main>
            <h2>About Me</h2>
            <p>Hello! I am learning how to build websites using HTML.</p>
            <img src="profile.jpg" alt="Profile Picture" />
        </main>

        <!-- Footer Section -->
        <footer>
            <p>&copy; 2024 My Website. All rights reserved.</p>
        </footer>
    </body>
</html>
```

---

#### **Explanation of the Tags Used**

1. **`<!DOCTYPE html>`**:

    - Specifies that the document is an HTML5 document.

2. **`<html>`**:

    - The root element enclosing all the content of the webpage.

3. **`<head>`**:

    - Contains metadata like the title, character encoding (`<meta charset>`), and viewport settings for responsiveness.

4. **`<title>`**:

    - Sets the title displayed in the browser tab.

5. **`<body>`**:

    - Contains all visible content.

6. **`<header>`**:

    - Represents the top section of the webpage.
    - Typically contains a logo, site title, or navigation links.

7. **`<nav>`**:

    - Used inside the `<header>` for navigation links.

8. **`<main>`**:

    - Holds the primary content of the page.

9. **`<footer>`**:

    - Represents the bottom section, often used for copyright info or links.

10. **`<img>`**:
    - Embeds an image.
    - `src`: Specifies the image location.
    - `alt`: Provides alternative text for accessibility.

---

### **How It Looks**

-   **Header**:
    Displays the website title and navigation links like "Home," "About," and "Contact."
-   **Main Content**:
    Shows a section titled "About Me" with some text and an image.

-   **Footer**:
    Displays a copyright message.

---

#### **Enhancing the Webpage**

To make the webpage visually appealing, you can use **CSS** (Cascading Style Sheets). For now, this basic structure demonstrates the functional use of HTML tags.

---

#### **Try It Yourself**

Save the code above as a file named `index.html` and open it in a browser. It will render your first basic webpage.
