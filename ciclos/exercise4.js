let i;
let sum = 0;
let avg = 0;

let average = function(num) {
    sum = sum + num;
    i += 1
    avg = sum/i;
}

let ans;

do {
    ans = prompt("Ingrese un numero: ");
    if ((ans < 10) && (ans > -10)) {
        average(ans);
    }
} while (ans !== "salir");

alert(`el promedio de los numeros de un solo digito es: ${avg}`);