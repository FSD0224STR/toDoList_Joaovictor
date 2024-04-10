import "../App.css";
import { useState,useEffect } from "react";
import Task from "../components/Task";
import swal from "sweetalert";

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

  const [tasks, setTasks] = useState([]);


  //Puerta de entrada al BackEnd
  const getTasks = () => fetch('http://localhost:3000/tasks')
        .then(res => res.json()) //estoy recibiendo la cabecera headers
        .then(data => setTasks(data)) //aqui estoy recibiendo ya el body y seteando a task para que lo renderize

  useEffect(() => {
    
    getTasks();

  },[])

  function OnDelete(id) {
    
    mostrarAlertaDelete()
    deleteTarea(id)

  }

  const mostrarAlertaDelete = () => {
    swal({
      title: `Eliminar Tarea`,
      text: "Estas seguro que deseas eliminar este archivo?",
      icon: "warning",
      buttons: ["No", "Si"],
    }).then((respuesta) => {
      if (respuesta) {
        swal({
          text: "El archivo se ha borrado con éxito",
          icon: "success",
        });
      }
      
    });
    
  };

  function deleteTarea(id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
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
              key={task.id}
              task={task}
              deleteTarea={deleteTarea}
              alertDelete={mostrarAlertaDelete}
              OnDelete = {OnDelete}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;
