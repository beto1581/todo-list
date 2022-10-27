import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
    const onClickHandle = () => {
        props.setOpenModal((prevState)=> !prevState);
    }
    return (
        <button
            className="CreateTodoButton"
            onClick={onClickHandle}
        >
            +
        </button>
    );
}

export { CreateTodoButton };