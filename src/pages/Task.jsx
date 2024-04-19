
// //
// import Task from "../components/Task";
// import { useState, useEffect } from "react";
import { useTasks } from "../hooks/useTask";
import TaskById from "../components/TaskByid";


function TaskSelected() { 
    // const {id} = useParams
    const {tasks,selectTask,handleDelete, handleComplete } = useTasks();

   
    // const [selectTask, setSelectTask] = useState([])
    

    // function getTaskById(id) {

    //     console.log('entrando el la peticion getbyid',id)
    //     fetch(`http://localhost:3000/tasks/661f766e7f79cca3e003a1ca`, { method: "GET" })
    //       .then((res) => {
    //         return res.json();
    //       }) //estoy recibiendo la cabecera headers
    //         .then((jsonResponse) => {
    //             console.log('respuesta de la peticion', jsonResponse)
    //             setSelectTask([jsonResponse])
            
    //       }); //aqui estoy recibiendo ya el body 
    // }

    console.log('esto es selectTask en la pagina', selectTask)
    console.log('esto es tasks state en la pagina',tasks)  
    //      useEffect(() => {
    //       getTaskById()
            
    //   }, []);
    

    console.log('entrando en el mapa')
  
    return (

        <div>
            
            <h1> Task selected </h1>

            {tasks.map(taskById => (
                
                <TaskById
                key={taskById.id}    
                taskById={taskById}
                handleComplete={handleComplete}
                handleDelete={handleDelete}
                
            />
        ))}:
        

        </div>
       
    )
     
}


export default TaskSelected;