let nextTodoId = 0;
export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    };
}

export const deleteTodo = id => {
    return {
        type: 'DELETE_TODO',
        id
    }
}

export const updateTodo = (id, text) => {
    return {
        type: 'UPDATE_TODO',
        id,
        text
    }
}

export const setVisibilityFilter = filter => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    };
}

export const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    };
}