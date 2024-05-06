import { Link,useNavigate } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
  const navigate = useNavigate()
  const token = localStorage.getItem('access_token')
  
const logout = () => {
  localStorage.removeItem('access_token')
  navigate('/user/login')
}

  
  return (
      

      <nav className="navBar">
        <Link className="navBar_item" to={"/tasks"}>Task List</Link>
        <Link className="navBar_item" to={"/tasks/newtask"}>New Task</Link>
        <Link className="navBar_item" to={"/tasks/search"}>Search</Link>
        {token? <button className="navBar_item"  onClick={logout}>Logout</button> : null}
      </nav>
   
  );
}


export default NavBar;
