import './App.css';
import freeCodeCampLogo from './assets/freecodecamp-logo.png';
import Tarea from './componentes/Tarea';


function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo' 
          alt='Logo de freeCodeCamp'
        />
      </div>
      <div className='tareas-lista-p'>
          <h1>Mis tareas</h1>
          <Tarea texto='Aprender React'/>
        </div>
    </div>
  );
}

export default App;

