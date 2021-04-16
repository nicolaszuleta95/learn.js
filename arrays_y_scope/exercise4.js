let userInput;
let array = [];

do {
  userInput = prompt("Ingrese numero");
  if (userInput !== "0") {
    num = parseInt(userInput);
    array.push(num);
  }
} while (userInput !== "0");

if (array.length % 3 === 1) {
  array.shift();
} else if (array.length % 3 === 2) {
  array.shift();
  array.pop();
}
console.log(array);
