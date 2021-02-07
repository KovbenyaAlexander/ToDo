import React from 'react';
import ReactDom from 'react-dom';

import AppHeader from './components/AppHeader/AppHeader';
import TodoList from './components/TodoList/TodoList';
import TodoSettings from './components/TodoSettings/TodoSettings';

const todos = [
  { id: 1, text: 'first' },
  { id: 2, text: 'second' },
  { id: 3, text: 'third' },
  { id: 4, text: 'E' },
]

const App = () => {
  return (
    <>
      <AppHeader />
      <main>
        <TodoSettings />
        <TodoList
          todos={todos}
          onDeleted={(id) => {
            console.log(id);
          }} />
      </main>
    </>
  )
}

ReactDom.render(<App />, document.querySelector('#root'))
