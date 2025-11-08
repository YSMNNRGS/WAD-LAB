console.log("Hi")
var fullName = 'Yasamin';
var age = 20;
a = null;
y = undefined;
console.log(fullName +" "+ age);
console.log("A is null here: "+a);
console.log("Y is undefined here: "+y);
var age = 20;
var age = 22;
var age = 23;
console.log(age);

var name = "Nayab";
console.log(name); // Output: Nayab

var name = "Ali"; // Redeclaring allowed
console.log(name); // Output: Ali

name = "Sara"; 
console.log(name); 

if (true) {
    var test = "Inside block";
}
console.log(test);

const price = 100;
var fullName = "Yasamin";
var courseName = "Java Basics";
var cardNumber = "12380932840283";
var isPaid = true;
var modeofPayment;
console.log(fullName + " has successfully registered to "+courseName + " and Paid the amount "+price+ " via card: "+cardNumber);

let c = 10;
let b = 5;
console.log(c + b); // Addition
console.log(c - b); // Subtraction
console.log(c * b); // Multiplication
console.log(c / b); // Division
console.log(c % b); // Modulus

let score = 80;
if (score >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}
for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}
var time = Number(prompt("What time is it: "));
if (time > 5 && time < 17) {
  alert("Good Morning");
} else {
  alert("Good Evening");
}

