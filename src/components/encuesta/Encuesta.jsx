import React, { useState } from 'react';

export default function Encuesta( props ) {
  const [encuesta, setEncuesta] = useState(props.test); // Encuesta en formato array de objetos
  const [paginaActual, setPaginaActual] = useState(1); // Página actual de la encuesta

  function obtenerPreguntasDePaginaActual() {
    return encuesta.slice(5 * (paginaActual - 1), 5 * paginaActual);
  }

  function PreguntasDePaginaActual() {
    const preguntas = obtenerPreguntasDePaginaActual();

    return (
      <div className='container-quetions'>
        <div className='instrucciones'>
          <h3>INSTRUCCIONES:</h3>
          <p>No hay respuestas correctas o erróneas. Será útil en la medida que seas sincero/a en tus respuestas.</p>
          <p>Si estás más de acuerdo que en desacuerdo con la sentencia pon un signo más (+),</p>
          <p>Si, por el contrario, estás más en desacuerdo que de acuerdo, pon un signo menos (-).</p>
        </div>
        {preguntas.map((pregunta, index) => (
          <div className='pregunta' key={pregunta.number}>
            <h2>{pregunta.number + '.- ' + pregunta.pregunta}</h2>
            <input className='check option-input radio' type="radio" name={index}/>
            <label htmlFor={index}>{pregunta.respuestas.r1}</label>
            <input className='option-input radio' type="radio" name={index}/>
            <label htmlFor={index}>{pregunta.respuestas.r2}</label>
          </div>
        ))}
      </div>
    );
  }

  function Paginacion() {
    return (
      <div className='botones-paginacion'>
        <button
          onClick={() => setPaginaActual(paginaActual - 1)}
          disabled={paginaActual === 1}
        >
          Anterior
        </button>
        <button
          onClick={() => setPaginaActual(paginaActual + 1)}
          disabled={paginaActual === Math.ceil(encuesta.length / 5)}
        >
          Siguiente
        </button>
      </div>
    );
  }

  return (
    <div>
      <PreguntasDePaginaActual />
      <Paginacion />
    </div>
  );
}
