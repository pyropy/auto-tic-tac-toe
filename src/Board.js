import React, { useState, useEffect } from "react";
import Cell from "./Cell";
import calculateWinningCells from "./helpers";
import GameContext from "../contexts/GameContext";
import { human, robot } from "../common";
import bestMove from "../robot";

const Board = () => {
  const [isPlayerTurn, setPlayerTurn] = useState(true);
  const [winningCells, setWinningCells] = useState(Array(3).fill(null));
  const [gameEnded, setGameEnded] = useState(false);
  const [cells, setCells] = useState(Array(9).fill(null));
  const [gameStart, setGameStart] = useState(Date.now());

  const resetGame = _ => {
    setCells([...Array(9).fill(null)]);
    setGameEnded(false);
    setPlayerTurn(true);
    setWinningCells([...Array(3).fill(null)]);
    setGameStart(Date.now());
  };

  const onMove = cellIndex => {
    if (cells[cellIndex] || gameEnded) return;

    cells[cellIndex] = isPlayerTurn ? human : robot;
    setCells([...cells]);

    const winningCells = calculateWinningCells(cells);
    if (winningCells) {
      handleWin(winningCells);
    } else if (!cells.includes(null)) {
      // if all cells are taken but no-one won
      // end the game (draw)
      setGameEnded(true);
    }
    setPlayerTurn(!isPlayerTurn);
  };

  const handleWin = cells => {
    setWinningCells(cells);
    setGameEnded(true);
  };

  const handleRobotMove = () => {
    const _ = setTimeout(() => {
      const move = bestMove(cells);
      onMove(move)
    }, 750);
  };

  useEffect(() => {
    if (!isPlayerTurn) {
      handleRobotMove()
    }
  }, []);

  return (
    <GameContext.Provider
      value={{
        gameEnded: gameEnded,
        gameStart: gameStart,
        resetGame: resetGame
      }}
    >
      <div className="board-container">
        <div className="board">
          {cells.map((val, idx) => (
            <Cell
              key={idx}
              index={idx}
              value={val}
              winningCell={winningCells.includes(idx)}
              onClickHook={onMove}
            />
          ))}
        </div>
      </div>
    </GameContext.Provider>
  );
};

export default Board;
