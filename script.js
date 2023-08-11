const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

function handleCellClick(event) {
    const cell = event.target;
    
    if (!cell.textContent) {
        cell.textContent = currentPlayer;
        cell.classList.add(currentPlayer);
        
        if (checkWinner(currentPlayer)) {
            alert(`${currentPlayer} Gano!`);
            resetBoard();
            return;
        }
        
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner(player) {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]           // Diagonals
    ];
    
    return winningCombinations.some(combination => {
        return combination.every(index => cells[index].classList.contains(player));
    });
}

function resetBoard() {
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('X', 'O');
    });
    currentPlayer = 'X';
}
