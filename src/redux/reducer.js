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
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'DELETE_TASK':
      const newTodos = state.todos.filter(item => item.id !== action.id);
      newState.todos = newTodos;
      return newState;
    case 'ADD_TASK':
      if (state.inputText !== '') {
        newState.todos = [...state.todos, { id: ++taskID, text: state.inputText, isImportant: false }]
        newState.inputText = '';
        return newState;
      }
      return newState;
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
      newState.todos = newTodosArray;
      newState.inputText = state.inputText;
      return newState;
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
      newState.todos = newTodosArray_;
      newState.inputText = state.inputText;
      return newState;
    case 'INPUT_CHANGE':
      newState.inputText = action.inputText;
      return newState;
    default:
      return newState;
  }

}