let userInput;
let num;
let array = [];

do {
  userInput = prompt("Ingrese numero");
  if (userInput !== "0") {
    num = parseInt(userInput);
    if (Number.isNaN(num) === false) {
      array.push(num);
    }
  }
} while (userInput !== "0");

let max = Math.max(...array);
let min = Math.min(...array);
console.log(max);
console.log(min);

function arrayRemove(arr, value) {
  return arr.filter(function (ele) {
    return ele != value;
  });
}

var result = arrayRemove(array, max);
result = arrayRemove(result, min);
console.log(result);
