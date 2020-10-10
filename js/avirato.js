// Capturamos los elementos del DOM
let celdas = document.querySelectorAll('.celda');
let turno = document.querySelector('.turno');
let botonIniciar = document.querySelector('.btnIniciar');
let botonReset = document.querySelector('.btnReset');

let estadoInicial = ['X', 'O', 'O', 'O', 'X', 'X', '', '', ''];
let siguienteJugador = 'X';
turno.innerHTML = `Pulsa el botón Iniciar para comenzar`;

// Asignamos eventos
botonIniciar.addEventListener('click', iniciarJuego);
botonReset.addEventListener('click', resetJuego);

// Función para iniciar el juego con valores aleatorios
function iniciarArray() {
    let numX = 0;
    let numO = 0;

    for (let i = 0; i <= 5; i++) {
        const aleatorio = Math.random();
        if (numX == 3) {
            estadoInicial[i] = 'O';
        } else if (numO == 3) {
            estadoInicial[i] = 'X';
        } else if (i == 2 && (estadoInicial[i - 1] == estadoInicial[i - 2])) {
            estadoInicial[i] = (estadoInicial[i - 1] == 'X') ? 'O' : 'X';
        } else if (i == 5 && (estadoInicial[i - 1] == estadoInicial[i - 2])) {
            estadoInicial[i] = (estadoInicial[i - 1] == 'X') ? 'O' : 'X';
        } else if (aleatorio <= 0.5) {
            estadoInicial[i] = 'X';
        } else {
            estadoInicial[i] = 'O';
        }

        if (estadoInicial[i] == 'X') {
            numX++;
        } else {
            numO++;
        }
    }
}

// Función que inicia el juego
function iniciarJuego() {
    iniciarArray();
    for (let i = 0; i < celdas.length; i++) {
        celdas[i].innerHTML = estadoInicial[i];
    }
    intentarGanar();
}

// Función para comprobar si la máquina puede hacer un tres en raya vertical
function ganarVertical(jugador, columna) {

    if ((celdas[columna].innerHTML == jugador) && (celdas[columna].innerHTML == celdas[columna + 3].innerHTML) && (celdas[columna + 6].innerHTML == '')) {
        celdas[columna + 6].innerHTML = jugador;
        celdas[columna + 6].style.border = '5px solid red';
        return true;
    }
}

// Función para comprobar si la máquina puede hacer un tres en raya diagonal
function ganarDiagonal(jugador, columna) {
    if (columna == 0) {
        if ((celdas[columna].innerHTML == jugador) && (celdas[columna].innerHTML == celdas[columna + 4].innerHTML) && (celdas[columna + 8].innerHTML == '')) {
            celdas[columna + 8].innerHTML = jugador;
            celdas[columna + 8].style.border = '5px solid red';
            return true;
        }
    }
    if (columna == 2) {
        if ((celdas[columna].innerHTML == jugador) && (celdas[columna].innerHTML == celdas[columna + 4].innerHTML) && (celdas[columna + 6].innerHTML == '')) {
            celdas[columna + 6].innerHTML = jugador;
            celdas[columna + 6].style.border = '5px solid red';
            return true;
        }
    }
}

// función para comprobar si la máquina puede ganar o no con el siguiente movimiento
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

// Función para resetear el juego
function resetJuego() {
    for (let i = 0; i < celdas.length; i++) {
        celdas[i].innerHTML = '';
        celdas[i].style.border = '1px solid black';
        turno.innerHTML = `Pulsa el botón Iniciar para comenzar`;
    }
}



