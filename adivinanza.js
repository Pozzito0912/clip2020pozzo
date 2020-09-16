function adivinanza() {
    var cant_intentos = 4;
    var rta = 7;
    var acierto = false;
    var numero;


        // Pregunta
    while (cant_intentos > 0 && acierto != true) {
        cant_intentos--;
        numero = parseInt(prompt("¿Cuántos campeonatos INTERNACIONALES ganó Marcelo Gallardo como DT de River?"));

        //Resultado correcto
        if (numero == rta) {
            alert("Correcto! La más destacada es la Copa Libertadores 2018 con la final frente a Boca Juniors")
            acierto = true;
        }

        // Resultado incorrecto menor
        else if (numero < rta) {
            alert(
                "Pista: son más... Le quedan " + cant_intentos + " intentos. El que abandona no tiene premio"
            );
        }

        // Resultado incorrecto mayor
        else if (numero > rta) {
            alert(
                "Pista: son menos... Le quedan " + cant_intentos + " intentos. El que abandona no tiene premio"
            );
        } else {
            alert("Le quedan " + cant_intentos + " intentos");
        }
    }

        // Sin intentos
    if (acierto == false) {
        alert("Te quedaste sin intentos. Marcelo 'El Muñeco' Gallardo ganó 7 títulos a la fecha. Y quiere ir por más")
    }
}