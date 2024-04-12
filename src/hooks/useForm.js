import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [reponse, setResponse] = useState(null);

  const navigate = useNavigate()  
    
  const handleChange = (e) => {
    // const{name,value} = e.target desesctrurar el e.target
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleBlur = (e) => {
    //handleBlur me ejecuta el codigo cuando pierde el foco en el input del form
    setErrors(validateForm(form)); //utilizo la funcion validate con los datos recogido en el estado form
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));
    if (Object.keys(errors).length === 0) {
      setLoading(true);
      fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }).then((res) => {
        setLoading(false);
        setResponse(true);
        setTimeout(() => setResponse(false), 5000);
        navigate('/tasks') 
      });
        
    }
  };

  return {
    form,
    errors,
    loading,
    reponse,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
