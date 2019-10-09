export default (state = { todos: [], text: '', seconds: 0 }, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: state.todos.concat(action.text)
            }
            break;

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