let age;
let count = 0;

var comingOfAge = function(age) {
    if (age >= 18) {
        count++;
    }
}

do {
    age = parseInt(prompt("Ingrese la edad:"));
    comingOfAge(age);
} while (age !== 0);

alert(`Hay ${count} mayores de edad`);