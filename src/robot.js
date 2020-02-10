import calculateWinningCells, { findEmtpyCells } from "./helpers";
import { human, robot } from "./common";

function bestMove(board) {
  // AI to make its turn
  let bestScore = -Infinity;
  let move;
  for (let i = 0; i < 9; i++) {
    // Is the spot available?
    if (board[i] === null) {
      board[i] = robot;
      let score = minimax(board, 0, false);
      board[i] = null;
      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }
  return move
}

function minimax(board, depth, isMaximizing) {
  const winningCells = calculateWinningCells(board);

  if (winningCells !== null) {
    let winningPlayer = board[winningCells[0]]; // take first winning cell and find out player
    return winningPlayer == robot ? 10 : -10;
  } else if (!board.includes(null)) {
    return 0;
  }

  if (isMaximizing) {
    let bestScore = -10000;
    for (let i = 0; i < board.length; i++) {
      // Is the spot available?
      if (board[i] === null) {
        board[i] = robot;
        let score = minimax(board, depth + 1, false);
        board[i] = null;
        bestScore = Math.max(score, bestScore);
      }
    }

    return bestScore;
  } else {
    let bestScore = 10000;
    for (let i = 0; i < board.length; i++) {
      // Is the spot available?
      if (board[i] === null) {
        board[i] = human;
        let score = minimax(board, depth + 1, true);
        board[i] = null;
        bestScore = Math.min(score, bestScore);
      }
    }
    return bestScore;
  }
}


export default bestMove