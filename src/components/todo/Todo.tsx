import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { AddTodo } from "./AddTodo";
import ButtonAddTodo from "./ButtonAddTodo";
import axios from "axios";

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
      <header className={"todo__header"}>
        <h4 className={"glass-title"}>2022.</h4>
        <h2 className={"glass-title"}>Beautifull todo.</h2>
      </header>
      <section className={"todo__content"} ref={todoContentRef}>
        <TransitionGroup className="todo__content-list">
          {items.map(({ id, title, description }) => (
            <CSSTransition key={id} timeout={3000} classNames="item">
              <div
                className={"todo__content-list-item"}
                onClick={() => deleteItem(id)}
              >
                <span> {title} </span>
                <span> {description} </span>
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </section>
      <nav className={"todo__navbar"}>
        <ul className={"todo__navbar-list"}>
          <li className={"todo__navbar-list-item"}>
            <i className="fa-solid fa-check-to-slot"></i>
          </li>
          <li className={"todo__navbar-list-item"}>
            <i className="fa-solid fa-list-check" onClick={emptyItems}></i>
          </li>
        </ul>
        <ButtonAddTodo toggleAdd={toggleAdd} setToggleAdd={setToggleAdd} />
        <ul className={"todo__navbar-list"}>
          <li className={"todo__navbar-list-item"}>
            <i className="fa-solid fa-gear"></i>
          </li>
        </ul>
      </nav>
      <AddTodo
        isOpen={toggleAdd}
        setToggleAdd={setToggleAdd}
        addItem={addItem}
      />
    </div>
  );
};

export default Todo;
