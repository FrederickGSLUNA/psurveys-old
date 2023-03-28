import React from "react";
import Encuesta from "../encuesta/Encuesta";
import { testAprendizajePNL } from "../../data/test/testAprendizajePNL";
import ObjectToArray from "../../utilities/ObjectToArray";
import './psurvey.css'

export default function PsurveyTestAprendizajePNL(){

  const testAprendizajePNLArray = ObjectToArray(testAprendizajePNL)

  return(
    <>
      <h1 className="title">Test Aprendizaje PNL</h1>
      <div className="instrucciones">
        <h3>INSTRUCCIONES:</h3>
        <p>Lee cuidadosamente cada pregunta del test y asegúrate de entenderla antes de responder.</p>
      </div>
      <Encuesta test={testAprendizajePNLArray}/>
    </>
  )
}
