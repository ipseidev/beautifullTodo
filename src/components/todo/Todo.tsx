import React from 'react';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

const Todo = () => {
    const [items, setItems] = React.useState([
        { id: 1, order:1 ,title: 'This is your first Todo.', description:'And your description.' },

    ]);
    const todoContentRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

    const addItem = () => {
        setItems([...items, { id: items.length + 1, order:items.length+1, title: 'New item', description: 'lotem' }]);
    }

    const deleteItem = (id: number) => {
        setItems(items.filter(item => item.id !== id));
    }

    React.useEffect(() => {
        todoContentRef.current.scrollTo({
            top:todoContentRef.current.scrollHeight, behavior: 'smooth'
        });
    }, [items.length])

    return (
        <div className={"todo__container"}>
            <header className={"todo__header"}>
                <h4 className={"glass-title"}>2022.</h4>
                <h2 className={"glass-title"}>Beautifull todo.</h2>
            </header>
            <section className={"todo__content"} ref={todoContentRef}>
                <TransitionGroup className="todo__content-list">
                    {items.map(({ id, title, description }) => (
                        <CSSTransition
                            key={id}
                            timeout={3000}
                            classNames="item"
                        >
                            <div className={"todo__content-list-item"} onClick={() => deleteItem(id)}>
                                <span> {title} </span>
                                <span> {description} </span>
                            </div>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </section>
            <nav className={"todo__navbar"}>
                <ul className={"todo__navbar-list"}>
                    <li className={"todo__navbar-list-item"}><i className="fa-solid fa-check-to-slot"></i></li>
                    <li className={"todo__navbar-list-item"}><i className="fa-solid fa-list-check"></i></li>
                </ul>
                <button className={"todo__navbar-button--add"} onClick={() => addItem()}><i className="fa-solid fa-circle-plus"></i></button>
                <ul className={"todo__navbar-list"}>
                    <li className={"todo__navbar-list-item"}><i className="fa-solid fa-gear"></i></li>
                </ul>
            </nav>
        </div>
    );
};

export default Todo;