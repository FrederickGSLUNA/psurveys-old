import React from "react";
import './card.css'
//svg card
import svgCard from '../../assets/svg-card.svg'
//icons
import { BiPencil } from "react-icons/bi";

const Card = (props) => {
  return(
    <div className="card">
      <img src={svgCard}/>
      <p>{props.title}</p>
      <br/>
      <button><BiPencil/>Responder</button>
    </div>
  )
}

export default Card
