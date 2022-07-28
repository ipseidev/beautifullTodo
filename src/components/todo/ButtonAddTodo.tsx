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
        className={"todo__navbar-button--add"}
        type="submit"
        form="todoForm"
        onClick={(e) => {
          console.log("JE SUIS ICI");
          if (!toggleAdd) {
            console.log("par là")
            e.preventDefault();
            setToggleAdd(true);
          }
        }}
      >
        <i className={`fa-solid fa-circle-${toggleAdd ? "check" : "plus"}`}></i>
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
