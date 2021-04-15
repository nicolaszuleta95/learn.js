//const myFirstArray = [1, "Patri", false, 23, undefined];
const myFirstArray = [1, 4, 6, 23, 102];
let suma = 0;

console.log(myFirstArray);

for (let i = 0; i < myFirstArray.length; i++) {
  suma = suma + myFirstArray[i];
}

alert(`la suma total es: ${suma}`);
