### **How Data is Transmitted After the TCP Handshake is Complete**

Once the **3-way handshake** is successfully completed, the client and server can start transmitting data. This process is governed by the core features of the **TCP (Transmission Control Protocol)**, which ensures reliable, ordered, and error-checked data delivery.

---

### **Key Phases of Data Transmission**

#### **1. Data Segmentation**

-   The data to be sent is divided into small packets called **segments**.
-   Each segment is assigned a **sequence number**, which helps ensure that all packets are reassembled in the correct order at the destination.

#### **2. Sending Data**

-   The sender (client or server) transmits data packets to the receiver.
-   Each packet includes:
    -   **Sequence number**: Indicates the position of the packet within the stream.
    -   **Payload**: Contains the actual data.
    -   **Header information**: Includes metadata like source and destination ports, flags, and error-checking data.

#### **3. Acknowledgment (ACK)**

-   Upon receiving a data packet, the receiver sends an **ACK** back to confirm it was successfully received.
-   The acknowledgment contains the **sequence number of the next expected packet**.

#### **4. Error Detection and Retransmission**

-   If a packet is lost, damaged, or arrives out of order:
    -   The receiver detects the issue (e.g., via missing sequence numbers or checksum failures).
    -   The sender retransmits the missing or corrupted packet.

#### **5. Windowing and Flow Control**

-   TCP uses a **sliding window** mechanism to control the flow of data and prevent overwhelming the receiver:
    -   The window size determines how many packets can be sent before waiting for an acknowledgment.
    -   The receiver can adjust the window size dynamically based on its capacity.

---

### **Process in Action**

1. **Sender** splits data into segments and transmits them:

    ```
    Segment 1: Seq = 1, Payload = "Hello "
    Segment 2: Seq = 7, Payload = "World!"
    ```

2. **Receiver** sends acknowledgments:

    ```
    ACK 7: Confirms receipt of "Hello "
    ACK 13: Confirms receipt of "World!"
    ```

3. **Sender** continues transmitting:
    - If any segment is lost or corrupted, the sender retransmits based on the receiver's acknowledgment.

---

### **Visualizing TCP Data Transmission**

| **Step**           | **Client (Sender)**                    | **Server (Receiver)**                     |
| ------------------ | -------------------------------------- | ----------------------------------------- |
| **1. Send Data**   | Sends packet with Seq = 1, Payload = X | Receives packet with Seq = 1              |
| **2. Acknowledge** |                                        | Sends ACK = 2 to confirm receipt          |
| **3. Continue**    | Sends packet with Seq = 2, Payload = Y | Receives packet with Seq = 2              |
| **4. Error?**      | Retransmits lost/corrupted packets     | Detects missing packets, waits for resend |

---

### **Features That Ensure Reliable Transmission**

#### **1. Sequence Numbers**

-   Track each data packet’s position.
-   Ensure packets are reassembled correctly at the receiver.

#### **2. Acknowledgments**

-   Confirm successful receipt of packets.
-   Provide feedback for retransmissions.

#### **3. Error Checking**

-   Uses checksums to detect corrupted data.
-   Ensures data integrity.

#### **4. Retransmissions**

-   Lost or damaged packets are retransmitted.
-   Timeout mechanisms trigger retransmissions if ACKs are not received.

#### **5. Congestion and Flow Control**

-   Adjusts data flow based on network conditions.
-   Prevents overwhelming the receiver.

---

### **Real-World Analogy**

Imagine sending a book page by page through mail:

1. You (sender) send pages one at a time.
2. The recipient (receiver) acknowledges each page after reading it.
3. If a page is lost or damaged, the recipient requests a resend.
4. You adjust the number of pages sent at once based on the recipient’s reading speed.

---

### **When Does the Connection End?**

Once all data has been transmitted, the connection is terminated using the **4-way handshake** to ensure both parties have finished communication.

---

### **Key Benefits of TCP Data Transmission**

1. **Reliability**: Ensures data is delivered intact and in order.
2. **Error Correction**: Detects and resolves data transmission issues.
3. **Flow Control**: Prevents network congestion and adapts to the receiver's capacity.

---

Would you like to explore an example of TCP transmission in code or dive deeper into concepts like flow control or error detection?
