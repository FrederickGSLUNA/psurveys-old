import React from "react";
import './style.css';
//components
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";

const Contacto = () => {
  return(
    <>
      <Navbar/>
      <section className="section-padding">
        <Breadcrumbs/>
        <div className="form-container">
          <div className="register-title">
            <h1>¡Contáctanos!</h1> 
          </div>
          <form className="formulario">
            <p>
              <label>Nombre:</label>
              <input type="text" name="nombre" required placeholder="Introduce tu nombre" autoComplete="off"/>
            </p>
            <p>
              <label>Apellidos:</label>
              <input type="text" name="apellidos" required placeholder="Introduce tus apellidos" autoComplete="off"/>
            </p>
            <p>
              <label>Correo electrónico:</label>
              <input type="email" name="correo" required placeholder="Introduce tu correo electrónico" autoComplete="off"/>
            </p>
            <p>
              <label>Teléfono:</label>
              <input type="number" name="telefono" required placeholder="Introduce tu número de teléfono" autoComplete="off"/>
            </p>
            <p className="full">
              <label>Mensaje:</label>
              <textarea name="mensaje" cols="30" rows="10" required placeholder="Escríbanos su mensaje" autoComplete="off"></textarea>
            </p>
            <p className="error full"></p>
            <p className="full">
              <input className="submit" type="submit" name="submit" required value="Enviar"/>
            </p>
          </form>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Contacto