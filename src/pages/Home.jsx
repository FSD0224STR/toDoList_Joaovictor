import "../App.css";
import { useState,useEffect } from "react";
import Task from "../components/Task";
import swal from "sweetalert";



function Home() {

  const [tasks, setTasks] = useState([]);


  function getTasks (){
    fetch('http://localhost:3000/tasks', { method:'GET'})
        .then(res => {return  res.json()}) //estoy recibiendo la cabecera headers
        .then(jsonResponse => setTasks(jsonResponse))//aqui estoy recibiendo ya el body
} 



  useEffect(() => {
    
    getTasks();

  }, [])
  


  const handleDelete = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    const removeTitle = tasks.find(task => task.id === id)

    console.log(removeTitle,'este es title remove')
    swal({
      title: `Eliminar esta tarea: ${removeTitle.title}`,
      text: "Estas seguro que deseas eliminar este archivo?",
      icon: "warning",
      buttons: ["No", "Si"],
    }).then((respuesta) => {
      if (respuesta) {
       
        swal({
          text: "El archivo se ha borrado con éxito",
          icon: "success", });
          setTasks(newTasks);
      }
      
    });
    
  };


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
              key={task.id}
              task={task}
              handleDelete = {handleDelete}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;
