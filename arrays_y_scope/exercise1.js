let userInput;
let num;
let array = [];

do {
  userInput = prompt("Ingrese el numero:");
  if (userInput !== "stop") {
    num = parseInt(userInput);
    array.push(num);
  }
} while (userInput !== "stop");
console.log(array);
