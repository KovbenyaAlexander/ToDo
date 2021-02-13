import React from 'react';
import './TodoList.css'
import TodoItem from './TodoItem/TodoItem'

const TodoList = (props) => {
  const todoComponents = props.todos.map(item => {
    return (
      <li className="list-group-item list__item">
        <TodoItem text={item.text}
          id={item.id}
          isImportant={item.isImportant}
          isDone={item.isDone}
          onDelete={props.onDelete}
          onDone={props.onDone}
          onImportant={props.onImportant}
        />
      </li>
    )
  })

  return (
    <ul className="list-group">
      {todoComponents}
    </ul>
  )
}



export default TodoList;
