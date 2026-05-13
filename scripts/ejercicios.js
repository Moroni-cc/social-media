/* let user = "Usuario";
alert(`Bienvenido, ${user}!`);

let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let suma = num1 + num2;
alert(`La suma de ${num1} y ${num2} es: ${suma}`);

// Condicionales con if-else
let edad = parseInt(prompt("Ingrese su edad:"));
if (edad >= 18) {
    alert("Eres mayor de edad.");
}
else {
    alert("Eres menor de edad.");
}

// Si la nota es mayor o igual a 90, imprimir "Excelente"
// Si la nota es mayor o igual a 60 pero menor a 90, imprimir "Aprobado"
// Si la nota es menor a 60, imprimir "Reprobado"
let nota = parseFloat(prompt("Ingrese su nota:"));
if (nota >= 90) {
    alert("Excelente");
}
else if (nota >= 60) {
    alert("Aprobado");
}
else {
    alert("Reprobado");
} */

/* Numero positivo o negativo

Pide un numero y muestra:
"Positivo"
"Negativo"
"Es cero"
según corresponda. */

/* let numero = parseFloat(prompt("Ingrese un número:"));
if (numero > 0) {
    alert("Positivo");
}
else if (numero < 0) {
    alert("Negativo");
}
else {
    alert("Es cero");
}
 */
/* 3. Número es par o impar
Determinar si un número es par o impar usando % */
/* let numero1 = Number(prompt("Ingrese un número:"));
let tipo = (numero1 % 2 === 0) ? "par" : "impar";
alert("El número " + numero1 + " es " + tipo + "."); */

/* Mayor de edad 
Pide una edad y muestra:
"Mayor de edad"
"Menor de edad"
según corresponda. */

/* let edad = Number(prompt("Ingrese su edad:"));
let mensaje = (edad >= 18) ? "Mayor de edad" : "Menor de edad";
alert(mensaje); */


/* 4. Comparar dos numeros
Pide dos numeros y muestra cual es el mayor
si son iguales mostrar "Son iguales" */

/* let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));

if (num1 > num2) {
    alert("El número " + num1 + " es mayor que " + num2);
}
else if (num2 > num1) {
    alert("El número " + num2 + " es mayor que " + num1);
}
else {
    alert("Son iguales");
} */

/* 5. Calculadora básica
 
Pide:
 
número 1
número 2
operación (+, -, *, /)
 
Muestra el resultado
 */
/* let numeroA = parseFloat(prompt("Ingrese el primer número:"));
let numeroB = parseFloat(prompt("Ingrese el segundo número:"));
let operacion = prompt(`Ingrese la operación a realizar:
    + para suma
    - para resta
    * para multiplicación
    / para división`);
let resultado;
if (operacion === "+" || operacion === "suma") {
    resultado = numeroA + numeroB;
}
else if (operacion === "-" || operacion === "resta") {
    resultado = numeroA - numeroB;
}
else if (operacion === "*" || operacion === "multiplicación") {
    resultado = numeroA * numeroB;
}
else if (operacion === "/" || operacion === "división") {
    if (numeroB !== 0) {
        resultado = numeroA / numeroB;
    } else {
        alert("Error: No se puede dividir por cero.");
    }
}
if (resultado !== undefined) {
    alert(`El resultado de ${numeroA} ${operacion} ${numeroB} es: ${resultado}`);
} */


/*6. Si una compra supera 100 soles:
aplicar 10% de descuento
Si supera 200 soles:
aplicar 20%
Mostrar total a pagar.*/

/* let totalCompra = parseFloat(prompt("Ingrese el total de su compra:"));
let descuento;
if (totalCompra > 200) {
    descuento = totalCompra * 0.20;
} else if (totalCompra > 100) {
    descuento = totalCompra * 0.10;
}
let totalPagar = totalCompra - (descuento || 0); // Si no se aplica descuento, se resta 0
alert(`El total a pagar es: ${totalPagar.toFixed(2)}`); */ // toFixed(2) para mostrar solo dos decimales

/* 7. Número dentro de rango
Verifica si un número está entre 10 y 50.
Usa &&.
*/

/* let numeroRango = parseFloat(prompt("Ingrese un número:"));
if (numeroRango >= 10 && numeroRango <= 50) {
    alert("El número está dentro del rango de 10 a 50.");
} else {
    alert("El número está fuera del rango de 10 a 50.");
} */





