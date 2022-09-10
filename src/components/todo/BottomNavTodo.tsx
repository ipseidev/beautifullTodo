import React from 'react';
import ButtonAddTodo from "./ButtonAddTodo";

interface IBottomNavTodo {
    emptyItems: () => void;
    toggleAdd: boolean;
    setToggleAdd: (value: boolean) => void;
}

const BottomNavTodo = ({emptyItems, toggleAdd, setToggleAdd}: IBottomNavTodo) => {
    return (
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
    );
};

export default BottomNavTodo;