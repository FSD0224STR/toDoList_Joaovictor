import "../App.css";
import Task from "../components/Task";
import { useGetTasks } from "../hooks/useGetTask";


function Home() {


  const { tasks,handleDelete,handleComplete } = useGetTasks();


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
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;
