import React from "react";
import { useForm } from "react-hook-form";

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
    console.log("je submit");
    console.log(data);
    addItem({ title: data.title, description: data.description });
    setToggleAdd(false);
  };

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
