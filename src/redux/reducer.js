let taskID = 10;
const initialState = {
  todos: [
    { id: 0, text: 'Task1', isImportant: false, isDone: false },
    { id: 1, text: 'Task2', isImportant: true, isDone: true },
    { id: 2, text: 'Task3', isImportant: true, isDone: false },
    { id: 3, text: 'Task4', isImportant: false, isDone: true },
  ],
  visibleTodos: [
    { id: 0, text: 'Task1', isImportant: false, isDone: false },
    { id: 1, text: 'Task2', isImportant: true, isDone: true },
    { id: 2, text: 'Task3', isImportant: true, isDone: false },
    { id: 3, text: 'Task4', isImportant: false, isDone: true },
  ],
  inputText: '',
  searchText: '',
  showingAllTasks: true,
  showingActiveTasks: false,
  showingDoneTasks: false,
}

export default function reducer(state = initialState, action) {
  // console.log(state);
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'DELETE_TASK':
      newState.todos = newState.todos.filter(item => item.id !== action.id);
      newState.visibleTodos = newState.visibleTodos.filter(item => item.id !== action.id);
      return newState;
    case 'ADD_TASK':
      if (state.inputText !== '') {
        taskID += 1;
        newState.todos = [...state.todos, { id: taskID, text: state.inputText, isImportant: false }];
        newState.visibleTodos = [...state.todos, { id: taskID, text: state.inputText, isImportant: false }];
        newState.inputText = '';
        newState.searchText = '';
        return newState;
      }
      return newState;
    case 'TOGGLE_IPMORTANT':
      newState.visibleTodos = newState.visibleTodos.map(item => {
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

      newState.todos = newState.todos.map(item => {
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
      return newState;
    case 'TOGGLE_DONE':
      newState.todos = state.todos.map(item => {
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

      newState.visibleTodos = state.visibleTodos.map(item => {
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

      return newState;
    case 'INPUT_CHANGE':
      newState.inputText = action.inputText;
      return newState;
    case 'SORT_TASKS':
      newState.searchText = action.sortText;
      newState.visibleTodos = newState.todos.filter(item => {
        return item.text.indexOf(newState.searchText) > -1
      })
      return newState;
    case 'SHOW_ALL':
      newState.visibleTodos = newState.todos;
      newState.showingAllTasks = true;
      newState.showingActiveTasks = false;
      newState.showingDoneTasks = false;
      return newState;
    case 'SHOW_ACTIVE':
      newState.visibleTodos = newState.todos.filter(item => !item.isDone);
      newState.showingAllTasks = false;
      newState.showingActiveTasks = true;
      newState.showingDoneTasks = false;
      return newState;
    case 'SHOW_DONE':
      newState.visibleTodos = newState.todos.filter(item => item.isDone);
      newState.showingAllTasks = false;
      newState.showingActiveTasks = false;
      newState.showingDoneTasks = true;
      return newState;
    default:
      return newState;
  }

}