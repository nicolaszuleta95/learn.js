const nums = () => {
  return new Promise((resolve, reject) => {
    const randomNum = Math.floor(Math.random() * 10);
    randomNum % 2 === 0
      ? resolve("exito " + randomNum)
      : reject("rechazado " + randomNum);
  });
};

nums()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
