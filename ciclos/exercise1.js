//Crear un script que permita ingresar solamente 5 valores mediante prompt
// y nos muestre la suma total de todos los valores ingresados
var sum = 0;
for (let i = 0; i < 5; i++) {
    let num = parseInt(prompt("Ingrese un numero a la suma: "));
    sum = sum + num;
    prom = sum/(i+1);
}
alert(`la suma de estos numeros es: ${sum}`);
alert(`el promedio de estos numeros es: ${prom}`);