import React, {useState} from "react";
import Timer from "./Timer";

const Cell = ({ index, onClickHook, value, winningCell, resetGameHook }) => {

  const [resetedTimer, setResetedTimer] = useState(false);

  const resetButton = (index === 4) ? <button className="reset-button" onClick={resetGameHook}>Reset Game</button> : <span></span>
  const timer = (index === 4) ? <Timer reseted={resetedTimer} setReseted={setResetedTimer}/> : <span></span>

  return (
    <div className={`cell ${value ? "taken" : ""} ${winningCell ? "won" : ""}`}>
      {resetButton}
      <div className="inner-cell" onClick={_ => onClickHook(index)}>
        {timer}
        <p>{value}</p>
      </div>
    </div>

  );
};

export default Cell;
