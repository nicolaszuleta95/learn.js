let listNames = ["Rodrigo", "Patricia", "Cristobal", "Elena"];

// JSON -> JAVASCRIPT OBJECT NOTATION
/* let aa = [
    {
        name: "aa",
        lastName: "bb",
        hobbies: [
            "viedojuegos",
            "musica", 
            "Cocinar"
        ]
    },
    {
        name: "cc",
        lastName: "dd",
        children: [
            {
                name: "gg",
                lastName: "hh"
            },
            {
                name: "ii",
                lastName: "jj"
            }
        ]
    },
    {
        name: "ee",
        lastName: "ff",
        hobbies: [
            "viedojuegos",
            "musica",
            {
                Cocinar: [
                    {
                        name: "kk",
                        country: [
                            "Col",
                            "Arg",
                            {
                                ss: "sdsd"
                            }
                        ]
                    }
                ]
            }
        ]
    }
] */

const visitorName = prompt("Ingrese su nombre");

/* const askName = () => {
    let userExist = false;
    for (let i = 0; i < listNames.length; i++) {
        if(visitorName === listNames[i]) {
            userExist = true;
            return "El usuario ya existe"
        } else {
            userExist = false;
        }    
    }
    return `Bienvenido ${visitorName}`
} */

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
