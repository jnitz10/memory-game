// Card.js

import React from 'react';
import './Card.css';


function Card(props) {
  const {
    card: {src, title}, handleClick
  } = props;
  return (
    <div>
      <button onClick={handleClick.bind(this, title)}>
      <img className="card" 
	   alt={title} src={src} title={title} />
      </button>
    </div>
  )
}

export default Card;
