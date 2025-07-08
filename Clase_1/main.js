// Consumo de api de rick and morty

const url = "https://rickandmortyapi.com/api/character";

//Metodo fetch() de javascript
fetch(url)
  .then((response) => {
    //Verificar si la respuesta es correcta (statusCode = 200)
    if (!response.ok) {
      console.error("Hubo un error en la conexion", response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    const contenedor = document.getElementById("contenedor");

    data.results.slice(0, 10).forEach((personaje) => {
      const div = document.createElement("div");
      div.classList.add("personaje");

      div.innerHTML = `
            <h1>${personaje.name}</h1>
            <img src="${personaje.image}" alt="${personaje.name}">
        `;

      contenedor.appendChild(div); //Añade los personajes al div contenedor
    });
  })
  .catch((err) => {
    console.error("Hubo un error en el fetching de datos", err);
  });
