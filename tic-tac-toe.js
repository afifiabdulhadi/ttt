document.addEventListener("DOMContentLoaded", () => {
    const tictactoe = document.getElementById("tictactoe");
    const currentPlayerSpan = document.getElementById("currentPlayer");
    let currentPlayer = "X";
    const cells = [];
  
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.addEventListener("click", () => makeMove(cell, i));
      tictactoe.appendChild(cell);
      cells.push(cell);
    }
  
    function makeMove(cell, index) {
      if (cell.textContent === "") {
        cell.textContent = currentPlayer;
        if (checkWin(currentPlayer)) {
          setTimeout(() => alert(`Player ${currentPlayer} wins!`), 10);
          resetBoard();
        } else if (cells.every(cell => cell.textContent !== "")) {
          setTimeout(() => alert("It's a draw!"), 10);
          resetBoard();
        } else {
          currentPlayer = currentPlayer === "X" ? "O" : "X";
          currentPlayerSpan.textContent = `Player ${currentPlayer}`;
        }
      }
    }
  
    function checkWin(player) {
      const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
  
      return winningCombinations.some(combination =>
        combination.every(index => cells[index].textContent === player)
      );
    }
  
    function resetBoard() {
      cells.forEach(cell => (cell.textContent = ""));
      currentPlayer = "X";
      currentPlayerSpan.textContent = `Player ${currentPlayer}`;
    }
  });
  