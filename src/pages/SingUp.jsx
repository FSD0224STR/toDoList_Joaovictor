import { useForm } from "react-hook-form"
import './SingUp.css'

function singUp() {
    
    const { register, handleSubmit } = useForm(); //destructurin
    //FORMA SIN DESTRUCTURIN  son equivalentes
    // const form = useForm();
    // const register = form.register
    // const handleSubmit = form.handleSubmit
    const onSubmit = (data) => console.log(data)
  return (
    <div className="registerForm">
        <h2>Register</h2>
        <form className="registerForm" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("Email")} placeholder="Email" />
        <input {...register("password")} placeholder="Password"/>
        

        <input type="submit" value='Register' />
      </form>  
      </div>
    )
}

export default singUp