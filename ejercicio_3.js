// 3
console.log('')
console.log(`Ejercicio 3.`)

// Obtener la edad de la persona (puedes cambiar este valor)
const edad = 65;

// Definir la edad de jubilación para diferentes situaciones
const edadJubilacionNormal = 65;
const edadJubilacionReducida = 60;

console.log(`edad; ${edad}.`)
// Verificar la edad y mostrar un mensaje según la situación
if (edad >= edadJubilacionNormal) {
  console.log("¡Ya estás en edad de jubilación normal!");
} else if (edad >= edadJubilacionReducida) {
  console.log("Estás en edad de jubilación reducida.");
} else {
  console.log("Todavía no estás en edad de jubilación.");
}

