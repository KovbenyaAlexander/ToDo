import React, { useState } from 'react';


const TodoItem = (props) => {

  const [isDone, setDone] = useState(false);
  const style = {
    textDecoration: isDone ? 'line-through' : 'none',
    color: isDone ? 'gray' : 'black',
  }

  const onclickHandler = () => {
    setDone(!isDone);
  }

  return (
    <span style={style} onClick={onclickHandler}>{props.text}</span>
  )
}



export default TodoItem;
