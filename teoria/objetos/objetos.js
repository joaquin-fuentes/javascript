const persona = { nombre: "Lucía", edad: 30, profesion: "Desarrolladora" };

// Acceder a una propiedad de un objeto
// console.log(persona.nombre);
// Este de abajo no se usa , pero funciona igual
// console.log(persona["edad actual"]);

// Agregar una propiedad al objeto
persona.nacionalidad = "Argentina";
persona.dni = "37423893";
persona.mayorEdad = true;

// Modificar una propiedad al objeto
persona.nombre = "Leandro";

// Eliminar una propiedad al objeto
delete persona.dni;

//  Recorrer un objeto
// for (let clave in persona) {
//   console.log(clave + ": " + persona[clave]);
// }
// console.log(persona);

// ARRAY DE OBJETOS

const personas = [
  { nombre: "Felipe", edad: 23 },
  { nombre: "Lautaro", edad: 22 },
  {
    nombre: "Leandro",
    edad: 15,
  },
];

// personas.forEach((persona, index) => {
//   //   console.log(persona.nombre, "tiene", persona.edad, "años.");
//   //   template string
//   console.log(`${index + 1} - ${persona.nombre} tiene ${persona.edad} años`);
//   return;
// });

// console.log(personas);
