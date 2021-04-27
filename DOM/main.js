const btn = document.querySelector(".btn-hello-world");
const btn1 = document.getElementsByTagName("p");
let a;

//console.log(btn1);

/**
 * Handles
 */
const handleBtn = (e) => {
  let information = "";
  console.log(e);
  btn.innerHTML = "Hola Acamica 72";
  a = document.createElement("p");
  a.classList.add("cualquier-clase");
  var newContent = document.createTextNode("Hola!¿Qué tal?");
  a.appendChild(newContent);
  information = a.innerHTML;
  console.log(information);
  document.body.appendChild(a);
};

/* for (let i = 0; i < btn1.length; i++) {
    btn1[i].addEventListener("click", handleBtn); 
} */

let aa = `{"name": "hola", "lastname": "mundo"}`;
console.log(aa.name);
console.log(JSON.parse(aa).name);
aa = JSON.stringify(aa);
console.log(aa);
localStorage.setItem("aaa", aa);
console.log(JSON.parse(localStorage.getItem("data")));

/**
 * Listeners
 */
btn.addEventListener("click", (e) => handleBtn(e));

//Localstorage or LS
// 1. Solo permite guardar texto
// 2.
