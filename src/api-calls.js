export function getTasks (setTasks){
    fetch('http://localhost:3000/tasks', { method:'GET'})
        .then(res => {return  res.json()}) //estoy recibiendo la cabecera headers
        .then(jsonResponse => setTasks(jsonResponse))//aqui estoy recibiendo ya el body
} 