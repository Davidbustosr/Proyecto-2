// Inicializar un array vacío para almacenar las preguntas y sus alternativas
const preguntas = [];

// Función para pedir la cantidad de preguntas con validación
function pedirCantidadDePreguntas() {
    let cantidadDePreguntas;
    while (true) {
        cantidadDePreguntas = parseInt(prompt("¿Cuántas preguntas tendrá su encuesta? (Mínimo 8)"));
        
        // Validar que la cantidad de preguntas sea al menos 8
        if (!isNaN(cantidadDePreguntas) && cantidadDePreguntas >= 8) {
            break; // Salir del bucle si la entrada es válida
        } else {
            alert("La encuesta debe tener al menos 8 preguntas. Por favor ingrese una cantidad válida.");
        }
    }
    return cantidadDePreguntas; // Devolver la cantidad válida de preguntas
}

// Función para pedir las preguntas y sus alternativas al usuario
function pedirPreguntasYAlternativas(cantidadDePreguntas) {
    // Bucle para pedir cada pregunta
    for (let i = 0; i < cantidadDePreguntas; i++) {
        const pregunta = prompt(`Escriba la pregunta número ${i + 1}:`);

        // Bucle para pedir y validar la cantidad de alternativas
        let cantidadAlternativas;
        while (true) { 
            cantidadAlternativas = parseInt(prompt(`¿Cuántas alternativas tendrá la pregunta ${i + 1}?`));

            // Validar que la entrada sea un número válido
            if (!isNaN(cantidadAlternativas) && cantidadAlternativas > 0) {
                alert("Presione aceptar para continuar");
                break;
            } else {
                alert("Ingrese un número válido");
            }
        }

        // Crear un array para almacenar las alternativas de la pregunta
        let alternativas = [];
        // Bucle para pedir cada alternativa
        for (let j = 0; j < cantidadAlternativas; j++) {
            let alternativa = prompt(`Escriba la alternativa ${j + 1} para la pregunta ${i + 1}:`);
            alternativas.push(alternativa); // Guardar la alternativa
        }

        // Guardar la pregunta junto con sus alternativas en el array 'preguntas'
        preguntas.push({
            pregunta: pregunta,
            alternativas: alternativas
        });

        // Mostrar la pregunta y sus alternativas en la consola (opcional)
        console.log(`Pregunta ${i + 1}: ${pregunta}`);
        console.log(`Alternativas para la pregunta ${i + 1}:`, alternativas);
    }
}

// Pedir al usuario cuántas preguntas tendrá la encuesta, asegurando que sean al menos 8
let cantidadDePreguntas = pedirCantidadDePreguntas(); // Llamar a la función para pedir una cantidad válida
pedirPreguntasYAlternativas(cantidadDePreguntas); // Llamar a la función para pedir las preguntas

// Construir un mensaje para mostrar todas las preguntas y alternativas en una alerta
let mensajeFinal = "";
for (let i = 0; i < preguntas.length; i++) {
    mensajeFinal += `Pregunta ${i + 1}: ${preguntas[i].pregunta}\n`;
    for (let j = 0; j < preguntas[i].alternativas.length; j++) {
        mensajeFinal += `   Alternativa ${j + 1}: ${preguntas[i].alternativas[j]}\n`;
    }
}
alert(mensajeFinal); // Mostrar el resumen de las preguntas y alternativas

// Mostrar todas las preguntas y sus alternativas ingresadas en la consola
console.log("Preguntas y alternativas ingresadas:", preguntas);

// Preguntar si el usuario desea responder la encuesta
let mensajeParaResponderEncuesta = confirm("¿Le gustaría responder su encuesta?");
if (mensajeParaResponderEncuesta) {
    let respuestas = [];  // Array para almacenar las respuestas

    // Recorremos cada pregunta para solicitar respuesta al usuario
    preguntas.forEach((pregunta, index) => {
        // Construir el mensaje de la pregunta con sus alternativas
        let mensajePregunta = `${pregunta.pregunta}\n`;
        for (let j = 0; j < pregunta.alternativas.length; j++) {
            mensajePregunta += `   Alternativa ${j + 1}: ${pregunta.alternativas[j]}\n`;
        }

        // Pedir la respuesta del usuario usando el mensaje construido
        let respuesta = prompt(`${mensajePregunta}\nEscribe tu respuesta:`);
        respuestas.push({
            pregunta: pregunta.pregunta,
            respuesta: respuesta
        });
    });

    // Construir un mensaje con las preguntas y las respuestas del usuario
    let mensajeRespuestas = "Resumen de tus respuestas:\n";
    respuestas.forEach((respuesta, index) => {
        mensajeRespuestas += `Pregunta ${index + 1}: ${respuesta.pregunta}\n   Tu respuesta: ${respuesta.respuesta}\n`;
    });

    // Mostrar las preguntas y respuestas en una alerta
    alert(mensajeRespuestas);

    // Mostrar las respuestas en la consola (opcional)
    console.log("Respuestas a la encuesta:", respuestas);

    // Agradecimiento final
    alert("Gracias por responder la encuesta.");
} else {
    // Si el usuario no quiere responder, volvemos a preguntar si está seguro
    while (true) {
        let mensaje2 = confirm("¿Está seguro que NO desea responder su encuesta?");
        if (mensaje2) {
            alert("Esperamos verte pronto, adiós.");
            break;  // Salimos si confirma que no quiere responder
        }
    }
}