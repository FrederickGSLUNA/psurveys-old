import React from "react";
import './acerca.css'

//componentes
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import acerca1 from '../../assets/acerca1.svg'

const Acerca = () => {

  return (
    <div className="Acerca">
      <Navbar/>
      <section className="section-acerca">
        <h1>Acerca de nosotros</h1>
        <br />
        <h4>Bienvenidos a nuestra página de encuestas psicológicas <b>"Psurveys"</b> especializada en ayudar a las personas a descubrir su estilo de aprendizaje.</h4>
        <br />
        <p>En nuestro sistema, contamos con una amplia variedad de encuestas y pruebas psicológicas diseñadas para identificar la forma en que cada persona aprende mejor. Nuestro equipo de psicólogos expertos en educación ha trabajado arduamente para desarrollar cuestionarios precisos y confiables que pueden ayudar a las personas a comprender sus fortalezas y debilidades en términos de aprendizaje.</p>
        <br />
        
        <img src={acerca1}/>

        <br />
        <p>Nuestro objetivo es ayudar a estudiantes, docentes y cualquier persona interesada en conocer su estilo de aprendizaje a través de la realización de nuestras pruebas en línea. Creemos que al comprender su estilo de aprendizaje, las personas pueden adaptar sus métodos de estudio y aprendizaje para alcanzar un mayor éxito en su vida académica y profesional.</p>
        <br />
        <p>Además de nuestras encuestas, también proporcionamos información útil sobre los diferentes estilos de aprendizaje, así como consejos y estrategias para maximizar el aprendizaje de acuerdo a cada estilo. En resumen, nuestra página es una herramienta valiosa para cualquier persona que esté buscando entender mejor cómo aprende y mejorar su eficacia en el proceso de aprendizaje.</p>
        <br />
        <h4>¡Gracias por visitar nuestra página y esperamos poder ayudarlo en su camino hacia el éxito académico y profesional!</h4>
      </section>
      <Footer/>
    </div>
  )
}

export default Acerca;
