import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './portafolio.css';

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import portafolio1 from '../../assets/portafolio1.jpg';
import portafolio2 from '../../assets/portafolio2.png';
import portafolio3 from '../../assets/portafolio3.jpg';

const Portafolio = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
    }, 3000); // Cambia la imagen cada 2 segundos (2000 ms)

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      <section className='section-portafolio'>
        <h1>Portafolio</h1> <br />
        <p>Descubre nuestros proyectos más recientes y exitosos. Sumérgete en un mundo de creatividad y excelencia.</p> <br />
        <Carousel showThumbs={true} selectedItem={activeSlide} autoPlay={true} interval={3000} infiniteLoop={true}>
          <div>
            <img src={portafolio1} alt="Portafolio 1" />
          </div>
          <div>
            <img src={portafolio2} alt="Portafolio 2" />
          </div>
          <div>
            <img src={portafolio3} alt="Portafolio 3" />
          </div>
        </Carousel>
      </section>
      <Footer />
    </div>
  );
};

export default Portafolio;
