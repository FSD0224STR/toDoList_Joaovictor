import { Link } from "react-router-dom";
import "./NavBar.css"
function NavBar() {
  
  
  
    return (
    
      <nav className="navBar">
        <Link className="navBar_item" to={"/user"}>User</Link>
        <Link className="navBar_item" to={"/tasks"}>Task List</Link>
        <Link className="navBar_item" to={"/tasks/newtask"}>New Task</Link>
        <Link className="navBar_item" to={"/tasks/newtask"}>Search</Link>
      </nav>
   
  );
}


export default NavBar;
