import React from 'react';
import './TodoItem.css'

const TodoItem = (props) => {
  // console.log(props);

  let classNames = 'todo-list__item';

  if (props.isImportant) {
    classNames += ' important';
  }

  if (props.isDone) {
    classNames += ' isDOne';
  }

  return (
    <>
      <span className={classNames} onClick={() => props.onDone(props.id)}>{props.text}</span>
      <span >{`ID-->${props.id}`}</span>
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
