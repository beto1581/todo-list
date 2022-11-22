import React from 'react';
import { useTodos } from './useTodos';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from '../TodoForm';
import { Modal } from '../Modal';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptysTodos';
import { TodoHeader } from '../TodoHeader';
import { TodoFilter } from '../TodoFilter';

function App() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        setOpenModal,
        addTodo
    } = useTodos();
    return (
        <React.Fragment>
            <TodoHeader>
                <TodoCounter
                    totalTodos={totalTodos}
                    completedTodos={completedTodos} />
                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
                <TodoFilter />
            </TodoHeader>
            <TodoList>
                {error && <TodosError error={error} />}
                {loading && <TodosLoading />}
                {(!loading && !searchedTodos.length) && <EmptyTodos />}
                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            <CreateTodoButton
                setOpenModal={setOpenModal}
            />
            {openModal && (
                <Modal>
                    <TodoForm
                        addTodo={addTodo}
                        setOpenModal={setOpenModal}
                    />
                </Modal>
            )
            }
        </React.Fragment>
    );
}
export default App;