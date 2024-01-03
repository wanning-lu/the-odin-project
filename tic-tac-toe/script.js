
/**
 * Returns an object that is a representation of the gameboard, handles board logic
 * @returns an object that is a representation of the gameboard
 */
function Gameboard() {

    // Board initialization
    const board = [];
    for (let i = 0; i < 3; i++) {
        board[i] = [];
        for (let j = 0; j < 3; j++) {
            board[i].push(Cell());
        }
    }

    const getBoard = () => board;

    // Check if board has no empty cells
    const isFull = () => {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (!board[i][j].getValue()) {
                    return false;
                }
            }
        }
        return true;
    }

    // Mark the gameboard with a value, if it doesn't already have a value
    const mark = (row, column, player) => {
        if (!board[row][column].getValue()) {
            board[row][column].changeValue(player);
            return true;
        } else {
            return false;
        }
    };

    // If the game is allowed to be continued (no winner), then keep printing a new board
    const printBoard = (canContinue, name) => {
        if (canContinue) {
            document.querySelector('.active-player').innerHTML = `${name}'s turn.`;
        } else {
            document.querySelector('.active-player').innerHTML = `Congrats to ${name} on the win!`;
        }
        
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                document.querySelector(`[data-row='${i}'][data-col='${j}']`).innerHTML =
                        board[i][j].getValue();
            }
        }
    }

    return {
        getBoard,
        isFull,
        mark,
        printBoard
    }
}

/**
 * Returns a Cell object that represents each cell of the board
 * @returns a Cell object with a getter and setter
 */
function Cell() {
    let value = "";

    const changeValue = (playerToken) => {
        value = playerToken;
    }

    const getValue = () => value;

    return {
        getValue,
        changeValue
    }
}

/**
 * Controls the overall gameplay flow, connected to all the other elements as well.
 * Resource used: https://replit.com/@40percentzinc/ConnectFourConsole#script.js
 * @param {string} playerOneName The name of the first player with the 'X' token
 * @param {string} playerTwoName The name of the second player with the 'O' token
 * @returns a controller for the entire game to play the round and get the active player
 */
function GameController(playerOneName = "Player One", 
        playerTwoName = "Player Two") {

    // Initialize the game with a gameboard
    const board = Gameboard();

    // Variable for storing the winner
    let playerWon = "";

    // Player objects
    const players = [
        {
        name: playerOneName,
        token: "X"
        },
        {
        name: playerTwoName,
        token: "O"
        }
    ];

    // Default active player is the first player
    let activePlayer = players[0];

    // Switch active players
    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

    // Getter for the current active player
    const getActivePlayer = () => activePlayer;

    // Prints a new round
    const printNewRound = (canContinue) => {
        if (canContinue) {
            board.printBoard(true, getActivePlayer().name);
        } else {
            board.printBoard(false, playerWon);
        }
    };

    const playRound = (row, column) => {

        // No more turns if the board is full
        if (board.isFull()) {
            document.querySelector('.active-player').innerHTML = 
                    "Looks like the board is full, start a new match!";
        } 

        // No more turns if there is a winner
        else if (playerWon) {
            return;
        }
        
        // If the cell isn't taken up, mark the cell with the player token
        else if (board.mark(row, column, getActivePlayer().token)) {
            
            // Check win condition
            let gameboard = board.getBoard();

            // Check if the rows have a 3 in a row
            gameboard.forEach(row => {
                console.log(row[0]);
                if (row[0].getValue() && (row[0].getValue() === row[1].getValue()) 
                        && (row[1].getValue() === row[2].getValue())) {
                    playerWon = getActivePlayer().name;
                    printNewRound(false);
                    return;
                }
            });

            // Check if the columns have 3 in a row
            for (let i = 0; i < 3; i++) {
                if (gameboard[i][0].getValue() 
                        && (gameboard[i][0].getValue() === gameboard[i][1].getValue()) 
                        && (gameboard[i][1].getValue() === gameboard[i][2].getValue())) {
                    playerWon = getActivePlayer().name;
                    printNewRound(false);
                    return;
                }
            }

            // Check the diagonals
            if (gameboard[1][1].getValue()) {
                if ((gameboard[1][1].getValue() === gameboard[0][0].getValue()) 
                        && (gameboard[1][1].getValue() === gameboard[2][2].getValue())) {
                    playerWon = getActivePlayer().name;
                    printNewRound(false);
                    return;
                } else if ((gameboard[1][1].getValue() === gameboard[0][2].getValue()) 
                        && (gameboard[1][1].getValue() === gameboard[2][0].getValue())) {
                    playerWon = getActivePlayer().name;
                    printNewRound(false);
                    return;
                }
            }

            // Switch player turn
            switchPlayerTurn();
            printNewRound(true);
        } 
        
        // Ask player to repeat their action if marking an already marked cell
        else {
            document.querySelector('.active-player').innerHTML = 
                    `${getActivePlayer().name}, please select a valid cell.`;
        }
    };

    // Initial play game message
    printNewRound(true);

    return {
        playRound,
        getActivePlayer
    };
}

// Start up the game with player-input names, take action for each cell click
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').addEventListener('submit', () => {
        event.preventDefault();
        document.querySelector('button').innerHTML = "Restart";
        let playerOneName = document.querySelector('[id="player1"]').value;
        let playerTwoName = document.querySelector('[id="player2"]').value;
        const game = GameController(playerOneName, playerTwoName);

        document.querySelectorAll('.cell').forEach(cell => {
            cell.addEventListener('click', () => {
                let row = parseInt(event.target.dataset.row);
                let col = parseInt(event.target.dataset.col);
                game.playRound(row, col);
            });
        });
    })
})