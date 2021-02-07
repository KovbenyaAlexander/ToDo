import React from 'react';
import ReactDom from 'react-dom';

import AppHeader from './components/AppHeader/AppHeader';
import TodoList from './components/TodoList/TodoList';
import SearchPanel from './components/TodoSettings/SearchPanel/SearchPanel';
import ItemFilter from './components/TodoSettings/ItemFilter/ItemFilter';
import TodoSettings from './components/TodoSettings/TodoSettings';

const todos = [
  { id: 1, text: 'first' },
  { id: 2, text: 'second' },
  { id: 3, text: 'third' },
]
const App = () => {
  return (
    <>
      <AppHeader />
      <main>
        <TodoSettings />
        <TodoList todos={todos} />
      </main>
    </>
  )
}

ReactDom.render(<App />, document.querySelector('#root'))