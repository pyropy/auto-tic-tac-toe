import React from "react";

const Cell = ({ index, onClickHook, value, winningCell }) => {
  return (
    <div className={`cell ${value ? "taken " : null} ${winningCell ? "won" : null}`} onClick={_ => onClickHook(index)}>
      <p>{value}</p>
    </div>
  );
};

export default Cell;
