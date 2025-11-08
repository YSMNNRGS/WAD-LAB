// let btn1 = document.querySelector("#btn1");
// 
// btn1.onclick = () =>{
    // console.log("btn1 was clicked");
    // 
// }

// increment 
// let btn1 = document.querySelector("#btn1");
// 
// btn1.onclick = () =>{
    // console.log("btn1 was clicked");
    // let a = 25;
    // let b = 50;
    // b--;
    // a++;
    // console.log(a);
    //  console.log(b);
    // 
    // 
// }

//  btn1.addEventListener("click", (evt) => {
    //  console.log("button1 was clicked");
    // console.log(evt); 
    // console.log(evt.type);
//  }); 

let btn1 = document.querySelector("#btn1");

const handler4 = () => {
  console.log("button1 was clicked - handler4");
};

btn1.addEventListener("click", (evt) => {
  console.log("button1 was clicked - handler1");
});
btn1.addEventListener("click", () => {
  console.log("button1 was clicked - handler2");
});
btn1.addEventListener("click", () => {
  console.log("button1 was clicked - handler3");
});
btn1.addEventListener("click", handler4);
btn1.addEventListener("click", () => {
  console.log("button1 was clicked - handler5");
});

// remove handler4 later
btn1.removeEventListener("click", handler4);


