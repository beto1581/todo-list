import React from "react";
import { BiHome, BiMoney, BiBookBookmark, BiRun, BiSmile } from "react-icons/bi";
import Select from 'react-select';
import './TodoForm.css';
function TodoForm(addTodo, setOpenModal) {


    const [newTodoValue, setNewTodoValue] = React.useState('');
    const onCancel = (event) => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue, selectedOption.value);
        setOpenModal(false);
        setNewTodoValue('')

    }

    const onChange = (event) => {
        console.log(event.target.value);
        setNewTodoValue(event.target.value);
    }

    const [selectedOption, setSelectedOption] = React.useState(0);

    // handle onChange event of the dropdown
    const handleChange = e => {
        setSelectedOption(e);
    }

    const availableOptions = [
        {
            value: 'home-task',
            text: "Home Task",
            icon: <BiHome />
        },
        {
            value: 'work-task',
            text: 'Work Task',
            icon: <BiMoney />
        },
        {
            value: 'university-task',
            text: 'University Task',
            icon: <BiBookBookmark />
        },
        {
            value: 'sport-task',
            text: 'Sport Task',
            icon: <BiRun />
        },
        {
            value: 'general-task',
            text: 'General Task',
            icon: <BiSmile />
        }
    ];
    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar la cebolla para el almuerzo"
            />
            <Select
                className="category-selector"
                placeholder="Task Category"
                value={selectedOption}
                options={availableOptions}
                onChange={handleChange}
                getOptionLabel={e => (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {e.icon}
                        <span style={{ marginLeft: 5 }}>{e.text}</span>
                    </div>
                )}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm }