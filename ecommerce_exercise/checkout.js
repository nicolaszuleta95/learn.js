const btn = document.querySelector(".btn");
const datos = document.querySelector(".datos");
const pagos = document.querySelector(".pagos");
const finalizar = document.querySelector(".finalizar");

const hideDatos = () => {
  datos.classList.add("hide");
  btn.classList.add("hide");
  pagos.classList.remove("hide");
};

const felicitar = () => {
  alert("Gracias por tu compra");
  localStorage.clear();
};

//Listener
btn.addEventListener("click", hideDatos);
finalizar.addEventListener("click", felicitar);
