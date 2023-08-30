// Matrices
console.log('')
console.log(`Ejercicio Matrices`)

var nombres = new Array(); // Se declara la matriz.
/* A continuación se crean y declaran siete celdas. */
nombres[0] = "Nacho";

nombres[1] = "Arek";

nombres[2] = "Laura";

nombres[3] = "Sonia";

nombres[4] = "Gonzalo";

nombres[5] = "Eva";

nombres[6] = "Pedro";

/* Ahora se muestran las celdas, para conprobar

que han almacenado los valores correctos. */
document.write (nombres[0] + "<br>");
document.write (nombres[1] + "<br>");
document.write (nombres[2] + "<br>");
document.write (nombres[3] + "<br>");
document.write (nombres[4] + "<br>");
document.write (nombres[5] + "<br>");
document.write (nombres[6] + "<br>");

/* A continuación se crea otra celda y luego se
muestra su contenido para demostrar que el número
de celdas de la matriz se puede cambiar durante

la ejecución. Tócnicanente se dice que la matriz es
redimensiouable dinámicamente. */

nombres[7] = "Manuel";

document.write (nombres[7] + "<br>");

var nombre_introducido, en_lista;
en_lista = false;
nombre_introducido = prompt("ingrese un nombre de la lista.","");

for (let cuenta = 0; cuenta < nombres.length; cuenta++) {
    console.log(nombres[cuenta])
    if (nombres[cuenta].toLowerCase() == nombre_introducido.toLowerCase()) {
        en_lista = true;
        console.log("Nombre encontrado");
        break
    }
}
if (en_lista) {
    console.log("El nombre está en la lista");
    alert("El nombre está en la lista");
} else {
    console.log("El nombre no está en la lista");
    alert("El nombre no está en la lista");
}

