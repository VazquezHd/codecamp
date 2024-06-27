import React from "react";
import '../stylesheets/Boton.css';


//destructuracion
function Boton({texto, esBotonDeClic, manejarClic}) {
  return(
    <button
    className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' } 
    onClick={manejarClic} >
      {texto}
    </button>
  );
}

export default Boton ;