// Big O Notation

/*
1️⃣ Big O hota kya hai?

Big O notation batata hai:

input size n badhne par

aapke code ka time aur memory kaise badhegi

⛔ Big O seconds mein time nahi naapta
✅ Big O operations count karta hai

Isliye:

laptop slow ho ya fast → Big O same rahega

interviewer ko bhi wahi chahiye

📌 Ye hamesha worst case dekhta hai
📌 Ye hamesha future scaling soch ke hota hai

2️⃣ Time Complexity vs Space Complexity
⏳ Time Complexity

Kitni baar operations chal rahe hain?

Operations matlab:

loop

comparison (<, >)

assignment (=)

function call

Goal 👉 kam se kam operations

🌌 Space Complexity

Extra memory kitni lag rahi hai?

variables

arrays / objects

recursion stack

Goal 👉 kam se kam extra space

📌 Input ko space mein count nahi karte, sirf extra space


3️⃣ Common Big O : (Ye table Yaad karna hai)

✅ O(1) – Constant Time

function getFirst(arr) {
  return arr[0];
}

-> chahe array 10 ka ho ya 10 lakh ka
-> ek hi operation
📌 Best possible complexity

✅ O(n) – Linear Time

function printAll(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

-> n elements → n operations
-> input double → time double
📌 Acceptable & common


❌ O(n²) – Quadratic Time

function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}

-> nested loop
-> n × n operations

📌 Slow
📌 Interviewer yahin reject karta hai


✅ O(log n) – Logarithmic Time

// Binary Search ka idea


-> data aadha hota jaata hai
-> extremely fast
📌 Bahut powerful


✅ O(n log n)

-> thoda linear
-> thoda logarithmic
-> best sorting algorithms yahin aate hain
📌 Advanced level


4️⃣ Important rule (yaad rakhna)
Big O mein:

-> constants ignore (2n → n)
-> smaller terms ignore (n² + n → n²)
Isko bolte hain Big O simplification

*/

function sum(a, b) {
    return a + b;
}

// time complexity: O(1)

function loopOnce(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}

// time complexity: O(n)

function doubleLoop(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}

// time complexity: O(n2)

function twoLoops(n) {
    for (let i = 0; i < n; i++) {}
    for (let j = 0; j < n; j++) {}
}

// time complexity: O(n)

function logLoop(n) {
    while (n > 1) {
        n = Math.floor(n / 2);
    }
}

// time complexity: O(log n)
