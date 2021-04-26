// 1. Importar las dependencias
// 2. Declaracion de variables
// 3. Funciones Expresadas
// 4. Ejecucion de funciones

/*
  Funciones Expresadas -> Anonimas (Buena practica)
        no se pueden acceder sin ser antes inicializadas por el hoisting
*/
const myFunction = function (a = "No hay nada", b = 23) {
  return `Hola mundo ${a} ${b}`;
};
console.log(myFunction());

/*
Arrow Functions (son anonimas o expresadas)
 */
const myFirstArrowFunction = (a, b) => {
  return `Hola desde mi primera funcion flecha ${a} ${b}`;
};
console.log(myFirstArrowFunction());

//se puede omitir el return y se pueden omitir hasta las llaves
const secondArrowFunction = () => {
  console.log("Mi segunda arrow function");
};
secondArrowFunction();

// si solo tengo un parametro puedo quitar los parentesis
const arrowFunction3 = (a) => {
  console.log("hola tercera");
};
arrowFunction3();

// mi arrow function tiene mas de una linea debe tener llaves y return
const arrowFunction4 = (a = 2, b = 14) => {
  const c = a + b;
  return c;
};
console.log(arrowFunction4(14, 7));

/* Funciones Declaradas */
function myFunction_2() {
  return "Hola Mundo 2";
}
console.log(myFunction_2());

/* Hoisting */
console.log(myVariable); //da undefined
//console.log(myVariable_2); //da error

var myVariable = 1; // con var la variable se guarda en memoria y se inicializa undefined
let myVariable_2 = 2; // con let y const la variable se guarda en memoria y no se inicializa

//this (por esto es mejor usar funciones con objetos y no arrow functions)
const person = {
  name: "nilton",
  apellido: "diaz",
  edad: 30,
  speak: function () {
    console.log(this); //el this es el objeto de la funcion
    console.log(`Estoy hablando y me llamo ${this.name}`);
  },
  coding: () => {
    console.log(this); //this con el arrow function es el objeto global (no se puede usar this)
    console.log(`Estoy codeando y me llamo ${this.name}`);
  },
};
console.log(person);
person.speak();
person.coding();
