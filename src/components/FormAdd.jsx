import { useForm } from "react-hook-form";
import { useState } from "react";
import "./FormAdd.css";


function FormAdd() {
    // const [title, seTtitle] = useState('')
    // const [subtitle, seTsubtitle] = useState('') 
    // console.log('estos son los valores', title, subtitle);

    // const addTarea = (e) => {
    //     e.preventDefault();
    //     const newTarea = {title:title, description:subtitle} 
    
    //     fetch('http://localhost:3000/tasks', {
    //       method: 'POST',
    //       headers:{
    //       'Content-Type': 'application/json',
    //       },
    //       body:JSON.stringify(newTarea)
    //     })
         
        
    //     seTtitle('') 
    //     seTsubtitle ('')
       
    
    //   }
  
  return (
    <div className="conteinerForm">
      <form action="" className="formAddTask">
        <legend>New Task</legend>
        <input
          className="itemForm itemForm_title"
          type="text"
          name="title"
          placeholder="Title"
                //   value={title}
                //   onChange={(e) => seTtitle(e.target.value)}
        />
        <textarea
          className="itemForm itemForm_textarea"
          name="description"
          id=""
          cols="25"
          rows="5"
          placeholder="Description task"
                //   value={subtitle}
                //   onChange={(e) => seTsubtitle(e.target.value)}
        />
        <label>
          Due date{" "}
          <input
            className="itemForm itemForm_date"
            type="date"
            name="dueDate"
          />
        </label>
        <button className="itemForm itemForm_button"  >Add Task</button>
      </form>
    </div>
  );
}

export default FormAdd;
