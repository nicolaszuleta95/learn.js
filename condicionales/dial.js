var dial = parseInt(prompt("ingrese su dial:"));
if (dial%2 !== 0 && dial >= 89.9 && dial < 107.9) {
    alert("Es un dial valido!");
} else {
    alert("No es un dial valido");
}
