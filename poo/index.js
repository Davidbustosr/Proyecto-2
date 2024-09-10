// Array global para almacenar encuestas
const encuestas = [];

// Clase para la creación de encuestas
class CreacionEncuesta {
    constructor(cantidadDePreguntas = 0, preguntas = [], opciones = [], resultadoTiempoReal = [], resultadoFinal = [], respuestas = []) {
        this.cantidadDePreguntas = cantidadDePreguntas;
        this.preguntas = preguntas;
        this.opciones = opciones;
        this.resultadoTiempoReal = resultadoTiempoReal;
        this.resultadoFinal = resultadoFinal;
        this.respuestas = respuestas; // Array para guardar las respuestas del usuario
    }

    // Método para solicitar la cantidad de preguntas y opciones
    cantidadPreguntas() {
        let cantidad;

        // Bucle para asegurar un número válido de preguntas (mínimo 8)
        while (true) {
            cantidad = prompt("¿Cuántas preguntas tendrá su encuesta? (MINIMO 8)");
            if (isNaN(cantidad) || cantidad < 8) {
                alert("Ingrese una cantidad valida"); // Validación de cantidad mínima
            } else {
                this.cantidadDePreguntas = parseInt(cantidad); // Guardar cantidad de preguntas
                break;
            }
        }

        // Solicitar cuántas opciones quiere para todas las preguntas
        let cantidadOpciones;
        while (true) {
            cantidadOpciones = prompt("¿Cuántas alternativas de respuesta tendrá cada pregunta?");
            if (isNaN(cantidadOpciones) || cantidadOpciones <= 0) {
                alert("Ingrese un número válido.");
            } else {
                cantidadOpciones = parseInt(cantidadOpciones); // Guardar cantidad de opciones
                break;
            }
        }

        // Ciclo para solicitar cada pregunta y sus opciones
        for (let i = 0; i < this.cantidadDePreguntas; i++) {
            let pregunta = prompt(`Ingrese la pregunta número ${i + 1}:`);
            this.preguntas.push(pregunta); // Guardar la pregunta

            // Mostrar la pregunta ingresada
            alert(`Pregunta ${i + 1}: ${pregunta}.`);
            console.log(`Pregunta ${i + 1}: ${pregunta}.`);

            // Solicitar las opciones para cada pregunta
            let opcionesDePregunta = [];
            for (let j = 0; j < cantidadOpciones; j++) {
                let opcion = prompt(`Ingrese la alternativa ${j + 1} para la pregunta ${i + 1}:`);
                opcionesDePregunta.push(opcion); // Guardar cada opción
            }

            // Guardar las opciones de la pregunta
            this.opciones.push(opcionesDePregunta);

            // Actualizar el resultado en tiempo real
            this.resultadoTiempoReal.push({
                pregunta: pregunta,
                opciones: opcionesDePregunta
            });

            // Mostrar el resultado en tiempo real en la consola
            console.log(`Resultado en tiempo real después de la pregunta ${i + 1}:`);
            console.log(this.resultadoTiempoReal);
        }

        // Actualizar el resultado final una vez que se ingresan todas las preguntas
        this.resultadoFinal = [...this.resultadoTiempoReal]; // Clonamos el resultado en tiempo real

        // Mostrar el resultado final
        console.log("Resultado final:");
        console.log(this.resultadoFinal);
    }

    // Método para que el usuario responda la encuesta
    responderEncuesta() {
        // Recorrer cada pregunta y mostrar las opciones
        for (let i = 0; i < this.preguntas.length; i++) {
            let pregunta = this.preguntas[i];
            let opciones = this.opciones[i];

            // Crear un mensaje con la pregunta y las opciones
            let mensaje = `Pregunta ${i + 1}: ${pregunta}\n`;
            opciones.forEach((opcion, index) => {
                mensaje += `${index + 1}. ${opcion}\n`; // Añadir cada opción con su número
            });

            // Mostrar el mensaje y solicitar la respuesta del usuario
            let respuesta = prompt(mensaje + "Elija el número de su respuesta:");

            // Guardar la respuesta en el array de respuestas
            this.respuestas.push(respuesta);

            // Mostrar el voto en tiempo real en la consola
            console.log(`Respuesta a la pregunta ${i + 1}: Opción ${respuesta}`);
        }

        // Mostrar todas las respuestas al final
        console.log("Respuestas del usuario:");
        console.log(this.respuestas);

        // Mostrar un resumen final de las respuestas del usuario
        let resumenRespuestas = "Resumen de tus respuestas:\n";
        this.preguntas.forEach((pregunta, index) => {
            resumenRespuestas += `Pregunta ${index + 1}: ${pregunta}\n   Respuesta: Opción ${this.respuestas[index]}\n`;
        });
        alert(resumenRespuestas); // Mostrar el resumen en una alerta
    }
}

// Confirmación para iniciar la creación de la encuesta
let comenzarCreacionEncuesta = confirm("Presione OK para comenzar la creación de su encuesta");

if (comenzarCreacionEncuesta) {
    // Si el usuario presiona "Aceptar", comenzamos el proceso
    let encuesta1 = new CreacionEncuesta();
    encuesta1.cantidadPreguntas(); // Solicitar la cantidad de preguntas y opciones

    // Agregar la encuesta creada al array global de encuestas
    encuestas.push(encuesta1);

    // Mostrar la encuesta creada en la consola
    console.log(encuestas);

    // Preguntar si el usuario desea responder la encuesta
    let responderEncuesta = confirm("¿Desea responder la encuesta que acaba de crear?");
    
    if (responderEncuesta) {
        encuesta1.responderEncuesta(); // Llamar al método para responder la encuesta
    }
} else {
    // Si el usuario presiona "Cancelar", mostrar alerta
    alert("Has cancelado la creación de la encuesta.");
}