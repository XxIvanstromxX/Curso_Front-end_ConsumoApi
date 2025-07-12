//Usuario accede a su cuenta
//Usuario ingresa su usuario y contraseña
const API_URL = "https://686f29ce91e85fac429ff343.mockapi.io/ccol/api/user";
const FORM_ELEMENTS = {
  user: document.getElementById("user"),
  password: document.getElementById("password"),
  form: document.querySelector("form"),
  messageDiv: document.getElementById("messageDiv"),
  singupButton: document.getElementById("singup"),
};

async function login(user) {
  try {
    const response = await fetch(API_URL);
    const users = await response.json();
    const foundUser = users.find(
      (u) => u.email === user.user && u.password === user.password
    );

    if (foundUser) {
      //localStorage.setItem("user", JSON.stringify(foundUser));
      window.location.replace("./routes/home.html");
      FORM_ELEMENTS.form.reset();
    } else {
      FORM_ELEMENTS.messageDiv.textContent = `<p>Usuario o contraseña incorrectos</p>`;
    }
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    FORM_ELEMENTS.messageDiv.innerHTML = `<p>Error al iniciar sesión. Inténtalo de nuevo más tarde.</p>`;
  }
}

FORM_ELEMENTS.form.addEventListener("submit", (event) => {
  event.preventDefault();
  const user = {
    user: FORM_ELEMENTS.user.value.trim(),
    password: FORM_ELEMENTS.password.value.trim(),
  };
  login(user);
});

FORM_ELEMENTS.singupButton.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "./routes/singup.html";
});
