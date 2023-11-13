import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo-psurveys.png';
import './navbar.css';

const Navbar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  // desplazar la ventana (hacer scroll) hacia la parte superior de la página cada vez que cambia la ruta
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll hasta arriba al cambiar de ruta
  }, [location.pathname]);

  function openNav() {
    document.getElementById('mobile-menu').style.width = "100%";
    document.getElementById('header').style.backdropFilter = "none";
  }

  function closeNav() {
    document.getElementById('mobile-menu').style.width = "0%";
    document.getElementById('header').style.backdropFilter = "blur(10px)";
  }

  return (
    <header id="header">
      <div className="logo">
        <Link to="/"><img src={logo} alt="Logo de Psurveys" /></Link>
        <Link to="/" className="text-logo">Psurveys</Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li><NavLink to="/">Inicio</NavLink></li>
          <li>
            Acerca
            <ul className="submenu">
              <li><NavLink to="/acerca">Empresa</NavLink></li> <hr />
              <li><NavLink to="/mision">Misión</NavLink></li> <hr />
              <li><NavLink to="/vision">Visión</NavLink></li> <hr />
              <li><NavLink to="/somos">¿Quiénes Somos?</NavLink></li> <hr />
              <li><NavLink to="/valores">Valores</NavLink></li> <hr />
              <li><NavLink to="/servicios">Servicios Ofrecidos</NavLink></li> <hr />
              <li><NavLink to="/portafolio">Portafolio</NavLink></li>
            </ul>
          </li>
          <li><NavLink to="/ayuda">Ayuda</NavLink></li>
          <li><a href="https://practicasuting.alwaysdata.net/contacto.php">Contacto</a></li>
        </ul>
      </nav>
      <div>
        <a href="https://practicasuting.alwaysdata.net" className="btn btn-login">
          <button title="Iniciar sesión">Iniciar Sesión</button>
        </a>
        <a href="https://practicasuting.alwaysdata.net/register.php" className="btn btn-register">
          <button title="Registrarse">Registrarse</button>
        </a>
      </div>

      {/*responsive*/}
      <a onClick={openNav} className="menu" href="#">
        <button title="Abrir Navegación">
          <div></div>
          <div></div>
          <div></div>
        </button>
      </a>
      <div className="overlay" id="mobile-menu">
        <a onClick={closeNav} href="#" className="close">&times;</a>
        <div className="overlay-content">
          <NavLink to="/">Inicio</NavLink>
          <a href="#" onClick={toggleSubMenu}>
            Acerca
            <ul className={`submenu submenu-mobile ${showSubMenu ? 'show-submenu': ''}`}>
              <li><NavLink to="/acerca">Empresa</NavLink></li> <hr />
              <li><NavLink to="/mision">Misión</NavLink></li> <hr />
              <li><NavLink to="/vision">Visión</NavLink></li> <hr />
              <li><NavLink to="/somos">¿Quiénes Somos?</NavLink></li> <hr />
              <li><NavLink to="/valores">Valores</NavLink></li> <hr />
              <li><NavLink to="/servicios">Servicios Ofrecidos</NavLink></li> <hr />
              <li><NavLink to="/portafolio">Portafolio</NavLink></li>
            </ul>
          </a>
          <NavLink to="/ayuda">Ayuda</NavLink>
          <a href="https://practicasuting.alwaysdata.net/contacto.php">Contacto</a>
          <a href="https://practicasuting.alwaysdata.net" className="btn btn-login">
            <button title="Iniciar sesión">Iniciar Sesión</button>
          </a>
          <a href="https://practicasuting.alwaysdata.net/register.php" className="btn btn-register">
            <button title="Registrarse">Registrarse</button>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
