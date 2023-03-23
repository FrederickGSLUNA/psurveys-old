import React from "react";
import './ayuda.css';
//imágenes
import img1 from "../../assets/ayuda1.svg"
//components
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Ayuda = () => {
  return(
    <>
      <Navbar/>
      <section className="section">
        <div className="principal">
        	<h1 className="titulo">Ayuda</h1>
        	<p className="texto">
            En esta sección, encontrarás información valiosa y consejos útiles sobre temas 
            de salud mental y bienestar. Nuestro objetivo es proporcionarte información clara
            y concisa para que puedas tomar decisiones informadas sobre tu propia salud mental
            y la de tus seres queridos.
        	</p>
            <img src={img1} alt="Ayuda" />
          <p className="texto">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatum vitae
             exercitationem ab accusantium nihil fugiat enim dicta aperiam incidunt, perferendis
             nam quisquam ducimus aspernatur sint dolore. Laboriosam, dolores cupiditate?
          </p>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Ayuda