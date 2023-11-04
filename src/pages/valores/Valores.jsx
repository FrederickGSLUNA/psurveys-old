import React from 'react';
import './valores.css';

//componentes
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Valores = () => {
    return (
      <div>
        <Navbar/>
        <section className='section-valores'>
            <h2>Valores</h2> <br />
            <ul>
                <li><p><b>Ética:</b> Actuamos con integridad en todo momento.</p></li> <br />
                <li><p><b>Calidad:</b> Nos esforzamos por ofrecer productos/servicios de alta calidad.</p></li> <br />
                <li><p><b>Colaboración:</b> Trabajamos en equipo y promovemos un ambiente colaborativo.</p></li> <br />
                <li><p><b>Innovación:</b> Fomentamos la creatividad y la innovación en todo lo que hacemos.</p></li> <br />
                <li><p><b>Responsabilidad:</b> Nos comprometemos con la responsabilidad social y ambiental.</p></li>
            </ul>
        </section>
        <Footer/>
      </div>
    );
  };
  
  export default Valores;