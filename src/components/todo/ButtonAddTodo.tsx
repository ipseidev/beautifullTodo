import React from "react";

interface IButtonAddTodo {
  toggleAdd: boolean;
  setToggleAdd: (value: boolean) => void;
}

export default function ButtonAddTodo({
  toggleAdd,
  setToggleAdd,
}: IButtonAddTodo) {
  return (
    <>
      <button
        className={`todo__navbar-button--add ${toggleAdd && "todo__navbar-button--confirm"}`}
        type="submit"
        form="todoForm"
        onClick={(e) => {
          if (!toggleAdd) {
            e.preventDefault();
            setToggleAdd(true);
          }
        }}
      >
      <div className={"icon-container"}>
        <i className={`fa-solid fa-check ${toggleAdd ? "scale-in" : "scale-out"}`}></i>
      <i className={`fa-solid fa-plus ${toggleAdd ? "scale-out" : "scale-in"}`}></i>
      </div>
      </button>
      {toggleAdd && (
        <i
          className="fa-solid fa-circle-xmark todo__navbar-button--close"
          onClick={() => setToggleAdd(false)}
        ></i>
      )}
    </>
  );
}
