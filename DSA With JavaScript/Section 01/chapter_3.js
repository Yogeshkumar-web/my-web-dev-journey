// Day-3: Simplifying Big O Expressions

/////Rule 1: Constants Don’t Matter (yad kar lo):: Big O mein fixed numbers (constants) ki koi value nahi hoti.

//Example 1 : O(2n)

/* Simplified: O(n)
n = 10 → 2n = 20
n = 1,000,000 → 2n = 2,000,000

Growth same direction mein hai, bas thoda fast/slower — trend same.
*/

//Example 2 : O(500)

/* Simplified: O(1)
Input chahe 10 ho ya 10 lakh, kaam fixed hi rahega.
*/

//Example 3 : O(13n²)

/* Simplified: O(n²)
Constant × expression → constant hata do
*/

/////Rule 2: Smaller Terms Don’t Matter (Dominant term rule) :: Agar multiple terms hain, to sabse fast grow karne wala term jeetega.

//Example 1 : O(n + 10)

/* simplified O(n)
n = 10 → n + 10 = 20
n = 1,000,000 → n + 10 ≈ n

10 ki koi aukaat nahi
*/

//Example 2 : O(n² + 5n + 8)

/* simplified O(n²)
n² grows fastest
5n aur 8 bahut peeche reh jaate hain
*/

//Example 3 : O(n³ + n² + log n)

/* simplified O(n³)
Rule:
Highest power of n = final Big O
*/

//***********************************************************//

//Big O Shorthands

/*
Rule 1: Arithmetic = O(1)

a + b
a * b

Always O(1)
*/

/*
Rule 2: Assignment = O(1)

let x = 10;
*/

/*
Rule 3: Access = O(1)

arr[0]
obj["name"]
*/

/*
Rule 4: Loop = O(n)

for (let i = 0; i < n; i++) {}
*/

/*
Rule 5: Nested Loop = multiply

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {}
}

O(n²)

Note: is order ko yaad kar lo: 
O(1) < O(log n) < O(n) < O(n log n) < O(n^2)
*/

//****************************************************************//

//Space Complexity

/*
O(1) Space

let count = 0;

Primitive values → fixed memory
*/

/*
O(n) Space

let arr = [];

string, array, object

input size badhe → memory badhe
📌 Important:
Space complexity mein sirf extra memory count hoti hai, input nahi.
*/

///**********************///

//Day-3 Exercise

// Raw Expression likho
// Simplification steps likho
// Final Big O likho

/* Q1 : O(7n + 120)
Ismein Big O O(n) hogi kyunki bigger tern jitta hai isliye O(7n) aur ham constant ko hata deta hai isliye O(n)
*/

/* Q2 : O(3n² + 50n + 900)
Ismein Big O O(n^2) hogi same as Q1.
*/

/* Q3 : O(n³ + n² + n + 1)
Ismein Big O O(n^3) hogi kyunki rule same hai bigger term ko dekhenge aur constants ko hata denge.
*/

/* Q4 : O(10)
Ismein Big O O(1) kyunki ye constant hai.
*/

/* Q5 : O(log n + n)
Ismein final Big O O(n) hoga kyunki O(n), O(log n) se faster growth karta hai aur Big O hamesha worst case + Fastest Growing Term par focus karta hai.
*/

/* Q6 : O(n log n + n)
Yeh aksar tab dikhta hai jab hum kisi array ko sort karte hain (Sorting = $n \log n$) aur phir us par ek simple loop ($n$) chalate hain.

Chaliye, is expression ko bhi simplify karte hain. Yeh aksar tab dikhta hai jab hum kisi array ko sort karte hain (Sorting = ) aur phir us par ek simple loop () chalate hain.

### 1. Raw Expression

Jab do independent parts sequential order mein chalte hain, toh hum unhein add karte hain:

O(n log n + n)


### 2. Simplification Steps

* **Step 1: Common Term Bahar Nikalein (Mental Math)**
Agar hum  ko common le lein: n * (log n + 1). Yahan humein saaf dikh raha hai ki hum  ko  se multiply kar rahe hain.

* **Step 2: Growth ki Tulna (Comparison)**
Humein dekhna hai ki n log n aur n mein se kaun tezi se badh raha hai:
* n sirf linear growth hai.
* n log n mein linear term (n) ke saath ek extra factor (log n) multiply ho raha hai.


* **Step 3: Example se Samjhein**
Maan lo : n = 1024:
* n = 1,024
* n log_2 n = 1,024 * 10 = 10,240 Yahan 10,240 bada hai 1,024 se. Jaise-jaise n badhega, inka gap aur bhi bada hota jayega.

### 3. Final Big O

O(n log n)

**Reason:** Kyunki n log n  dominant term hai (iski growth rate n se zyada hai), isliye Big O notation mein hum choti term (n) ko drop kar dete hain.

---

### Quick Cheat Sheet (Dominance Rule):

Expression             Final Big O        Kyun? 
O(n^2 + n)              O(n^2)           n^2 bada hai.
O(n log n + n)          O(n log n)       n log n bada hai.
O(n + log n)            O(n)             n bada hai.
 

**Instructor Tip:** O(n log n)  bahut hi famous complexity hai kyunki **Merge Sort** aur **Quick Sort** jaise efficient sorting algorithms isi par kaam karte hain.
*/

/* Q7 : O(100n² + 5n³ + 20)
Big O hamesha worst-case scenario aur highest order term ko dekhta hai.
*/

// Q9
function example1(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}
// is fn mein ek simple loop hai jo 0 se lekar n tak chal raha hai. Loop ke andar sirf ek operation ho raha hai aur ye exactly n bar repeat hoga.
// Big O : O(n) Linear Time Complexity

// Q10
function example2(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}
// Big O : O(n^2) Quadratic Time Complexity, Space Complexity O(1) (Sirf i aur j use ho rahe hain).

// Q11
function example3(n) {
    for (let i = 0; i < n; i++) {}

    for (let j = 0; j < n; j++) {}
}
// Big O : O(n)

// Q12
function example4(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }

    for (let j = 0; j < n; j++) {
        for (let k = 0; k < n; k++) {
            console.log(j, k);
        }
    }
}
// Raw Expression: O(n + n^2)
// Final Big O: O(n^2)

// Q13
function example5(n) {
    while (n > 1) {
        n = Math.floor(n / 2);
    }
}
//Raw Expression: O(log_2 n)
//Final Big O: O(log n)
//Rule of Thumb: Jab bhi aap loop mein dekhein ki variable divide ho raha hai (n / 2) ya multiply ho raha hai (i * 2), toh aankh band karke samajh jaiye ki wo Logarithmic O(log n) hai.

// Q14
function example6(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(i);
    }
    return arr;
}
//Final Big O
// Time: O(n)
// Space: Linear Space Complexity ya O(n)
