import React from 'react';
import './vision.css';

//componentes
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Vision = () => {
    return (
      <div>
        <Navbar/>
        <section className='section-vision'>
            <h2>Nuestra Visión</h2>
            <ul>
              <li><p>Nos proyectamos como el principal respaldo y proveedor de soluciones innovadoras para la comunidad de la Universidad Tecnológica de la Costa Grande de Guerrero.</p> <br /></li>
              <li><p>Nos proyectamos como el principal respaldo y proveedor de soluciones innovadoras para la comunidad de la Universidad Tecnológica de la Costa Grande de Guerrero.</p> <br /></li>
              <li><p>Buscamos ser el punto de referencia en la entrega de herramientas educativas y psicológicas avanzadas, diseñadas específicamente para mejorar la experiencia de aprendizaje.</p> <br /></li>
              <li><p>Nos comprometemos a proporcionar a los jefes de área, psicólogos y alumnos las herramientas necesarias para potenciar la comprensión del estilo de aprendizaje individual.</p> <br /></li>
              <li><p>Nuestro objetivo es ofrecer una guía eficaz y personalizada que mejore el rendimiento académico y promueva un desarrollo integral.</p></li>
            </ul>
        </section>
        <Footer/>
      </div>
    );
  }
  
  export default Vision;
  