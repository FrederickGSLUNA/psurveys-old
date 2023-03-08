import React from "react";
//img de bienvenida
import BienvenidaTwoImg from "../../../assets/bienvenida-two.svg"
//css
import './bienvenida-two.css'

const BienvenidaTwo = () => {
  return(
    <section className="bienvenida-two">
      <figure className="bienvenida-img-two">
        <img src={BienvenidaTwoImg} alt="Imagen de Bienvenida"/>
      </figure>
      <div className="bienvenida-text-two">
        <h1 className="bienvenida-titulo-two">Test con respaldo profesional</h1>
        <p className="bienvenida-subtitulo-two">Todos los test de esta plataforma son agregados solo por profesionales en el área de psicología</p>
      </div>
    </section>
  );
}

export default BienvenidaTwo;
