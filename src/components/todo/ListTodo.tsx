import React from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import ItemTodo from "./ItemTodo";

interface IItemTodo {
    title: string;
    description: string;
    id: number;
}

interface IListTodo {
    items: Array<IItemTodo>;
    deleteItem: (id: number) => void;
    todoContentRef: React.MutableRefObject<HTMLInputElement>;
}

const ListTodo = ({todoContentRef, items, deleteItem}:IListTodo) => {
    return (
        <section className={"todo__content"} ref={todoContentRef}>
            <TransitionGroup className="todo__content-list">
                {items.map(({ id, title, description }) => (
                    <CSSTransition key={id} timeout={3000} classNames="item">
                        <ItemTodo  deleteItem={deleteItem} title={title} description={description} id={id}/>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </section>
    );
};

export default ListTodo;