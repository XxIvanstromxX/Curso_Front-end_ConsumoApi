//Primero obtenemos la URL de la API
const API_URL = "https://686f29ce91e85fac429ff343.mockapi.io/ccol/api/user";

const FORM_ELEMENTS = {
  form: document.getElementById("userForm"),
  nameInput: document.getElementById("name"),
  emailInput: document.getElementById("email"),
  ageInput: document.getElementById("age"),
  messageDiv: document.getElementById("messageDiv"),
};

async function createUser(user) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error(`Ocurrio un error HTTP ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Los datos se enviaron con exito: ", data);

    FORM_ELEMENTS.messageDiv.textContent =
      "El usuario se registro correctamente";
    FORM_ELEMENTS.messageDiv.style.color = "green";

    FORM_ELEMENTS.form.reset();
  } catch (err) {
    console.error("Ocurrio un error en el envio de los datos", err);
    FORM_ELEMENTS.messageDiv.textContent = "Ocurrio un error, intente de nuevo";
    FORM_ELEMENTS.messageDiv.style.color = "red";
    throw err; //Esto termina la ejecucion del programa
  }
}

FORM_ELEMENTS.form.addEventListener("submit", (e) => {
  e.preventDefault(); //Super importante para el envio de datos

  const name = FORM_ELEMENTS.nameInput.value.trim();
  const email = FORM_ELEMENTS.emailInput.value.trim();
  const age = FORM_ELEMENTS.ageInput.value.trim();

  if (!name || !email || !age) {
    console.log("Todos los campos del formulario son requeridos");
    FORM_ELEMENTS.messageDiv.textContent = "Todos los campos son requeridos";
    FORM_ELEMENTS.messageDiv.style.color = "red";
    return; //Terminar la ejecucion del codigo
  }

  const user = {
    name,
    email,
    age: parseInt(age), //ParseInt Convierte a numeros enteros
  };

  FORM_ELEMENTS.messageDiv.textContent = "Los datos se están enviando...";
  FORM_ELEMENTS.messageDiv.style.color = "blue";

  createUser(user);
});
