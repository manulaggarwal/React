import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({todos, onTodoClick, onTodoUpdate, onTodoDelete}) =>{ 
    return (
    <ul>
        {
        todos.map(todo =>
            <Todo 
                key = {todo.id}
                {...todo}
                onClick={()=>onTodoClick(todo.id)}
                onTodoUpdate={onTodoUpdate}
                onTodoDelete={onTodoDelete}
            />
        )}
    </ul>
)}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired,
    onTodoUpdate: PropTypes.func.isRequired,
    onTodoDelete: PropTypes.func.isRequired
}

TodoList.defaultProps = {
    todos : []
}
 
export default TodoList;