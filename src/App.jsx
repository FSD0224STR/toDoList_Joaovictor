import './App.css'
import { useState } from 'react';
import Task from './components/Task'

// import logo from '.img/checklist1.png'



function App() {

const taskList = [
    {
        id: 1,
        title: 'cambiar tipo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel mi nec mauris consectetur accumsan bibendum sed lacus. In vel dignissim nunc. Donec vel nulla venenatis, tempor tortor non, dignissim est. Ut non iaculis dolor, eget aliquet metus. Nulla facilisi. Sed sed lobortis nunc. Curabitur vitae congue quam.',
        status: 'in progress',

    },
    {
        id: 2,
        title: 'cambiar el interfaz',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel mi nec mauris consectetur accumsan bibendum sed lacus. In vel dignissim nunc. Donec vel nulla venenatis, tempor tortor non, dignissim est. Ut non iaculis dolor, eget aliquet metus. Nulla facilisi. Sed sed lobortis nunc. Curabitur vitae congue quam.',
        status: 'in progress',

    },
    {
        id: 3,
        title: 'cambiar las funcionaliaddes',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel mi nec mauris consectetur accumsan bibendum sed lacus. In vel dignissim nunc. Donec vel nulla venenatis, tempor tortor non, dignissim est. Ut non iaculis dolor, eget aliquet metus. Nulla facilisi. Sed sed lobortis nunc. Curabitur vitae congue quam.',
        status: 'in progress',

    },
    {
        id: 4,
        title: 'crear componentes',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel mi nec mauris consectetur accumsan bibendum sed lacus. In vel dignissim nunc. Donec vel nulla venenatis, tempor tortor non, dignissim est. Ut non iaculis dolor, eget aliquet metus. Nulla facilisi. Sed sed lobortis nunc. Curabitur vitae congue quam.',
        status: 'in progress',

    },
];

const [tasks, setTasks] = useState(taskList);
    
    
    
    function deleteTarea(id) {
    
        const newTasks = tasks.filter(task => (task.id !== id))
        setTasks(newTasks);

    } 

    
    
    // function completTarea(id) {
    //     const completTask = tasks.map(task => {
    //         if ( task.status !== 'complete' && task.id == id) {
    //             return {
    //                 ...task,
    //                 status: 'complete',
    //             }     
    //         } 
    //        return task   //muy imporante este return fuera del if.  
    //     })
    //     setTasks(completTask)

    // }


    return (
        < >
            <header>
                <h1> ToDoList</h1>
                <img src={'/img/checklist1.png'} alt="logolist"  className='logo'/>
            </header>

            <main >
                <h2 className='titleSecondary_list'> Lista de Tareas</h2>
                <div className='conteiner'>
                    {tasks.map((task) => (
                        <Task
                            key={task.id}
                            task={task} 
                            deleteTarea={deleteTarea}
                            // completTarea={completTarea}
                        />

                    ))}
                </div>

                    
            </main>
                
         </>
        
)
 
}

export default App
