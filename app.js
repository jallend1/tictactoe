const cells = document.querySelectorAll('.cell');
const gameInfo = document.querySelector('#gameinfo');
const reset = document.querySelector('#reset');
const playerIdentifier = document.querySelector('#playeridentifier');
const quinto = '<img src="quinto.png">';
const nimoy = '<img src="nimoy.png">';
let player = 1;
let isX = false;
let playedSquares = [];
let turn = 0;
let gameOver = false;
let latestMove = "Nimoy";

const winningCombos = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

function checkWinner(latestMove){
    winningCombos.forEach(win => {
        if((playedSquares[win[0]] == latestMove) && (playedSquares[win[1]] == latestMove) && (playedSquares[win[2]] == latestMove)){
            victory(win);
        }
    });
    return false;
}

function checkGameOver(){
    if(checkWinner(latestMove) === false){
        console.log("IT'S A DRAW!");
    }
}

function resetGame(){
    cells.forEach(square => {
        square.innerHTML = '';
        square.isPlayed = '';
    });
    playedSquares = [];
    gameOver = false;
    latestMove = '';
    turn = 0;
    isX = false;
}

function victory(winningCells){
    winningCells.forEach(win => {
        cells[win].classList.add('winners');
    });
    gameOver = true;
    player === 1 ? player = 2 : player = 1;
    gameInfo.innerHTML = `Player ${player} wins!!`;
}

cells.forEach(function(cell, index){
    cell.addEventListener('click', (e) => {
        if(cell.isPlayed){                                                  // Exits if square is already played
            gameInfo.innerHTML = `<p>That square has already been played!</p>`;
            return;
        }
        if(!gameOver){
            isX = !isX;                                                         // Changes the turn 
            isX ? latestMove = "Quinto" : latestMove = "Nimoy";
            isX ? e.target.innerHTML = quinto : e.target.innerHTML = nimoy;     // Plays Quinto or Nimoy
            isX ? playedSquares[index] = "Quinto" : playedSquares[index] = "Nimoy"
            cell.isPlayed = true;                                               // Marks square as played
            player === 1 ? player = 2 : player = 1;
            playerIdentifier.innerHTML = player;
            turn++;
            if(turn === 9){
                checkGameOver();
            }
            checkWinner(latestMove);
        }
    });
});

reset.addEventListener('click', resetGame);