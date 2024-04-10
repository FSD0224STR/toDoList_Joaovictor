import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      
       <Link to={'/tasks'} className="link_h1"> <h1> ToDoList</h1> </Link> 
        <img src={"/img/checklist1.png"} alt="logolist" className="logo" />
  
    </header>
  );
}

export default Header;
