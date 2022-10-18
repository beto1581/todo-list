import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
    const onClickHandle = () => {
        alert('click ');
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