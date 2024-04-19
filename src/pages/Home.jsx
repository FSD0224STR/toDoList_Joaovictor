import "../App.css";
import Task from "../components/Task";
import TaskById from "../components/TaskByid";
import FormEdit from '../components/FormEdit'
import { useTasks } from "../hooks/useTask";


function Home() {


  const { tasks,taskId,selectTask,edit,stateEdit,handleDelete,handleComplete,handleTasksById,backToTaskList,handleEdit} = useTasks();





  if (taskId === true) {
   
    console.log('entrando en el id',taskId)
    return (

      <div>
          

        {selectTask.map(taskById => (
              
          <TaskById
            key={taskById.title}
            taskById={taskById}
            backToTaskList={backToTaskList}
              
          />
        ))}
      

      </div>
     
    )
   
  } 
  if (stateEdit === true) {
    // console.log('entrando en el edit', stateEdit)
    console.log('esto es edit en componente',edit)
    return (
        <div>
    
      
            
        <FormEdit
          edit={edit}
          backToTaskList={backToTaskList}
          // handleUpdate={handleUpdate}
        />
    
       </div>
    )

   
    


  }
  return (
    <>
      <main>
        <h2 className="titleSecondary_list"> Lista de Tareas</h2>
        <div className="conteiner">
          {tasks.length === 0 && (
            <p className="noList">
              {" "}
              No hay elementos en tu lista. Añade una tarea
            </p>
          )}

          {tasks.map((task) => (
           
            
            
            
            <Task
              key={task._id}
              task={task}
              handleDelete={handleDelete}
              handleComplete={handleComplete}
              handleTasksById={handleTasksById}
              handleEdit={handleEdit}
              
            
             

            />
          ))}
        </div>
      </main>
    </>
  );
}















 

export default Home;
