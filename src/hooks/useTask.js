import { useState, useEffect } from "react";
import swal from 'sweetalert'
export function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [dummy, refresh] = useState(false);
  const [selectTask, setSelectTask] = useState()
  const renderTasks = () => {
    fetch("http://localhost:3000/tasks", { method: "GET" })
      .then((res) => {
        return res.json();
      }) //estoy recibiendo la cabecera headers
      .then((jsonResponse) => {
        setTasks(jsonResponse)
      }); //aqui estoy recibiendo ya el body
    
  };

  async function handleDelete(id) {
    swal({
      title: `Eliminar esta tarea`,
      text: "Estas seguro que deseas eliminar este archivo?",
      icon: "warning",
      buttons: ["No", "Si"],
    }).then(respuesta => {
      if (respuesta) {
        const req = fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
    });
         refresh(!dummy); //para renderizar la pagina siempre que haga una petticion (es una formad e hacerlo)
      }

    })

    
  }


  async function handleComplete(id) {

    const req = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PATCH",
      // body: JSON.stringify(),
      headers: { "Content-Type": "application/json" },
    });
    console.log('antes del refresh')
    // const message = await response.json('tarea eliminada');
    refresh(!dummy); //para renderizar la pagina siempre que haga una petticion (es una formad e hacerlo)
  }

 
  
  function selectTaskById(id) {
     
   console.log('entrando en selecttask')
     const taskSelect = tasks.filter(task => task._id === id)
     console.log('esto es taskSelec',taskSelect)
    setSelectTask(taskSelect)
  }

  console.log('esto es SETselecttask',setSelectTask)

  

  useEffect(() => {
    renderTasks();
  }, [dummy]);

  return {
    tasks,
    setTasks,
    handleDelete,
    handleComplete,
    selectTaskById,
    selectTask
  };
}
