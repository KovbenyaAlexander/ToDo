const initialState = {
  todos: [
    { id: 0, text: '111' },
    { id: 1, text: '222' },
    { id: 2, text: '333' },
    { id: 3, text: '444' },
  ]
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case 'DELETE_TASK':
      const newTodos = state.todos.filter(item => item.id !== action.id)
      return { todos: newTodos }
    default:
      return state;
  }

}