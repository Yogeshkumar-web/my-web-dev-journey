### **Understanding HTTP Status Codes**

HTTP status codes are three-digit numbers sent by the server in an HTTP response to indicate the result of the client's request. These codes help the client (e.g., browser) understand whether the request was successful, redirected, or failed, and why.

---

### **Categories of Status Codes**

1. **1xx: Informational**

    - Indicate that the request was received and is being processed.
    - Rarely used by browsers.

2. **2xx: Success**

    - Indicate that the request was successfully received, understood, and processed.

3. **3xx: Redirection**

    - Indicate that further action is needed to complete the request, such as following a new URL.

4. **4xx: Client Errors**

    - Indicate that the request was invalid or cannot be fulfilled due to client-side issues.

5. **5xx: Server Errors**
    - Indicate that the server failed to process a valid request.

---

### **Common HTTP Status Codes**

#### **1. 2xx: Success**

-   **200 OK**:

    -   The request was successful, and the server is returning the requested resource.
    -   Example: Accessing a webpage (`GET /index.html`) or submitting a form (`POST /form`).

-   **201 Created**:

    -   A resource was successfully created as a result of the request.
    -   Example: Creating a new user in an API (`POST /users`).

-   **204 No Content**:
    -   The server successfully processed the request, but there is no content to send back.
    -   Example: Deleting a resource (`DELETE /resource`).

---

#### **2. 3xx: Redirection**

-   **301 Moved Permanently**:

    -   The requested resource has been permanently moved to a new URL.
    -   Example: Redirecting `http://old-site.com` to `https://new-site.com`.

-   **302 Found**:

    -   The resource temporarily resides at a different URL.

-   **304 Not Modified**:
    -   The resource hasn't changed since the last request, allowing the client to use its cached version.

---

#### **3. 4xx: Client Errors**

-   **400 Bad Request**:

    -   The server couldn't understand the request due to invalid syntax.
    -   Example: Malformed JSON in an API request.

-   **401 Unauthorized**:

    -   The client must authenticate itself to access the requested resource.
    -   Example: Accessing a secure page without logging in.

-   **403 Forbidden**:

    -   The server understands the request but refuses to authorize it.
    -   Example: Trying to access admin-only content as a regular user.

-   **404 Not Found**:
    -   The server cannot find the requested resource.
    -   Example: A user enters a broken or nonexistent URL.

---

#### **4. 5xx: Server Errors**

-   **500 Internal Server Error**:

    -   The server encountered an unexpected condition that prevented it from fulfilling the request.
    -   Example: A bug in the server's code or a misconfigured server.

-   **502 Bad Gateway**:

    -   The server, acting as a gateway, received an invalid response from an upstream server.
    -   Example: Issues with a reverse proxy.

-   **503 Service Unavailable**:
    -   The server is temporarily unable to handle the request due to overload or maintenance.
    -   Example: High traffic during a flash sale.

---

### **How to Use and Interpret Status Codes**

#### **For Developers**:

-   Use status codes in APIs to provide clear feedback to clients.
-   Log errors for debugging and monitoring server health.

#### **For End Users**:

-   Common browser messages correspond to status codes:
    -   **404 Not Found**: "Page not found."
    -   **500 Internal Server Error**: "Something went wrong on the website."

---

### **Example of a Response with a Status Code**

**200 OK**:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1234

<html>
  <body>
    <h1>Welcome to Example.com!</h1>
  </body>
</html>
```

**404 Not Found**:

```http
HTTP/1.1 404 Not Found
Content-Type: text/html
Content-Length: 56

<html>
  <body>
    <h1>404 - Page Not Found</h1>
  </body>
</html>
```

**500 Internal Server Error**:

```http
HTTP/1.1 500 Internal Server Error
Content-Type: text/html
Content-Length: 70

<html>
  <body>
    <h1>500 - Internal Server Error. Please try again later.</h1>
  </body>
</html>
```

---

### **Key Takeaways**

-   HTTP status codes provide a standardized way to communicate the result of a request.
-   They are divided into five categories: informational, success, redirection, client error, and server error.
-   Familiarity with common codes like **200**, **404**, and **500** is essential for understanding how web applications work.
