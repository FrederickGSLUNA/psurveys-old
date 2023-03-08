import React from "react";
//componentes
import Navbar from '../../components/navbar/Navbar';
import Bienvenida from './bienvenida/Bienvenida';
import BienvenidaTwo from './bienvenida-two/BienvenidaTwo';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div className="Home">
      <Navbar/>
      <Bienvenida/>
      <p className='bienvenida-text-center'>Obten tus resultados al instante de responder el test</p>
      <BienvenidaTwo/>
      <Footer/>
    </div>
  )
}

export default Home;
