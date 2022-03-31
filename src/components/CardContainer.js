// CardContainer.js

import React from 'react';
import './CardContainer.css'
import fool from '../images/fool.jpg';
import magician from '../images/magician.jpg'
import priestess from '../images/priestess.jpg'
import empress from '../images/empress.jpg'
import emperor from '../images/emperor.jpg'
import hierophant from '../images/hierophant.jpg'
import lovers from '../images/lovers.jpg'
import chariot from '../images/chariot.jpg'
import strength from '../images/strength.jpg'
import hermit from '../images/hermit.jpg'
import wheel from '../images/wheel.jpg'
import justice from '../images/justice.jpg'
import hangedMan from '../images/hangedMan.jpg'
import death from '../images/death.jpg'
import temperance from '../images/temperance.jpg'
import devil from '../images/devil.jpg'
import tower from '../images/tower.jpg'
import star from '../images/star.jpg'
import moon from '../images/moon.jpg'
import sun from '../images/sun.jpg'
import judgement from '../images/judgement.jpg'
import Card from './Card'

function CardContainer() {

  let images = [
    {
      src: fool,
      title: "The Fool",
    },
    {
      src: magician,
      title: "The Magician",
    },
    {
      src: priestess,
      title: "The Priestess",
    },
    {
      src: empress,
      title: "The Empress",
    },
    {
      src: emperor,
      title: "The Emperor",
    },
    {
      src: hierophant,
      title: "The Hierophant",
    },
    {
      src: lovers,
      title: "The Lovers",
    },
    {
      src: chariot,
      title: "The Chariot",
    },
    {
      src: strength,
      title: "Strength",
    },
    {
      src: hermit, 
      title: "The Hermit",
    },
    {
      src: wheel,
      title: "Wheel of Fortune",
    },
    {
      src: justice,
      title: "Justice",
    },
    {
      src: hangedMan,
      title: "The Hanged Man",
    },
    {
      src: death,
      title: "Death",
    },
    {
      src: temperance,
      title: "Temperance",
    },
    {
      src: devil,
      title: "The Devil",
    },
    {
      src: tower,
      title: "The Tower",
    },
    {
      src: star,
      title: "The Star",
    },
    {
      src: moon,
      title: "The Moon",
    },
    {
      src: sun,
      title: "The Sun",
    },
    {
      src: judgement,
      title: "Judgement",
    }
  ]

  return (
    <div className="cardContainer">
      {images.map(function(item) {
	return (
	  <Card src={item.src} alt={item.title} key={item.title} />
	)
      })}
    </div>
  )

  
}

export default CardContainer;

 
