// 🧪 Ejercicio 1: Contador de múltiplos
// Mostrar por consola los números del 1 al 50 que sean múltiplos de 3.
// Al final, mostrar cuántos múltiplos de 3 hubo.

// cuantosMultiplos?????
// -al principio tengo 0
// -al final aun nose

let cuantosMultiplos = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log("El numero", i, "es multiplo de 3");
    cuantosMultiplos++;
  }
}

console.log("La cantidad de números multiplos de 3 fue de:", cuantosMultiplos);
