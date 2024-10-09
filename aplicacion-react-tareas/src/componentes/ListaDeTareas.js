import React,{useState} from 'react';
import TareaFormulario from './TareaFormulario';
import Tarea from './Tarea';
import '../hojas-de-estilo/ListaDeTareas.css';


function ListaDeTareas() {

    // hook
    const[tareas , setTareas]= useState([]); 
    // cada tarea se va a representar como un objeto en el arreglo de objetos []
    const agregarTarea = tarea => {
        console.log("Tarea agregada");
        console.log(tarea);
    }


    return(
        // etiquetas vacias se pueden UserActivation, se llaman fragmentos, solo debe d ehaber un contenedor
        <>
            <TareaFormulario/>
            <div className='tareas-lista-contenedor'>
                {/* mostrando lista de componentes---- map es un metodo */}
                {
                    // tarea entre parentesis es un bojeto
                    tareas.map((tarea) =>
                        <Tarea 
                        texto={tarea.texto}
                        completada={tarea.completada}
                        />
                    )
                }
            </div>
        </>
    );
}

export default ListaDeTareas;