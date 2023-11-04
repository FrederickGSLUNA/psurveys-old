import React from "react";
import { Link, NavLink } from "react-router-dom";
//logo de Psurveys
import logo from '../../assets/logo-psurveys.png'
//css
import './navbar.css'

const Navbar = () => {
  
  function openNav() {
    document.getElementById('mobile-menu').style.width = "100%";
    document.getElementById('header').style.backdropFilter = "none";
  }

  function closeNav() {
    document.getElementById('mobile-menu').style.width = "0%";
    document.getElementById('header').style.backdropFilter = "blur(10px)";
  }

  return(
    <header id="header">
      <div className="logo">
        <Link to="/"><img src={logo} alt="Logo de Psurveys"/></Link>
        <Link to="/" className="text-logo">Psurveys</Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li><NavLink to="/">Inicio</NavLink></li>
          <li>
            Acerca
            <ul className="submenu">
              <li><NavLink to={"/mision"}>Mision</NavLink></li> <hr />
              <li><NavLink to={"/vision"}>Vision</NavLink></li> <hr />
              <li><NavLink to={"/somos"}>¿Quiénes Somos?</NavLink></li> <hr />
              <li><NavLink to={"/valores"}>Valores</NavLink></li> <hr />
              <li><NavLink to={"/servicios"}>Servicios Ofrecidos</NavLink></li> <hr />
              <li><NavLink to={"/portafolio"}>Portafolio</NavLink></li>
            </ul>
          </li>
          <li><NavLink to="/ayuda">Ayuda</NavLink></li>
          <li><NavLink to="/contacto">Contacto</NavLink></li>
        </ul>
      </nav>
      <div>
        <a href="https://practicasuting.alwaysdata.net" className="btn btn-login"><button title="Iniciar sesión">Iniciar Sesión</button></a>
        <a href="https://practicasuting.alwaysdata.net/register.php" className="btn btn-register"><button title="Registrarse">Registrarse</button></a>
      </div>

      {/*responsive*/}

      <a onClick={openNav} className="menu" href="#"><button title="Abrir Navegación">
        <div></div>
        <div></div>
        <div></div>
      </button></a>
      <div className="overlay" id="mobile-menu">
        <a onClick={closeNav} href="#" className="close">&times;</a>
        <div className="overlay-content">
          <NavLink to="/">Inicio</NavLink>
          <li>
            Acerca
            <ul className="submenu">
              <li><NavLink to={"/mision"}>Mision</NavLink></li>
              <li><NavLink to={"/vision"}>Vision</NavLink></li>
              <li><NavLink to={"/somos"}>¿Quiénes Somos?</NavLink></li>
              <li><NavLink to={"/valores"}>Valores</NavLink></li>
              <li><NavLink to={"/servicios"}>Servicios Ofrecidos</NavLink></li>
              <li><NavLink to={"/portafolio"}>Portafolio</NavLink></li>
            </ul>
          </li>
          <NavLink to="/ayuda">Ayuda</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>

          <a href="https://practicasuting.alwaysdata.net" className="btn btn-login"><button title="Iniciar sesión">Iniciar Sesión</button></a>
          <a href="https://practicasuting.alwaysdata.net/register.php" className="btn btn-register"><button title="Registrarse">Registrarse</button></a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;