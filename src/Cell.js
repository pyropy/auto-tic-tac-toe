import React from "react";

const Cell = ({ index, onClickHook, value }) => {
  return (
    <div className={`cell ${value ? "taken " : null}`} onClick={_ => onClickHook(index)}>
      <span>{value}</span>
    </div>
  );
};

export default Cell;
