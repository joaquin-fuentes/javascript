let peliculas = [];
// CREATE
function agregarPeli(titulo, director, anio, calificacion) {
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
  console.log("✅ Película agregada:", nuevaPelicula);
}
agregarPeli("Harry Potter", "Felipe Marrone", 2006, 8.3);
agregarPeli("Capitan America", "Pablo Torres", 2012, 5);

// READ
function listarPelis() {
  console.log("🎬 Lista de películas:");
  peliculas.forEach((pelicula, index) => {
    const { titulo, director, anio, calificacion } = pelicula;
    console.log(
      `${index + 1} - ${titulo}, ${director}, ${anio}, ${calificacion}`
    );
  });
}

function buscarPeliPorTitulo(nombrePeli) {
  const resultados = peliculas.filter((pelicula) =>
    pelicula.titulo.toLowerCase().includes(nombrePeli.toLowerCase())
  );
  console.log("🔎 Resultados de búsqueda:");
  console.log(resultados);
}

listarPelis();
buscarPeliPorTitulo("capi");
