export default function fetchData(urlAPI) {
  return new Promise((resolve, reject) => {
    fetch(urlAPI)
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
}
