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
import { ChangeAlert } from '../ChangeAlert';

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
        addTodo,
        sincronizeTodos,
        searchCategory,
        setSearchCategory,
    } = useTodos();
    return (
        <React.Fragment>
            <TodoHeader loading={loading}>
                <TodoCounter
                    totalTodos={totalTodos}
                    completedTodos={completedTodos}
                />
                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
                <TodoFilter
                    searchCategory={searchCategory}
                    setSearchCategory={setSearchCategory}
                />
            </TodoHeader>
            <TodoList
                error={error}
                loading={loading}
                searchedTodos={searchedTodos}
                totalTodos={totalTodos}
                searchText={searchValue}

                onError={() => <TodosError />}
                onLoading={() => <TodosLoading />}
                onEmptyTodos={() => <EmptyTodos />}
                onEmptySearchResults={(searchText) => <p>No hay resultados para: {searchText} {searchCategory && 'en la categoria: ' + searchCategory}</p>}
                render={(todo) => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        category={todo.category}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                )}
            >

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
            <ChangeAlert
                sincronize={sincronizeTodos}
            />
        </React.Fragment>
    );
}
export default App;