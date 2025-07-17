// etiquetas que quiero manipular
const textoCargando = document.getElementById("textoCargando");

async function obtenerPersonajes() {
  try {
    const res = await fetch("https://dragonball-api.com/api/characters");
    const data = await res.json();
    return data.items;
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener("DOMContentLoaded", async function () {
  textoCargando.textContent = "Cargando Personajes...";
  //   obtener personajes
  const personajes = await obtenerPersonajes();
  // mostrar personajes
  console.log(personajes);
//   recorrer el listado y mostrar las tarjetas

  textoCargando.textContent = "";
});
