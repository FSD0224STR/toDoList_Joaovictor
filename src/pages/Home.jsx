import "../App.css";
import { useState } from "react";
import Task from "../components/Task";



function Home() {
    


    const taskList = [
        {
          id: 1,
          title: "cambiar tipo",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel mi nec mauris consectetur accumsan bibendum sed lacus. In vel dignissim nunc. Donec vel nulla venenatis, tempor tortor non, dignissim est. Ut non iaculis dolor, eget aliquet metus. Nulla facilisi. Sed sed lobortis nunc. Curabitur vitae congue quam.",
          status: "in progress",
        },
        {
          id: 2,
          title: "cambiar el interfaz",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel mi nec mauris consectetur accumsan bibendum sed lacus. In vel dignissim nunc. Donec vel nulla venenatis, tempor tortor non, dignissim est. Ut non iaculis dolor, eget aliquet metus. Nulla facilisi. Sed sed lobortis nunc. Curabitur vitae congue quam.",
          status: "in progress",
        },
        {
          id: 3,
          title: "cambiar las funcionaliaddes",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel mi nec mauris consectetur accumsan bibendum sed lacus. In vel dignissim nunc. Donec vel nulla venenatis, tempor tortor non, dignissim est. Ut non iaculis dolor, eget aliquet metus. Nulla facilisi. Sed sed lobortis nunc. Curabitur vitae congue quam.",
          status: "in progress",
        },
        {
          id: 4,
          title: "crear componentes",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel mi nec mauris consectetur accumsan bibendum sed lacus. In vel dignissim nunc. Donec vel nulla venenatis, tempor tortor non, dignissim est. Ut non iaculis dolor, eget aliquet metus. Nulla facilisi. Sed sed lobortis nunc. Curabitur vitae congue quam.",
          status: "in progress",
        },
      ];
    
      const [tasks, setTasks] = useState(taskList);
    
      function deleteTarea(id) {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
      }
    
    
    return (
        
      <>

      {/* <header>
        <h1> ToDoList</h1>
        <img src={"/img/checklist1.png"} alt="logolist" className="logo" />
      </header> */}

      <main>
        <h2 className="titleSecondary_list"> Lista de Tareas</h2>
        {tasks.length === 0 && <p className="noList"> No hay elementos en tu lista. Añade una tarea</p>}
        <div className="conteiner">
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              deleteTarea={deleteTarea}
            />
          ))}
        </div>
      </main>
    </> 


    )



}

export default Home 