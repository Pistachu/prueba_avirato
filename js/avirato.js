let celdas = document.querySelectorAll('.celda');
let turno = document.querySelector('.turno');
let botonIniciar = document.querySelector('.btn')

let estadoInicial1 = ["X", "O", "X", "X", "O", "O", "", "", ""];
let siguienteJugador = "X";

botonIniciar.addEventListener('click', iniciarJuego);
celdas.forEach(celda => celda.addEventListener('click', clickCelda));

function mostrarTurno() {
    if (siguienteJugador == "X") {
        return "Es el turno de la máquina";
    } else {
        return "Es el turno del jugador";
    }
}

function cambiarJugador() {
    if (siguienteJugador == "X") {
        siguienteJugador = "O";
    } else {
        siguienteJugador = "X";
    }
}

function iniciarJuego() {
    for (let i = 0; i < celdas.length; i++) {
        celdas[i].innerHTML = estadoInicial1[i];
    }
    turno.innerHTML = mostrarTurno();
}

function clickCelda(event) {
    event.target.innerHTML = siguienteJugador;
    cambiarJugador();
}