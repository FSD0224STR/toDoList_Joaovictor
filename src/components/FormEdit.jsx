import { useForm } from "../hooks/useForm";
import "./FormAdd.css";
// import { Loader } from "./Loader";




const validationForm = (form) => {
  let errors = {}; // esta variable almacenara cada error que tenga

  const regExpTitle = /^[A-Za-z0-9\s]+$/g;
  const regDate = /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/;
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/; //para email
  const regexComments = /^.{1,255}$/;

  ///title validation
  if (!form.title.trim()) {
    errors.title = "El campo 'Title' es obligatorio!";
  } else if (!regExpTitle.test(form.title.trim())) {
    errors.title = "el Campo title solo acepta letras,numeros y espacios ";
  }
  /// Description validation
  if (!regexComments.test(form.description.trim())) {
    errors.description = "no pudes superar el maximo de 255 caracteres";
  }

  /// date Validation
  if (!form.dueDate.trim()) {
    errors.dueDate = "El campo 'due Date' es obligatorio!";
  } //  else if (!regDate.test(form.description.trim())) {
  //     errors.dueDate = "La fecha  tiene el formato correcto dd/mm/aaaa";
  //   }

  return errors;
};




function FormEdit({ edit,backToTaskList}) {
  console.log('esto es edit en FORMEDIT', edit)
 
  console.log('esto es title edit',edit._id)
  const taskUpdate = {
    title: edit.title,
    description: edit.description,
    dueDate: edit.dueDate
  }
  const id= edit._id
console.log('esto es taskUpdate',taskUpdate)
  
  const {
    form,
    errors,
    handleChange,
    handleBlur,
    handleUpdate
  } = useForm(taskUpdate,validationForm,id);


  return (
    <div className="conteinerForm">
      <form onSubmit={handleUpdate} className="formAddTask">
        <legend>Update Task</legend>
        <input
          className="itemForm itemForm_title"
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.title}
          required
        />

        {errors.title && <p>{errors.title}</p>}
        <textarea
          className="itemForm itemForm_textarea"
          name="description"
          id=""
          cols="25"
          rows="5"
          placeholder="Description task"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.description}
        />
        {errors.description && <p>{errors.description}</p>}
        <label>
          Due date{" "}
          <input
            className="itemForm itemForm_date"
            type="text"
            name="dueDate"
            placeholder="dd/mm/aaaa"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.dueDate}
            required
          />
        </label>

        {errors.dueDate && <p>{errors.dueDate}</p>}
        <button
          type="Submit"
          className="itemForm itemForm_button"
          value="add Task"
        >
          Update Task
        </button>

        <button
          className="itemForm itemForm_button"
          value="add Task"
          onClick={backToTaskList}
        >
          Back to list
              </button>
      </form>
    </div>
  );
}

export default FormEdit;
