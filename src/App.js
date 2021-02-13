import React from 'react';
import { connect } from 'react-redux';
import AppHeader from './components/AppHeader/AppHeader';
import TodoList from './components/TodoList/TodoList';
import TodoSettings from './components/TodoSettings/TodoSettings';
import ItemAddForm from './components/ItemAddForm/ItemAddForm'

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    inputText: state.inputText
  }
}

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch({ type: 'DELETE_TASK', id }),
  onAdd: (text) => dispatch({ type: 'ADD_TASK', text }),
  onImportant: (id) => dispatch({ type: 'TOGGLE_IPMORTANT', id }),
  onDone: (id) => dispatch({ type: 'TOGGLE_DONE', id }),
  onInputChange: (inputText) => dispatch({ type: 'INPUT_CHANGE', inputText }),
  addTask: () => dispatch({ type: 'ADD_TASK' }),
})

const App = (props) => {
  console.log(props);

  return (
    <>
      <AppHeader todos={props.todos} />
      <main>
        <TodoSettings />
        <TodoList
          todos={props.todos}
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
