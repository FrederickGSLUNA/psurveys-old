import React from 'react';
import './quienessomos.css';

//componentes
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const QuienesSomos = () => {
    return (
      <div>
      <Navbar/>
      <section className="section-quienes-somos">    
        <h2>¿Quiénes Somos?</h2>
        <p>
          Bienvenidos a Psurveys, una plataforma dedicada a brindar soluciones educativas y psicológicas. 
          Nuestra empresa se enfoca en la Universidad Tecnológica de la Costa Grande de Guerrero, 
          proporcionando herramientas para el desarrollo de los alumnos, el apoyo de los psicólogos 
          y la optimización del trabajo de los jefes de área.
        </p> <br />
        <p>
          Nos comprometemos a ofrecer un entorno educativo innovador que permita a los estudiantes 
          descubrir su estilo de aprendizaje y maximizar su potencial. Nuestro objetivo es ayudar a 
          mejorar la eficiencia del personal de la universidad y apoyar a los psicólogos con recursos 
          que faciliten sus evaluaciones.
        </p> <br />
        <p>
          A través de nuestro compromiso y experiencia, queremos promover un ambiente de aprendizaje 
          diverso y enriquecedor, brindando a cada individuo la oportunidad de crecer académica y 
          emocionalmente.
        </p>
      </section>
      <Footer/>
      </div>
    );
  };
  
  export default QuienesSomos;