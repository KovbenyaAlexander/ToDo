import React from 'react';
import './TodoList.css'
import TodoItem from './TodoItem/TodoItem'

const TodoList = (props) => {

  const todoComponents = props.todos.map(item => {
    return (
      <li className="list-group-item list__item">
        <TodoItem text={item.text}
          onDeleted={() => { props.onDeleted(item.id) }}
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
