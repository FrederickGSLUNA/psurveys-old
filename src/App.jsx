import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
//Pages
import Home from './pages/home/Home';
import Acerca from './pages/acerca/Acerca';
import Contacto from './pages/contacto/Contacto';
import Ayuda from './pages/ayuda/Ayuda';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import _404 from './pages/404/404';
//Estudiante
import Sidebar from './components/sidebar/Sidebar';
import InicioEstudiante from './pages/estudiante/Inicio';
import EncuestasEstudiante from './pages/estudiante/Encuestas';
import PsurveyEstudiante from './pages/estudiante/psurvey/Psurvey';
//firebase
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

function App() {

  const [user, setUser] = useState(null)

  onAuthStateChanged(auth, (userFirebase)=>{
    if (userFirebase) {
      setUser(userFirebase)
    }else{
      setUser(null)
    }
  })

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/acerca' element={<Acerca/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/ayuda' element={<Ayuda/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='*' element={<_404/>}/>

        {/*Rutas de estudiante*/}
        <Route path='/estudiante' element={<Sidebar name="Nombre Apellido"/>}>
          <Route index element={<InicioEstudiante/>}></Route>
          <Route path='inicio' element={<InicioEstudiante/>}></Route>
          <Route path='encuestas' element={<EncuestasEstudiante/>}></Route>
          <Route path='psurvey' element={<PsurveyEstudiante/>}></Route>
        </Route>

      </Routes>
    </div>
  )
}

export default App;
