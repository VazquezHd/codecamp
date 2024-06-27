import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/contador';
import freeCodeLogo from './assets/logo.png';


function App() {
  //agregando hook useState

  const manejarClic = () => {
    console.log('Clic');
  }

  const reiniciarContador = () => {
    console.log('Reiniciar');
  }


  return (
    <div className='App'>
      <div className='freecodecamp-logo-contendedor'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeLogo}
          alt='logo de freecodecamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics='5' />
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
