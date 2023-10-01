import React from "react";
//img de bienvenida
import BienvenidaImg from "../../../assets/bienvenida.svg"
//css
import './bienvenida.css'

const Bienvenida = () => {
  return(
    <section className="bienvenida">
      <div className="bienvenida-text">
        <h1 className="bienvenida-titulo">Encuestas Psicológicas</h1>
        <p className="bienvenida-subtitulo">Descubre y prueba estos nuevos test para medir tus habilidades cognitivas</p>
        <a href="https://practicasuting.alwaysdata.net/" className="bienvenida-btn-1"><button>Empezar</button></a>
        <a href="https://practicasuting.alwaysdata.net/" className="bienvenida-btn-2">Ver Encuestas</a>
      </div>
      <figure className="bienvenida-img">
        <img src={BienvenidaImg} alt="Imagen de Bienvenida"/>
      </figure>
    </section>
  );
}


export default Bienvenida;
