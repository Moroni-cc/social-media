let userRole = "admin"
let userName = "Diego"

/* if (userRole === "admin") {
    alert(`Bienvenido, ${userName}. Tienes acceso completo al sistema.`);
    if (userName === "Diego") {
        alert("Hola Diego, eres el adminisstrador principal.");
    }
} else {
    alert(`Bienvenido, ${userName}. Tienes acceso limitado al sistema.`);
}  */

/* switch (userRole) {
    case "admin":
        alert(`Bienvenido, ${userName}. Tienes acceso completo al sistema.`);
        switch (userName) {
            case "Diego":
                alert("Hola Diego, eres el adminisstrador principal.");
                break;
        }
        break;
    default:
        alert(`Bienvenido, ${userName}. Tienes acceso limitado al sistema.`);
        break;
} */

/* let Usuario = "Diego";
let Password = "1234";

let NombreUsuario = prompt("Ingrese su nombre de usuario:");
let PasswordUsuario = prompt("Ingrese su contraseña:");
let edad = parseInt(prompt("Ingrese su edad:"));

if (NombreUsuario === Usuario && PasswordUsuario === Password) {
    if (edad >= 18) {
        alert("Bienvenido al sistema");
    } else {
        alert("acceso restringido para menores de edad");
    }
} else {
    alert("Credenciales incorrectas, acceso denegado");
} */

/*2. Sistema de descuentos en una tienda
Una tienda ofrece descuentos dependiendo del monto de compra y si el cliente tiene membresía.
Reglas:
Si la compra es mayor a 100:
obtiene 10% de descuento.
Pero si además tiene membresía premium:
obtiene 20%.
Si la compra supera 300:
y tiene membresía premium:
obtiene 30%.
Debe mostrar:
subtotal
descuento aplicado
total final */

let montoCompra = parseFloat(prompt("Ingrese el monto de su compra:"));
let tieneMembresia = prompt("¿Tiene membresía premium? (sí/no):").toLowerCase();
let descuento;

if (montoCompra > 100) {
    if (tieneMembresia === "si") {
        descuento = 0.20;
    } else {
        descuento = 0.10;
    }
} else if (montoCompra > 300) {
    if (tieneMembresia === "si") {
        descuento = 0.30;
    } else {
        descuento = 0.10;
    }
} else {
    descuento = 0;
}


let montoDescuento = montoCompra * descuento;
let totalFinal = montoCompra - montoDescuento;
alert(`Subtotal: $${montoCompra.toFixed(2)}\nDescuento aplicado: $${montoDescuento.toFixed(2)}\nTotal final: $${totalFinal.toFixed(2)}`);

/* 3. Evaluación de estudiantes
Una escuela evalúa estudiantes usando:
examen
asistencia
Condiciones:
Si la nota es mayor o igual a 11:
verificar asistencia.
Si asistencia es mayor o igual a 80:
mostrar:
"Estudiante aprobado"
Si aprobó examen pero no asistencia:
mostrar:
"Aprobó examen pero desaprobó por faltas"
Si nota es menor a 11:
mostrar:
"Desaprobado" */

let notaExamen = parseFloat(prompt("Ingrese la nota del examen:"));
let asistencia = parseFloat(prompt("Ingrese el porcentaje de asistencia:"));

if (notaExamen >= 11) {
    if (asistencia >= 80) {
        alert("Estudiante aprobado");
    } else {
        alert("Aprobó examen pero desaprobó por faltas");
    }
} else {
    alert("Desaprobado");
}

