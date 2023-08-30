console.log("hola como estas")
let NumeroRandom = Math.round(Math.random() * 10) + 1;

let NumeroDeIntentos = 0;
let NumeroAdivinado = false;

while (!NumeroAdivinado) {
    let NumeroIngresado = parseInt(prompt("Porfavor, ingresa un número del 1 al 10"))

    if (isNaN(NumeroIngresado)) {
        alert("No ingresaste un número válido, porfavor intenta nuevamente.")
        continue;
    }

    NumeroDeIntentos += 1;

    if (NumeroIngresado === NumeroRandom) {
        alert("¡Correcto, el número es " + NumeroRandom + ", lograste adivinarlo luego de " + NumeroDeIntentos + " intentos, ¡Felicitaciones!")
    }
    else if (NumeroIngresado < NumeroRandom) {
        alert("El número ingresado es muy pequeño, prueba con uno más alto")

    }
    else {
        alert("El número ingresado es muy alto, prueba con uno más bajo")

    }
}
