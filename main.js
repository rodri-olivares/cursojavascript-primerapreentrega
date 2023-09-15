//Hola profe cómo está? Espero que muy bien. Como le había comentado anteriormente, tenía el deseo de cambiar mi proyecto, orientandolo hacia un sistema de reservas. Todo esto porque me gustaría mucho continuar esto en los cursos de React y de desarrollo de aplicaciones, ya que le veo un cierto potencial en la provincia donde vivo (San Juan), además siento que puede ser una buena ayuda para agilizar lo que sería el tema de reservas, si hay lugar o no etc.
//Bueno, ahora hablando del código, lo piimero que hago es definir una función constructora, lo que me pareció muy útil para agregar restaurantes que quieran adquirir el servicio, a medida que vaya pasando el tiempo.
function AgregarRestaurante(Nombre, Capacidad) {
    this.Nombre = Nombre;
    this.Capacidad = Capacidad;
    this.Reservas = 0;
}

//Acá lo que hago es utilizar la función constructora para agregar 2 restaurantes, en una especie de simulación de que los mismos se incorporaran al servicio.
const NuevoRestaurante1 = new AgregarRestaurante("Tricar lomos y pizzas", 60);
const NuevoRestaurante2 = new AgregarRestaurante("Clapton café", 40);

//Acá lo que hago es definir un array de restaurantes donde cada restaurante es un objeto. 
const Restaurantes = [
    {
        Nombre: "Luiggis pizza",
        Capacidad: 50,
        Reservas: 0,
    },
    {
        Nombre: "Siciliano pastas",
        Capacidad: 40,
        Reservas: 0,
    },
    {
        Nombre: "Roggers parrilladas",
        Capacidad: 30,
        Reservas: 0,
    },
    {
        Nombre: "Bambinos vegan food",
        Capacidad: 20,
        Reservas: 0,
    },
];
//Acá se incorporan al array los restaurantes anteriormente generados por la función constructora.
Restaurantes.push(NuevoRestaurante1);
Restaurantes.push(NuevoRestaurante2);

//Acá lo que hago es definir una función llamada MostrarOpcionesDeRestaurantes, que hace justamente lo que se indica en su nombre. Se encarga de mostrar al usuario los diversos restaurantes donde puede realizar una reserva.
function MostrarOpcionesDeRestaurantes() {
    console.log("Restaurantes disponibles:");
    Restaurantes.forEach(function (Restaurante, index) {
        console.log((index + 1) + ". " + Restaurante.Nombre);
    });
}

//Acá deino la función HacerReserva, que se encargará justamente de eso. Primero se le pide al usuario ingresar un número, el cuál debe ser el mismo del restaurante donde desea reservar. Luego, a través de un ciclo de condicionales, se verifica en un primer instante si se ingresó un número efectivamente, después, se verifica si dicho número se encuentra dentro del rango de restaurantes disponibles. En caso de ser esto correcto, se le pide al usuario que ingrese el número de personas (o lugares mejor dicho) que desea reservar, a partir de esto se verifica nuevamente que se haya ingresado un número, y si dicho número no excedela capacidad inicial del restaurante. En caso de que la reserva pueda realizarse, se le confirma al usuario, y se pasa a la siguiente parte del
function HacerReserva() {
    MostrarOpcionesDeRestaurantes();
    const Opcion = parseInt(prompt("Ingrese el número del restaurante donde desea reservar:"));

    if (!isNaN(Opcion) && Opcion >= 1 && Opcion <= Restaurantes.length) {
        const RestauranteSeleccionado = Restaurantes[Opcion - 1];
        const Personas = parseInt(prompt("Ingrese el número de personas para la reserva:"));

        if (!isNaN(Personas)) {
            if (Personas <= RestauranteSeleccionado.Capacidad) {
                RestauranteSeleccionado.Reservas += Personas;
                console.log("Reserva en " + RestauranteSeleccionado.Nombre + " para " + Personas + " personas realizada.");
                console.log("Capacidad restante: " + (RestauranteSeleccionado.Capacidad - RestauranteSeleccionado.Reservas));
            } else {
                console.log("Lo siento, " + RestauranteSeleccionado.Nombre + " no tiene suficiente capacidad.");
            }
        } else {
            console.log("Ingrese un número válido de personas.");
        }
    } else {
        console.log("Opción no válida. Ingrese un número válido de restaurante.");
    }
}

//Acá le doy un contexto de ejecución a la función HacerReserva.
HacerReserva();
//Una vez que se efectuó la reserva, se le muestra al usuario la información de los restaurantes actualizada.
console.log("Restaurantes actualizados:");
Restaurantes.forEach(function (Restaurante) {
    console.log("Restaurante: " + Restaurante.Nombre + ", Capacidad: " + Restaurante.Capacidad + ", Reservas: " + Restaurante.Reservas);
});