import { useState } from 'react';
import './Task.css'

export default  function Task({task,deleteTarea,}) {
     

    const {id,title,description,status}=task
    const [complete,setComplete] = useState(false)

    return (

        
    
        <div className={complete ? ' conteinerTask conteinerTaskCompletd' : 'conteinerTask'}>
            <h2 className='titleTask'>{title}</h2>
       
            <div>
                <h3 className='titleDescription' >descripcion</h3>
                <p className='textDescription'>{description}</p>
                <button className='btnCompletar'  onClick={() => setComplete(!complete)} type="button">{complete? 'completada' : 'no completada' }</button>
                <button className='btnEditar' type="button">Editar </button>
                <button className='btnEliminar' onClick={()=>deleteTarea(id)} type="button">eliminar</button>
            </div>


            <div className='options'>
               <div className='optionsItems'><p>Fecha de creacion  </p> <input className='inputDate'  type="date" /></div> 
                <div className='optionsItems ' > <p> estado </p> { complete ? 'completed' : 'in progess'} </div>
                <div className='optionsItems'><p>fecha de finalizacion</p> <input className='inputDate' type="date" /></div>
            </div>


        </div>


    );
 }
