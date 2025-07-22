// etiquetas que quiero manipular
const textoCargando = document.getElementById("textoCargando");
const contenedorPersonajes = document.getElementById("contenedorPersonajes");
const formularioBusqueda = document.getElementById("formularioBusqueda");
const nombrePersonaje = document.getElementById("nombrePersonaje");

async function obtenerPersonajes(nombre = null) {
  const linkBusqueda = `https://dragonball-api.com/api/characters/?name=${nombre}`;
  const link = `https://dragonball-api.com/api/characters`;

  try {
    const res = await fetch(nombre ? linkBusqueda : link);
    const data = await res.json();
    return nombre ? data : data.items;
  } catch (error) {
    console.log(error);
  }
}
function mostrarPersonajes(personajes) {
  contenedorPersonajes.innerHTML = "";
  personajes.forEach((personaje) => {
    contenedorPersonajes.innerHTML += `
       <div class="col">
          <div class="card h-100 p-3">
            <img src="${personaje?.image}" class="card-img-top  tamanioImg" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${personaje?.name}</h5>
              <p class="card-text parrafoTarjeta">
              ${personaje?.description}
              </p>
              <button class="btn btn-primary mt-2" onclick="agregarAFavoritos('${personaje.name}', '${personaje.id}' )">Agregar a favoritos</button>
            </div>
          </div>
        </div>`;
  });
}

function agregarAFavoritos(nombre, id) {
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  // agregar el personaje al localstorage
  const personaje = {
    nombre,
    id,
  };
  // verificar que no este repetido en el arreglo
  // si esta repetido, mostrar un alerta y salir de la fucnion
  
  favoritos.push(personaje);
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
  alert("Personaje agregado a favorito");
}
window.addEventListener("DOMContentLoaded", async function () {
  textoCargando.textContent = "Cargando Personajes...";
  //   obtener personajes
  const personajes = await obtenerPersonajes();
  // mostrar personajes
  //   recorrer el listado y mostrar las tarjetas
  mostrarPersonajes(personajes);
  textoCargando.textContent = "";
});

formularioBusqueda.addEventListener("submit", async function (event) {
  event.preventDefault();
  const termino = nombrePersonaje.value.trim();
  textoCargando.textContent = "Buscando...";
  const personajes = await obtenerPersonajes(termino);
  console.log(personajes);
  if (personajes.length === 0) {
    textoCargando.textContent =
      "No se encontraron personajes con el termino buscado";
  } else {
    textoCargando.textContent = "";
  }
  mostrarPersonajes(personajes);
});
