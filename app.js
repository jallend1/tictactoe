const cells = document.querySelectorAll('.cell');
const gameInfo = document.querySelector('#gameinfo');
let isX = false;

cells.forEach(cell => cell.addEventListener('click', (e) => {
    isX = !isX;
    isX ? e.target.innerText = "x" : e.target.innerText = 'o';
    gameInfo.innerHTML = `<p>${isX}</p>`;
}));
