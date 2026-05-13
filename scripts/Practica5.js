/*Ejercicio 1 – Calculadora de Promedio y Rendimiento
Pide al usuario cuatro notas (del 0 al 100).
Calcula el promedio y muestra un mensaje según el resultado:

“Excelente” si el promedio es mayor o igual a 90

“Bueno” si es mayor o igual a 75

“Regular” si es mayor o igual a 60

“Insuficiente” en caso contrario

Instrucciones:
Usa if-else-if y operadores lógicos para determinar el mensaje.
Muestra el resultado con console.log() o alert(). */

let nota1 = parseFloat(prompt("Ingrese la primera nota (0-100):"));
let nota2 = parseFloat(prompt("Ingrese la segunda nota (0-100):"));
let nota3 = parseFloat(prompt("Ingrese la tercera nota (0-100):"));
let nota4 = parseFloat(prompt("Ingrese la cuarta nota (0-100):"));
let promedio = (nota1 + nota2 + nota3 + nota4) / 4;
let mensaje;
if (promedio >= 90) {
    mensaje = "Excelente";
}
else if (promedio >= 75) {
    mensaje = "Bueno";
}
else if (promedio >= 60) {
    mensaje = "Regular";
}
else {
    mensaje = "Insuficiente";
}
alert(` El promedio es ${promedio.toFixed(2)} - Su rendimiento es: ${mensaje}`);

/* Ejercicio 2 – Calculadora de Tarifa de Transporte
El programa debe pedir al usuario:

Su edad
Si es estudiante (“sí” o “no”)
La distancia que recorrerá (en kilómetros)

Reglas del costo:
Menores de 18 pagan 50% del precio base
Estudiantes pagan 75% del precio base
Mayores de 60 pagan 40% del precio base
Si el viaje es mayor a 30 km, se agrega un 10% adicional al total

Instrucciones:
Usa condiciones anidadas (if, else if, else) y operadores lógicos para determinar el costo final.*/

let edad = parseInt(prompt("Ingrese su edad:"));
let esEstudiante = prompt("¿Es usted estudiante? (sí/no):").toLowerCase();
let distancia = parseFloat(prompt("Ingrese la distancia a recorrer (km):"));

const precioBase = 10;
let tarifa;

if (edad < 18) {
    tarifa = precioBase * 0.50;
} else if (edad > 60) {
    tarifa = precioBase * 0.40;
} else if (esEstudiante === "sí" || esEstudiante === "si") {
    tarifa = precioBase * 0.75;
} else {
    tarifa = precioBase;
}

if (distancia > 30) {
    tarifa += tarifa * 0.10;
}

alert(`El costo final de su viaje es: $${tarifa.toFixed(2)}`);

/* Ejercicio 3 – Menú de Conversión de Unidades
Muestra un menú con 4 opciones:

Convertir de Celsius a Fahrenheit
Convertir de Fahrenheit a Celsius
Convertir de Metros a Kilómetros
Convertir de Kilómetros a Metros

El usuario debe elegir una opción y escribir el valor a convertir.
El programa mostrará el resultado correspondiente.

Instrucciones:
Usa switch-case para realizar las conversiones y prompt() para las entradas.*/

let opcion = prompt(`Seleccione una opción de conversión:
1. Convertir de Celsius a Fahrenheit
2. Convertir de Fahrenheit a Celsius
3. Convertir de Metros a Kilómetros
4. Convertir de Kilómetros a Metros`);
let valor = parseFloat(prompt("Ingrese el valor a convertir:"));
let resultado;
switch (opcion) {
    case "1":
        resultado = (valor * 9 / 5) + 32;
        alert(`${valor} °C son ${resultado.toFixed(2)} °F`);
        break;
    case "2":
        resultado = (valor - 32) * 5 / 9;
        alert(`${valor} °F son ${resultado.toFixed(2)} °C`);
        break;
    case "3":
        resultado = valor / 1000;
        alert(`${valor} metros son ${resultado.toFixed(2)} kilómetros`);
        break;
    case "4":
        resultado = valor * 1000;
        alert(`${valor} kilómetros son ${resultado.toFixed(2)} metros`);
        break;
    default:
        alert("Opción no válida");
        break;
}

/* Ejercicio 4 – Sistema de Descuentos en una Tienda
El usuario debe ingresar:

El precio total de su compra
Si tiene tarjeta de cliente frecuente (“sí” o “no”)

Reglas:

Si el total es mayor a 500, aplica un 10% de descuento
Si además tiene tarjeta, aplica un 5% adicional
Si el total es menor o igual a 100, aplica un recargo del 5%
El programa debe mostrar el precio final y un mensaje indicando qué descuento se aplicó.

Instrucciones:
Utiliza operadores de asignación y condiciones anidadas para determinar el total.*/

let totalCompra = parseFloat(prompt("Ingrese el total de su compra:"));
let tieneTarjeta = prompt("¿Tiene tarjeta? (sí/no):").toLowerCase();
let totalFinal = totalCompra;
let mensaje = "No se aplicaron descuentos.";

if (totalCompra > 500) {
    totalFinal -= totalCompra * 0.10;
    mensaje = "Descuento del 10% aplicado.";

    if (tieneTarjeta === "sí" || tieneTarjeta === "si") {
        totalFinal -= totalCompra * 0.05;
        mensaje = "Descuento del 10% + 5% por tarjeta aplicado.";
    }
} else if (totalCompra <= 100) {
    totalFinal += totalCompra * 0.05;
    mensaje = "Se aplicó un recargo del 5% por compra mínima.";
}

alert(`Total: $${totalFinal.toFixed(2)}. ${mensaje}`);

/* Ejercicio 5 – Calculadora de Edad y Etapa de Vida
Pide al usuario:

Su año de nacimiento
El año actual

Calcula su edad y muestra un mensaje según el rango:

Menor de edad: menos de 18 años
Adulto joven: entre 18 y 30 años
Adulto: entre 31 y 59 años
Adulto mayor: 60 años o más

BONUS:
Pregunta además si ya cumplió años este año (“sí” o “no”) y ajusta la edad si es necesario.

Instrucciones:
Usa operadores de comparación, if-else-if, y parseInt() para convertir los datos numéricos.*/

let añoNacimiento = parseInt(prompt("Ingrese su año de nacimiento:"));
let añoActual = parseInt(prompt("Ingrese el año actual:"));
let cumplióAños = prompt("¿Ya cumplió años este año? (sí/no):").toLowerCase();
let edad = añoActual - añoNacimiento;
if (cumplióAños === "no") {
    edad -= 1;
}
let etapaVida;
if (edad < 18) {
    etapaVida = "Menor de edad";
}
else if (edad >= 18 && edad <= 30) {
    etapaVida = "Adulto joven";
}
else if (edad >= 31 && edad <= 59) {
    etapaVida = "Adulto";
}
else {
    etapaVida = "Adulto mayor";
}
alert(`Tienes ${edad} años. Etapa de vida: ${etapaVida}`);







