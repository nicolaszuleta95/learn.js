class Person {
  constructor(name, lastname, age) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  set _name(name) {
    this.name = name;
    return this.name;
  }

  fullName() {
    return `${this.name} ${this.lastname}`;
  }

  oldEnough() {
    return this.age >= 18 ? true : false; //Operador ternanrio (if)
  }
}

const lucho = new Person("Luis", "De Seta", 30);
const nico = new Person("Nicolas", "Zuleta", 25);
const clau = new Person("Claudia", "Rios", 17);

console.log(lucho.fullName());
console.log(nico.oldEnough());
console.log(clau.oldEnough());
nico._name = "Ronaldo"; //cambio nombre de nico a ronaldo
console.log(nico);
