const cells_div = document.querySelectorAll('.cell');
const infoText_p = document.getElementById('info-text');
const restart_btn = document.getElementById('restart');

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3 ,6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4 ,6]
];

let options = ['','','','','','','','',''];
let currentPlayer = 'X';
let isRunning = false;

initializeGame();

function initializeGame(){
  cells_div.forEach(function(cell) {
    cell.addEventListener('click',cellClicked);
  });

  restart_btn.addEventListener('click', restartGame);
  infoText_p.textContent = `${currentPlayer}'s turn`;
  isRunning = true;
}

function cellClicked(){
  const cellIndex = this.getAttribute('cellIndex');

  if (options[cellIndex] != '' || !isRunning) {
    return;
  };

  updateCell(this, cellIndex);
  checkWinner();
}

function updateCell(cell, index){
  options[index] = currentPlayer;
  cell.textContent = currentPlayer;

  if (currentPlayer == 'X') {
    cell.style.color = 'blue';
  } else {
    cell.style.color = 'red';
  };
}

function changePlayer(){
  currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
  infoText_p.textContent = `${currentPlayer}'s turn`;
}

function checkWinner(){
  let roundWon = false;

  for(let i = 0; i < winConditions.length -1; i++){
    const condition = winConditions[i];
    const cellA = options[condition[0]];
    const cellB = options[condition[1]];
    const cellC = options[condition[2]];

    if (cellA == '' || cellB == '' || cellC == ''){
      continue;
    };

    if (cellA == cellB && cellB == cellC) {
      roundWon = true;
      break;
    };
  };

  if (roundWon) {
    infoText_p.textContent = `${currentPlayer} win!`;
    isRunning = false;

  } else if (!options.includes('')){
    infoText_p.textContent = `Draw!`;

  } else {
    changePlayer();
  };
}

function restartGame(){
  currentPlayer = 'X';
  options = ['','','','','','','','',''];
  infoText_p.textContent = `${currentPlayer}'s turn`;

  cells_div.forEach(function(cell){
    cell.textContent = '';
    cell.style.color = 'black';
  });

  isRunning = true;
}