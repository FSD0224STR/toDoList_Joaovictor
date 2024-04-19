import { Link, NavLink } from 'react-router-dom';
import './Task.css'
import './TaskByid.css'


export default  function TaskById({taskById,backToTaskList}) {
     

    const {title,description,dueDate,createdAt,status}= taskById
    
    
   
    

    return (
       
     
    <div className='conteinerTaskId'>  
         <h1 className="titleTaskId"> Task selected </h1>
    <div className={status == true ? ' conteinerTask conteinerTaskCompletd' : 'conteinerTask'}> 
     <h2 className=  { status == true ? 'titleTask titleTaskComplete '   : 'titleTask '}>{title}</h2>
       
            <div>
                <h3 className= { status == true ? 'titleDescription titleDescriptionComplete'   : 'titleDescription'} >descripcion</h3>
                <p className=  { status == true ? 'textDescription  textDescriptionComplete'   : 'textDescription'}>{description}</p>
                <button className='btnBackList'  onClick={backToTaskList} type="button">Back to Task List</button>

            </div>


            <div className='options'>
                <div className='optionsItems'><p> Create Date  </p> <input className={status== false ? 'inputDate' : 'inputDate  inputDateComplete'  } type="text" defaultValue={createdAt} /></div> 
                <div className='optionsItems ' > <p> status </p> { status == false ? 'in progess' : 'DONE' } </div>
                <div className='optionsItems'><p>Due Date</p> <input className={status== false ? 'inputDate' : 'inputDate  inputDateComplete'  } type="text" defaultValue={dueDate}/></div>
            </div>


        </div>

        </div>  
    );
 }
