import { Link } from "react-router-dom";
import './Login.css'
function Login() { 
    return (
    <div className="conteiner_Form">
     <form className="form">
        <h2>Login</h2>
        <input className="inputLogin" type="text" placeholder="E-mail" />
        <input className="inputLogin" type="password" placeholder="contraseña" />
            <button id='buttonLogin'> login </button>
            <p>don't have account? <Link to='/user/singup'>Sing up!</Link></p> 
    </form>
    </div>
)


}


export default Login;