// Se declara la funcion
function saludar() {
  console.log("Hola, esta es mi primer funcion!");
}
// Se ejecuta la funcion
// saludar();

function saludarConNombre(nombre, edad) {
  console.log("Hola, mi nombre es", nombre, "y tengo ", edad, "años.");
}
// saludarConNombre("Joaquin", 30);

// function multiplicar() {
//   let resultado = 2 * 8;
//   console.log(resultado);
// }
// multiplicar();

// function dividir(numeroA, numeroB) {
//   resultado = numeroA / numeroB;
//   console.log(resultado);
// }

// dividir(10, 5);

function ejemploLocal() {
  let mensaje = "Hola desde la función";
}

// console.log(mensaje);
ejemploLocal();

// funcion de flecha
const sumar = (a, b) => a + b;

const sumar2 = (a, b) => {
  let resultado = a + b;
  return resultado;
};

console.log(sumar(4, 5));

const restar = function (a, b) {
  return a - b;
};
console.log(restar(20, 5));

(function () {
  console.log("Holamundo");
})();

// 🧩 EJERCICIO 1: Calcular el área de un rectángulo
// ✅ Consigna:
// Crear una función llamada `calcularAreaRectangulo` que reciba dos parámetros: ancho y alto.
// La función debe devolver el área del rectángulo (ancho * alto).
// Mostrar el resultado en consola.

function calcularAreaRectangulo(ancho, alto) {
  return ancho * alto;
}

console.log(calcularAreaRectangulo(10, 5));

// 🧩 EJERCICIO 2: Verificar si un número es par o impar
// ✅ Consigna:
// Crear una función llamada `esPar` que reciba un número como parámetro.
// Debe devolver "Es par" si el número es par, o "Es impar" si no lo es.
// Mostrar los resultados en consola usando diferentes argumentos.

function esPar(numero) {
  if (numero % 2 === 0) {
    return "Es par";
  } else {
    return "Es impart";
  }
}

console.log(esPar(173647326723));
