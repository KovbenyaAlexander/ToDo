import React from 'react';
import './TodoList.css'
const TodoList = (props) => {

  const todoComponents = props.todos.map(item => {
    return (
      <li className="list-group-item list__item">{item.text}

        <div className="list-item__control">
          <button type="button" className="btn">
            <i className="fa fa-exclamation" />
          </button>

          <button type="button" className="btn">
            <i className="fa fa-trash-o" />
          </button>
        </div>
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
