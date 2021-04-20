class Dog {
  constructor(
    name = prompt("Escriba el nombre del perro:"),
    age = parseInt(prompt("Escriba la edad del perro:")),
    breed = prompt("Escriba la raza del perro:"),
    color = prompt("Escriba el color del perro:"),
    size = prompt("Escriba el tamaño del perro:"),
    adoptionStatus = prompt("Escriba el estado de adopcion del perro:")
  ) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.color = color;
    this.size = size;
    this.adoptionStatus = adoptionStatus;
  }
}

let array = [];
var ask = true;

function addDogs() {
  while (ask == true) {
    const name = new Dog();
    array.push(name);
    const con = confirm("¿Quiere añadir mas perros?");
    if (con == true) {
      ask = true;
    } else {
      ask = false;
    }
  }
  console.log(array);
}

addDogs();
