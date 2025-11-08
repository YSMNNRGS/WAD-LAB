 const prompt= require ("prompt-sync")();
// let name = prompt("Enter your name: ");
// console.log("Hello "+name);

// let score =prompt("enter score: ")
// if (score >= 3.4) {
    // console.log("You pass");
// }else{
        // console.log("Try again");
    // }
// 

// let score = 8;
// let result = (score <8) ? "allowed " : "not allowed";
// console.log(result);
// 
let score = parseFloat(prompt("Enter score: "));

// First, find the grade
let grade;
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}

// Now use switch to print message
switch (grade) {
  case "A":
    console.log("Excellent!");
    break;
  case "B":
    console.log("Good job!");
    break;
  case "C":
    console.log("You passed.");
    break;
  case "D":
    console.log("Needs improvement.");
    break;
  default:
    console.log("Fail.");
}
