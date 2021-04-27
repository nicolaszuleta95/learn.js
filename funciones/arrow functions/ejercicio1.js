/* 
Solicitar al visitante que ingrese su nombre de usuario.
Almacenar el nombre de usuario ingresado el una función.
Escenario 1: El nombre no está en la lista.
Darle la bienvenida al nuevo usuario
Escenario 2: El nombre de usuario existe.
Dar un aviso al usuario que el nombre de usuario se encuentra en uso
Utilizar una función con try / catch para realizar la validación */

let listNames = ["Rodrigo", "Patricia", "Cristobal", "Elena"];

const visitorName = prompt("Ingrese su nombre");

const askName = () => {
  for (let i = 0; i < listNames.length; i++) {
    if (visitorName === listNames[i]) {
      return true;
    }
  }
  return false;
};

const a = askName();

try {
  if (a) {
    alert("El nombre de usuario ya existe");
  } else {
    throw "Bienvenido";
  }
} catch (error) {
  alert(`${error} ${visitorName}`);
}
