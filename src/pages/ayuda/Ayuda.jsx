import React from "react";
import './ayuda.css'
//componentes
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import ayuda1 from '../../assets/ayuda1.svg'

const Ayuda = () => {

  return (
    <div>
      <Navbar/>
      <section className="section-ayuda">
        <div className="principal">
        	<h1 className="titulo">Ayuda</h1>
        	<p className="texto">
            En esta sección, encontrarás información valiosa y consejos útiles sobre temas 
            de salud mental y bienestar. Nuestro objetivo es proporcionarte información clara
            y concisa para que puedas tomar decisiones informadas sobre tu propia salud mental
            y la de tus seres queridos.
        	</p>
            <img src={ayuda1} alt="Ayuda" />
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Ayuda;
