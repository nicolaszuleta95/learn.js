//ciclo for
let suma = 0
for (let i = 0; i < 10; i++) {
    suma = suma + i;   
}
alert(suma);

//ciclo while
let i = 0
while (i < 5) {
    alert(i);
    i++;
}

//do while
let i = 0;
do {
    alert(i);
    i++;
} while (i < 5);


//documentacion con jsdoc (usar /** */ en emmet)
/**
 * @method multiplicar
 * @description method that multiplies two numbers.
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number}
 */
const multiplicar = function(num1, num2) {
    return num1 * num2;
}
