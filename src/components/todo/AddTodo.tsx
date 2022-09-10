import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

interface IAddtodo {
  isOpen: boolean;
  setToggleAdd: (value: boolean) => void;
  addItem: ({ title, description }: IFormInput) => void;
}

interface IFormInput {
  title: string;
  description: string;
}

const AddTodo = ({ isOpen, setToggleAdd, addItem }: IAddtodo) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data: any) => {

    createTask({ title: data.title, description: data.description }).then(response => {
      if(response.status === 201){
        addItem({ ...response.data });
        setToggleAdd(false);
      }
      else{
        console.log("La tâche n'a pas pu être crée");
        // Afficher un msg d'erreur
      }
    })

  };

  const createTask = async (data:IFormInput) => {
      return axios.post('http://localhost:3000/tasks', data);
  }

  return (
    <div className={`todo__add-item ${isOpen && "todo__add-item--active"}`}>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="todo__input-container"
        id="todoForm"
      >
        <input placeholder="Titre" {...register("title", { required: true })} />

        <input placeholder="Description" {...register("description")} />
        {errors.exampleRequired && <span>This field is required</span>}
      </form>
    </div>
  );
};

export { AddTodo };
