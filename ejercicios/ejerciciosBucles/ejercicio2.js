// 🧪 Ejercicio 2: Adivina el número secreto
// El programa genera un número aleatorio entre 1 y 10.
// El usuario debe adivinarlo. El bucle continúa hasta que acierte.
// Mostrar cuántos intentos necesitó.

const numeroSecreto = Math.floor(Math.random() * 10 + 1);
let intentos = 0;
let numeroUsuario;

while (numeroSecreto !== numeroUsuario) {
  numeroUsuario = parseInt(prompt("Adiviná el número secreto, por la coca"));
  intentos++;
  if (numeroUsuario !== numeroSecreto) {
    console.log("No es el número. Seguí participando");
  }
}
alert(`Felicidades, ganaste la coca en el intento ${intentos}`);
