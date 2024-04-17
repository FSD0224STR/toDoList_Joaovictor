import { Link, NavLink } from 'react-router-dom';
import './Task.css'

export default  function Task({task,handleDelete,handleComplete,selectTaskById}) {
     

    const {_id,title,description,dueDate,createdAt,status}=task
   
    
   
    

    return (
       
       
        
    
    <div className={status == true ? ' conteinerTask conteinerTaskCompletd' : 'conteinerTask'}> 
    <NavLink className={'navLink'} to={`/tasks/${_id}`} onClick={()=> selectTaskById(_id)} ><h2 className=  { status == true ? 'titleTask titleTaskComplete '   : 'titleTask '}>{title}</h2></NavLink>   
       
            <div>
                <h3 className= { status == true ? 'titleDescription titleDescriptionComplete'   : 'titleDescription'} >descripcion</h3>
                <p className=  { status == true ? 'textDescription  textDescriptionComplete'   : 'textDescription'}>{description}</p>
                <button className='btnCompletar'  onClick={() => handleComplete(_id)} type="button">{status !== false ? 'completed' : 'To Complete' }</button>
                <button className='btnEditar'  type="button">Edit </button>
                <button className='btnEliminar' onClick={()=>handleDelete(_id)} type="button">Delete</button>
            </div>


            <div className='options'>
                <div className='optionsItems'><p> Create Date  </p> <input className={status== false ? 'inputDate' : 'inputDate  inputDateComplete'  } type="text" defaultValue={createdAt} /></div> 
                <div className='optionsItems ' > <p> status </p> { status == false ? 'in progess' : 'DONE' } </div>
                <div className='optionsItems'><p>Due Date</p> <input className={status== false ? 'inputDate' : 'inputDate  inputDateComplete'  } type="text" defaultValue={dueDate}/></div>
            </div>


        </div>

      
    );
 }
