const myFirstObject = {
  name: "Nicolas",
  lastName: "Zuleta",
  age: 25,
  weight: 83,
  height: 1.83,
  married: false,
  children: [
    { name: "Luis", age: 3 },
    { name: "Nina", age: 1 },
    { name: "Pepe", age: 7 },
  ],
  saludar: function () {
    console.log(this);
    return "Hola Mundo";
  },
};

console.log(myFirstObject);
console.log(myFirstObject.married); //false
console.log(myFirstObject.saludar()); //Hola Mundo

myFirstObject.saludar(); //para mostrar el this que cambia dependiendo de donde se encuentre

// Constructor
function Player(name, lastName, age) {
  this.name = name;
  this.lastName = lastName;
  this.age = age;
  this.attack = function () {
    return "Attack";
  };
}

const player1 = new Player("Goku", "Kakaroto", 30);
const player2 = new Player("Naruto", "Uzumaki", 17);
console.log(player1);
console.log(player2);

// Clases (implementadas a partir de ECMASCRIPT6)
class Person {
  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  //get: obtiene valores
  get _name() {
    return this.name;
  }

  get _lastName() {
    return this.lastName;
  }

  get _age() {
    return this.age;
  }

  //set: permiten modificar los valores
  set _name(name) {
    this.name = name;
    return this.name;
  }

  attack() {
    return "Attack";
  }
}

const Person1 = new Person("Ronaldinho", "Gaucho", 40);
console.log(Person1);
console.log(Person1.attack());
console.log(Person1.name); //Ronaldinho
console.log(Person1._name); //Ronaldinho
console.log(Person1._lastName); //Gaucho
console.log(Person1._age); //40
Person1._name = "Ronaldo"; //llama el set para cambiar el nombre
console.log(Person1); //Person {name: "Ronaldo", lastName: "Gaucho", age: 40}

// Herencia (extends)
class Ninja extends Person {
  constructor(name, lastName, age, ki) {
    super(name, lastName, age);
    this.ki = ki;
  }
}

const player3 = new Ninja("Nico", "Zule", 25, 1000);
console.log(player3);

//Static (sirven para poderlos ejecutar sin la necesidad de instanciar un objeto)
/*class Person {
  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  static attack() {
    return "Attack";
  }
}*/
