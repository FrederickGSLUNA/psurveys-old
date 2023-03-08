import React from "react";
import './acerca.css'
//componentes
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";

const Acerca = () => {

  return (
    <div className="Acerca">
      <Navbar/>
      <section className="section-acerca">
        <Breadcrumbs/>
        <h1>Acerca</h1>
        <p>Pagina de acerca</p>
      </section>
      <Footer/>
    </div>
  )
}

export default Acerca;
