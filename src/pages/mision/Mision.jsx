import React from 'react';
import './mision.css';

//componentes
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Mision = () => {
    return (
        <div>
            <Navbar />
            <section className='section-mision'>
                <h2>Nuestra Misión</h2> <br />
                <p>
                    En Psurveys, nuestra misión se centra en proporcionar soluciones especializadas de evaluación psicológica a la Universidad Tecnológica de la Costa Grande de Guerrero. Nos comprometemos a ofrecer herramientas como Lynn O'Brien, PNL, Honey Alonso y análisis de riesgos psicosociales, brindando una comprensión profunda de la psicología humana para potenciar el desarrollo académico, profesional y personal de los jefes de área, psicólogos y alumnos.
                </p>
                    <br />
                <h2>Nuestros Compromisos</h2> <br />
                <p>
                    <ol>
                        <li>Brindar evaluaciones psicológicas precisas y actualizadas, adaptadas al entorno universitario, utilizando métodos como Lynn O'Brien, PNL, Honey Alonso y análisis de riesgos psicosociales, para proporcionar información valiosa y facilitar el crecimiento académico y personal.</li>
                            <br />
                        <li>Ofrecer orientación y asesoramiento especializado basado en datos provenientes de nuestras evaluaciones, permitiendo a los jefes de área y psicólogos identificar áreas de mejora y fortalecer el ambiente educativo y laboral dentro de la universidad.</li>
                            <br />
                        <li>Desarrollar programas personalizados de desarrollo académico y profesional basados en los resultados de nuestras evaluaciones, con el objetivo de potenciar el crecimiento tanto de los jefes de área como de los estudiantes.</li>
                            <br />
                        <li>Contribuir a la identificación y gestión de riesgos psicosociales en el entorno universitario, promoviendo un ambiente de aprendizaje seguro, inclusivo y propicio para el bienestar general de los alumnos.</li>
                            <br />
                        <li>Mantenernos al tanto de las últimas investigaciones en psicología aplicada y pruebas psicológicas para ofrecer soluciones innovadoras y adaptadas a las necesidades cambiantes de la Universidad Tecnológica de la Costa Grande de Guerrero.</li>
                    </ol>
                </p> <br />

                <p>
                    En Psurveys, estamos comprometidos a impulsar el bienestar emocional, el desarrollo académico y profesional en la comunidad universitaria. Nuestra prioridad es brindar soluciones confiables y éticas que contribuyan al éxito académico y al bienestar de quienes forman parte de esta institución educativa.
                </p>
            </section>
            <Footer />
        </div>
    )
}

export default Mision;
