import React from 'react';
import { connect } from 'react-redux';
import AppHeader from './components/AppHeader/AppHeader';
import TodoList from './components/TodoList/TodoList';
import TodoSettings from './components/TodoSettings/TodoSettings';
import ItemAddForm from './components/ItemAddForm/ItemAddForm'

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch({ type: 'DELETE_TASK', id }),
  onAdd: (text) => dispatch({ type: 'ADD_TASK', text }),
  onImportant: (id) => dispatch({ type: 'TOGGLE_IPMORTANT', id }),
  onDone: (id) => dispatch({ type: 'TOGGLE_DONE', id }),
})

const App = (props) => {
  // console.log(props);

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
          onAdd={props.onAdd} />
      </main>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
