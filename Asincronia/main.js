const admin = "Rodri";
const status = 200;

const a = (callback) => {
    if(status === 200) {
        callback(parseInt(prompt("numero")), parseInt(prompt("numero")));
    } else {
        alert("Ha ocurrido un error");
    }
}

const verifyAdmin = () => {
    return admin === "Rodri" ? alert(true) : alert(false);
}

const suma = (a, b) => {
    return alert(a+b);
}

const resta = (a, b) => {
    return alert(a-b);
}

const multiplicar = (a, b) => {
    return alert(a*b);
}

const dividir = (a, b) => {
    return alert(a/b);
}

const prom = (a, b) => {
    return alert((a+b) / 2);
}


a(prom);
a(suma);
a(resta);
a(multiplicar);
a(dividir);