// 1. Ojo con llenar de listener - pensar en el performance de la app
// 2. burbujeo de eventos - event bubbling -> prevent.default()

/**
 * Formas de acceder al DOM
 */
// 1. document.getElementByTagName -> return an array
// 2. document.getElementByClassName -> return an array
// 3. document.getElementById -> return the first element found
// 4. document.querySelector -> return the first element found
// 5. doucument.querySelectorAll -> return an array

const txtP = document.getElementsByClassName("txt");
const titleSpan = document.querySelector("span");
//const titleSpanId = document.getElementsByTagName("span")[1];
const titleSpanId = document.querySelector("#title");

/**
 * Functions
 */
const handleTxt = () => alert("Has hecho doble click sobre mi");
const handleSpan = () => alert("Estas sobre mi");
const handleSpan1 = () => alert("Me abandonaste");

/**
 * Listener
 */
txtP[1].addEventListener("dblclick", handleTxt);
titleSpan.addEventListener("mouseover", handleSpan);
titleSpanId.addEventListener("mouseleave", handleSpan1);
