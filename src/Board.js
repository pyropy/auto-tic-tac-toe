import React from "react"
import { useState } from "react"
import Cell from './Cell'

const Board = () => {
  const [isPlayerTurn, setPlayerTurn] = useState(true)
  const [winningCells, setWinningCells] = useState(Array(3).fill(null))
  const [gameEnded, setGameEnded] = useState(false)
  const [cells, setCells] = useState(Array(9).fill(null))


  const calculateWinningCells = (cells) => {
    const winningRows = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < winningRows.length; i++) {
        const [a, b, c] = winningRows[i]

        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            return winningRows[i]
        }
    }

    return null
   }


  const onCellClick = (index) => {
    if (cells[index]) return;

    cells[index] = isPlayerTurn ? 'X' : '0'
    setCells([...cells])

    const calcCells = calculateWinningCells(cells)
    if (calcCells) {
        console.log(calcCells)
        setWinningCells(calcCells)
        setGameEnded(true);
    }
    setPlayerTurn(!isPlayerTurn)
  }

  return (
    <div className="board-container">
      <div className="board">
        {cells.map((val, idx) => (
          <Cell key={idx} 
                index={idx} 
                value={val}
                winningCell={winningCells.includes(idx)}
                onClickHook={onCellClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
