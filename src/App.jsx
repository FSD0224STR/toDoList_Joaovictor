import Login from "./pages/Login";
import Home from "./pages/Home";
import Task from "./pages/Task";
import NewTask from "./pages/NewTask";
import NoPages from "./pages/NoPages";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SingUp from "./pages/SingUp";
import NavSearch from "./pages/Search";
import { BrowserRouter, Routes, Route ,useNavigate} from "react-router-dom";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate()
  const token = localStorage.getItem('access_token');

  useEffect(() => {
    
    const token = localStorage.getItem('access_token');
    console.log('esto es token',token)
    if(!token) navigate('/user/login')
      
  }, []);


  return (
    <>
      
        <Header /> 
        {!token ? null : <NavBar/>} 
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/user/login" element={<Login />}></Route>
          <Route path="/user/singup" element={<SingUp />}></Route>
          <Route path="/tasks" element={<Home />}></Route>
          <Route path="/tasks/:id" element={<Task />}></Route>
          <Route path="tasks/newtask" element={<NewTask />}></Route>
          <Route path="tasks/search" element={<NavSearch/>}></Route>
          <Route path="/*" element={<NoPages />}></Route>
        </Routes>
   
    </>
  );
}

export default App;
