// console.log("Hola mundo 1");
// console.log("Hola mundo 2");
// console.log("Hola mundo 3");
// console.log("Hola mundo 4");
// console.log("Hola mundo 5");

// FOR
let palabra = "joaquin"
for (let i = 0; i < palabra.length; i++) {
  console.log("Hola mundo", i);
}
for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log("Hola mundo", i);
  } else {
    console.log("El número", i, "es impar");
  }
  if (i === 5) {
    console.log("Llegamos al número", i);
  }
}

// WHILE o MIENTRAS

// let contador = 1;

// while (contador <= 10) {
//   console.log("El contador va en el número", contador);
//   contador++;
// }

// console.log("Salió del bucle");

// let input = "";
// let intentos = 0;

// while (input != "1234") {
//   input = prompt("Ingresá tu contraseña");
//   intentos++;
// }
// console.log("Acceso concedido después de", intentos, "intentos...");

let input = "";
let intentos = 0;

do {
  input = prompt("Ingrese su contraseña");
  intentos++;
  console.log(intentos);
} while (input != "1234" && intentos < 3);

if (intentos >= 3) {
  console.log("Superaste la cantidad de intentos permitidos");
} else {
  console.log("Acertaste en el intento", intentos);
}
if (input === "1234") {
  console.log("Contraseña correcta");
} else {
  console.log("No sabes tu contraseña????");
}
