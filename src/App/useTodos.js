import React from 'react';
import { useLocalStorage } from './useLocalStorage';

// Al crear el contexto también podemos pasarle un valor inicial entre los paréntesis


function useTodos() {
    // Nos traemos todo el estado y las funciones de nuestra aplicación que queremos globales
    const {
        item: todos,
        saveItem: saveTodos,
        sincronizeItem: sincronizeTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    const [searchCategory, setSearchCategory] = React.useState('');
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    if (!searchValue.length >= 1 && searchCategory === '') {
        searchedTodos = todos;
    } else if (!searchValue.length >= 1 && searchCategory !== '') {
        searchedTodos = todos.filter(todo => {
            return todo.category === searchCategory;

        });
    } else {
        searchedTodos = todos.filter(todo => {
            let todoText = todo.text.toLowerCase();
            let searchText = searchValue.toLowerCase();
            if (searchCategory === '') {
                return todoText.includes(searchText);
            } else {
                return (todoText.includes(searchText) && (todo.category === searchCategory));
            }
        });
    }

    const addTodo = (text, category) => {
        category = category ? category : 'general-task';
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text: text,
            category: category,
        });
        saveTodos(newTodos);
    };

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    // Retornamos nuestro proveedor con nuestro contexto en la etiqueta value, que recibirá a toda nuestra aplicación, por eso necesitamos la prop children
    return (
        {
            loading,
            error,
            totalTodos,
            addTodo,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            sincronizeTodos,
            searchCategory,
            setSearchCategory,
        }

    );
}

// Exportamos nuestro proveedor y nuestro contexto, en el context también esta el consumer, para acceder a nuestro contexto
export { useTodos };


