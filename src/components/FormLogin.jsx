
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import './FormLogin.css'
import userApi from "../apiService/userApi";



function FormLogin() { 

    const { register, handleSubmit } = useForm();
    const navigate= useNavigate()

    const handleLogin =  async(data) => {
        const token = await userApi.login(data)
        console.log('a ver que nos devulve el token', token)
        localStorage.setItem('access_token',token) // lo introduzco en el localstorage para poder utilizarlo cuando lo necesite
        navigate('/tasks')
    }   



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