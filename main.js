//declaro la función dentro de la variable GenerarNumeroRandom, para seguir el ejemplo del profe, donde nos explicó que es una buena práctica hacerlo así, ya que nos obliga a primero definir y luego ejecutar. Acá lo que hago es darle dos parámetros que después asignaré con argumentos. Un número mínimo del rango de adivinanza, que será 1, y uno máximo que será 10
let GenerarNumeroRandom = function (nmin, nmax) {
    return Math.floor(Math.random() * (nmax - nmin + 1)) + nmin;
}
//Acá defino, para despues ejecutar, la función AdivinarNumero, que es el juego en sí
function AdivinarNumero() {
//Acá declaro la variable JugarDeNuevo, que lo que hace es que el juego se realice, a menos de que sea false, incumpliendo el while y evitando el juego    
    let jugarDeNuevo = true;

    while (jugarDeNuevo) {
        const NumeroRandom = GenerarNumeroRandom(1, 10);

        let NumeroDeIntentos = 0;
        let NumeroAdivinado = false;

        while (!NumeroAdivinado) {
            const NumeroIngresado = parseInt(prompt("Por favor, ingresa un número del 1 al 10"));

            if (isNaN(NumeroIngresado)) {
                alert("No ingresaste un número válido, por favor intenta nuevamente.");
                continue;
            }
//Acá lo que hago es usar el operador +=, que el profe mencionó que es mejor que el ++
            NumeroDeIntentos += 1;
//Y acá declaro la condición que verifica si el numero que ingresa el usuario es igual al generado por el Math.random, en caso de serlo, muestra lo del primer if, en caso de no serlo, verifica la segunda condición, donde se fija si el numero que ingresó el usuario es mayor o menor que el generado automáticamente. En cada caso devuelve un mensaje.
            if (NumeroIngresado === NumeroRandom) {
                NumeroAdivinado = true;
                alert("¡Correcto, el número es " + NumeroRandom + ", lograste adivinarlo luego de " + NumeroDeIntentos + " intentos, ¡Felicitaciones!");
            } else if (NumeroIngresado < NumeroRandom) {
                alert("El número ingresado es muy pequeño, prueba con uno más alto");
            } else {
                alert("El número ingresado es muy alto, prueba con uno más bajo");
            }
        }
//Este mensaje será mostrado una vez que se adivina el número, y se pregunta si se desea jugar nuevamente.
        const opcion = prompt("¿Queres jugar nuevamente? (si/no)").toLowerCase();
        if (opcion !== "si") {
            jugarDeNuevo = false;
        }
    }
}
//Acá le damos un contexto de ejecución a la función.
AdivinarNumero();


