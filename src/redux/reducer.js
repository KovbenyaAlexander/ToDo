let taskID = 10;
const initialState = {
  todos: [
    { id: 0, text: '111', isImportant: false, isDone: false },
    { id: 1, text: '222', isImportant: false, isDone: false },
    { id: 2, text: '333', isImportant: false, isDone: false },
    { id: 3, text: '444', isImportant: false, isDone: false },
  ]
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case 'DELETE_TASK':
      const newTodos = state.todos.filter(item => item.id !== action.id)
      return { todos: newTodos }
    case 'ADD_TASK':
      return { todos: [...state.todos, { id: ++taskID, text: action.text, isImportant: false }] }
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
      return { todos: newTodosArray };
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
      console.log(newTodosArray_);

      return { todos: newTodosArray_ };
    default:
      return state;
  }

}