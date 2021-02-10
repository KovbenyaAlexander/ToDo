import React from 'react';
import { connect } from 'react-redux';
import AppHeader from './components/AppHeader/AppHeader';
import TodoList from './components/TodoList/TodoList';
import TodoSettings from './components/TodoSettings/TodoSettings';

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch({ type: 'DELETE_TASK', id }),
})

const App = (props) => {
  console.log(props);

  return (
    <>
      <AppHeader />
      <main>
        <TodoSettings />
        <TodoList
          todos={props.todos}
          onDelete={props.onDelete} />
      </main>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
