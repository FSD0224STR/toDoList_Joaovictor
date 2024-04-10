import { useForm } from "react-hook-form"

function singUp() {
    
    const { register, handleSubmit } = useForm(); //destructurin
    //FORMA SIN DESTRUCTURIN  son equivalentes
    // const form = useForm();
    // const register = form.register
    // const handleSubmit = form.handleSubmit
    const onSubmit = (data) => console.log(data)
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("taskName")} />
        <input {...register("dateName")} />
        <select {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <input type="submit" />
      </form>  
    )
}

export default singUp