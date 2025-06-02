let edad = 100;
// Para adquirir carnet de manejo, debe ser mayor a 18 años y menor que 80 años
if (edad >= 18 && edad <= 80) {
  console.log("Puede adquitir el carnet de manejo");
} else {
  console.log("No puede adquirir el carnet, disculpe las molestias.");
}

// ingrese un numero, y devuelva un console.log que diga, si es positivo, negativo o si es cero

let numero = 4;

if (numero >= 0) {
  if (numero === 0) {
    console.log("El número es CERO");
  } else {
    console.log("El número es POSITIVO");
  }
} else {
  console.log("El número es NEGATIVO");
}

let nota = 9;
// if (nota === 10) {
//   console.log("EXCELENTE 10 te felicito");
// } else if (nota >= 9) {
//   console.log("EXCELENTE te felicito");
// } else if (nota >= 7) {
//   console.log("Muy bueno te felicito");
// } else if (nota === 6) {
//   console.log("Aprobado apenas te salvaste");
// } else {
//   console.log("Estas desaprobado");
// }

switch (true) {
  case nota === 10:
    console.log("EXCELENTE 10 te felicito");
    break;
  case nota === 9:
    console.log("Excelente!");
    break;
  case nota >= 7:
    console.log("Muy bueno te felicito!");
    break;
  case nota === 6:
    console.log("Aprobaste raspado!");
    break;
  default:
    console.log("DESAPROBADO");
    break;
}

let banda = "LOS PIOJOS";
let cancion = "";

switch (banda) {
  case "LA RENGA":
    cancion = "Una triste canción de amor";
    break;
  case "LOS PIOJOS":
    cancion = "Verano del 92";
    break;
  case "DIVIDIDOS":
    cancion = "Spaghetti del rock";
    break;
  default:
    cancion = "NO INGRESASTE NINGUNA BANDA CONOCIDA";
    break;
}

console.log(cancion);

let opcion = parseInt(
  prompt(
    "Elija el número de la opción:\n" +
      " 1 - Consultar saldo.\n" +
      " 2 - Retirar dinero"
  )
);
