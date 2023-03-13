// Define game variables
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
const playerDisplay = document.querySelector('#player-name');
const messageDisplay = document.querySelector('#message');

// Function to start the game
function startGame() {
  // Get the player's name and update the display

  const playerName = playerDisplay.value;
  playerDisplay.disabled = true;
  playerDisplay.style.backgroundColor = '#eee';
  
  messageDisplay.innerText = `Let's play, ${playerName}! ${currentPlayer}'s turn.`;
  // Add click event listeners to the game board cells
  gameBoard[0] = playerName;
  document.getElementById('cell-0').innerText = playerName;
  const cells = document.querySelectorAll('td');
  cells.forEach(cell => cell.addEventListener('click', handleCellClick));
}

// Function to handle a cell click event
function handleCellClick(event) {
  const cell = event.target;
  const index = cell.id.split('-')[1];
  // Check if the cell is already occupied
  if (gameBoard[index] !== '') {
    messageDisplay.innerText = 'This cell is already occupied. Choose another cell.';
    return;
  }
  // Update the game board and cell display
  gameBoard[index] = currentPlayer;
  cell.innerText = currentPlayer;
  // Check if the game is over
  if (checkWin() || checkDraw()) {
    const playerName = playerDisplay.value;
    messageDisplay.innerText = `Game over! ${currentPlayer} wins!`;
    cells.forEach(cell => cell.removeEventListener('click', handleCellClick));
    return;
  }
  // Switch to the next player
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  messageDisplay.innerText = `${currentPlayer}'s turn.`;
}

// Function to check if a player has won
// Function to check if a player has won
function checkWin() {
  const winCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],  // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  // columns
    [0, 4, 8], [2, 4, 6]              // diagonals
  ];
  return winCombinations.some(combination => {
    return combination.every(index => gameBoard[index] === currentPlayer);
  });
}
