import React from "react";
import '../register/register.css'
import './login.css'
//import { useNavigate } from "react-router-dom";
//components
import Navbar from "../../components/navbar/Navbar";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import Footer from "../../components/footer/Footer"

const Login = () => {

  //const navigate = useNavigate();

  return(
    <>
      <Navbar/>
      <section className="section-padding">
      <Breadcrumbs/>
        <div className="form-container login">
          <div className="register-title">
            {/*<button onClick={() => navigate(-1)}>⇚</button>*/}
            <h1>Inicia Sesión</h1>
          </div>
          <form className="formulario">
            <p className="full">
              <label>Correo electrónico</label>
              <input type="email" name="correo" required placeholder="Introduce tu correo electrónico" autoComplete="off"/>
            </p>
            <p className="full">
              <label>Contraseña</label>
              <input type="password" name="password" required placeholder="Crea una contraseña" autoComplete="off"/>
            </p>
            <p className="full">
              <input className="submit" type="submit" name="submit" required value="Iniciar sesión"/>
            </p> <br />
            <a className="full" href="#">Aviso de Privacidad</a>
          </form>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Login
