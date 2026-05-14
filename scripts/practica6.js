// Hola Profesor Diego :)
// Espero que este teniendo un buen día.

let saldo = 0;
let historial = [];

function mostrarMenu() {
    return prompt(
        `====== BANCO VIRTUAL ======
        1. Ingresar dinero
        2. Retirar dinero
        3. Consultar saldo
        4. Ver historial
        5. Salir
        ====================
        Elige una opción (1-5):`
    );
}

function ingresarDinero() {
    let cantidad = parseFloat(prompt("¿Cuánto dinero deseas ingresar?"));

    if (isNaN(cantidad) || cantidad <= 0) { // Validar que la cantidad sea un número positivo
        alert("⚠️ Cantidad inválida. Debe ser un número mayor a 0.");
        return;
    }

    saldo += cantidad;
    historial.push("Depósito: +S/." + cantidad.toFixed(2)); // Agregar el depósito al historial con formato de moneda
    alert("✅ Depósito exitoso. Ingresaste S/." + cantidad.toFixed(2) + "\n💰 Saldo actual: S/." + saldo.toFixed(2));
}

function retirarDinero() {
    let cantidad = parseFloat(prompt("¿Cuánto dinero deseas retirar?"));

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("⚠️ Cantidad inválida. Debe ser un número mayor a 0.");
        return;
    }

    if (cantidad > saldo) {
        alert("❌ Saldo insuficiente. Tu saldo es S/." + saldo.toFixed(2));
        return;
    }

    saldo -= cantidad;
    historial.push("Retiro:   -S/." + cantidad.toFixed(2));
    alert("✅ Retiro exitoso. Retiraste S/." + cantidad.toFixed(2) + "\n💰 Saldo actual: S/." + saldo.toFixed(2));
}

function consultarSaldo() {
    alert("💰 Tu saldo actual es: S/." + saldo.toFixed(2));
}

function verHistorial() {
    if (historial.length === 0) { // Verificar si el historial está vacío antes de mostrarlo
        alert("📋 No hay transacciones registradas.");
        return;
    }

    let mensaje = "📋 HISTORIAL DE TRANSACCIONES:\n";
    mensaje += "--------------------------------\n";
    for (let i = 0; i < historial.length; i++) { // Agregar numeración a cada transacción
        mensaje += (i + 1) + ". " + historial[i] + "\n";
    }
    mensaje += "--------------------------------\n";
    mensaje += "💰 Saldo final: S/." + saldo.toFixed(2);

    alert(mensaje);
}


// Bucle principal del programa
alert("¡Bienvenido al Banco Virtual!");

let ejecutando = true;

while (ejecutando) {
    let opcion = mostrarMenu();

    if (opcion === "1") {
        ingresarDinero();
    } else if (opcion === "2") {
        retirarDinero();
    } else if (opcion === "3") {
        consultarSaldo();
    } else if (opcion === "4") {
        verHistorial();
    } else if (opcion === "5") {
        alert("👋 Gracias por usar el Banco Virtual. ¡Hasta pronto!");
        ejecutando = false;
    } else {
        alert("⚠️ Opción no válida. Por favor elige entre 1 y 5.");
    }
}