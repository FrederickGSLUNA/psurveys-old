import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css'
//Pages
import Home from './pages/home/Home';
import Acerca from './pages/acerca/Acerca';
import Ayuda from './pages/ayuda/Ayuda'
import Contacto from './pages/contacto/Contacto';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import _404 from './pages/404/404';
import Mision from './pages/mision/Mision';
import Vision from './pages/vision/Vision';
import QuienesSomos from './pages/quienesomos/QuienesSomos';
import Valores from './pages/valores/Valores';
import Servicios from './pages/servicios/Servicios';
import AvisoPrivacidad from './pages/aviso/Aviso';
import PoliticaPrivacidad from './pages/politica/Politica';
import Portafolio from './pages/portafolio/Portafolio';
//Estudiante
import SidebarEstudiante from './components/sidebar/SidebarEstudiante';
import InicioEstudiante from './components/estudiante/Inicio';
import EncuestasEstudiante from './components/estudiante/Encuestas';
//Psicologo
import SidebarPsicologo from './components/sidebar/SidebarPsicologo';
//Jefe de Area
import SidebarJefeDeArea from './components/sidebar/SidebarJefeDeArea';
//firebase
import { auth, database } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { ref, child, get, DataSnapshot } from 'firebase/database';
//Temp page
import Temp from './pages/temp/Temp';
//registers
import RegistrarAlumno from './pages/registrarAlumno/RegistrarAlumno';
import RegistrarPsicologo from './pages/registrarPsicologo/RegistrarPsicologo'
//Encuestas
import PsurveyHoneyAlonso from './components/psurvey/PsurveyHoneyAlonso';
import PsurveyTestAprendizajePNL from './components/psurvey/PsurveyTestAprendizajePNL';
import PsurveyAprendizajePreferencia from './components/psurvey/PsurveyAprendizajePreferencia';
import Resultados from './pages/resultados/Resultados';
// Service Worker
import { registerServiceWorker } from '../public/serviceWorkerRegistration'

function App() {

  //Estado del Usuario
  const [user, setUser] = useState(null)
  const [rol, setRol] = useState(null)

  useEffect(() => {
    registerServiceWorker();
  }, []);

  onAuthStateChanged(auth, (userFirebase)=>{
    if (userFirebase) {

      setUser(userFirebase)

      //si está logueado...
      const dbRef = ref(database)
      get(child(dbRef, 'users/' + userFirebase.uid + '/')).then((snapshot)=>{
        if (snapshot.exists()) {
          const data = snapshot.val()
          setRol(data.rol)
          console.log(rol)
        } else {
          console.log("Datos no disponibles");
        }
      }).catch((error) => {
        console.error(error);
      });

    }else{
      setUser(null)
    }
  })

  const SwitchSidebar = (props) =>{
    switch(rol){
      case 'estudiante': return <SidebarEstudiante name={props.name}/>
      case 'psicologo': return <SidebarPsicologo name={props.name}/>
      case 'JefeDeArea': return <SidebarJefeDeArea name={props.name}/>
      default : return <Temp/>
    }
  }

  const SwitchInicio = () =>{
    switch(rol){
      case 'estudiante': return <InicioEstudiante/>
      case 'psicologo': return 'Inicio Psicologo'
      case 'JefeDeArea': return 'Inicio JefeDeArea'
      default : return <Temp/>
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/acerca' element={<Acerca/>}/>
        <Route path='/ayuda' element={<Ayuda/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='*' element={<_404/>}/>
        <Route path='/mision' element={<Mision/>}/>
        <Route path='/vision' element={<Vision/>}/>
        <Route path='/somos' element={<QuienesSomos/>}/>
        <Route path='/valores' element={<Valores/>}/>
        <Route path='/servicios' element={<Servicios/>}/>
        <Route path='/aviso' element={<AvisoPrivacidad/>}/>
        <Route path='/politica' element={<PoliticaPrivacidad/>}/>
        <Route path='/portafolio' element={<Portafolio/>}/>

        {/*Rutas Dashboard*/}
        <Route path='/dashboard' element={<SwitchSidebar name={user ? user.email : ''}/>}>
          <Route index element={ <SwitchInicio/> }></Route>
          <Route path='inicio' element={ <SwitchInicio/> }></Route>
          <Route path='encuestas' element={<EncuestasEstudiante/>}></Route>
          <Route path='RegAlumno' element={<RegistrarAlumno/>}></Route>
          <Route path='RegPsicologo' element={<RegistrarPsicologo/>}></Route>

          <Route path='VerResultados' element={<Resultados/>}></Route>

          <Route path='psurveyHoneyAlonso' element={<PsurveyHoneyAlonso/>}></Route> {/*Encuesta Honey Alonso*/}
          <Route path='psurveyAprendizajePNL' element={<PsurveyTestAprendizajePNL/>}></Route> {/*Encuesta Aprendizaje PNL*/}
          <Route path='psurveyAprendizajePreferencia' element={<PsurveyAprendizajePreferencia/>}></Route> {/*Encuesta Aprendizaje Preferencia*/}
        </Route>

      </Routes>
    </div>
  )
}

export default App;
