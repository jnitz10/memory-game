// scoreboard.js
import React, { useState } from 'react';

const Scoreboard = () => {
  const [score, setScore] = useState(0);

  const [highScore, setHighScore] = useState(0);

  const incrementScore = () => {
    setScore(score + 1);
  };

  const resetScore = () => {
    if (score > highScore) {
      setHighScore(score);
    }
    setScore(0);
  }

  return (
    <div>
      <div>{score}</div>
      <div>{highScore}</div>
      <button onClick={incrementScore}>Increment</button>
      <button onClick={resetScore}>wrong click</button>
    </div>
  );
};

export default Scoreboard;
