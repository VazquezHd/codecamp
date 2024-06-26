import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/contador';
import freeCodeLogo from './assets/logo.png';
import { useState } from 'react';


function App() {

  //agregando hook useState
  const[numClics, setNumClics] = useState(0);




  const manejarClic = () => {
    setNumClics(numClics + 1 );
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };


  return (
    <div className='App'>
      <div className='freecodecamp-logo-contendedor'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeLogo}
          alt='logo de freecodecamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton 
        texto='Clic'
        esBotonDeClic={true}
        manejarClic={manejarClic} />
        <Boton
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;

