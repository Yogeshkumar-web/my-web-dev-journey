### **Using Input Types in HTML Forms: `text`, `email`, `number`, and `password`**

HTML provides a variety of `<input>` types to collect different kinds of user data efficiently. These input types improve user experience, ensure better data validation, and help you design accessible forms.

---

### **1. Input Type: `text`**

The `text` input type allows users to enter plain text, typically used for names, usernames, or general text.

#### **Features**

-   No restrictions on input.
-   Supports `maxlength` (maximum number of characters) and `placeholder` attributes.

#### **Example**

```html
<form>
    <label for="username">Username:</label>
    <input
        type="text"
        id="username"
        name="username"
        placeholder="Enter your name"
        maxlength="20"
        required
    />
</form>
```

---

### **2. Input Type: `email`**

The `email` input type is designed to accept email addresses. It provides built-in validation to check if the input follows a valid email format (e.g., `user@example.com`).

#### **Features**

-   Automatically validated by browsers for proper email format.
-   Provides a specialized keyboard on mobile devices (e.g., includes "@" and ".").
-   You can use `multiple` to accept multiple email addresses separated by commas.

#### **Example**

```html
<form>
    <label for="email">Email:</label>
    <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        required
    />
</form>
```

#### **Example for Multiple Emails**

```html
<form>
    <label for="emails">Emails:</label>
    <input
        type="email"
        id="emails"
        name="emails"
        placeholder="Enter emails"
        multiple
    />
</form>
```

---

### **3. Input Type: `number`**

The `number` input type allows users to enter numeric values. It includes optional features like step values, ranges, and validation.

#### **Attributes**

-   **`min` and `max`**: Define the acceptable range of values.
-   **`step`**: Define the interval for input values.
-   Provides increment/decrement buttons in the UI.

#### **Example**

```html
<form>
    <label for="age">Age:</label>
    <input
        type="number"
        id="age"
        name="age"
        min="18"
        max="100"
        step="1"
        placeholder="Enter your age"
        required
    />
</form>
```

#### **Example with Decimal Step**

```html
<form>
    <label for="height">Height (cm):</label>
    <input
        type="number"
        id="height"
        name="height"
        min="0"
        max="300"
        step="0.1"
        placeholder="Enter height in cm"
    />
</form>
```

---

### **4. Input Type: `password`**

The `password` input type is used to enter sensitive information, such as passwords. Characters entered in this field are masked for privacy.

#### **Features**

-   Masked input for security.
-   Can include `minlength`, `maxlength`, and `pattern` for validation.

#### **Example**

```html
<form>
    <label for="password">Password:</label>
    <input
        type="password"
        id="password"
        name="password"
        minlength="8"
        placeholder="Enter your password"
        required
    />
</form>
```

#### **Example with Pattern Validation**

```html
<form>
    <label for="secure-password">Secure Password:</label>
    <input
        type="password"
        id="secure-password"
        name="secure_password"
        minlength="8"
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        title="Must contain at least one number, one uppercase, and one lowercase letter, and at least 8 characters"
        required
    />
</form>
```

---

### **5. Example: Using All Input Types Together**

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>HTML Input Types</title>
    </head>
    <body>
        <h1>Registration Form</h1>
        <form action="/register" method="POST">
            <!-- Text Input -->
            <label for="username">Username:</label>
            <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                maxlength="20"
                required
            /><br /><br />

            <!-- Email Input -->
            <label for="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
            /><br /><br />

            <!-- Number Input -->
            <label for="age">Age:</label>
            <input
                type="number"
                id="age"
                name="age"
                min="18"
                max="99"
                step="1"
                placeholder="Enter your age"
                required
            /><br /><br />

            <!-- Password Input -->
            <label for="password">Password:</label>
            <input
                type="password"
                id="password"
                name="password"
                minlength="8"
                placeholder="Enter your password"
                required
            /><br /><br />

            <!-- Submit Button -->
            <button type="submit">Register</button>
        </form>
    </body>
</html>
```

---

### **6. Key Takeaways**

1. **`text`**: General-purpose input for single-line text.
2. **`email`**: Validates email addresses automatically.
3. **`number`**: Ensures only numeric input, with options for ranges and steps.
4. **`password`**: Masks input for sensitive data.
