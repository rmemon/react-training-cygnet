const reducer = (state = { seconds: 0, text: "", todos: [] }, action) => {
  switch (action.type) {
    case "RES_TIME":
      return {
        ...state,
        seconds: 0
      };
      break;

    case "UPDATE_SECOND":
      return {
        ...state,
        seconds: state.seconds + 1
      };
      break;

    case "INPUT_CHANGE":
      return {
        ...state,
        text: action.text
      };
      break;

    case "ADDD_TODO":
      return {
        ...state,
        todos: state.todos.concat(state.text),
        text: ""
      };
      break;
  }
  return state;
};
export default reducer;
