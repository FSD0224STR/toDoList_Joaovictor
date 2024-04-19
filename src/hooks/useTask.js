import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import swal from 'sweetalert'
export function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [dummy, refresh] = useState(false);
  const [selectTask, setSelectTask] = useState([])
  const [taskId ,setTaskId] = useState([false])
  const [edit, SetTaskEdit] = useState([])
  const [stateEdit,SetStateEdit]= useState(false)

//API CALLS


  
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
    console.log(id)
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
    // console.log('antes del refresh')
    // const message = await response.json('tarea eliminada');
    //para renderizar la pagina siempre que haga una petticion (es una formad e hacerlo)
    // setTaskId(false)
    refresh(!dummy);
  }

  const handleTasksById = (id) => {
    console.log('entrando el la peticion getbyid')
    fetch(`http://localhost:3000/tasks/${id}`, { method: "GET" })
      .then((res) => {
        return res.json();
      }) //estoy recibiendo la cabecera headers
      .then((jsonResponse) => {
        console.log('respuesta de la peticion',jsonResponse)
        setSelectTask([jsonResponse])
        setTaskId(true)
      }) //aqui estoy recibiendo ya el body con la informacion de la base de datos
  };


  const handleEdit = (id) => {
    console.log(id)
    let taskEdit =[]
    taskEdit = tasks.find(task => (task._id == id))
    console.log('esto es taskedit',taskEdit)
    SetTaskEdit(taskEdit)
    SetStateEdit(true)
  } 
    
  console.log('estos es edit en useTask',edit)

  function backToTaskList() {
    setTaskId(false)
    SetStateEdit(false)
  }
 
  // const handleUpdate = (id) => {
  //   // e.preventDefault();
  //   // setErrors(validateForm(form));
  //   // if (Object.keys(errors).length === 0) {
  //     fetch(`http://localhost:3000/tasks/${id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(form),
  //     }).then((res) => {
  //       SetStateEdit(false)
  //     });
        
  //   // }

  // };


  useEffect(() => {
    renderTasks();
    // handleTasksById()
    
  }, [dummy,selectTask]);

  return {
    tasks,
    selectTask,
    taskId,
    stateEdit,
    handleDelete,
    handleComplete,
    handleTasksById,
    backToTaskList,
    handleEdit,
    edit,
  };
}
