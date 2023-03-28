import React, { useState } from "react";
import '../register/register.css'
import './login.css'
//components
import Navbar from "../../components/navbar/Navbar";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import Footer from "../../components/footer/Footer"
//firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

import { useNavigate } from "react-router-dom";

const Login = () => {

  const [userData, setUserData] = useState({
    correo: '',
    password: '',
    rol: ''
  })

  const handleChange = ({target: {name, value}}) =>{
    setUserData({...userData, [name] : value})
  }

  const navigate = useNavigate();

  function handledSubmit(e){
  e.preventDefault()
  signInWithEmailAndPassword(auth, userData.correo, userData.password)
    .then((userCredential) => {
      //console.log(userCredential)
      navigate('/dashboard')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
    });
  }
  

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
          <form className="formulario" onSubmit={handledSubmit}>
            <p className="full">
              <label>Correo electrónico</label>
              <input type="email" name="correo" required placeholder="Introduce tu correo electrónico" autoComplete="off"
              onChange={handleChange}
              />
            </p>
            <p className="full">
              <label>Contraseña</label>
              <input type="password" name="password" required placeholder="Crea una contraseña" autoComplete="off"
              onChange={handleChange}
              />
            </p>
            <p className="full">
              <input className="submit" type="submit" name="submit" required value="Iniciar sesión"/>
            </p>
          </form>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Login
