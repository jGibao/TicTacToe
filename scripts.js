const gameBoard = (() => {
    let gameArray = [
        ["-", "-", "-"],
        ["-", "-", "-"],
        ["-", "-", "-"]
    ];
    const insertX = (positionX, positionY) => {
        if (gameArray[positionX][positionY] == "-") {
            console.log("inserted X");
            gameArray[positionX][positionY] = "X";
        }
    };

    const insertO = (positionX, positionY) => {
        if (gameArray[positionX][positionY] == "-") {
            console.log("inserted O");
            gameArray[positionX][positionY] = "O";
        }
    };

    const getArrayPos = (positionX, positionY) => {
        return gameArray[positionX][positionY];
    };

    return {
        insertX,
        insertO,
        getArrayPos
    };
})();

function createPlayer(id, name) {
    return {
        playerId: id,
        playerName: name,
        getName() {
            return this.playerName;
        },
    };
}



// const getWageReport = () => {
//     const totalWage = calculateWage(wagePerHour, hours);
//     return `${employeeName} total wages: ${totalWage}`;
// };



const gameManager = (() => {
    let playerTurn = 1;

    const startGame = () => {
        playerOne = createPlayer(1, "Jonh");
        playerTwo = createPlayer(2, "Peter");
        console.log("Criados");
        document.getElementById("playerDisplay").textContent = `Player: ${playerOne.getName()}`;
    };

    const playTurn = (positionX, positionY) => {
        console.log(positionX + " " + positionY);
        console.log(gameBoard.getArrayPos(positionX, positionY));
        if (playerTurn == 1 && gameBoard.getArrayPos(positionX, positionY) == "-") {
            gameBoard.insertX(positionX, positionY);
            document.getElementById(positionX + "," + positionY).textContent = "X";
            document.getElementById("playerDisplay").textContent = `Player: ${playerTwo.getName()}`;
            playerTurn = 2;
        } else if (playerTurn == 2 && gameBoard.getArrayPos(positionX, positionY) == "-") {
            gameBoard.insertO(positionX, positionY);
            document.getElementById(positionX + "," + positionY).textContent = "O";
            document.getElementById("playerDisplay").textContent = `Player: ${playerOne.getName()}`;
            playerTurn = 1;
        }

        if (checkWin() != null) {
            displayWinner(checkWin());
        }
    };

    function checkWin() {
        let winner;
        for (i = 0; i < 3; i++) {
            if (gameBoard.getArrayPos(i, 0) == "X" && gameBoard.getArrayPos(i, 1) == "X" && gameBoard.getArrayPos(i, 2) == "X") {
                winner = "X";
            }
            if (gameBoard.getArrayPos(i, 0) == "O" && gameBoard.getArrayPos(i, 1) == "O" && gameBoard.getArrayPos(i, 2) == "O") {
                winner = "O";
            }
            if (gameBoard.getArrayPos(0, i) == "X" && gameBoard.getArrayPos(1, i) == "X" && gameBoard.getArrayPos(2, i) == "X") {
                winner = "X";
            }
            if (gameBoard.getArrayPos(0, i) == "O" && gameBoard.getArrayPos(1, i) == "O" && gameBoard.getArrayPos(2, i) == "O") {
                winner = "O";
            }
        }
        if (gameBoard.getArrayPos(0, 0) == "X" && gameBoard.getArrayPos(1, 1) == "X" && gameBoard.getArrayPos(2, 2) == "X") {
            winner = "X";
        }
        if (gameBoard.getArrayPos(0, 0) == "O" && gameBoard.getArrayPos(1, 1) == "O" && gameBoard.getArrayPos(2, 2) == "O") {
            winner = "O";
        }
        if (gameBoard.getArrayPos(0, 2) == "X" && gameBoard.getArrayPos(1, 1) == "X" && gameBoard.getArrayPos(2, 0) == "X") {
            winner = "X";
        }
        if (gameBoard.getArrayPos(0, 2) == "O" && gameBoard.getArrayPos(1, 1) == "O" && gameBoard.getArrayPos(2, 0) == "O") {
            winner = "O";
        }
        return winner;
    }

    function displayWinner(winner) {
        let winnerText = document.createElement("h1");
        if (winner == "X") {
            winnerText.textContent = `The winner is: ${playerOne.getName()}`;
        }
        if (winner == "O") {
            winnerText.textContent = `The winner is: ${playerTwo.getName()}`;
        }
        document.body.appendChild(winnerText);
    }

    function reset() {
        location.reload();

    }

    return {
        startGame,
        playTurn,
        reset
    };
})();

gameManager.startGame();

// gameBoard.sub(6, 2); // 4
// gameBoard.mul(14, 5534); // 77476

//   const Formatter = (function() {
//     let timesRun = 0;

//     const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
//     const setTimesRun = () => { 
//       log("Setting times run");
//       ++timesRun;
//     }

//     const makeUppercase = (text) => {
//       log("Making uppercase");
//       setTimesRun();
//       return text.toUpperCase();
//     };

//     return {
//       makeUppercase,
//       timesRun,
//     }
//   })();