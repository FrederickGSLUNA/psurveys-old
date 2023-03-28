import React from "react";
import Encuesta from "../encuesta/Encuesta";
import { testAprendizajePreferencia } from "../../data/test/testAprendizajePreferencia";
import ObjectToArray from "../../utilities/ObjectToArray";
import './psurvey.css'

export default function PsurveyTestAprendizajePNL(){

  const testAprendizajePreferenciaArray = ObjectToArray(testAprendizajePreferencia)

  return(
    <>
      <h1 className="title">Test Aprendizaje Preferencia</h1>
      <div className="instrucciones">
        <h3>INSTRUCCIONES:</h3>
        <p>Lee cuidadosamente cada pregunta del test y asegúrate de entenderla antes de responder.</p>
        <p>Para cada pregunta, selecciona la opción que mejor refleje tu preferencia o estilo de aprendizaje. No hay respuestas correctas o incorrectas, así que responde con honestidad.</p>
        <p>No pases demasiado tiempo pensando en cada pregunta. Responde instintivamente, basándote en tus primeras impresiones.</p>
      </div>
      <Encuesta test={testAprendizajePreferenciaArray}/>
    </>
  )
}
