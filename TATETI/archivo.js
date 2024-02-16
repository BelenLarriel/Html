
let playerX = "";
let playerO = "";


let currentPlayer = "X";
let gameBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];
let gameActive = true;
function startGame() {
    playerX = prompt("Ingrese el nombre del Jugador X:");
    playerO = prompt("Ingrese el nombre del Jugador O:");


    if (playerX && playerO) {
        document.getElementById("status").textContent = `Turno de ${playerX} (X)`;
        gameActive = true;
    } else {
        alert("Por favor, ingrese los nombres de ambos jugadores.");
    }
}




function makeMove(event) {
    if (!gameActive) return;  // Si el juego ya terminó, no se permiten más movimientos

    const cell = event.target;
    const rowIndex = cell.parentElement.rowIndex;
    const cellIndex = cell.cellIndex;

    if (gameBoard[rowIndex][cellIndex] === "") {
        gameBoard[rowIndex][cellIndex] = currentPlayer;
        cell.textContent = currentPlayer;

        if (checkWinner()) {
            document.getElementById("status").textContent = `${currentPlayer} ha ganado el juego!`;
            gameActive = false;
        } else if (checkTie()) {
            document.getElementById("status").textContent = "¡Es un empate!";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            document.getElementById("status").textContent = `Turno de ${currentPlayer}`;
        }
    }
}

function checkWinner() {
    // Verifica filas, columnas y diagonales
    for (let i = 0; i < 3; i++) {
        if (
            gameBoard[i][0] !== "" &&
            gameBoard[i][0] === gameBoard[i][1] &&
            gameBoard[i][1] === gameBoard[i][2]
        ) {
            return true;
        }

        if (
            gameBoard[0][i] !== "" &&
            gameBoard[0][i] === gameBoard[1][i] &&
            gameBoard[1][i] === gameBoard[2][i]
        ) {
            return true;
        }
    }

    if (
        gameBoard[0][0] !== "" &&
        gameBoard[0][0] === gameBoard[1][1] &&
        gameBoard[1][1] === gameBoard[2][2]
    ) {
        return true;
    }

    if (
        gameBoard[0][2] !== "" &&
        gameBoard[0][2] === gameBoard[1][1] &&
        gameBoard[1][1] === gameBoard[2][0]
    ) {
        return true;
    }

    return false;
}

function checkTie() {
    for (let row of gameBoard) {
        for (let cell of row) {
            if (cell === "") {
                return false;
            }
        }
    }
    return true;
}

function resetGame() {
    currentPlayer = "X";
    gameBoard = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    gameActive = true;

    const cells = document.querySelectorAll("td");
    cells.forEach(cell => {
        cell.textContent = "";
    });

    document.getElementById("status").textContent = "Turno de X";
}
