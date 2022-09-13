let nombre = prompt("Ingresa tu nombre :");

alert("OPCION 1: SUMA")
alert("OPCION 2: RESTA")
alert("OPCION 3: MULTIPLICACIÓN")
alert("OPCION 4: DIVISIÓN")

let opcion = prompt("Escoje una opción: ")

if (opcion == "1") {
    let numero = parseInt(prompt("Ingresa el primer número: "));
    let numero1 = parseInt(prompt("Ingresa el segundo número: "));
    let suma = (numero + numero1);
    let alerta = (nombre + ", el resultado de la suma es : " + suma);

    alert(alerta);
} 

if (opcion == "2") {
    let numero = parseInt(prompt("Ingresa el primer número: "));
    let numero1 = parseInt(prompt("Ingresa el segundo número: "));
    let resta = (numero - numero1);
    let alerta = (nombre + ", el resultado de la resta es : " + resta);

    alert(alerta);
} 


if (opcion == "3") {
    let numero = parseInt(prompt("Ingresa el primer número: "));
    let numero1 = parseInt(prompt("Ingresa el segundo número: "));
    let multi = (numero * numero1);
    let alerta = (nombre + ", el resultado de la multiplicación es : " + multi);

    alert(alerta);
} 

if (opcion == "4") {
    let numero = parseFloat(prompt("Ingresa el primer número: "));
    let numero1 = parseFloat(prompt("Ingresa el segundo número: "));
    let divi = parseFloat((numero / numero1));
    let alerta = (nombre + ", el resultado de la división es : " + divi);

    alert(alerta);
} 