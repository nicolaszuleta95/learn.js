//Servidores se componen de URLs
// un request debe tener un endpoint
// un endpoint es un path en particular configurado dentro del servidor
// www.netflix.com -> nombre del servidor
// www.netflix.com/api/v2/netflix/programa1
// api/v2/netflix/programa1 ---> Endpoint

const a = 5;
const pokemonRequest = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      a === 5
        ? resolve({ name: "dito", status: 200, description: "Success" })
        : reject("Ha ocurrido un problema");
    }, 2000);
  });
};

const getPokemonDetail = () => {
  pokemonRequest()
    .then((res) => {
      //res es igual a Response se puede usar cualquiera de las 2
      document.body.innerHTML = res.name;
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};

getPokemonDetail();
