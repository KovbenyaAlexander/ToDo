let taskID = 10;
const initialState = {
  todos: [
    { id: 0, text: '111', isImportant: false, isDone: false },
    { id: 1, text: '222', isImportant: false, isDone: false },
    { id: 2, text: '333', isImportant: false, isDone: false },
    { id: 3, text: '444', isImportant: false, isDone: false },
  ],
  inputText: '',
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case 'DELETE_TASK':
      const newTodos = state.todos.filter(item => item.id !== action.id);
      return { todos: newTodos, inputText: state.inputText }
    case 'ADD_TASK':
      if (state.inputText !== '') {
        const res = { todos: [...state.todos, { id: ++taskID, text: state.inputText, isImportant: false }] }
        res.inputText = '';
        return res;
      }
      return state;
    case 'TOGGLE_IPMORTANT':
      const newTodosArray = state.todos.map(item => {
        if (item.id === action.id) {
          return {
            id: item.id,
            text: item.text,
            isDone: item.isDone,
            isImportant: !item.isImportant,
          }
        } else {
          return item;
        }
      });
      return { todos: newTodosArray, inputText: state.inputText };
    case 'TOGGLE_DONE':
      const newTodosArray_ = state.todos.map(item => {
        if (item.id === action.id) {
          return {
            id: item.id,
            text: item.text,
            isImportant: item.isImportant,
            isDone: !item.isDone,
          }
        } else {
          return item;
        }
      });
      return { todos: newTodosArray_, inputText: state.inputText };
    case 'INPUT_CHANGE':
      const newState = JSON.parse(JSON.stringify(state));
      newState.inputText = action.inputText;
      return newState;
    default:
      return state;
  }

}