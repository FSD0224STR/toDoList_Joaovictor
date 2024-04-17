import Task from "../components/Task";
import { useTasks } from "../hooks/useTask";
function TaskSelected() { 
    const { selectTask, selectTaskById } = useTasks()
    console.log('esto es set',selectTask)
    return (
        <div>
            
            {selectTask.map(task => (<Task
                key={task._id}
                taskById={task}
                selectTaskById={selectTaskById}

            />))}  



       </div>
        
        
    )
     
}


export default TaskSelected;