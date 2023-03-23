import React from "react";
import './acerca.css'
//imagenes
import img1 from '../../assets/acerca.svg'
import img2 from '../../assets/mision.svg'
import img3 from '../../assets/vision.svg'
//componentes
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
//import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";

const Acerca = () => {
  return (
    <div className="Acerca">
      <Navbar/>
      <section className="section-acerca">
        <div className="principal">
          <h1 className="titulo-principal">Acerca de nosotros</h1>
          <img className="img1" src={img1} alt="Imágen de acerca" />
            <br />
          <div className="secundario">
            <h2>Misión</h2>
            <p className="texto-secundario">
               Somos una organización innovadora, comprometida con el cambio socioeducativo,
               que brinda apoyo psicopedagógico a estudiantes con dificultades del aprendizaje
               generando espacio a la solidaridad, respeto a la diversidad y equidad; 
               proponiendo ambientes de educación alternativos con terapias profesionales
               para el bienestar humano, familiar y comunitario, esto a través de encuestas
               psicológicas.
            </p>
            <img className="img" src={img2} alt="Imágen de mision" />  
              <br /> <br />
            <h2 className="titulo-secundario">Visión</h2>
            <p className="texto-secundario">
              La organización <b>"Psurveys"</b> será una organización reconocida a nivel local,
              con infraestructura adecuada, que brinda servicios de óptima calidad en sus
              proyectos de recuperación psicopedagógica proponiendo siempre el desarrollo
              integral del ser humano.
            </p>
            <img className="img" src={img3} alt="Imágen de vision" /> 
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Acerca;