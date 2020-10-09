let celdas = document.querySelectorAll('.celda');
let turno = document.querySelector('.turno');
let botonIniciar = document.querySelector('.btn')

let estadoInicial1 = ["X", "O", "X", "X", "O", "X", "", "", ""];
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
    intentarGanar();
}

function clickCelda(event) {
    event.target.innerHTML = siguienteJugador;
    cambiarJugador();
    turno.innerHTML = mostrarTurno();
}

function ganarVertical(jugador, columna) {

    if ((celdas[columna].innerHTML == jugador) && (celdas[columna].innerHTML == celdas[columna + 3].innerHTML) && (celdas[columna + 6].innerHTML == "")) {
        celdas[columna + 6].innerHTML = jugador;
        celdas[columna + 6].style.border = '5px solid red';
        return true;
    }
}

function ganarDiagonal(jugador, columna) {
    if (columna == 0) {
        if ((celdas[columna].innerHTML == jugador) && (celdas[columna].innerHTML == celdas[columna + 4].innerHTML) && (celdas[columna + 8].innerHTML == "")) {
            celdas[columna + 8].innerHTML = jugador;
            celdas[columna + 8].style.border = '5px solid red';
            return true;
        }
    }
    if (columna == 2) {
        if ((celdas[columna].innerHTML == jugador) && (celdas[columna].innerHTML == celdas[columna + 4].innerHTML) && (celdas[columna + 6].innerHTML == "")) {
            celdas[columna + 6].innerHTML = jugador;
            celdas[columna + 6].style.border = '5px solid red';
            return true;
        }
    }
}

function intentarGanar() {
    let puedoGanarMaquina = false;
    for (let i = 0; i <= 2; i++) {
        if (i == 0) {
            if (ganarVertical(siguienteJugador, i)) {
                puedoGanarMaquina = true;
                turno.innerHTML = `Ha ganado la máquina, rellenando la celda ${i + 7}`;
                break;
            }
            if (ganarDiagonal(siguienteJugador, i)) {
                puedoGanarMaquina = true;
                turno.innerHTML = `Ha ganado la máquina, rellenando la celda ${i + 9}`;
                break;
            }
        }
        if (i == 1) {
            if (ganarVertical(siguienteJugador, i)) {
                puedoGanarMaquina = true;
                turno.innerHTML = `Ha ganado la máquina, rellenando la celda ${i + 7}`;
                break;
            }
        }
        if (i == 2) {
            if (ganarVertical(siguienteJugador, i)) {
                puedoGanarMaquina = true;
                turno.innerHTML = `Ha ganado la máquina, rellenando la celda ${i + 7}`;
                break;
            }
            if (ganarDiagonal(siguienteJugador, i)) {
                puedoGanarMaquina = true;
                turno.innerHTML = `Ha ganado la máquina, rellenando la celda ${i + 5}`;
                break;
            }
        }
    }
    if (!puedoGanarMaquina) {
        turno.innerHTML = `La máquina no puede ganar en el siguiente movimiento, partiendo de la posición inicial`;
    }
}



