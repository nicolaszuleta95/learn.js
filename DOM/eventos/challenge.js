/*
📝 Si el/la usuario/a presiona el botón y el input está vacío, realiza los siguientes pasos:

- Muestra el background del input en rojo
- Muestra un alert diciendo que el input está vacío
- Cuando el usuario comience a escribir vuelve el background del input a blanco
*/

var fname = document.getElementById("fname");
var btn = document.getElementById("btn");
var userMessage = document.getElementById("userMessage");
btn.addEventListener("click", display2);

function displayName() {
  const username = fname.value;
  userMessage.innerHTML = "Hola " + username;
}

function display2() {
  const username2 = fname.value;
  if (username2 == null || username2 == "") {
    fname.style.backgroundColor = "red";
    alert("El input está vacío");
    fname.addEventListener("input", function () {
      fname.style.backgroundColor = "white";
    });
  } else {
    userMessage.innerHTML = "Hola " + username2;
  }
}
