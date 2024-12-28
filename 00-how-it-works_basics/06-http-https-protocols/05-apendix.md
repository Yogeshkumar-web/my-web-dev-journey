### **Key Concepts: Request Methods, HTTPS Handshake, and Certificate Authorities**

---

#### **1. HTTP Request Methods**

HTTP defines a set of methods to perform operations on resources on the web. Common methods include:

1. **GET**:

    - Purpose: Retrieve data from a server.
    - Characteristics:
        - Sends data in the URL as query parameters.
        - Non-sensitive information (e.g., search queries).
        - Safe (no modification on the server) and idempotent (repeated calls yield the same result).
    - Example:
        ```
        GET /api/users?id=123 HTTP/1.1
        Host: example.com
        ```

2. **POST**:

    - Purpose: Send data to the server to create or process a resource.
    - Characteristics:
        - Data is sent in the body of the request.
        - Often used for form submissions or API requests.
        - Not idempotent (repeated calls can create duplicate resources).
    - Example:

        ```
        POST /api/users HTTP/1.1
        Host: example.com
        Content-Type: application/json
        Content-Length: 46

        {
          "name": "John Doe",
          "email": "john@example.com"
        }
        ```

3. **PUT**:

    - Purpose: Update or replace a resource on the server.
    - Characteristics:
        - Requires the complete resource in the request body.
        - Idempotent (same result if called multiple times).
    - Example:

        ```
        PUT /api/users/123 HTTP/1.1
        Host: example.com
        Content-Type: application/json
        Content-Length: 45

        {
          "name": "John Doe",
          "email": "john.updated@example.com"
        }
        ```

4. **DELETE**:
    - Purpose: Remove a resource from the server.
    - Characteristics:
        - Idempotent.
    - Example:
        ```
        DELETE /api/users/123 HTTP/1.1
        Host: example.com
        ```

---

#### **2. HTTPS Handshake**

The HTTPS handshake is the process that establishes a secure connection between a client (browser) and a server. It ensures data encryption, integrity, and authentication.

**Steps in the HTTPS Handshake**:

1. **Client Hello**:

    - The client sends a request to the server, listing supported encryption protocols (TLS version, ciphers).

2. **Server Hello**:

    - The server responds with the chosen encryption protocol and its digital certificate.

3. **Certificate Verification**:

    - The client validates the server's certificate against trusted Certificate Authorities (CAs).

4. **Key Exchange**:

    - The client and server exchange keys securely using public key cryptography.

5. **Session Key Generation**:

    - Both parties generate a shared session key used for encrypting further communication.

6. **Handshake Completion**:
    - The client sends a final acknowledgment, and the secure session begins.

**Benefits**:

-   Encryption: Protects sensitive data.
-   Authentication: Ensures the server is legitimate.
-   Integrity: Prevents tampering during transmission.

---

#### **3. Certificate Authorities (CAs)**

CAs are trusted entities that issue **digital certificates** to verify the authenticity of a website or server.

**Key Concepts**:

1. **Digital Certificate**:

    - A file containing the server's public key, domain name, and CA's digital signature.

2. **Role of CAs**:

    - Confirm that the organization requesting the certificate is legitimate.
    - Sign the certificate to prove its authenticity.

3. **Certificate Validation**:
    - The browser checks the certificate against a list of trusted CAs.
    - If the certificate is valid, the browser establishes a secure connection.

**Popular CAs**:

-   Let’s Encrypt (free).
-   DigiCert.
-   GlobalSign.

**Certificate Chain**:

-   The validation process follows a "chain of trust":
    1. Root CA (trusted by operating systems and browsers).
    2. Intermediate CA (issues certificates to servers).
    3. End-entity certificate (used by the website).

---

### **How They All Work Together**

-   When you visit a secure website (`https://example.com`):
    1. The browser performs an HTTPS handshake.
    2. The server's certificate, signed by a CA, is verified.
    3. Once secure communication is established, the client sends **HTTP requests** (e.g., GET, POST) to interact with the server.

---

### **Summary**

-   **HTTP Methods**: Define how resources are manipulated (e.g., GET for retrieval, POST for creation).
-   **HTTPS Handshake**: Establishes a secure connection using encryption and authentication.
-   **Certificate Authorities**: Ensure the legitimacy of websites via trusted digital certificates.
