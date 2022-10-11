import React from 'react';
import '../styles/CreateTodoButton.css';

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