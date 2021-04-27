/*
Crea un array donde cada posición sea un objeto que
contenga la siguiente información:
- Nombre
- Apellido
- Email
- Usuario
- Contraseña
- Activo (booleano)
Adapta tu función de “programamos” para que trabaje
con estos nuevos datos.
Solo permite loguear personas con el usuario y
contraseña correcto y que tengan su usuario activo.
*/

let users = [
  {
    nombre: "Nicolas",
    apellido: "Zuleta",
    email: "nicolas@email.com",
    usuario: "nicolas123",
    contraseña: "123nico",
    activo: true,
  },
  {
    nombre: "Laura",
    apellido: "Ramirez",
    email: "laura@email.com",
    usuario: "laura123",
    contraseña: "123lau",
    activo: false,
  },
];
//let users = [];

/*
class user {
  constructor(
    nombre = prompt("nombre:"),
    apellido = prompt("apellido:"),
    email = prompt("email:"),
    usuario = prompt("usuario:"),
    contraseña = prompt("contraseña:"),
    activo = prompt("activo:")
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.usuario = usuario;
    this.contraseña = contraseña;
    this.activo = activo;
  }
}
*/

/*
const logIn = () => {
  const user_new = new user();
  for (let i = 0; i < users.length; i++) {
    if (
      user_new.usuario === users[i].usuario &&
      user_new.contraseña === users[i].contraseña &&
      user_new.activo === "true"
    ) {
      console.log("sesion iniciada");
      return true;
    }
  }
  console.log("error en el inicio de sesion");
  return false;
};

console.log(logIn());
*/

//Crea una nueva función que permita agregar nuevos usuarios en tu array
/*
let ask = true;

const newUser = () => {
  while (ask == true) {
    const user_new = new user();
    users.push(user_new);
    const con = confirm("¿Quiere añadir mas usuarios?");
    if (con == true) {
      ask = true;
    } else {
      ask = false;
    }
  }
  console.log(users);
};

//newUser();
*/

/*
Crea una nueva función que permita modificar un usuario.
Recibe su nombre de usuario y busca si existe.
- Si no existe, informa este error a través de un alert.
- Si existe, solicita todos los datos a través del prompt y
reemplaza el objeto con la nueva información.
*/
const modifyUser = (nombreUsuario) => {
  let userExists = false;
  for (let i = 0; i < users.length; i++) {
    try {
      if (nombreUsuario === users[i].nombre) {
        users.splice(i, 1, new user());
        userExists = true;
        return console.log(users);
      }
    } catch (error) {
      alert(`${error}`);
    }
  }
  if (userExists === false) {
    throw `El usuario ${nombreUsuario} no existe`;
  }
};

modifyUser("Laura");
