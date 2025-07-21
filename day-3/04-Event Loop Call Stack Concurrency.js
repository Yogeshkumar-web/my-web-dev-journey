// GEC, Event Loop, Call Stack, Concurrency

/*

// 1. Global Execution Context (GEC)

=> Kya Hai:  JavaScript code ke execution ka base environment hai.
=> Kab banta hai: Jaise hi JavaScript pahli bar load ya run hoti hai, GEC ban jaata hai. 
=> Kya hota hai ismein: 
    1. Global Object (browser mai window, Node.js mai global) banata hai. Saare global variables aur functions iske andar hote hai.
    2. this keyword global object ko point karta hai.
=> Ek hi GEC: puri application mai sirf ek hi GEC hota hai.

Analogy: Socho GEC ghar hai. Jab tum ghar mein enter karte ho, toh sabse pahle isi mein aate ho. Tumhare ghar ki har cheez (variables, functions) iske andar hi store hai.


*/

//-----------------------------------------------

/*

// 2. Call Stack

=> Kya hai: call stack ek LIFO (Last In, First Out) data structure hai. Iska kaam hai yeh track karna ki JavaScript code mai currently kaun sa function execute ho raha hai aur uske baad kaun sa function execute hoga.
=> Kaise kaam karta hai: 
    1. jab koi function call hota hai, toh us function ko Call Stack mai push kar diya jata hai.
    2. jab koi function apna execution complete kar leta hai (ya return karta hai), toh use call stack se pop kar diya jaata hai.
    3. JavaScript Engine hamesha call stack ke top par maujood functio ko hi execute harta hai.

Analogy: Socho call stack ek plate stack hai kisi buffet(bufe) mein. Tum upar se plate uthate ho(fn execute karte ho), aur jab koi naya fn call hota hai toh tum uske upar ek aur plate rakh dete ho(stack mein push karte ho). jo plate sabse upar hoti hai, usi ko pahle uthaya ja sakta hai.

*/

function first() {
  console.log("First fn call");
  second();
}

function second() {
  console.log("Second fn call");
}

first();

/*

Jab first() call hoga:
    -first() call stack mai push hoga.
    -console.log("First fn call") execute hoa.
    -second() call stack mai push hoga(ab second()   call stack ke upar hai).
    -console.log("Second fn call") execute hoga.
    -second() fn complete hoga, call stack se pop ho jayega.
    - first() fn complete hoga, call stack se pop ho jayega.
    - call stack khali.

*/

//----------------------------------------------

/*

// 3. Concurrency (Asynchronous JavaScript)

jab JavaScript single-threaded hai, toh phir yeh ek hi samay mai multiple kaam(network requests, timers) kaise karta hai? Yahin par concurrency ka concept aata hai.

=> Kya hai: concurrency ka matlab hai multiple tasks ko is tarah se handle karna ki woh ek hi samay mai progress karte hue dikhein, bhale hi ek hi cpu core unhe execute kar raha ho. JavaScript mai, yah asynchronous operations ke through achieve kiya jata hai.
=> Kaise kam karta hai: JavaScript Engine itself single-threaded hai, lekin browser (ya Node.js runtime) mai kuchh Web APIs (browser mai) hote hai jo heavy-lifting karte hai. Jaise setTimeout, fetch, XMLHttpRequest, DOM events.
=> jab tum in web api ko call karte ho, toh JavaScript Engine un kaam ko call stack se hata kar(non-blocking banane ke liye) in APIs ko de deta hai. Yeh APIs apna kaam background mai karte hai.

Analogy: socho tum ek hi counter wale bank mai ho(single-threaded js). tumne cheque deposit karne ka form bhara(synchronous task), aur uske baad tumne foreign currency exchange ka form bhara(asynchronous task). bank teller(js engine) tumhare cheque deposit ka form le lega, phir foreign exchange ka form ek alag counter par (Web API) de dega. Jab foreign exchange ka kaam pura ho jayega, toh woh tumhe inform karega. tumhara main counter wala kaam foreign exchange ke complete hone ka wait nahi katega.

*/

// -----------------------------------------------

/*

// 4. Event Loop

Sabse interesting aur thoda sa complex concept: Event Loop. Yah hi woh mechanic hai jo JavaScript mai asynchronous code ko run karne mai help karta hai.

=> Kya hai: Event loop ek continuously running process hai jo call stack aur callback queue(ya task queue) ko monitor karta rahta hai.
=> Kaise kaam karta hai: 
    1. jab koi asynchronous operation(jaise setTimeout, fetch) complete hota hai, toh uska callback function call stack mai seedhe nahin jata.
    2. Uska callback function callback queue(ya task queue) mai chala jata hai.
    3. Event Loop lagatar chech karta rahta hai ki call stack khali hai ya nahi.
    4. agar call stack khali hai (yaani koi synchronous code execute nahi ho raha), toh event loop callback queue mai se sabse pahle callback ko uthata hai aur use call stack mai push kar deta hai taaki woh execute ho sake.
    5. jab tak call stack mai koi fn hai, event loop callback queue se kuchh nahi uthayega. iska matlab hai ki synchronous code ki preference pehle hoti hai.

Analogy: Socho event loop ek traffic cop hai. Uske paas do lanes hai: ek VIP Lane (call stack) jismein immediate tasks hai, aur ek Waiting Lane (Callback queue) jismein asynchronous tasks ke callbacks wait kar rahe hain.  Jab tak VIP Lane mai traffic hai, cop waiting lane ko rok kar rakhta hai. Jaise hi VIP Lane khali hoti hai, cop waiting lane se gaadi ko VIP Lane mai bhej deta hai.

*/

// ----------------------------------------------

console.log("Start");

setTimeout(function callback1() {
  console.log("Timeout 1");
}, 0);

Promise.resolve().then(function callback2() {
  console.log("Promise resolved");
});

console.log("End");

/*
Execution Flow:

1. console.log("Start") Call Stack mein jayega, execute hoga, pop hoga.
2. setTimeout() Call Stack mein jayega. Yeh Web API ko de diya jayega. callback1 Callback Queue mein chala jayega (0ms ke baad, yaani abhi). setTimeout() Call Stack se pop hoga.
3. Promise.resolve().then() Call Stack mein jayega. callback2 Microtask Queue mein chala jayega (Promise callbacks Microtask Queue mein jaate hain, jo Callback Queue se higher priority par hote hain). Promise Call Stack se pop hoga.
4. console.log("End") Call Stack mein jayega, execute hoga, pop hoga.
5. Ab Call Stack khali hai.
6. Event Loop check karega. Use dikhega ki Microtask Queue mein callback2 hai.
7. callback2 Call Stack mein push hoga, execute hoga (console.log("Promise resolved")), pop hoga. (Microtask Queue ko pehle process kiya jata hai Callback Queue se).
8. Ab Call Stack khali hai aur Microtask Queue bhi khali hai.
9. Event Loop check karega. Use dikhega ki Callback Queue mein callback1 hai.
10. callback1 Call Stack mein push hoga, execute hoga (console.log("Timeout 1")), pop hoga.
11. Call Stack khali.

*/

//--------------------------------------------------

/*
Pura Flow ek kahani ki tarah:

=> Subah Hui, Code File Load Hui! (Global Execution Context Banao!)

- Jaise hi tumhari JavaScript file load hui, Global Execution Context (GEC) ban gaya. Yeh insaan ka "office" hai jahaan saara kaam hota hai. Sabse pehle window object ban gaya (uske office ki diwar par lagi ek badi white board).

- Jo bhi global variables (let name = "Ankit") aur functions (function greet() {}) the, woh is window object par likh diye gaye.

=> Kaam Karna Shuru (Call Stack Picture Mein Aaya!)
- Ab JavaScript Engine (wohi baatuni insaan) code ki pehli line se chalna shuru karta hai.

- Har console.log() ya har function call ko woh apne ek haath (Call Stack) mein uthata hai aur kehta hai, "Chalo, isko karo!"

- Jaise hi woh kaam khatam hota hai, haath khali. Doosra kaam haath mein liya.

=> Achanak Ek Bada Kaam Aa Gaya (Concurrency - Web APIs Picture Mein Aaye!)

- Aisa hua ki setTimeout() ya fetch() jaisa koi kaam aa gaya. Ye kaam "heavy" ya "time-consuming" hote hain.

- JavaScript Engine sochta hai, "Agar main is kaam ko apne ek haath se karne baith gaya, toh mera office ruk jayega, aur mera boss (user) frustrate ho jayega ki meri website 'hang' ho gayi."

- Toh, woh intelligent hai! Usne bola, "Yeh mera kaam nahi, yeh toh Web API ka kaam hai."

- Usne woh setTimeout ya fetch request ko Web API ko de diya. (Socho, uske office ke bahar ek bada sa helper group hai - Web APIs - jo yeh kaam karte hain.)

- JavaScript Engine ka haath (Call Stack) ab khali ho gaya. Woh apna baaki synchronous kaam karne laga.

=> Kaam Poora Hua, Ab Notify Karo! (Callback Queue / Microtask Queue Mein Aao!)

- Udhar Web API ne apna kaam pura kar liya (jaise setTimeout ka time pura ho gaya ya fetch se data aa gaya).

- Ab Web API seedhe JavaScript Engine ke haath mein dobara kaam nahi de sakta, kyunki uska haath busy ho sakta hai.

- Toh, Web API ne us function ko (jo setTimeout ke andar tha ya fetch ke .then() mein tha) ek "Waiting Area" (Callback Queue / Microtask Queue) mein bhej diya. (Socho, office ke bahar ek waiting room hai jahaan kaam complete hone ke baad log wait karte hain.)

    -- Microtask Queue: Yeh VIP waiting room hai (Promises, queueMicrotask wale yahaan aate hain).

    -- Callback Queue: Yeh general waiting room hai (setTimeout, setInterval, DOM events wale yahaan aate hain).

=> Traffic Cop Aa Gaya! (Event Loop Picture Mein Aaya!)

- Ab yahaan entry hoti hai Event Loop ki. Yeh office ka ek traffic cop hai.

- Event Loop lagatar check karta rehta hai:

    -- "Kya JavaScript Engine ka haath (Call Stack) khali hai?"

    -- "Kya VIP Waiting Room (Microtask Queue) mein koi hai?"

    --"Kya General Waiting Room (Callback Queue) mein koi hai?"

- Jaise hi Event Loop dekhta hai ki JavaScript Engine ka haath (Call Stack) khali hai, toh woh sabse pehle VIP Waiting Room (Microtask Queue) se ek task uthata hai aur use JavaScript Engine ke haath (Call Stack) mein de deta hai.

- Jab VIP Waiting Room khali ho jaata hai, toh woh General Waiting Room (Callback Queue) se ek task uthata hai aur use JavaScript Engine ke haath (Call Stack) mein de deta hai.

- Aur yeh cycle chalti rehti hai.
*/

// ====== Global Execution Context (GEC) Banta Hai ======
// Jaise hi yeh file load hoti hai, JavaScript engine sabse pehle GEC banata hai.
// Is GEC ke andar ek 'window' object (global object) banta hai,
// aur 'this' keyword 'window' ko point karta hai.

// Ek global variable declare kiya gaya. Yeh 'window.globalVar' ban jayega.
let globalVar = "Mai Global Hu!";

// Ek global function declare kiya gaya. Yeh 'window.firstFunction' ban jayega.
function firstFunction() {
  // Ye line Call Stack mein aayegi aur turant execute hogi.
  console.log("1. firstFunction ke andar (Synchronous Code)");

  // ====== Asynchronous Operation: setTimeout (Web API) ======
  // Jab setTimeout call hota hai:
  // 1. firstFunction abhi bhi Call Stack mein hai.
  // 2. setTimeout khud Call Stack mein jaata hai.
  // 3. JavaScript engine dekhta hai ki setTimeout ek Web API hai.
  // 4. setTimeout ka callback function (innerCallback) aur uska delay (0ms) ko
  //    browser ke Web API environment ko de diya jaata hai.
  // 5. setTimeout function Call Stack se pop ho jaata hai.
  // firstFunction abhi bhi Call Stack mein hai, lekin setTimeout ka kaam Web API ko de diya gaya.
  setTimeout(function innerCallback() {
    // Yeh function tab tak Callback Queue mein wait karega jab tak Call Stack khali na ho jaaye.
    // Event Loop hi isko Callback Queue se utha kar Call Stack mein daalega.
    console.log("4. setTimeout ka Callback (Async - Callback Queue)");
    console.log("   " + globalVar + " ab Callback se access kiya.");
  }, 0); // 0ms ka matlab, jitni jaldi ho sake Callback Queue mein daal do

  // ====== Asynchronous Operation: Promise (Microtask Queue) ======
  // Jab Promise banta hai aur resolve hota hai:
  // 1. Promise.resolve() turant Call Stack mein resolve ho jaata hai.
  // 2. .then() ka callback (promiseCallback) Call Stack mein seedhe nahi jata.
  // 3. Isko 'Microtask Queue' mein daal diya jaata hai.
  //    Microtask Queue ki priority Callback Queue se zyada hoti hai.
  Promise.resolve().then(function promiseCallback() {
    // Yeh function tab tak Microtask Queue mein wait karega jab tak Call Stack khali na ho jaaye
    // aur saare previous microtasks complete na ho jaayen.
    // Event Loop hi isko Microtask Queue se utha kar Call Stack mein daalega.
    console.log("3. Promise ka Callback (Async - Microtask Queue)");
  });

  // Ye line Call Stack mein aayegi aur execute hogi.
  console.log("2. firstFunction ke andar (Synchronous Code ke baad)");
}

// ====== Global Level Call: firstFunction ======
// Jaise hi yeh line execute hoti hai, firstFunction Call Stack mein push ho jaata hai.
firstFunction();

// ====== Global Level Code (Synchronous) ======
// Jab firstFunction Call Stack se pop ho jayega, toh Global Execution Context ka
// baaki bacha hua synchronous code execute hoga.
// Ye line Call Stack mein aayegi aur execute hogi.
console.log("5. Global scope mein (Synchronous Code)");

// ====== End of Code ======
// Ab Call Stack khali hai. Event Loop active ho jayega.
// 1. Event Loop dekhega Call Stack khali hai.
// 2. Sabse pehle woh Microtask Queue ko check karega.
// 3. Agar Microtask Queue mein kuch hai (jaise yahaan Promise ka callback),
//    toh woh usko Call Stack mein push karega.
// 4. Jab Microtask Queue khali ho jayegi, tab Event Loop Callback Queue ko check karega.
// 5. Agar Callback Queue mein kuch hai (jaise yahaan setTimeout ka callback),
//    toh woh usko Call Stack mein push karega.
// Yeh cycle chalti rehti hai jab tak saare queues aur Call Stack khali na ho jaayen.

/*
"mental walkthrough"

- Start (GEC Active): globalVar aur firstFunction GEC mein register ho gaye.

- firstFunction() Call: firstFunction Call Stack mein gaya.

    -- console.log("1. ...") execute hua.

    -- setTimeout() call hua. Iska innerCallback Web APIs ko de diya gaya, jo ise 0ms ke baad Callback Queue mein daal dega. setTimeout Call Stack se hat gaya.

    -- Promise.resolve().then() call hua. Iska promiseCallback Microtask Queue mein chala gaya. Promise Call Stack se hat gaya.

    -- console.log("2. ...") execute hua.

    -- firstFunction apna kaam complete kar chuka, Call Stack se hat gaya.

- Global Scope Continued: console.log("5. ...") execute hua (kyunki abhi bhi synchronous code baaki hai GEC mein).

- Call Stack Empty! Event Loop Kooda!

    -- Event Loop dekhta hai ki Call Stack poori tarah khali hai.

    -- Sabse pehle, woh Microtask Queue mein dekhta hai. promiseCallback wahaan hai.

    -- promiseCallback Call Stack mein push hota hai. console.log("3. ...") execute hota hai. promiseCallback Call Stack se hat jaata hai. Microtask Queue khali.

    -- Event Loop phir dekhta hai Call Stack khali hai. Microtask Queue bhi khali hai.

    -- Ab woh Callback Queue mein dekhta hai. innerCallback wahaan hai.

    -- innerCallback Call Stack mein push hota hai. console.log("4. ...") aur console.log("   Mai Global Hu!...") execute hote hain. innerCallback Call Stack se hat jaata hai. Callback Queue khali.

Ab saare Queues aur Call Stack khali hain. Program ka execution complete.
*/

//-------------------------------------------------------------

/*

// callback queue/macrotask queue/task queu, ye teeno ek hi hai.

// Callback Queue (Macrotask Queue) mein kya jaata hai?
1. setTimeout()
2. setInterval()
3. I/O Operations (Node.js): Jaise file system operations (fs.readFile), network requests, database operations ke callbacks Node.js mein macrotask queue mein jaate hain.
4. UI Rendering Events / DOM Events: Browser mein click events, keyboard events, load events, resize events, etc., ke callbacks bhi Callback Queue mein jaate hain.


// Microtask Queue mein kya jaata hai?

1. Promises: Promise.then(), Promise.catch(), aur Promise.finally() ke callbacks hamesha Microtask Queue mein jaate hain, jab Promise resolve ya reject hota hai.
2. async/await: Internally async/await bhi Promises par hi based hain, isliye await ke baad ka code bhi Microtask Queue mein jaata hai.
3. queueMicrotask(): Yeh ek explicit API hai jo aapko seedhe Microtask Queue mein apna function daalne ki suvidha deta hai. Ye bahut specific use cases mein istemal hota hai.
4. Mutation Observer API: DOM tree mein changes ko observe karne ke liye istemal hota hai, aur iske callbacks bhi Microtask Queue mein jaate hain.
*/
