import Login from "./pages/Login";
import Home from "./pages/Home";
import Task from "./pages/Task";
import NewTask from "./pages/NewTask";
import NoPages from "./pages/NoPages";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SingUp from "./pages/SingUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header /> 
        <NavBar/>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/user/login" element={<Login />}></Route>
          <Route path="/user/singup" element={<SingUp />}></Route>
          <Route path="/tasks" element={<Home />}></Route>
          <Route path="/tasks/:id" element={<Task />}></Route>
          <Route path="tasks/newtask" element={<NewTask />}></Route>
          <Route path="/*" element={<NoPages />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
