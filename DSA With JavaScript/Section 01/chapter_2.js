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

// ---------- Day-2 Exercise: Best / Worst / Average Case + Big O Rules ---------- //

// Exercise 1: Linear Search
function search(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

// Best Case : O(1)
// Worst Case : O(n)
// Space Complexity : O(1)

// Exercise 2: Single Loop
function printNumbers(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}
// Best Case : O(n) : Linear search ki tarah ismein koi if condition ya return statement nahin hai, agar aapne n ki value 10 di hai to loop ko 10 baar chalna hi padega. Isliye iska best case aur worst case dono barabar hote hai.
// Worst Case : O(n)
// Space Complexity : O(1) : Space complexity ke liye hum dekhte hain ki humne kitni extra memory use ki hai. Hum sirf ek variable i use kar rahe hain loop ke liye. Chahe n ki value $10$ ho ya $10,000$, hum koi naya array ya badi data structure create nahi kar rahe hain. Result: Memory usage constant rehti hai. Complexity: Ise $O(1)$ (Constant Space) kehte hain.

// Exercise 3: Two Separate Loops
function twoLoops(n) {
    for (let i = 0; i < n; i++) {}
    for (let j = 0; j < n; j++) {}
}
// Time Complexity (Best & Worst same ya different?) : O(n) ::: Is case mein Best Case aur Worst Case dono Same hote hain. Kyunki code mein koi if condition ya break statement nahi hai. Chahe situation jo bhi ho, pehla loop pura $n$ baar chalega aur uske baad doosra loop bhi pura $n$ baar chalega.  Total Steps: $n$ (pehla loop) + $n$ (doosra loop) = $2n$.  Complexity: Dono cases ke liye ye $O(2n)$ hai, lekin Big O notation mein hum constants (jaise 2) ko ignore kar dete hain. Isliye final complexity $O(n)$ hi rehti hai.

// Final Big O : O(n) ::: Aap shayad soch rahe honge ki do loops hain toh $O(n^2)$ kyun nahi? Rule: Agar loops ek ke baad ek hain, toh hum unki complexity ko Add karte hain ($n + n = 2n \rightarrow O(n)$). Rule: Agar loops ek ke andar ek (nested) hote, toh hum Multiply karte ($n \times n = n^2 \rightarrow O(n^2)$).  Kyuki yahan loops independent hain, isliye ye ek Linear Time Complexity function hai.

// Space Complexity : O(1) ::: Space ke mamle mein ye function bahut efficient hai. Explanation: Humne loop chalane ke liye sirf i aur j variables ka use kiya hai. Hum koi naya array, object ya list create nahi kar rahe jo n ke badhne par badhe. Result: Extra space fixed hai, isliye ise hum O(1) (Constant Space) bolenge.

// Exercise 4: Nested Loop (Important)
function printPairs(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}
/*
Iska logic samajhne ke liye sochiye: Agar i ek baar chalta hai, toh j pura $n$ baar chalta hai.

1. Best Case: O(n^2)
Yahan Best Case aur Worst Case alag nahi hain.
-> Explanation: Code mein koi shortcut (jaise if ya break) nahi hai. Chahe n ki value 2 ho ya 200, system ko har i ke liye saare j print karne hi padenge.
-> Calculation: Agar $n = 5$ hai, toh andar wala loop 5 baar chalega, aur ye pura process 5 baar repeat hoga ($5 \times 5 = 25$).
-> Isliye best case bhi $O(n^2)$ hi rahega.

2. Worst Case: $O(n^2)$
-> Explanation: Jaise-jaise $n$ badhega, kaam quadratic raftar se badhega.
-> Agar $n = 10$ hai, toh total $100$ prints honge.
-> Agar $n = 100$ hai, toh total $10,000$ prints honge.
-> Final Big O: $O(n \times n) = O(n^2)$. Ise hum Quadratic Time Complexity kehte hain.

3. Space Complexity: O(1)
Space ke mamle mein ye abhi bhi bahut efficient hai.
-> Explanation: Bhale hi hum hazaron lines print kar rahe hain, lekin hum memory mein kya store kar rahe hain? Sirf do chote variables: i aur j.
-> Humne koi array ya object create nahi kiya jo n ke badhne par memory zyada ghere.
-> Result: Memory usage constant hai, yaani O(1).
*/

// Exercise 5: Logarithmic Loop (Mind opener)
function halfNumber(n) {
    while (n > 1) {
        n = Math.floor(n / 2);
    }
}
/*
Jab bhi aap kisi number ko har step mein half (aadha) karte jaate hain, toh wahan linear nahi, balki Logarithmic growth hoti hai.

Time Complexity: O(log n)
Reason : 
-> Divide and Conquer Rule: Yahan loop $1$ se lekar n tak line se nahi chal raha. Har ek step par, hum n ki value ko 2 se divide kar rahe hain. Iska matlab hai ki hum target (yaani 1 tak pahunchne) ki taraf bahut tezi se jump kar rahe hain.
-> Number of Steps: Agar n = 8 hai, toh loop kaise chalega?
 Step 1: 8 / 2 = 4
 Step 2: 4 / 2 = 2
 Step 3: 2 / 2 = 1 (Loop khatam)
 Sirf 3 steps lage! Aur math mein 2^3 = 8 hota hai, jise hum log_2(8) = 3 likhte hain.

Conclusion: Jab bhi problem ka size har step mein divide (half, one-third, etc.) hota hai, toh uski complexity hamesha Logarithmic yaani O(log n) hoti hai.

Space Complexity: Yahan bhi O(1) hi rahegi, kyunki hum sirf ek variable n ko update kar rahe hain.
*/

// Exercise 6: Array Copy (Space focus)
function copyArray(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}
/*
1. Time Complexity: O(n)
Kyun? Kyuki yahan ek single for loop chal raha hai jo array ke har element ko ek-ek karke visit kar raha hai.
-> Agar array mein $n$ elements hain, toh loop exactly n baar chalega.
-> Har iteration mein hum .push() kar rahe hain, jo ki ek constant time O(1) operation hai.
-> Total time = n * O(1) = O(n).

2. Space Complexity: O(n)
Kyun? (Yahan dhyan dena, abhi tak hum O(1) dekh rahe the!) Is function mein humne let newArr = [] banaya hai.
-> Input ke hisaab se memory: Agar aapka original array (arr) 10 elements ka hai, toh newArr bhi 10 elements ki jagah lega. Agar original array 1 crore elements ka hai, toh newArr bhi 1 crore elements ki memory lega.
-> Extra Space: Kyunki hum input ki size ke barabar ek nayee memory allocate kar rahe hain, isliye iski space complexity Linear yaani O(n) hogi.

*/

// Exercise 7: Early Return Case (Best vs Worst)
function checkZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            return true;
        }
    }
    return false;
}
/*
1. Best Case: O(1)
-> Scenario: Maan lo array ka sabse pehla element hi 0 hai (e.g., [0, 5, 8, 2]).
-> Reason: Jaise hi i = 0 par condition check hogi arr[0] === 0, function turant true return kar dega. Loop aage chalega hi nahi. Isme sirf 1 step laga, isliye ye O(1) hai.

2. Worst Case: O(n)
-> Scenario: Agar array mein 0 sabse aakhri index par ho, ya fir array mein 0 kahin ho hi nahi.
-> Reason: Is situation mein loop ko array ke har ek element (n elements) ko check karna padega. Agar array 1000 elements ka hai, toh 1000 comparisons honge. Isliye ise O(n) kehte hain.

3. Big O kya represent karega?
Big O hamesha Upper Bound ko represent karta hai.
-> Simple Words Mein: Big O humein batata hai ki "Bhai, kuch bhi ho jaye, ye function Worst Case se zyada time nahi lega."
-> Is function ke liye: Iska Big O O(n) hoga.
-> Kyun? Kyunki as a developer, humein hamesha bure se bure (Worst Case) ke liye taiyar rehna chahiye. Hum ye maan kar chalte hain ki agar array bahut bada ho aur target na mile, toh system kitna slow ho sakta hai.

*/

// Exercise 8: Constant Work
function calculate(a, b) {
    let sum = a + b;
    let product = a * b;
    return sum + product;
}
/*
1. Time Complexity: O(1)
Kyun?
-> Is function ke andar sirf teen simple mathematical operations ho rahe hain: ek addition (+), ek multiplication (*), aur ek final addition.
-> In operations ko computer hamesha ek fixed time mein karta hai.
-> Chahe a aur b ki value $10$ ho ya 10 lakh, computer ko utne hi basic steps karne padenge.
-> Isme koi loop nahi hai jo n times chale, isliye ise hum Constant Time ya O(1) kehte hain.

2. Space Complexity: O(1)
Kyun?
-> Humne yahan do variables banaye hain: sum aur product.
-> Ye variables hamesha utni hi jagah lenge, chahe input kitna bhi bada ho.
-> Hum koi array ya list create nahi kar rahe hain jo input ke saath badhti jaye.
-> Is fixed memory usage ki wajah se iska space complexity Constant Space yaani O(1) hai.

*/

// Exercise 9: String Reverse (Classic)
function reverseString(str) {
    let result = [];
    for (let i = str.length - 1; i >= 0; i--) {
        result.push(str[i]);
    }
    return result;
}
/*
1. Time Complexity: O(n)
Kyun?
-> Isme ek hi for loop hai jo string ke aakhri character (str.length - 1) se shuru hokar pehle character (0) tak ja raha hai.
-> Agar string ki length n hai, toh loop exactly n baar chalega.
-> Har bar hum .push() kar rahe hain, jo constant time O(1) leta hai.
-> Isliye total time Linear hai, yaani O(n).

2. Space Complexity: O(n)
Kyun?
-> Humne ek naya array banaya hai: let result = [].
-> Is array mein hum utne hi characters bhar rahe hain jitne original string str mein hain.
-> Agar string "Gemini" (6 chars) hai, toh array ka size 6 hoga. Agar string 1 lakh characters ki hai, toh array bhi 1 lakh memory slots lega.
-> Kyunki extra memory input ke size (n) ke saath-saath badh rahi hai, isliye ise O(n) kehte hain.

Note: Tip:
Agar interview mein aapse koi puche ki kya hum iski Space Complexity $O(1)$ kar sakte hain? Toh uska jawab hai: Haan, agar hum string ko wahi par (in-place) swap karke reverse karein (par JS mein strings immutable hoti hain, toh humein pehle use array mein convert karna padega).

*/

// Exercise 10: Think Like Interviewer
function mixed(n) {
    for (let i = 0; i < n; i++) {}

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {}
    }
}
/*
Total Time = O(n) + O(n^2)

Final Big O: O(n^2)
Kyun? (Rule of Dominance): Big O ka ek bahut important rule hai: "Sirf sabse badi power (Dominant term) ko rakho, baaki sab bhool jao."
-> Jab n ki value bahut badi ho jati hai (jaise 1 lakh), toh n^2 ke muqable n ki value itni choti hoti hai ki use ignore kiya ja sakta hai.
-> Example: Agar n = 1000 hai:
    n = 1,000
    n^2 = 1,000,000 (10 lakh)
    Yahan 10 lakh ke saamne 1 hazaar ki koi khaas keemat nahi hai.
Isliye, hum hamesha "worst performing" part ko hi Final Big O maante hain.

Tip: Interviewer ko hamesha batayein ki aapne O(n) ko ignore kyun kiya (Dominant term rule ki wajah se).
*/
