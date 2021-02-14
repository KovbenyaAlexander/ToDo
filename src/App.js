import React from 'react';
import { connect } from 'react-redux';
import AppHeader from './components/AppHeader/AppHeader';
import TodoList from './components/TodoList/TodoList';
import TodoSettings from './components/TodoSettings/TodoSettings';
import ItemAddForm from './components/ItemAddForm/ItemAddForm'

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    inputText: state.inputText,
    searchText: state.searchText,
    visibleTodos: state.visibleTodos,
    showingAllTasks: state.showingAllTasks,
    showingActiveTasks: state.showingActiveTasks,
    showingDoneTasks: state.showingDoneTasks,
  }
}

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch({ type: 'DELETE_TASK', id }),
  onAdd: (text) => dispatch({ type: 'ADD_TASK', text }),
  onImportant: (id) => dispatch({ type: 'TOGGLE_IPMORTANT', id }),
  onDone: (id) => dispatch({ type: 'TOGGLE_DONE', id }),
  onInputChange: (inputText) => dispatch({ type: 'INPUT_CHANGE', inputText }),
  addTask: () => dispatch({ type: 'ADD_TASK' }),
  sortTasks: (sortText) => dispatch({ type: 'SORT_TASKS', sortText }),
  showAll: () => dispatch({ type: 'SHOW_ALL' }),
  showActive: () => dispatch({ type: 'SHOW_ACTIVE' }),
  showDone: () => dispatch({ type: 'SHOW_DONE' }),
})

const App = (props) => {
  // console.log(props);

  return (
    <>
      <AppHeader todos={props.visibleTodos}
      />
      <main>
        <TodoSettings
          sortTasks={props.sortTasks}
          searchText={props.searchText}
          showAll={props.showAll}
          showActive={props.showActive}
          showDone={props.showDone}
          showingAllTasks={props.showingAllTasks}
          showingActiveTasks={props.showingActiveTasks}
          showingDoneTasks={props.showingDoneTasks}
        />
        <TodoList
          todos={props.visibleTodos}
          onDelete={props.onDelete}
          onDone={props.onDone}
          onImportant={props.onImportant} />
        <ItemAddForm
          onInputChange={props.onInputChange}
          onAdd={props.onAdd}
          addTask={props.addTask}
          inputText={props.inputText} />
      </main>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
