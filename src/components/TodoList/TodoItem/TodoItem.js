import React, { useState } from 'react';
import './TodoItem.css'

const TodoItem = (props) => {

  const [isDone, setDone] = useState(false);
  const [isImportant, setImportant] = useState(false);

  let classNames = 'todo-list__item';

  if (isImportant) {
    classNames += ' important';
  }

  if (isDone) {
    classNames += ' isDOne';
  }

  const spanOnclickHandler = () => {
    setDone(!isDone);
  }

  const makeTaskImportant = () => {
    setImportant(!isImportant);
  }

  return (
    <>
      <span className={classNames} onClick={spanOnclickHandler}>{props.text}</span>
      <div className="list-item__control">
        <button type="button" className="btn btn-outline-success" onClick={makeTaskImportant}>
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
