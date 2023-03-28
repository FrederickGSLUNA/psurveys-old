import React from "react";
import Encuesta from "../encuesta/Encuesta";
import { testHoneyAlonso } from "../../data/test/testHoneyAlonso";
import ObjectToArray from "../../utilities/ObjectToArray";
import './psurvey.css'

export default function PsurveyHoneyAlonso(){

  const testHoneyAlonsoArray = ObjectToArray(testHoneyAlonso)

  return(
    <>
      <h1 className="title">Cuestionario Honey – Alonso de Estilos de Aprendizaje</h1>
      <div className='instrucciones'>
          <h3>INSTRUCCIONES:</h3>
          <p>No hay respuestas correctas o erróneas. Será útil en la medida que seas sincero/a en tus respuestas.</p>
          <p>Si estás más de acuerdo que en desacuerdo con la sentencia pon un signo más (+),</p>
          <p>Si, por el contrario, estás más en desacuerdo que de acuerdo, pon un signo menos (-).</p>
        </div>
      <Encuesta test={testHoneyAlonsoArray}/>
    </>
  )
}
