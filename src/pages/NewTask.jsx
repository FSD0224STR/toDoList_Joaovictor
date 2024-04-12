import { useForm } from "react-hook-form";
import './NewTask.css'
import FormAdd from "../components/FormAdd";


function NewTask() {
  
  const addTarea = (e) => {
    e.preventDefault();
    const newTarea = {title:title, description:subtitle} 

    fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers:{
      'Content-Type': 'application/json',
      },
      body:JSON.stringify(newTarea)
    })
     
    
    seTtitle('') 
    seTsubtitle ('')
   

  }
  return (
    <FormAdd
    addTarea={addTarea}
    />
  )
}

export default NewTask;
