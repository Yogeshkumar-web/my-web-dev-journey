// Rest & Spread Operator

// Spread Operator: Spread ka matlab hota hai: "Dabba tod ke har ek item ko bahar nikaal do."

const chocolates = ["KitKat", "Perk", "DairyMilk", "5Star"];

console.log(...chocolates); // KitKat Perk DairyMilk 5Star

// Rest Operator: Rest ka matlab hota hai: "Jitne bhi remaining items hain unhe ek naye dabbe (array) me jod do."

function packChocolates(...items) {
  return items;
}
let result = packChocolates("KitKat", "Perk", "Munch");

console.log("Result :", result);

// fn
function add(a, b, c) {
  return a + b + c;
}
const nums = [1, 2, 3];
console.log(add(...nums)); // 6
// console.log(add(nums)); // galat call, yahan par tum a ki jagah ek nums naam ka array de rahe ho aur b, aur c ki jagah kuchh nahin matlab undefined undefined.

// rest in fn operator
// function total(...numbers) {
//   let total = numbers.reduce((acc, val) => acc + val, 0);
//   return total;
// }
// let runTotal = total(1, 2, 3, 4);
// console.log("running Total :", runTotal);

// dusre tarike se

function total(...numbers) {
  let total = numbers.reduce(function (acc, val) {
    return acc + val;
  }, 0);
  return total;
}
let runTotal = total(1, 2, 3, 4);
console.log("running Total :", runTotal);
