const frutas = ["manzana", "pera", "melon"];
const verduras = ["tomate", "lechuga", "papa"];

const listadoVerduleria = [...frutas, ...verduras];

// const caja1 = listadoVerduleria.slice(0, 3);

// console.log(listadoVerduleria);

const personaOriginal = {
  nombre: "Leandro",
  edad: "20",
  direccion: "calle siempre viva 123",
};

const personaModificada = {
  ...personaOriginal,
  nacionalidad: "argentina",
};

// console.log(personaModificada);

const persona = {
  nombre: "Leandro",
  edad: 15,
  direccion: "calle siempre viva 123",
};

// const nombre = persona.nombre;
// const edad = persona.edad;
// const direccion = persona.direccion;

const { edad, nombre, direccion } = persona;

// console.log(edad, nombre, direccion);

let estado;
// if (persona.edad >= 18) {
//   estado = "Es mayor";
// } else {
//   estado = "Es menor";
// }
estado = persona.edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
console.log(estado); // "Mayor"

function obtenerEstadoEdad(individuo) {
  return individuo.edad >= 60
    ? "Jubilado"
    : individuo.edad >= 18
    ? "Adulto"
    : "Menor";
}
console.log(obtenerEstadoEdad(persona));
