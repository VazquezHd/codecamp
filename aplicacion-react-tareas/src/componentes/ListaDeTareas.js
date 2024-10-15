import React,{useState} from 'react';
import TareaFormulario from './TareaFormulario';
import Tarea from './Tarea';
import '../hojas-de-estilo/ListaDeTareas.css';


function ListaDeTareas() {

    // hook
    const[tareas , setTareas]= useState([]); 
    // cada tarea se va a representar como un objeto en el arreglo de objetos []
    
    const agregarTarea = tarea => {
        console.log(tarea);
        if(tarea.texto.trim()){
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }
    }

    const eliminarTarea = id =>{
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    };

    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea =>{
            if (tarea.id === id) {
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
    };




    return(
        // etiquetas vacias se pueden UserActivation, se llaman fragmentos, solo debe d ehaber un contenedor
        <>
            <TareaFormulario onSubmit={agregarTarea} />
            <div className='tareas-lista-contenedor'>
                {/* mostrando lista de componentes---- map es un metodo */}
                {
                    // tarea entre parentesis es un bojeto
                    tareas.map((tarea) =>
                        <Tarea 
                            key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            completarTarea={completarTarea}
                            eliminarTarea={eliminarTarea}
                        />
                    )
                }
            </div>
        </>
    );
}

export default ListaDeTareas;