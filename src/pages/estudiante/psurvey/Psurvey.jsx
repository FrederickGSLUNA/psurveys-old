import React from "react";
import Encuesta from "../../../components/encuesta/Encuesta";
import { testHoneyAlonso } from "../../../data/test/testHoneyAlonso";
import ObjectToArray from "../../../utilities/ObjectToArray";
import './psurvey.css'

export default function Psurvey(){

  const testHoneyAlonsoArray = ObjectToArray(testHoneyAlonso)

  return(
    <>
      <h1 className="title">Cuestionario Honey – Alonso de Estilos de Aprendizaje</h1>
      <Encuesta test={testHoneyAlonsoArray}/>
    </>
  )
}
