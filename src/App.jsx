import Login from "./pages/Login";
import Home from "./pages/Home";
import Task from "./pages/Task";
import AddTask from "./pages/AddTask";
import NoPages from "./pages/NoPages";
import Header from "./components/Header";
import SingUp from "./pages/SingUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/task/:id" element={<Task />}></Route>
          <Route path="/addtask" element={<AddTask />}></Route>
          <Route path="/*" element={<NoPages />}></Route>
          <Route path="/singup" element={<SingUp/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
