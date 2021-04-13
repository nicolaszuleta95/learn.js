let i;
let par = 0;
let impar = 0;

const evaluateNumber = function(i) {
    if (i%2 === 0) {
        par++;
    } else {
        impar++;
    }
}

do {
    i = parseInt(prompt("Ingrese numero:"));
    if (i !== 0) {
        evaluateNumber(i);
    }
} while (i !== 0);


if(par > impar) {
    return alert("pares");
} else if(impar > par) {
    return alert("impares");
} else {
    return alert("Son iguales");
}