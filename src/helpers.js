const calculateWinningCells = cells => {
  const winningRows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningRows.length; i++) {
    const [a, b, c] = winningRows[i];

    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return winningRows[i];
    }
  }

  return null;
};

export default calculateWinningCells;