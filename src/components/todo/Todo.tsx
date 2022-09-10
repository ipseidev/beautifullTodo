import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { AddTodo } from "./AddTodo";
import ButtonAddTodo from "./ButtonAddTodo";

import axios from "axios";

import ItemTodo from "./ItemTodo";
import BottomNavTodo from "./BottomNavTodo";
import HeaderTodo from "./HeaderTodo";
import ListTodo from "./ListTodo";


interface IFormInput {
  title: string;
  description: string;
  id:string;
  status:string;
}

const Todo = () => {
  const [items, setItems] = React.useState<any>([]);
  const [toggleAdd, setToggleAdd] = React.useState<boolean>(false);

  const todoContentRef =
    React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const addItem = ({ title, description, id, status }: IFormInput) => {
    setItems([
      ...items,
      {
        id: id,
        status:status,
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

  const deleteItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const emptyItems = () => {
    setItems([]);
  };

  React.useEffect(() => {
    todoContentRef.current.scrollTo({
      top: todoContentRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [items.length]);


  React.useEffect(() => {
    axios.get('http://localhost:3000/tasks').then(response => {
      if(response.data) {
        setItems(response.data);
      }
    })
  }, [])


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
