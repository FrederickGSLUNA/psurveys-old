import React from 'react';
import './servicios.css';

//componentes
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Servicios = () => {
  return (
    <div>
        <Navbar/>
        <section className='section-servicios'>
            <h2>Nuestros Servicios</h2> <br />
        <ul>
            <li><p><b>Contratos con la UTCGG:</b> Establecemos acuerdos con la UTCGG para implementar nuestro sistema como parte integral de sus programas académicos.</p></li> <br />
            <li><p><b>Tarifas por Servicios Personalizados:</b> Cobramos tarifas a la UTCGG basadas en el número de estudiantes que utilizan nuestro sistema.</p></li> <br />
            <li><p><b>Formación Continua:</b> Ofrecemos servicios de capacitación docente con tarifas adicionales.</p></li>
        </ul>
        </section>
      <Footer/>
    </div>
  );
};

export default Servicios;
