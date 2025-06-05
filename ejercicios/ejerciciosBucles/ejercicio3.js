// 🧪 Ejercicio 3: Menú interactivo
// Mostrar un menú con 3 opciones:
// 1. Saludar
// 2. Mostrar fecha actual
// 3. Salir
// El menú debe repetirse hasta que el usuario elija salir.

let opcion;

do {
  opcion = prompt(
    "Elegí una opción:\n 1. Saludar \n 2.Mostrar fecha actual \n 3.salir "
  );
  switch (opcion) {
    case "1":
      console.log("Hola 👋");
      break;
    case "2":
      console.log("La fecha actual es:", new Date().toLocaleDateString());
      break;
    case "3":
      console.log("Saliendo del programa...");
      break;
    default:
      console.log("Opción invalida, probá de nuevo.");
      break;
  }
} while (opcion !== "3");
