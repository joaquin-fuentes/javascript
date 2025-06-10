let frutas = ["manzana", "banana", "naranja", "uva", "melon"];

// mostrar valor
// console.log(frutas[2]);
// modificar un valor

frutas[1] = "pera";

// tamaño de un arreglo
// console.log(frutas.length);

// agregar un elemento
// console.log(frutas);
frutas.push("sandia");

// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }

// 🔽 pop()
// Elimina el último elemento del array.
frutas.pop();

// ⬅️ unshift()
// Agrega un nuevo elemento al inicio del array.
frutas.unshift("mango");

// ➡️ shift()
// Elimina el primer elemento del array.
frutas.shift();

// 🔍 includes()
// Verifica si un valor existe en el array (devuelve true o false).
// console.log(frutas.includes("manzana"));

// 🔢 indexOf()
// Devuelve el índice (posición) donde se encuentra un elemento.
// Si no lo encuentra, devuelve -1.
console.log(frutas.indexOf("pera"));

// frutas[frutas.indexOf("pera")] = "melon";

// ✂️ splice()
// Permite modificar el array en una posición determinada.
// Sintaxis: array.splice(inicio, cantidadAEliminar, elementoNuevo)

// frutas.splice(1, 1, "kiwi");

// 📋 slice()
// Devuelve una copia de una parte del array (sin modificar el original).
let arrayCopia = frutas.slice(0, 3);
// console.log(arrayCopia);

// console.log(frutas);

// for (let i = 0; i < frutas.length; i++) {
//   if (frutas[i] === "pera") {
//     console.log("indice:", i);
//   }
// }

// for (let fruta of frutas) {
//   console.log(fruta);
// }

// frutas.forEach((fruta, index) => {
//   console.log(fruta, index);
// });

// 🧩 Ejercicio 2: ¿Está o no está?
// 1. Crear un array con los días de la semana.
// 2. Preguntar si el día "domingo" está en el array usando includes().
// 3. Mostrar un mensaje por consola dependiendo del resultado.

let dias = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo",
];
let diaBuscado = "DOMINGO";

if (dias.includes(diaBuscado.toLowerCase())) {
  console.log("El día domingo SI está en el array");
} else {
  console.log("El día domingo NO está en el array");
}
