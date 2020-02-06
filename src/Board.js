import React from "react"
import { useState } from "react"
import Cell from './Cell'

const Board = () => {
  const [isPlayerTurn, setPlayerTurn] = useState(true)
  const [gameEnded, setGameEnded] = useState(false)
  const [cells, setCells] = useState(Array(9).fill(null))


  const calculateWinner = (cells) => {
    console.log(cells)
  }


  const onCellClick = (index) => {
    if (cells[index]) return;

    cells[index] = isPlayerTurn ? 'X' : '0'
    setCells([...cells])
    calculateWinner(cells)
    setPlayerTurn(!isPlayerTurn)
  }

  return (
    <div className="board-container">
      <div className="board">
        {cells.map((val, idx) => (
          <Cell key={idx} index={idx} value={val} onClickHook={onCellClick}/>
        ))}
      </div>
    </div>
  );
};

export default Board;
