
// task 2
const nums2 = [12, 100, 4, 55, 10000, 5, 30, 17, 3, 40, 9];
let maxVal = nums2[0];
let minVal = nums2[0];

for (const n of nums2) {
  if (n > maxVal) {
    maxVal = n;
  }
  if (n < minVal) {
    minVal = n;
  }

}
console.log("Max:", maxVal);
console.log("Min:", minVal);