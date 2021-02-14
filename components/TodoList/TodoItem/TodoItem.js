import React from 'react';
import './TodoItem.css'

const TodoItem = (props) => {
  // console.log(props);

  let classNames = 'todo-list__item';
  let checked = false;
  if (props.isImportant) {
    classNames += ' important';
  }

  if (props.isDone) {
    classNames += ' isDOne';
    checked = 'checked'
  }


  return (
    <>
      <div className="taskInfo">
        <input type="checkbox" defaultChecked={checked} onClick={() => props.onDone(props.id)} className="form-check-input"></input>
        <span className={classNames} >{props.text}</span>
      </div>
      <div className="list-item__control">
        <button type="button" className="btn btn-outline-success" onClick={() => props.onImportant(props.id)}>
          <i className="fa fa-exclamation" />
        </button>

        <button type="button" className="btn btn-outline-danger" onClick={() => { props.onDelete(props.id) }}>
          <i className="fa fa-trash-o" />
        </button>
      </div>
    </>
  )
}

export default TodoItem;
