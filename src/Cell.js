import React, {useState} from "react";
import Timer from "./Timer";
import GameContext from './contexts/GameContext';

const Cell = ({ index, onClickHook, value, winningCell }) => {

  const {resetGame} = React.useContext(GameContext)
  const [resetedTimer, setResetedTimer] = useState(false)

  const resetButton = (index === 4) ? <button className="reset-button" onClick={event => {event.stopPropagation(); resetGame()}}>Reset Game</button> :  null
  const timer = (index === 4) ? <Timer reseted={resetedTimer} setReseted={setResetedTimer}/> : null

  return (
    <div className={`cell${value ? " taken" : ""}${winningCell ? " won" : ""}`}>
      <div className="inner-cell" onClick={_ => {onClickHook(index)}}>
      {resetButton}
        <p>{value}</p>
      {timer}
      </div>
    </div>

  );
};

export default Cell;
