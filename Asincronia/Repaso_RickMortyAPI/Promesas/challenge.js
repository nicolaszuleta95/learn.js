import fetchData from "../utils/fetchData.js";
const ENDPOINT = "https://rickandmortyapi.com/api/character";

fetchData(ENDPOINT)
  .then((data) => {
    console.log(data.info.count);
    console.log(data.results[0].name);
    return fetchData(ENDPOINT);
  })
  .then((data) => {
    const dimensionEndpoint = data.results[0].origin.url;
    console.log(dimensionEndpoint);
    return fetchData(`${dimensionEndpoint}`);
  })
  .then((data) => {
    console.log(data.dimension);
  })
  .catch((err) => {
    console.error(err);
  });
