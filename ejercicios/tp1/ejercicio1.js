/* Metodo 1: concatenar metodos de strings */
let nombre1 = "     joaquin";

console.log("Nombre1 tiene", nombre1.trim().length, "caracteres");

/* Metodo 2: trimear directamente el string */

let nombre2 = "     joaquin".trim();

console.log("Nombre2 tiene", nombre2.length, "caracteres");

/* Metodo 3: guardar string trimeado en una variable nueva */

let nombre3 = "     joaquin";
let nombre3SinEspacios = "     joaquin".trim();

console.log("Nombre3 tiene", nombre3SinEspacios.length, "caracteres");

/* Metodo 4: sobreescribir variable nombre con su valor trimeado */

let nombre4 = "     joaquin";
nombre4 = nombre4trim();

console.log("Nombre4 tiene", nombre4.length, "caracteres");
