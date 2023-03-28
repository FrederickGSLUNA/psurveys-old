import React from "react";
//components
import Card from "../../components/card/Card";
import { dataTest } from "../../data/test/dataTest";
import ObjectToArray from "../../utilities/ObjectToArray";

const EncuestasEstudiante = () => {

  const dataTestArray = ObjectToArray(dataTest) 

  return(
    <div className="section-estudiante-encuestas">
      <h1>Encuestas Estudiante</h1>
      <div className="container-cards">
        {
          dataTestArray.map((test, index) => (
            <Card key={index} title={test.name}/>
          ))
        }
      </div>
    </div>
  )
}

export default EncuestasEstudiante
