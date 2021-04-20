class Dog {
  constructor(name, age, breed, color, size, adoptionStatus) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.color = color;
    this.size = size;
    this.adoptionStatus = adoptionStatus;
  }

  modifyAdoptionStatus(adoptionStatus) {
    this.adoptionStatus = adoptionStatus;
    return `the new adoption status of ${this.name} is ${this.adoptionStatus}`;
  }

  notifyAdoptionStatus() {
    return `${this.name} is ${this.adoptionStatus}`;
  }
}

const maggie = new Dog("Maggie", 1, "Cocker", "gold", "medium", "Not adopted");
const bruno = new Dog("Bruno", 3, "Pitbull", "brown", "big", "Adopted");
const tino = new Dog("Tino", 7, "Bulldog", "white", "medium", "In progress");
console.log(maggie);
console.log(bruno);
console.log(tino);

console.log(maggie.modifyAdoptionStatus("Adopted"));
console.log(maggie);

console.log(bruno.notifyAdoptionStatus());
console.log(tino.notifyAdoptionStatus());
console.log(maggie.notifyAdoptionStatus());
