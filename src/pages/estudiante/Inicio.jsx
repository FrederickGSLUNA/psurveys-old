import React from "react";
//estilos
import './estudiante.css'
//svg
import svgStudent from '../../assets/svg-student.svg'

const InicioEstudiante = () => {
  return(
    <div className="section-estudiante">
      <picture className="imagen-inicio">
        <img src={svgStudent}/>
      </picture>
      <h1>Tablero de Estudiante</h1>
    </div>
  )
}

export default InicioEstudiante
