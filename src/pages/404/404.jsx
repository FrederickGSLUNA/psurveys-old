import React from "react";
import './404.css'
import { NavLink } from "react-router-dom";

const _404 = () => {
  return(
    <section className="body-404 disable-selection">
      <div className="stars">
        <div className="central-body">
            <h1 className="text-404">404</h1>
            <p className="text-404-child">Página no encontrada</p>
          <br/>
          <br/>
            <NavLink to='/' className="btn-regresar">Regresar al Inicio</NavLink>
        </div>
        <div className="objects">
            <img className="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px"/>
            <div className="earth-moon">
                <img className="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px"/>
                <img className="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px"/>
            </div>
            <div className="box_astronaut">
                <img className="object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px"/>
            </div>
        </div>
        <div className="glowing_stars">
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>

        </div>

      </div>
    </section>
  )
}

export default _404;
