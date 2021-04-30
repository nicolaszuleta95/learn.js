const txtLogo = document.querySelector(".navbar-brand");
const title = document.querySelector(".title");
const verMas = document.querySelector("#verMas");

const storedTitle = localStorage.getItem("title"); //get the stored title from the local storage
title.innerHTML = storedTitle; //set the title to the stored title
/**
 * Functions
 */
const borderLogo = () => {
  txtLogo.classList.add("redborder"); //add a class to element
};

const removeBorderLogo = () => {
  txtLogo.classList.remove("redborder"); //remove a class of element
};

const askTitle = () => {
  let NewTitle = prompt("Ingrese un nuveo titulo"); //ask for a new title
  title.innerHTML = NewTitle; //replace the title
  localStorage.setItem("title", NewTitle);
};

const imgSection = document.querySelector(".img-section");
var cln = imgSection.cloneNode(true);

const duplicateImg = () => {
  imgSection.append(cln);
  console.log(imgSection);
};

/**
 * Listener
 */
txtLogo.addEventListener("mouseover", borderLogo);
txtLogo.addEventListener("mouseout", removeBorderLogo);
title.addEventListener("click", askTitle);
verMas.addEventListener("click", duplicateImg);
