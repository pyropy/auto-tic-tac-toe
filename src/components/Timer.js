import React, { useState } from "react";
import GameContext from "../contexts/GameContext";

const Timer = () => {
  const [timerTime, setTimerTime] = useState(0);
  const {gameEnded, gameStart} = React.useContext(GameContext);


  setTimeout(() => {
    if (!gameEnded) {setTimerTime(Date.now() - gameStart)}
  }, 1000);

  let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
  let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
  let hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);

  return (
      <div className="timer">
        {hours}:{minutes}:{seconds}
      </div>
  );
};

export default Timer;
