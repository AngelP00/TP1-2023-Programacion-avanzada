
// 1
console.log('')
console.log(`Ejercicio; 1.`)
// template String -back tips
const userNombre = 'Angel'
const userEdad = 20

console.log('userNombre; ' + userNombre + ', userEdad; ' + userEdad)

//console.log(`Nombre; ${name}, Edad; ${age}`);

// 2
console.log('')
console.log(`Ejercicio; 2.`)
let num1 = 5
let num2 = 2

const suma = num1+num2
const resta = num1-num2
const division = num1/num2
const multiplicacion = num1*num2

console.log(`suma; ${suma}.`)
console.log(`resta; ${resta}.`)
console.log(`division; ${division}.`)
console.log(`multiplicacion; ${multiplicacion}.`)

// 3
console.log('')
console.log(`Ejercicio; 3.`)

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

// 4
console.log('')
console.log(`Ejercicio; 4.`)

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

// 5
console.log('')
console.log(`Ejercicio; 5.`)

var cuenta, edad3;
for (let cuenta = 1; cuenta <= 10; cuenta++) {
    /*
    edad3 = prompt("Introduzca su edad (en cifras).","");
    edad3 = parseInt(edad3);
    if (edad3 < 18) {
        console.log("Es usted menor de edad.");
        alert("Es usted menor de edad.");
    } else {
        console.log("Es usted mayor de edad.");
        alert("Es usted mayor de edad.");
    }
    */
    console.log(cuenta)
}

// Uso básico de funciones
console.log('')
console.log(`Uso básico de funciones`)

function cambiarColor(params) {
    //document.bgColor = "red";
    document.bgColor = params;
    //console.log(`cambiar cal olor ${params}`)
}

// Matrices
console.log('')
console.log(`Matrices`)

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

// Propiedades de Math
console.log('')
console.log(`Propiedades de Math`)

document.write ("Aqu&iacute; se ven las propiedades del objeto Math.<br>");
document.write ("La constante de Euler vale ");

document.write (Math.E + "<br>");

document.write ("El logaritmo natural de 2 vale ");
document.write (Math.LN2 + "<br>");

document.write ("El logaritmo natural de 16 vale ");
document.write (Math.LN10 + "<br>");

document.write ("El logaritmo de E en base 2 vale ");
document.write (Math.LOG2E + "<br>");

document.write ("El logaritmo de E en base 18 vale ");
document.write (Math.LOG10E + "<br>");

document.write ("El n&uacute;mero PI vale ");

document.write (Math.PI + "<br>");

document.write ("La ra&iacute;z cuadrada de 6.5 (1/2) vale ");
document.write (Math.SQRT1_2 + "<br>");

document.write ("La ra&iacute;z cuadrada de 2 vale ");
document.write (Math.SQRT2 + "<br>");




  