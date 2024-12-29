### **Validating Form Data with HTML Attributes: `required`, `min`, `max`**

HTML5 introduces built-in attributes for form validation, allowing developers to ensure data is correct before submission. These attributes reduce the need for JavaScript-based validation for many common cases.

---

### **1. Why Use HTML Validation?**

-   Ensures user input adheres to the desired format or range.
-   Provides real-time feedback before form submission.
-   Works across most modern browsers.

---

### **2. Common Validation Attributes**

#### **`required`**

Ensures that the field must be filled before the form can be submitted.

#### **Example**

```html
<form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required />
    <button type="submit">Submit</button>
</form>
```

-   If the user tries to submit the form without entering a name, the browser will show an error.

---

#### **`min` and `max`**

Defines the minimum and maximum acceptable values for numeric inputs.

#### **Example**

```html
<form>
    <label for="age">Age (18-60):</label>
    <input type="number" id="age" name="age" min="18" max="60" required />
    <button type="submit">Submit</button>
</form>
```

-   The user must enter a number between 18 and 60. Anything outside this range will trigger an error.

---

#### **`minlength` and `maxlength`**

Specifies the minimum and maximum number of characters for text-based inputs.

#### **Example**

```html
<form>
    <label for="username">Username (3-15 characters):</label>
    <input
        type="text"
        id="username"
        name="username"
        minlength="3"
        maxlength="15"
        required
    />
    <button type="submit">Submit</button>
</form>
```

-   If the user enters less than 3 or more than 15 characters, the form will not be submitted.

---

#### **`pattern`**

Uses regular expressions to define custom validation rules.

#### **Example**

```html
<form>
    <label for="password"
        >Password (at least 8 characters, must include letters and
        numbers):</label
    >
    <input
        type="password"
        id="password"
        name="password"
        pattern="(?=.*\d)(?=.*[a-zA-Z]).{8,}"
        title="Must contain at least one letter, one number, and be at least 8 characters long"
        required
    />
    <button type="submit">Submit</button>
</form>
```

-   If the password doesn't meet the pattern, an error will display with the `title` message.

---

#### **`step`**

Specifies the interval between valid values for numeric inputs.

#### **Example**

```html
<form>
    <label for="quantity">Quantity (step of 5):</label>
    <input
        type="number"
        id="quantity"
        name="quantity"
        step="5"
        min="0"
        max="50"
        required
    />
    <button type="submit">Submit</button>
</form>
```

-   Only numbers like 0, 5, 10, etc., are valid.

---

### **3. Example: Combining Validation Attributes**

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Form Validation Example</title>
    </head>
    <body>
        <h1>Form Validation</h1>
        <form action="/submit" method="POST">
            <!-- Required Field -->
            <label for="name">Full Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
            /><br /><br />

            <!-- Minimum and Maximum -->
            <label for="age">Age (18-60):</label>
            <input
                type="number"
                id="age"
                name="age"
                min="18"
                max="60"
                required
            /><br /><br />

            <!-- Minlength and Maxlength -->
            <label for="username">Username (3-15 characters):</label>
            <input
                type="text"
                id="username"
                name="username"
                minlength="3"
                maxlength="15"
                required
            /><br /><br />

            <!-- Pattern -->
            <label for="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Enter a valid email address"
                required
            /><br /><br />

            <!-- Step -->
            <label for="salary">Salary (increments of 5000):</label>
            <input
                type="number"
                id="salary"
                name="salary"
                step="5000"
                required
            /><br /><br />

            <button type="submit">Submit</button>
        </form>
    </body>
</html>
```

---

### **4. Advantages of HTML Validation**

1. No additional JavaScript is needed for basic validation.
2. Browser provides built-in error messages.
3. Works out of the box with modern browsers.

---

### **5. Limitations of HTML Validation**

1. May vary slightly between browsers.
2. Cannot handle complex validation scenarios.
3. Should be supplemented with server-side validation for security.

---

### **6. Summary**

-   Use attributes like `required`, `min`, `max`, `minlength`, `maxlength`, and `pattern` for robust client-side validation.
-   Combine attributes to enforce multiple validation rules on the same field.
-   Always complement client-side validation with server-side checks to prevent malicious input.

Would you like to dive into JavaScript-based custom form validation next?
