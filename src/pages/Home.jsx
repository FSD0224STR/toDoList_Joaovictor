import "../App.css";
import Task from "../components/Task";
import { useTasks } from "../hooks/useTask";


function Home() {


  const { tasks,handleDelete,handleComplete,selectTaskById } = useTasks();


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
              selectTaskById={selectTaskById}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;
