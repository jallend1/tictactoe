const cells = document.querySelectorAll('.cell');
const gameInfo = document.querySelector('#gameinfo');
let quinto = '<img src="quinto.png">';
let nimoy = '<img src="nimoy.png">';
let isX = false;
let playedSquares = [];
let turn = 0;
let latestMove;

function checkWinner(latestMove){       // Victory conditions
    if(playedSquares[0] === latestMove && playedSquares[1] === latestMove && playedSquares[2] === latestMove){      // Top row 
        console.log('WINNER!');
    }else if(playedSquares[0] === latestMove && playedSquares[3] === latestMove && playedSquares[6] === latestMove){ // Left column
        console.log('WINNER!');
    }else if(playedSquares[0] === latestMove && playedSquares[4] === latestMove && playedSquares[8] === latestMove){ // L-R diagonal
        console.log('WINNER!');
    }else if(playedSquares[1] === latestMove && playedSquares[4] === latestMove && playedSquares[7] === latestMove){ // Middle column
        console.log('WINNER!');
    }else if(playedSquares[2] === latestMove && playedSquares[4] === latestMove && playedSquares[6] === latestMove){ // R-L Diagonal
        console.log('WINNER!');
    }else if(playedSquares[2] === latestMove && playedSquares[5] === latestMove && playedSquares[8] === latestMove){ // Right column
        console.log('WINNER!');
    }else if(playedSquares[3] === latestMove && playedSquares[4] === latestMove && playedSquares[5] === latestMove){ // Middle column
        console.log('WINNER!');
    }else if(playedSquares[6] === latestMove && playedSquares[7] === latestMove && playedSquares[8] === latestMove){ // Bottom row
        console.log('WINNER!');
    }else{
        return false;
    }
}

function gameOver(){
    if(checkWinner(latestMove) === false){
        console.log("IT'S A DRAW!");
    }
}


cells.forEach(function(cell, index){
    cell.addEventListener('click', (e) => {
        if(cell.isPlayed){                                                  // Exits if square is already played
            gameInfo.innerHTML = `<p>That square has been played!</p>`;
            return;
        }
        isX = !isX;                                                         // Changes the turn 
        isX ? e.target.innerHTML = quinto : e.target.innerHTML = nimoy;     // Plays Quinto or Nimoy
        isX ? playedSquares[index] = "quinto" : playedSquares[index] = "nimoy"
        isX ? latestMove = "quinto" : latestMove = "nimoy";
        gameInfo.innerHTML = `<p>${isX}</p>`;
        cell.isPlayed = true;                                               // Marks square as played
        checkWinner(latestMove);
        turn++;
        if(turn === 9){
            gameOver();
        }
    });
});