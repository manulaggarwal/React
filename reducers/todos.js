const todo = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_TODO': 
            return {
                id: action.id,
                text: action.text,
                completed: false
            }
        case 'TOGGLE_TODO':
            if (state.id !== action.id) return state;
            return Object.assign({}, state, {
                completed: !state.completed
            })
        case 'UPDATE_TODO':
            if (state.id !== action.id) return state;
            return Object.assign({}, state, {
                text: action.text
            })
        case 'CANCEL_ACTION':
            return ;
        default: return state;
    }
}

const todos = (state = [], action = {}) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(state, action)
            ];
        case 'TOGGLE_TODO':
            return state.map(t=> todo(t, action))
        case 'UPDATE_TODO':
            return state.map(t=>todo(t, action)) 
        case 'CANCEL_ACTION':
            return ;
        default: return state;
    }
}
export default todos;