var list = ['tiger', 'cat', 'bear', 'bird'];
console.log(list[0]); //los arrays empiezan por 0 index

var numbers = [1, 2, 3, 4];
var booleans = [true, false, true];

//tambien se pueden tener funciones en un array
var fucntionList = [function apple() {
    console.log('apple');
}]

//se pueden mezclar los tipos incluso pero no es buena practica
var mixedList = ['apples', 3, undefined, true, function apple() {
    console.log('apples');
}]

//array de arrays
var test = [
    ['tiger', 'cat', 'bear', 'bird']
];
console.log(test[0][2]); //para obtener 'bear'

//metodos
console.log(list.shift()); //elimina el primer item de un array
console.log(list.pop());//elimina el ultimo item de un array
console.log(list.push('elephant'));//añade el item al array
console.log(list.concat(['bee', 'deer']));//concatena arrays
console.log(list.sort());//ordena los items del array
