let num = parseInt(prompt("Ingrese el numero a convertir:"));
let letter;

function numberToLetter(num) {
    switch (num) {
        case 1:
            return letter = "a";
            break;
        case 2:
            return letter = "b";
            break;
        case 3:
            return letter = "c";
            break;
        case 4:
            return letter = "d";
            break;
        case 5:
            return letter = "e";
            break;
        case 6:
            return letter = "f";
            break;
        case 7:
            return letter = "g";
            break;
        case 8:
            return letter = "h";
            break;
        case 9:
            return letter = "i";
            break;
        case 10:
            return letter = "j";
            break;
        default:
            break;
    }
}

if ((num > 0) && (num <= 10)) {
    numberToLetter(num);
}

alert(letter);