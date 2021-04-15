let userInput;
let arrayPares = [];
let arrayImpares = [];
let otros = [];
let num;

do {
  userInput = prompt("Ingrese numero");
  if (userInput !== "0") {
    num = parseInt(userInput);
    if (Number.isNaN(num) === true) {
      otros.push(userInput);
    } else if (num % 2 !== 0) {
      arrayImpares.push(num);
    } else if (num % 2 === 0) {
      arrayPares.push(num);
    }
  }
} while (userInput !== "0");
console.log(arrayPares);
console.log(arrayImpares);
console.log(otros);
