
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import './FormLogin.css'



function FormLogin() { 

    const { register, handleSubmit } = useForm();



 const handleLogin = (data) => console.log(data)
    return (
    <div className="conteiner_Form">
     <form onSubmit={handleSubmit(handleLogin)} className="form">
        <h2>Login</h2>
                <input {...register('email')} className="inputLogin" type="text" placeholder="E-mail" />
        <input {...register('password')} className="inputLogin" type="password" placeholder="contraseña" />
            <input type="submit" id='buttonLogin' value='Login'/>
            <p>don't have account? <Link to='/user/singup'>Sing up!</Link></p> 
    </form>
    </div>
)


}


export default FormLogin;