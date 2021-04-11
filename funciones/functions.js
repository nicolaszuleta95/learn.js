function sayhello() {
    console.log("Hello!");
}
sayhello();

//Anonymus function
var saybye = function() {
    console.log("Bye!");
}
saybye();

//arguments
function sing(song) {
    console.log(song);
}
sing("la di da di we like to party");

function multiply(a, b) {
    return a*b;
}

alert(multiply(3,4));
