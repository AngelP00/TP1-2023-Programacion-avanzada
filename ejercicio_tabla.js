// Uso básico de funciones
console.log('')
console.log(`Ejercicio Tabla`)
const currentDate = new Date();

document.getElementById("fullYearValue").textContent = currentDate.getFullYear();
document.getElementById("yearValue").textContent = currentDate.getYear();
document.getElementById("monthValue").textContent = currentDate.getMonth();
document.getElementById("dateValue").textContent = currentDate.getDate();
document.getElementById("hoursValue").textContent = currentDate.getHours();
document.getElementById("minutesValue").textContent = currentDate.getMinutes();
document.getElementById("secondsValue").textContent = currentDate.getSeconds();
document.getElementById("millisecondsValue").textContent = currentDate.getMilliseconds();
document.getElementById("timeValue").textContent = currentDate.getTime();