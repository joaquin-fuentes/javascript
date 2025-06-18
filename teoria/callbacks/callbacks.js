// function saludar(nombre) {
//   console.log(`Hola, ${nombre}`);
// }

// function procesarEntradaUsuario(callback) {
//   const nombre = "Joaquín";
//   callback(nombre);
// }

// procesarEntradaUsuario(saludar);

// setTimeout(function () {
//   console.log("Han pasado 5 segundos");
// }, 5000);

// setTimeout(() => {
//   console.log("Hola desde un callback con arrow function");
// }, 1000);

const nombres = ["Ana", "Joaquín", "Pedro"];
const numeros = [4, 8, 22, 1, 2];

nombres.push("Amelia");

// nombres.forEach((nombre) => console.log(`Hola, ${nombre}`));
let suma = 0;
numeros.forEach((numero) => {
  if (isNaN(numero)) {
    console.log("dato invalido");
  } else {
    suma += numero;
  }
  //   suma = suma + numero;
});
console.log(suma);
// console.log(nombres);
