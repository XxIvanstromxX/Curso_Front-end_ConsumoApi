# 🚀 Curso Front-End: Consumo de APIs

Curso práctico sobre consumo de APIs desde el frontend utilizando JavaScript vanilla y el método Fetch.

## 📚 Contenido del Curso

### Clase 1: Consumo de APIs con GET (Promesas)
**📁 Carpeta:** `Clase_1/`

En esta primera clase aprendemos los fundamentos del consumo de APIs utilizando el método GET con promesas:

#### 🎯 Objetivos
- Entender qué es una API y cómo consumirla
- Implementar peticiones GET usando `fetch()`
- Trabajar con promesas (`.then()` y `.catch()`)
- Manejar respuestas JSON
- Renderizar datos dinámicamente en el DOM

#### 🛠️ Tecnologías Utilizadas
- **HTML5** - Estructura básica
- **CSS3** - Estilos para la presentación
- **JavaScript ES6** - Fetch API y manipulación del DOM

#### 📄 Ejemplo Práctico
Consumimos la **API de Rick and Morty** para mostrar personajes:
```javascript
fetch("https://rickandmortyapi.com/api/character")
  .then(response => response.json())
  .then(data => {
    // Renderizar los primeros 10 personajes
  })
  .catch(error => console.error("Error:", error));
```

#### 🎨 Características
- Muestra información de personajes (nombre e imagen)
- Diseño responsive con flexbox
- Manejo de errores básico

---

### Clase 2: Creación de Datos con POST (Async/Await)
**📁 Carpeta:** `Clase_2/`

En la segunda clase avanzamos hacia la creación de datos utilizando el método POST con async/await:

#### 🎯 Objetivos
- Implementar peticiones POST para crear datos
- Usar async/await como alternativa a las promesas
- Validar formularios
- Manejar errores de forma más elegante
- Trabajar con MockAPI para simular un backend

#### 🛠️ Tecnologías Utilizadas
- **HTML5** - Formulario para captura de datos
- **JavaScript ES8** - Async/await y Fetch API
- **MockAPI** - Servicio para simular API REST

#### 📄 Ejemplo Práctico
Creamos usuarios mediante un formulario que envía datos a MockAPI:
```javascript
async function createUser(user) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user)
  });
  return response.json();
}
```

#### 🎨 Características
- Formulario de registro con validación
- Feedback visual para el usuario
- Manejo de errores con try/catch
- Reset automático del formulario tras envío exitoso

---

## 🚀 Cómo Ejecutar

1. Clona este repositorio
2. Abre cada carpeta de clase en tu navegador
3. Para **Clase_1**: Abre `index.html` y verás los personajes de Rick and Morty
4. Para **Clase_2**: Abre `index.html` y prueba crear un usuario

## 🛠️ Requisitos
- Navegador web moderno
- Conexión a internet (para las APIs)

## 📖 Conceptos Aprendidos

### Clase 1
- ✅ Fetch API
- ✅ Promesas (.then/.catch)
- ✅ Manipulación del DOM
- ✅ Peticiones GET
- ✅ Manejo básico de errores

### Clase 2
- ✅ Async/Await
- ✅ Peticiones POST
- ✅ Validación de formularios
- ✅ Manejo avanzado de errores
- ✅ MockAPI como backend simulado

---

## 👨‍💻 Autor
Curso de Front-End - Consumo de APIs - CCOL
Por: Ivan Martinez
