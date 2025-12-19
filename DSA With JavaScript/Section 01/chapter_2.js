// Day-2: Best, Worst & Average Case

function findNumber(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

/*
Best Case (Lucky case) Means: Algorithm sabse kam steps mein kaam khatam kar de.

arr = [10, 20, 30, 40]
target = 10

Loop sirf 1 baar chala
Time Complexity:
O(1)

*/

/*
Worst Case Means : Algorithm ko maximum mehnat karni pade.

target last index par ho
ya
array mein ho hi nahi

arr = [10, 20, 30, 40]
target = 99

Loop poora n times chala

Time Complexity:
O(n)
Golden rule (yaad rakhna):
Big O hamesha Worst Case batata hai

Kyun?
Kyuki real world mein humein “sabse bura kya ho sakta hai” yeh pata hona chahiye.

*/

/*
Average Case (Normal case) Means : Kabhi pehle milega, kabhi beech mein, kabhi last mein

Mathematically:
approx n / 2 operations
Time Complexity:
O(n)
(kyunki Big O mein /2 ignore hota hai)

Interview mein:
Average case discuss hota hai,
lekin final Big O worst case ka hi hota hai

*/

////////  Big O Simplification Rules (Yaad Karna Hai) /////////

// Rule 1. Constants ignore
// O(2n) → O(n)
// O(500n) → O(n)

// Rule 2️. Bigger term jeetta hai : Jab n bada hota hai, chhota term matter hi nahi karta.
// O(n² + n) → O(n²)
// O(n + log n) → O(n)

// Rule 3️. Arithmetic = constant (O(1))
// a + b
// a * b

// Rule 4️. Variable assignment = constant (O(1))
// let x = 10;

// -------------------------------------------------------- //

// Space Complexity: Space Complexity ka matlab -> Input ke alawa extra memory kitni use ho rahi hai?

// O(1) Space: Sirf variables, input bada ho ya chhota → memory same
function sum(a, b) {
    let result = a + b;
    return result;
}

// O(n) space: Naya array bana, input size badhi → memory badhi
function copyArray(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
} //Note: Recursion mein call stack bhi space leta hai
