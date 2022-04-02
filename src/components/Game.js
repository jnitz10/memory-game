import React, { useState } from 'react';
import CardContainer from './CardContainer.js'
import Scoreboard from './Scoreboard.js'

function Game() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);


  const incrementScore = () => {
    setScore(score + 1);
  };

  const handleCard = (card) => {
    setClickedCards((prevCards) => [...prevCards, card]);
  };

  function handleClick(card) {
    if (!clickedCards.includes(card)){
      handleCard(card);
      incrementScore();
      console.log(clickedCards);
    } else {
      if (score > highScore) {
	setHighScore(score);
      }
      setScore(0);
      setClickedCards([]);
    }
    
  }

  

  return (
    <div>
      <Scoreboard score={score} highScore={highScore} />
      <CardContainer score={score} highScore={highScore} handleClick={handleClick} />
    </div>
  )
}

export default Game;
