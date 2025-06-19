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
// const numeros = [4, 8, 22, 1, 2];

nombres.push("Amelia");

// nombres.forEach((nombre) => console.log(`Hola, ${nombre}`));

// 🔁 forEach()
// Recorre el array y ejecuta una función por cada elemento
// let suma = 0;
// numeros.forEach((numero) => {
//   if (isNaN(numero)) {
//     console.log("dato invalido");
//   } else {
//     suma += numero;
//   }
//   //   suma = suma + numero;
// });
// console.log(suma);
// console.log(nombres);

// 🔄 map()
// Crea un nuevo array transformando cada elemento

const numeros = [1, 2, 3, 4];

const numerosAlCuadrado = numeros.map((numero) => numero * numero);
// console.log(numeros);
// console.log(numerosAlCuadrado);

// 🟢 filter()
// Filtra los elementos que cumplen la condición
const edades = [12, 18, 25, 30, 15];

const mayoresDeEdad = edades.filter((edad) => edad >= 18);

// console.log(edades);
// console.log(mayoresDeEdad);

// 🔍 find()
// Devuelve el primer elemento que cumple la condición
const precios = [1000, 3000, 10000, 100000];

const productoBarato = precios.find((precio) => precio <= 500);

// console.log(precios);
// console.log(productoBarato);

// ----------------------
// 🔢 findIndex()
// Devuelve el índice del primer elemento que cumple la condición
// const numeros = [10, 20, 30, 40];
// const index = numeros.findIndex((numero) => numero > 25);

// console.log(index);

// 🟣 sort()
// Ordena los elementos según la función de comparación

const alumnos = ["Matias", "Franco", "Felipe", "Leandro", "Sara"];
alumnos.sort().reverse();
// console.log(alumnos);

const desordenados = [5, 55, 1, 99, 25];
const ordenados = desordenados.sort((a, b) => a - b);

console.log(desordenados);
console.log(ordenados);
