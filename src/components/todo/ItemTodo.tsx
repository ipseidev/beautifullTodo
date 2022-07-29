import React from 'react';

interface IITemTodo {
    title: string;
    description: string;
    id: number;
    deleteItem: (id: number) => void;
}

const ItemTodo = ({title, description, id,deleteItem}: IITemTodo) => {
    return (
        <div
            className={"todo__content-list-item"}
            onClick={() => deleteItem(id)}
        >
            <span className={'todo__item-title'}> {title} </span>
            <span className={'todo__item-description'}> {description} </span>
        </div>
    );
};

export default ItemTodo;