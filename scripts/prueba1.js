// Esto es un comentario simple en JavaScript

/* Esto es un comentario
multilínea en JavaScript */

// Declaración de variables
let nombre = "Moroni Capcha"; // Usamos 'let' para variables que pueden cambiar
const edad = 20;              // Usamos 'const' para variables que no cambiarán su valor
var ciudad = "Huánuco";       // Usamos 'var' para variables que pueden cambiar (no recomendado)

// Imprimir en la consola
console.log("Hola, mi nombre es " + nombre);
console.log(`Tengo ${edad} años y vivo en ${ciudad}.`);

// Función para saludar
function saludar(nombre) {
    return `¡Hola, ${nombre}! Bienvenido a JavaScript.`;
}
console.log(saludar("Moroni"));

// Condicionales
if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

// Bucle for
for (let i = 0; i < 5; i++) {
    console.log(`Número: ${i}`);
}

// Bucle while
let contador = 0;
while (contador < 5) {
    console.log(`Contador: ${contador}`);
    contador++;
}

// Arreglo de frutas
let frutas = ["Manzana", "Banana", "Naranja"];
console.log("Frutas disponibles:");
frutas.forEach(fruta => {
    console.log(fruta);
});

// operaciones matemáticas
let a = 10;
let b = 5;
console.log(`Suma: ${a + b}`);
console.log(`Resta: ${a - b}`);
console.log(`Multiplicación: ${a * b}`);
console.log(`División: ${a / b}`);

// Objeto persona
let persona = {
    nombre: "Moroni Capcha",
    edad: 20,
    ciudad: "Huánuco"
};
console.log(`Hola, soy ${persona.nombre} y tengo ${persona.edad} años.`);

// Función para calcular el área de un círculo
function areaCirculo(radio) {
    return Math.PI * Math.pow(radio, 2);
}
console.log(`El área de un círculo con radio 5 es: ${areaCirculo(5)}`);


//1. Ejemplo basico: Mayoria de edad
// Con If-else tradicional

let edadPersona1 = 20;
let mensaje1;

if (edadPersona1 >= 18) {
    mensaje1 = "Puedes pasar";
} else {
    mensaje1 = "No puedes pasar";
}
console.log(mensaje1);

// Con operador ternario

let edadPersona2 = 20;
let mensaje2 = edadPersona2 >= 18 ? "Puedes pasar" : "No puedes pasar";
console.log(mensaje2);

//2. Determinar si un número es par o impar
let numero = 7;
let tipo = (numero % 2 === 0) ? "par" : "impar";
console.log("El número " + numero + " es " + tipo + ".");

//3. Aplicar un descuento
let totalCompra = 150;
//Si la compra es mayor a 100, descuento de 20% si no, es 0.
let descuento = totalCompra > 100 ? 0.2 : 0;
let pagoFinal = totalCompra - descuento;
console.log("Total a pagar: " + pagoFinal);
