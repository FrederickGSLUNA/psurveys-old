import React from "react";
import './card.css'
//svg card
import svgCard from '../../assets/svg-card.svg'
//icons
import { BiPencil } from "react-icons/bi";
import { Link } from "react-router-dom";

const Card = (props) => {
  return(
    <div className="card">
      <img src={svgCard}/>
      <p>{props.title}</p>
      <br/>
      <button className="boton-card"><Link to={props.ruta}><BiPencil/>Responder</Link></button>
    </div>
  )
}

export default Card
