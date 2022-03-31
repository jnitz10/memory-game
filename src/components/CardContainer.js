// CardContainer.js

import React from 'react';
import './CardContainer.css'
import fool from '../images/00-TheFool.jpg';
import magician from '../images/01-TheMagician.jpg'
import priestess from '../images/02-TheHighPriestess.jpg'
import empress from '../images/03-TheEmpress.jpg'
import emperor from '../images/04-TheEmperor.jpg'
import hierophant from '../images/05-TheHierophant.jpg'
import lovers from '../images/06-TheLovers.jpg'
import chariot from '../images/07-TheChariot.jpg'
import strength from '../images/08-Strength.jpg'
import hermit from '../images/09-TheHermit.jpg'
import wheel from '../images/10-WheelOfFortune.jpg'
import justice from '../images/11-Justice.jpg'
import hangedMan from '../images/12-TheHangedMan.jpg'
import death from '../images/13-Death.jpg'
import temperance from '../images/14-Temperance.jpg'
import devil from '../images/15-TheDevil.jpg'
import tower from '../images/16-TheTower.jpg'
import star from '../images/17-TheStar.jpg'
import moon from '../images/18-TheMoon.jpg'
import sun from '../images/19-TheSun.jpg'
import judgement from '../images/20-Judgement.jpg'
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

 
