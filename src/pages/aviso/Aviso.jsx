import React from 'react';
import './aviso.css';

//componentes
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import aviso from '../../assets/aviso.svg';
import aviso1 from '../../assets/aviso1.svg';
import aviso2 from '../../assets/aviso2.svg';
import aviso3 from '../../assets/aviso3.svg';
import aviso4 from '../../assets/aviso4.svg';
import aviso5 from '../../assets/aviso5.svg';
import aviso6 from '../../assets/aviso6.svg';

const AvisoPrivacidad = () => {
    return (
      <div>
        <Navbar/>
        <section className='section-aviso'>
            <h1>Aviso de Privacidad</h1>
            <p>En Psurveys, respetamos tu privacidad y nos comprometemos a proteger la información personal que compartes con nosotros.</p>
                <br />
            
            <img src={aviso} alt="Aviso de Privacidad" /> <br /> <br />
            
            <h2>Recopilación de información personal</h2>
            <p>Recopilamos datos personales proporcionados por ti, como nombre, dirección, correo electrónico, etc., solo con tu consentimiento. Esta información se utiliza para mejorar nuestros servicios y personalizar tu experiencia.</p>  
                <br />
            
            <img src={aviso1} alt="Aviso de Privacidad 1" /> <br /> <br />

            <h2>Uso de la información</h2>
            <p>Usamos la información recopilada para ofrecer nuestros servicios, comunicarnos contigo, personalizar la experiencia del usuario y mejorar nuestros productos y servicios.</p>
                <br />
                
            <img src={aviso2} alt="Aviso de Privacidad 2" /> <br /> <br />
            
            <h2>Seguridad de datos</h2>
            <p>Nos comprometemos a proteger tus datos personales y mantenemos medidas de seguridad para asegurar su confidencialidad.</p>
                <br />

            <img src={aviso3} alt="Aviso de Privacidad 3" /> <br /> <br />
            
            <h2>Divulgación a terceros</h2>
            <p>No compartiremos tu información personal con terceros a menos que contemos con tu consentimiento o estemos legalmente obligados a hacerlo. Nos reservamos el derecho de revelar tu información si creemos de buena fe que es necesario cumplir con una obligación legal, proteger nuestros derechos o para la seguridad de otros.</p>
                <br />
            
            <img src={aviso4} alt="Aviso de Privacidad 4" /> <br /> <br />
           
            <h2>Tus derechos</h2>
            <p>Tienes derecho a acceder, corregir o eliminar tu información personal. Si deseas ejercer este derecho, contáctanos a través de la información de contacto proporcionada al final de este aviso.</p>
                <br />
            
            <img src={aviso5} alt="Aviso de Privacidad 5" /> <br /> <br />

            <h2>Modificaciones en el Aviso de Privacidad</h2>
            <p>Podemos modificar esta Política de Privacidad de vez en cuando. Cualquier cambio será publicado en esta página.</p>
                <br />
            
            <img src={aviso6} alt="Aviso de Privacidad 6" /> <br /> <br />

            <h2>Contacto</h2>
            <p>Para preguntas o preocupaciones sobre nuestro Aviso de Privacidad, contáctanos en Psurveys@psurveys.com.</p>
                <br /> <br />
            <p><b>Fecha de última actualización:</b> 03 de Noviembre del 2023</p>
        </section>
        <Footer/>  
      </div>
    );
  }
  
  export default AvisoPrivacidad;