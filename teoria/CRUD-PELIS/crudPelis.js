let peliculas = [];
recuperarPeliculasDesdeLocalStorage();
agregarPeliculasDeEjemploSiEsNecesario();

function guardarEnLocalStorage() {
  const peliculasJSON = JSON.stringify(peliculas);
  localStorage.setItem("peliculas", peliculasJSON);
}
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
// CREATE
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

// READ
function listarPelis(pelis) {
  recuperarPeliculasDesdeLocalStorage();
  console.log("🎬 Lista de películas:");
  pelis.forEach((pelicula, index) => {
    const { titulo, director, anio, calificacion } = pelicula;
    console.log(
      `${index + 1} - ${titulo}, ${director}, ${anio}, ${calificacion}`
    );
  });
}
function buscarPeliPorTitulo(nombrePeli) {
  recuperarPeliculasDesdeLocalStorage();
  const resultados = peliculas.filter((pelicula) =>
    pelicula.titulo.toLowerCase().includes(nombrePeli.toLowerCase())
  );
  console.log("🔎 Resultados de búsqueda:");
  listarPelis(resultados);
}

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
eliminarPelicula();

// Realizar el switch para preguntar al usuario
// que accion desea realizar y
// mostrar por consola lo que el usuario eligio
function mostrarMenu() {}
