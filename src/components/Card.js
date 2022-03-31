// Card.js

import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div>
      <img className="card" alt={props.title} src={props.src}/>
    </div>
  )
}

export default Card;
