import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { AddTodo } from "./AddTodo";
import ButtonAddTodo from "./ButtonAddTodo";
import ItemTodo from "./ItemTodo";
import BottomNavTodo from "./BottomNavTodo";
import HeaderTodo from "./HeaderTodo";
import ListTodo from "./ListTodo";

interface IFormInput {
  title: string;
  description: string;
}

const Todo = () => {
  const [items, setItems] = React.useState([
    {
      id: 1,
      order: 1,
      title: "This is your first Todo.",
      description: "And your description.",
    },
  ]);
  const [toggleAdd, setToggleAdd] = React.useState<boolean>(false);

  const todoContentRef =
    React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const addItem = ({ title, description }: IFormInput) => {
    setItems([
      ...items,
      {
        id: items.length + 1,
        order: items.length + 1,
        title,
        description,
      },
    ]);
    setTimeout(() => {
      todoContentRef.current.scrollTo({
        top: todoContentRef.current.scrollHeight,
        behavior: "smooth",
      });
    }, 400)
  };

  const deleteItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const emptyItems = () => {
    setItems([]);
  };

  return (
    <div className={"todo__container"}>
      <HeaderTodo />
      <ListTodo items={items} deleteItem={deleteItem} todoContentRef={todoContentRef} />
      <BottomNavTodo emptyItems={emptyItems} toggleAdd={toggleAdd} setToggleAdd={setToggleAdd} />
      <AddTodo
        isOpen={toggleAdd}
        setToggleAdd={setToggleAdd}
        addItem={addItem}
      />
    </div>
  );
};

export default Todo;
