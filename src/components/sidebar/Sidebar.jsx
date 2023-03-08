import React from "react";
import './sidebar.css'
import { BiChevronRight, BiHomeAlt, BiSearch, BiLibrary, BiLogOut, BiMoon, BiSun} from "react-icons/bi";
import { NavLink, Outlet} from "react-router-dom";
//logo
import logo from '../../assets/logo-psurveys.png'


const Sidebar = (props) => {

  React.useEffect(() =>{
    const 
    body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".mode"),
    modeText = body.querySelector(".mode-text");

    toggle.addEventListener("click", () => {
      sidebar.classList.toggle("close");
    })

    searchBtn.addEventListener("click", () => {
      sidebar.classList.remove("close");
    })

    modeSwitch.addEventListener("click", () => {
      body.classList.toggle("dark");

      if (body.classList.contains("dark")) {
        modeText.innerText = "Light Mode"
      }else{
        modeText.innerText = "Dark Mode"
      }
    })
  }, [])

  return(
    <>
      <nav className="sidebar">
        <div className="header">
          <div className="image-text">
            <span className="image">
              <img src={logo} alt="Logo de Psurveys"/>
            </span>
            <div className="text header-text">
              <span className="name">{props.name}</span>
              <span className="profession">Estudiante</span>
            </div>
          </div>
          <BiChevronRight className="toggle"/>
        </div>

        <div className="menu-bar">
          <div className="menu-side">
            <ul className="menu-links">

              <li className="search-box">
                <BiSearch className="icon"/>
                <input type="search" placeholder="Buscar"/>
              </li>

              <li className="nav-link">
                <NavLink to="inicio">
                  <BiHomeAlt className="icon"/>
                  <span className="text nav-text">Inicio</span>
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink to="Encuestas">
                  <BiLibrary className="icon"/>
                  <span className="text nav-text">Encuestas</span>
                </NavLink>
              </li>

              <div className="bottom-content">

                <li className="">
                  <NavLink to="#">
                    <BiLogOut className="icon"/>
                    <span className="text nav-text">Cerrar Sesión</span>
                  </NavLink>
                </li>

                <li className="mode">
                  <div className="moon-sun">
                    <BiMoon className="icon moon"/>
                    <BiSun className="icon sun"/>
                  </div>
                  <span className="mode-text text">Dark Mode</span>

                  <div className="toggle-switch">
                    <span className="switch"></span>
                  </div>

                </li>

              </div>

            </ul>
          </div>
        </div>
      </nav>

      <div className="home">
        <section className="text">
          <Outlet/>
        </section>
      </div>
    </>
  )
}

export default Sidebar
