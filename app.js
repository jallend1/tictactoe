const cells = document.querySelectorAll('.cell');
const gameInfo = document.querySelector('#gameinfo');
let quinto = '<img src="quinto.png">';
let nimoy = '<img src="nimoy.png">';
let isX = false;

cells.forEach(cell => cell.addEventListener('click', (e) => {
    isX = !isX;
    isX ? e.target.innerHTML = quinto : e.target.innerHTML = nimoy;
    gameInfo.innerHTML = `<p>${isX}</p>`;
}));
