let p = document.querySelector(".text1");
let oldClass = p.getAttribute("class");
p.setAttribute("class","newText");

// task 2
let btn = document.createElement("button");
btn.textContent = "logIn";
btn.style.color = "white";
btn.style.backgroundColor = "black";
document.body.before(btn);

// 

// 
// task 3
let p1 = document.querySelector(".t3")
p1.className.padEnd("extraStyle");
p1.style.backgroundColor = "yellow";
p1.style.fontWeight = "bold";

// task 5
function togglePara(){
  let p2 = document.getElementById("msg");

  if(p2.style.display === "none"){
    p2.style.display = "block";
  } else {
    p2.style.display = "none";
  }
}

