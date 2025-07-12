//Crear usuario
const API_URL = "https://686f29ce91e85fac429ff343.mockapi.io/ccol/api/user";
const FORM_ELEMENTS = {
  password: document.getElementById("newPassword"),
  email: document.getElementById("newUser"),
  name: document.getElementById("name"),
  age: document.getElementById("age"),
  form: document.getElementById("signupForm"),
  messageDiv: document.getElementById("messageDiv"),
};

async function createUser(user) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      const newUser = await response.json();
      localStorage.setItem("user", JSON.stringify(newUser));
      window.location.replace("./home.html");
      FORM_ELEMENTS.form.reset();
    } else {
      FORM_ELEMENTS.messageDiv.innerHTML = `<p>Error al crear usuario. Inténtalo de nuevo.</p>`;
    }
  } catch (error) {
    console.error("Error al crear usuario:", error);
    FORM_ELEMENTS.messageDiv.innerHTML = `<p>Error al crear usuario. Inténtalo de nuevo más tarde.</p>`;
  }
}

FORM_ELEMENTS.form.addEventListener("submit", (event) => {
  event.preventDefault();
  const user = {
    password: FORM_ELEMENTS.password.value,
    email: FORM_ELEMENTS.email.value,
    name: FORM_ELEMENTS.name.value,
    age: FORM_ELEMENTS.age.value,
  };

  console.log(user);
  createUser(user);
});
