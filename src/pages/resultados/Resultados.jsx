import React from "react"
import './style.css'

export default function Resultados(){
  return(
    <>
    <h1 className="titulo-resultados">Resultados</h1>
          <table border="1" className="tabla-resultados">
        <tr>
          <th>Matrícula</th>
          <th>Nombre estudiante</th>
          <th>Carrera</th>
          <th>Género</th>
        <th>P. Visual</th>
        <th>P. Cinestesico</th>
        <th>P. Auditivo</th> 
        </tr>
      
        <tr>
          <td>123456</td>
          <td>María García</td>
          <td>Administración de Empresas</td>
          <td>Femenino</td>
          <td>7</td>
          <td>5</td>
          <td>8</td>
        </tr>
        
        <tr>
          <td>789012</td>
          <td>Carlos Sánchez</td>
          <td>Ingeniería Civil</td>
          <td>Masculino</td>
          <td>9</td>
          <td>4</td>
          <td>3</td>
        </tr>
        
        <tr>
          <td>345678</td>
          <td>Sofía López</td>
          <td>Psicología</td>
          <td>Femenino</td>
          <td>6</td>
          <td>8</td>
          <td>2</td>
        </tr>
        
        <tr>
          <td>901234</td>
          <td>José Ramírez</td>
          <td>Arquitectura</td>
          <td>Masculino</td>
          <td>4</td>
          <td>9</td>
          <td>2</td>
        </tr>
        
        <tr>
          <td>567890</td>
          <td>Ana Torres</td>
          <td>Contaduría Pública</td>
          <td>Femenino</td>
          <td>9</td>
          <td>3</td>
          <td>6</td>
        </tr>
      </table>

  </>
  )
}