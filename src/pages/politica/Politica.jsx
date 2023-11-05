import React from 'react';
import './politica.css';

//componentes
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import politica from '../../assets/politica.svg';
import politica1 from '../../assets/politica1.svg';
import politica2 from '../../assets/politica2.svg';
import politica3 from '../../assets/politica3.svg';
import politica4 from '../../assets/politica4.svg';
import politica5 from '../../assets/politica5.svg';
import politica6 from '../../assets/politica6.svg';

const PoliticaPrivacidad = () => {
  return (
    <div>
      <Navbar/>
      <section className='section-politica'>
        <h1>Política de Privacidad</h1> <br />
        
        <img src={politica} alt="Politica de Privacidad" /> <br />

        <h2>Recopilación de Información</h2>
        <p>
        Recopilamos información personal y no personal sobre ti en diversas situaciones, como cuando visitas nuestro sitio web, utilizas nuestros servicios o interactúas con nosotros. Esta información puede incluir tu nombre, dirección, dirección de correo electrónico, información de contacto y detalles de interacción.
        </p>
            <br />
        <img src={politica1} alt="Politica de Privacidad 1" /> <br />

        <h2>Uso de la Información</h2>
        <p>
        Utilizamos la información recopilada para proporcionar y mejorar nuestros servicios, personalizar tu experiencia, comunicarnos contigo, realizar análisis y promoción de nuestros servicios, y mantener la seguridad y protección de nuestra empresa y usuarios.
        </p>
            <br />
        <img src={politica2} alt="Politica de Privacidad 2" /> <br />

        <h2>Divulgación de Información</h2>
        <p>
        No vendemos, alquilamos ni compartimos tu información personal con terceros, a menos que tengamos tu permiso o la ley así lo requiera. Podemos compartir tu información con proveedores de servicios externos que nos asisten en la operación de nuestro negocio.
        </p>
            <br />
        <img src={politica3} alt="Politica de Privacidad 3" /> <br />

        <h2>Seguridad y Retención de Datos</h2>
        <p>
        Implementamos medidas de seguridad para proteger tu información personal y mantenemos dicha información solo durante el tiempo necesario para los fines para los cuales se recopiló, o según lo exija la ley.
        </p>
            <br />
        <img src={politica4} alt="Politica de Privacidad 4" /> <br />

        <h2>Privacidad de los Menores</h2>
        <p>
        Nuestros servicios no están dirigidos a personas menores de 13 años. No recopilamos intencionalmente información de menores de 13 años. Si eres padre/madre y descubres que tu hijo nos ha proporcionado información, contáctanos y tomaremos medidas para eliminar dicha información.
        </p>
            <br />
        <img src={politica5} alt="Politica de Privacidad 5" /> <br />

        <h2>Modificaciones en la Política de Privacidad</h2>
        <p>
        Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Cualquier cambio será publicado en nuestro sitio web.
        </p>
            <br />
        <img src={politica6} alt="Politica de Privacidad 6" /> <br />

        <h2>Contacto</h2>
        <p>
        Si tienes preguntas o inquietudes sobre nuestra Política de Privacidad, contáctanos a través de la información proporcionada en nuestro sitio web.
        </p>
            <br /> 
        <p><b>Fecha de última actualización:</b> 03 de Noviembre del 2023</p>
      </section>  
      <Footer/>
    </div>
  );
};

export default PoliticaPrivacidad;
