export default (state = { todos: [], text: '', seconds: 0 }, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                requesting: true,
                // todos: state.todos.concat(action.text)
            }
            break;
        case 'ADD_TODO_DONE':
            return {
                ...state,
                todos: state.todos.concat(action.todo),
                text: '',
                requesting: false,
            }
        case 'GET_TODOS':
            return {
                ...state,
                requesting: true
            }
        case 'GET_TODOS_DONE':
            return {
                ...state,
                todos: action.todos,
                requesting: false
            }
        case 'INPUT_CHANGE':
            return {
                ...state,
                text: action.text
            }
            break;
        case 'UPDATE_SECONDS':
            return {
                ...state,
                seconds: state.seconds + 1
            }
        default:
            return {
                ...state,

            }
    }
    return state;
}