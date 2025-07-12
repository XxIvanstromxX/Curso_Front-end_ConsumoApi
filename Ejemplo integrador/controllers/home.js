//Crear notas
const API_URL = "https://686f29ce91e85fac429ff343.mockapi.io/ccol/api/notes";

const FORM_ELEMENTS = {
  title: document.getElementById("title"),
  body: document.getElementById("content"),
  form: document.querySelector("form"),
  messageDiv: document.getElementById("messageDiv"),
};

const notas = document.getElementById("lista-notas");
// Obtener las notas al cargar la página
window.addEventListener("load", async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Error al cargar las notas");
    const data = await response.json();
    renderNotes(data);
  } catch (error) {
    console.error("Error:", error);
  }
});

// Renderizar las notas en el DOM
function renderNotes(notes) {
  notas.innerHTML = "";
  notes.forEach((note) => {
    const noteElement = document.createElement("div");
    noteElement.className = "note";
    noteElement.innerHTML = `
      <h3>${note.title}</h3>
      <p>${note.body}</p>
      <button class="delete-button" data-id="${note.id}">Eliminar</button>
        <button class="edit-button" data-id="${note.id}">Editar</button>
    `;
    notas.appendChild(noteElement);
  });
}

// Manejar el envío del formulario
FORM_ELEMENTS.form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const title = FORM_ELEMENTS.title.value.trim();
  const body = FORM_ELEMENTS.body.value.trim();

  if (!title || !content) {
    FORM_ELEMENTS.messageDiv.textContent =
      "Por favor, completa todos los campos.";
    return;
  }

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    });

    if (!response.ok) throw new Error("Error al crear la nota");

    const newNote = await response.json();
    renderNotes([newNote]);
    FORM_ELEMENTS.messageDiv.textContent = "Nota creada exitosamente.";
    FORM_ELEMENTS.form.reset();
  } catch (error) {
    console.error("Error:", error);
    FORM_ELEMENTS.messageDiv.textContent = "Error al crear la nota.";
  }
});

// Manejar la eliminación de notas
notas.addEventListener("click", async (event) => {
  if (event.target.classList.contains("delete-button")) {
    const noteId = event.target.getAttribute("data-id");
    try {
      const response = await fetch(`${API_URL}/${noteId}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Error al eliminar la nota");

      event.target.closest(".note").remove();
      FORM_ELEMENTS.messageDiv.textContent = "Nota eliminada exitosamente.";
    } catch (error) {
      console.error("Error:", error);
      FORM_ELEMENTS.messageDiv.textContent = "Error al eliminar la nota.";
    }
  }
});
// Manejar la edición de notas
notas.addEventListener("click", async (event) => {
  if (event.target.classList.contains("edit-button")) {
    const noteId = event.target.getAttribute("data-id");
    const noteElement = event.target.closest(".note");
    const title = noteElement.querySelector("h3").textContent;
    const content = noteElement.querySelector("p").textContent;

    FORM_ELEMENTS.title.value = title;
    FORM_ELEMENTS.content.value = content;

    FORM_ELEMENTS.form.onsubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(`${API_URL}/${noteId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: FORM_ELEMENTS.title.value,
            content: FORM_ELEMENTS.content.value,
          }),
        });

        if (!response.ok) throw new Error("Error al editar la nota");

        const updatedNote = await response.json();
        renderNotes([updatedNote]);
        FORM_ELEMENTS.messageDiv.textContent = "Nota editada exitosamente.";
        FORM_ELEMENTS.form.reset();
      } catch (error) {
        console.error("Error:", error);
        FORM_ELEMENTS.messageDiv.textContent = "Error al editar la nota.";
      }
    };
  }
});

// Manejar el cierre del mensaje
FORM_ELEMENTS.messageDiv.addEventListener("click", () => {
  FORM_ELEMENTS.messageDiv.textContent = "";
});
// Limpiar el mensaje al cargar la página
window.addEventListener("load", () => {
  FORM_ELEMENTS.messageDiv.textContent = "";
});

document.getElementById("logout").addEventListener("click", () => {
  window.location.replace("../index.html");
});
