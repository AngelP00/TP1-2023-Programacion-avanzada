// 4
console.log('')
console.log(`Ejercicio 4.`)

// Obtener la edad de la persona (puedes cambiar este valor)
const edad2 = 60;
const sexo = 'H';

// Definir la edad de jubilación para diferentes situaciones
const edadJubilacionHombre = 65;
const edadJubilacionMujer = 60;

console.log(`edad; ${edad}.`)
// Verificar el sexo y la edad para mostrar un mensaje según la situación
// if (sexo === 'H' && edad2 >= edadJubilacionHombre)
if (sexo === 'H') {
    console.log("Sos hombre");
    if (edad2 >= edadJubilacionHombre) {
        console.log("¡Ya estás en edad de jubilación!");
    } else {
        console.log("Todavía no estás en edad de jubilación.");
    }
} else if (sexo === 'M') {
    console.log("Sos mujer");
    if (edad2 >= edadJubilacionMujer) {
        console.log("¡Ya estás en edad de jubilación!");
    } else {
        console.log("Todavía no estás en edad de jubilación.");
    }
} else {
    console.log("El sexo debe ser H o M. H de hombre y M de mujer");
}

