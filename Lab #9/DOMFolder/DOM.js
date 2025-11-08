var a = document.querySelector("h1")
console.log(a);
// 2
var a= document.querySelector("h1");
a.innerHTML = "Changed HTML. ";

// 3
var a= document.querySelector("h1");
a.innerHTML = "Changed CSS";
a.style.color = "blue";
a.style.backgroundColor = "cadetblue";

document.querySelector("#pID").innerHTML = "This is done via ID";

document.querySelector(".pClass").innerHTML = "This is done via CLASS";

let heading = document.getElementsByClassName("heading");
console.log(heading);


// property inner html
var a = document.querySelector("h1");
a.innerHTML = "Changed <i> HTML</i> Content";

// inner text
var b = document.querySelector("p");
b.innerText = "Changed visible text only!";

// text content

var c= document.querySelector("h1");
c.textContent = "Changed <i>Text Content</i>";