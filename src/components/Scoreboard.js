// scoreboard.js
import React from 'react';

function Scoreboard(props) {
  const { score, highScore } = props;

  return (
    <div>
      <div>Current Score: {score}</div>
      <div>High Score: {highScore}</div>
    </div>
  );
};

export default Scoreboard;
