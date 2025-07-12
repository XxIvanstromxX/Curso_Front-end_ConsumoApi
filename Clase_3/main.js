const API_URL = "https://686f29ce91e85fac429ff343.mockapi.io/ccol/api/notes";

// METODO GET MOSTRAR TAREAS
async function mostrarNotas() {
  const notas = document.getElementById("notas");
  notas.innerHTML = "";

  const message = document.getElementById("message");
  message.innerHTML = "cargando elementos...";

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("No se pudo obtener ninguna tarea");
    }
    const data = await response.json();
    console.log(data);
    data.forEach((tarea) => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h3>${tarea.title}</h3>
        <p>${tarea.body}</p>
        <p>${tarea.id}</p>
        
        <button onClick="eliminar(${tarea.id})">Eliminar tarea</button>
      `;
      notas.appendChild(div);
    });
    message.innerHTML = "";
  } catch (err) {
    console.error("Hubo un error", err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarNotas();
});

//METODO POST EDITAR TAREA
async function editarTarea(e) {
  e.preventDefault();
  const title = document.getElementById("title").value.trim();
  const body = document.getElementById("description").value.trim();
  const id = document.getElementById("identicador").value.trim();

  const notaActualizada = {
    title,
    body,
    id,
  };

  try {
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(notaActualizada),
    });
    mostrarNotas();
    const formulario = document.getElementById("formEdit");
    formulario.reset();
  } catch (err) {
    console.error("Ocurrio un error en la actualización", err);
  }
}

const formulario = document.getElementById("formEdit");
formulario.addEventListener("submit", (event) => {
  editarTarea(event);
});

//METODO DELETE ELIMINAR TAREA
async function eliminar(id) {
  const confirmar = confirm("Estás segudo de eliminar esta tarea?");
  if (!confirmar) {
    return;
  }

  try {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    mostrarNotas();
  } catch (err) {
    console.error("Hubo un error al eliminar la tarea", err);
  }
}

//CONSUMO DE API CRUD
//C create "POST"
//R read "GET"
//U update "PUT"
//D delete "DELETE"
