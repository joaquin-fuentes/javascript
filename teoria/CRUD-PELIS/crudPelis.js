// ================================
// 🎬 CRUD de Películas con Menú 🧩
// ================================
let peliculas = [];
recuperarPeliculasDesdeLocalStorage();
agregarPeliculasDeEjemploSiEsNecesario();

// ===========================
// 💾 Guardar en localStorage
// ===========================
function guardarEnLocalStorage() {
  const peliculasJSON = JSON.stringify(peliculas);
  localStorage.setItem("peliculas", peliculasJSON);
}

// ===========================
// 🧠 Cargar desde localStorage
// ===========================
function recuperarPeliculasDesdeLocalStorage() {
  const peliculasRecuperadas = localStorage.getItem("peliculas");
  if (peliculasRecuperadas) {
    peliculas = JSON.parse(peliculasRecuperadas);
  } else {
    peliculas = [];
  }
}
function agregarPeliculasDeEjemploSiEsNecesario() {
  if (peliculas.length === 0) {
    agregarPeli("Harry Potter", "Felipe Marrone", 2006, 8.3);
    agregarPeli("Capitán América", "Pablo Torres", 2012, 5);
  }
}
// ===========================
// 🟢 CREATE - Agregar película
// ===========================
function agregarPeli(titulo, director, anio, calificacion) {
  // recuperar antes de modificar para evitar sobrescribir
  recuperarPeliculasDesdeLocalStorage();
  // crear la nueva pelicula
  const nuevaPelicula = {
    id: Date.now(),
    // esto de abajo es lo mismo a lo otro de mas abajo
    // titulo: titulo,
    // director: director,
    // anio: anio,
    // calificacion: calificacion,
    titulo,
    director,
    anio,
    calificacion,
  };
  // agregar la nueva pelicula al listado de peliculas
  peliculas.push(nuevaPelicula);
  guardarEnLocalStorage();
  console.log("✅ Película agregada:", nuevaPelicula);
}

// ===========================
// 🔵 READ - Listar películas
// ===========================
function listarPelis(pelis) {
  recuperarPeliculasDesdeLocalStorage();
  console.log("🎬 Lista de películas:");
  pelis.forEach((pelicula, index) => {
    const { titulo, director, anio, calificacion, id } = pelicula;
    console.log(
      `${index + 1} - ${titulo}, ${director}, ${anio}, ${calificacion}, ${id}`
    );
  });
}

// ==============================
// 🔍 READ - Buscar por título
// ==============================
function buscarPeliPorTitulo(nombrePeli) {
  recuperarPeliculasDesdeLocalStorage();
  const resultados = peliculas.filter((pelicula) =>
    pelicula.titulo.toLowerCase().includes(nombrePeli.toLowerCase())
  );
  console.log("🔎 Resultados de búsqueda:");
  listarPelis(resultados);
}

// ==============================
// 🟡 UPDATE - Calificación
// ==============================
function actualizarCalificacion() {
  const id = parseInt(
    prompt("Ingrese el id de la pelicula que quiere actualizar")
  );
  const nuevaCalificacion = parseFloat(
    prompt("Ingrese la nueva calificación de la pelicula.")
  );
  let encontrada = false;
  peliculas = peliculas.map((peli) => {
    if (peli.id === id) {
      encontrada = true;
      return { ...peli, calificacion: nuevaCalificacion };
    }
    return peli;
  });
  if (encontrada) {
    guardarEnLocalStorage();
    alert("✅ Calificación actualizada.");
  } else {
    alert("❌ Película no encontrada con ese ID.");
  }
}
// ==============================
// 🔴 DELETE - Eliminar por ID
// ==============================
function eliminarPelicula() {
  const id = parseInt(
    prompt("Ingrese el id de la pelicula que quiere ELIMINAR")
  );
  const index = peliculas.findIndex((peli) => peli.id === id);
  if (index !== -1) {
    const confirmacion = confirm("Seguro que desea eliminar esta pelicula?");
    if (confirmacion) {
      //  encontro
      const eliminada = peliculas.splice(index, 1)[0];
      guardarEnLocalStorage();
      alert(`🗑️ Película eliminada: ${eliminada.titulo}`);
    }
  } else {
    // no lo encontro
    alert("❌ Película no encontrada.");
  }
}

// Realizar el switch para preguntar al usuario
// que accion desea realizar y
// mostrar por consola lo que el usuario eligio
// ==============================
// 🚀 MENÚ PRINCIPAL
// ==============================
function mostrarMenu() {
  const opcion = prompt(
    "Por favor, seleccione una opcion \n" +
      "1 - Agregar Película \n" +
      "2 - Listar Películas \n" +
      "3 - Buscar  por título \n" +
      "4 - Actualizar calificacion de peli \n" +
      "5 - Eliminar pelicula \n" +
      "6 - Salir"
  );

  switch (opcion) {
    case "1":
      console.log("Agregar pelicula");
      // Solicitar al usuario aqui por medio de promps
      const titulo = prompt("Ingrese el titulo de la pelicula");
      const director = prompt("Ingrese el director de la pelicula");
      const anio = parseInt(prompt("Ingrese el anio de la pelicula"));
      const calificacion = parseFloat(
        prompt("Ingrese la calificacion de la pelicula")
      );
      agregarPeli(titulo, director, anio, calificacion);
      break;
    case "2":
      console.log("Listar pelicula");
      recuperarPeliculasDesdeLocalStorage();
      listarPelis(peliculas);
      break;
    case "3":
      console.log("Buscar pelicula por titulo");
      const tituloBuscado = prompt(
        "Ingrese el titulo de la pelicula que desea buscar"
      );
      buscarPeliPorTitulo(tituloBuscado);
      break;
    case "4":
      console.log("ACtualizar calificacion de pelicula");
      actualizarCalificacion();
      break;
    case "5":
      console.log("Eliminar pelicula");
      eliminarPelicula();
      break;
    case "6":
      console.log("Salir");
      alert("Adiosin!");
      break;
    default:
      alert("Opcion inválida, elegí un número del 1 al 6.");
      break;
  }
}

mostrarMenu();
