// // task 1
// function findLargest(a, b, c) {
//   if (a >= b && a >= c) {
//     console.log(a + " is the largest number");
//   } else if (b >= a && b >= c) {
//     console.log(b + " is the largest number");
//   } else {
//     console.log(c + " is the largest number");
//   }
// }

// findLargest(5, 10, 7);

// task2
// const toSeconds = (minutes) => {
//   return minutes * 60;
// };
// 
// console.log("5 minutes =", toSeconds(5), "seconds");
// 
//task 3
// let numbers = [2, 4, 6, 8, 10];
// 
// numbers.forEach(function(num) {
//   console.log(num * num);
// });
// 
//task4
// let marks = [35, 60, 90, 25, 70, 45];
// 
// let passed = marks.filter(function(mark) {
//   return mark > 50;
// });
// 
// console.log("Marks greater than 50:", passed);
// 

// task5
// const prompt = require("prompt-sync")();
// let n = parseInt(prompt("Enter a number:"));
// let arr = [];
// 
// for (let i = 1; i <= n; i++) {
//   arr.push(i);
// }
// 
// console.log("Array from 1 to n:", arr);
// 
// lab 6
let nums = [2, 3, 4, 5];

let product = nums.reduce(function(acc, x) {
  return acc * x;
}, 1);

console.log("Product of all numbers:", product);
