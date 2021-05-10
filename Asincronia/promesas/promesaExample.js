// let bajarPeso = new Promise((resolve, reject) => {
//   resolve("Felicitaciones, lograste tu objetivo");
// });

// bajarPeso.then((mensaje) => {
//   console.log(mensaje);
// });

//otro ejemplo pero ahora con reject

let bajarPeso = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("No se alcanzo el objetivo");
  }, 10000);
});

bajarPeso
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((mensaje) => {
    console.log(mensaje);
  });
