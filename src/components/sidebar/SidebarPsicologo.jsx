import React from "react";
import './sidebar.css'
import { BiChevronRight, BiHomeAlt, BiSearch, BiLibrary, BiLogOut, BiMoon, BiSun, BiListPlus, BiShow} from "react-icons/bi";
import { NavLink, Outlet} from "react-router-dom";
//logo
import logo from '../../assets/logo-psurveys.png'
//firebase
import { getAuth, signOut } from "firebase/auth";
//navigate
import { useNavigate } from "react-router-dom";


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

  const navigate = useNavigate();

  function hanledSignOut(){
    const auth = getAuth();
    signOut(auth).then(() => {
      navigate('/')
      console.log('Sesión Cerrada')
    }).catch((error) => {
      console.log(error)
    });
  }

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
              <span className="profession">Psicólogo</span>
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
              <li className="nav-link">
                <NavLink to="RegAlumno">
                  <BiListPlus className="icon"/>
                  <span className="text nav-text">Registrar Alumno</span>
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink to="VerResultados">
                  <BiShow className="icon"/>
                  <span className="text nav-text">Ver resultados</span>
                </NavLink>
              </li>

              <div className="bottom-content">

                <li className="">
                  <NavLink
                    onClick={hanledSignOut}
                  >
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
